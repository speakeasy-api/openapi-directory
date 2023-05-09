# SDK

## Overview

<fullname>Amazon CloudWatch Application Insights</fullname> <p> Amazon CloudWatch Application Insights is a service that helps you detect common problems with your applications. It enables you to pinpoint the source of issues in your applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into detected problems.</p> <p>After you onboard your application, CloudWatch Application Insights identifies, recommends, and sets up metrics and logs. It continuously analyzes and correlates your metrics and logs for unusual behavior to surface actionable problems with your application. For example, if your application is slow and unresponsive and leading to HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you that a memory pressure problem with your SQL Server database is occurring. It bases this analysis on impactful metrics and log errors. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/applicationinsights/>
### Available Operations

* [createApplication](#createapplication) - Adds an application that is created from a resource group.
* [createComponent](#createcomponent) - Creates a custom component by grouping similar standalone instances to monitor.
* [createLogPattern](#createlogpattern) - Adds an log pattern to a <code>LogPatternSet</code>.
* [deleteApplication](#deleteapplication) - Removes the specified application from monitoring. Does not delete the application.
* [deleteComponent](#deletecomponent) - Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
* [deleteLogPattern](#deletelogpattern) - Removes the specified log pattern from a <code>LogPatternSet</code>.
* [describeApplication](#describeapplication) - Describes the application.
* [describeComponent](#describecomponent) - Describes a component and lists the resources that are grouped together in a component.
* [describeComponentConfiguration](#describecomponentconfiguration) - Describes the monitoring configuration of the component.
* [describeComponentConfigurationRecommendation](#describecomponentconfigurationrecommendation) - Describes the recommended monitoring configuration of the component.
* [describeLogPattern](#describelogpattern) - Describe a specific log pattern from a <code>LogPatternSet</code>.
* [describeObservation](#describeobservation) - Describes an anomaly or error with the application.
* [describeProblem](#describeproblem) - Describes an application problem.
* [describeProblemObservations](#describeproblemobservations) - Describes the anomalies or errors associated with the problem.
* [listApplications](#listapplications) - Lists the IDs of the applications that you are monitoring. 
* [listComponents](#listcomponents) - Lists the auto-grouped, standalone, and custom components of the application.
* [listConfigurationHistory](#listconfigurationhistory) - <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
* [listLogPatternSets](#listlogpatternsets) - Lists the log pattern sets in the specific application.
* [listLogPatterns](#listlogpatterns) - Lists the log patterns in the specific log <code>LogPatternSet</code>.
* [listProblems](#listproblems) - Lists the problems with your application.
* [listTagsForResource](#listtagsforresource) - Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* [tagResource](#tagresource) - <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* [untagResource](#untagresource) - Remove one or more tags (keys and values) from a specified application.
* [updateApplication](#updateapplication) - Updates the application.
* [updateComponent](#updatecomponent) - Updates the custom component name and/or the list of resources that make up the component.
* [updateComponentConfiguration](#updatecomponentconfiguration) - Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 
* [updateLogPattern](#updatelogpattern) - Adds a log pattern to a <code>LogPatternSet</code>.

## createApplication

Adds an application that is created from a resource group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.operations.CreateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateApplicationRequest;
import org.openapis.openapi.models.shared.GroupingTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequest() {{
                                autoConfigEnabled = false;
                                autoCreate = false;
                                cweMonitorEnabled = false;
                                groupingType = GroupingTypeEnum.ACCOUNT_BASED;
                                opsCenterEnabled = false;
                                opsItemSNSTopicArn = "ab";
                                resourceGroupName = "quis";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ipsam", "repellendus") {{
                                        key = "deserunt";
                                        value = "perferendis";
                                    }}),
                                }};
                            }};, CreateApplicationXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_CREATE_APPLICATION) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateApplicationResponse res = sdk.sdk.createApplication(req);

            if (res.createApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createComponent

Creates a custom component by grouping similar standalone instances to monitor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateComponentRequest;
import org.openapis.openapi.models.operations.CreateComponentResponse;
import org.openapis.openapi.models.operations.CreateComponentXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateComponentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateComponentRequest req = new CreateComponentRequest(                new CreateComponentRequest("quod", "esse",                 new String[]{{
                                                add("porro"),
                                                add("dolorum"),
                                                add("dicta"),
                                            }});, CreateComponentXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_CREATE_COMPONENT) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "officia";
                xAmzCredential = "occaecati";
                xAmzDate = "fugit";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "optio";
            }};            

            CreateComponentResponse res = sdk.sdk.createComponent(req);

            if (res.createComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLogPattern

Adds an log pattern to a <code>LogPatternSet</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLogPatternRequest;
import org.openapis.openapi.models.operations.CreateLogPatternResponse;
import org.openapis.openapi.models.operations.CreateLogPatternXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLogPatternRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLogPatternRequest req = new CreateLogPatternRequest(                new CreateLogPatternRequest("beatae", "commodi", "molestiae", 264555L, "qui");, CreateLogPatternXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_CREATE_LOG_PATTERN) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "cum";
                xAmzCredential = "esse";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            CreateLogPatternResponse res = sdk.sdk.createLogPattern(req);

            if (res.createLogPatternResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

Removes the specified application from monitoring. Does not delete the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;
import org.openapis.openapi.models.operations.DeleteApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApplicationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest(                new DeleteApplicationRequest("natus");, DeleteApplicationXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_DELETE_APPLICATION) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolor";
                xAmzDate = "natus";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "saepe";
            }};            

            DeleteApplicationResponse res = sdk.sdk.deleteApplication(req);

            if (res.deleteApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteComponent

Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteComponentRequest;
import org.openapis.openapi.models.operations.DeleteComponentResponse;
import org.openapis.openapi.models.operations.DeleteComponentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteComponentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteComponentRequest req = new DeleteComponentRequest(                new DeleteComponentRequest("in", "corporis");, DeleteComponentXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_DELETE_COMPONENT) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "iure";
                xAmzCredential = "saepe";
                xAmzDate = "quidem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DeleteComponentResponse res = sdk.sdk.deleteComponent(req);

            if (res.deleteComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLogPattern

Removes the specified log pattern from a <code>LogPatternSet</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLogPatternRequest;
import org.openapis.openapi.models.operations.DeleteLogPatternResponse;
import org.openapis.openapi.models.operations.DeleteLogPatternXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLogPatternRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLogPatternRequest req = new DeleteLogPatternRequest(                new DeleteLogPatternRequest("mollitia", "laborum", "dolores");, DeleteLogPatternXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_DELETE_LOG_PATTERN) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
            }};            

            DeleteLogPatternResponse res = sdk.sdk.deleteLogPattern(req);

            if (res.deleteLogPatternResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApplication

Describes the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeApplicationRequest;
import org.openapis.openapi.models.operations.DescribeApplicationResponse;
import org.openapis.openapi.models.operations.DescribeApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeApplicationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeApplicationRequest req = new DescribeApplicationRequest(                new DescribeApplicationRequest("excepturi");, DescribeApplicationXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_APPLICATION) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
            }};            

            DescribeApplicationResponse res = sdk.sdk.describeApplication(req);

            if (res.describeApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeComponent

Describes a component and lists the resources that are grouped together in a component.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeComponentRequest;
import org.openapis.openapi.models.operations.DescribeComponentResponse;
import org.openapis.openapi.models.operations.DescribeComponentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeComponentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeComponentRequest req = new DescribeComponentRequest(                new DescribeComponentRequest("culpa", "consequuntur");, DescribeComponentXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_COMPONENT) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
            }};            

            DescribeComponentResponse res = sdk.sdk.describeComponent(req);

            if (res.describeComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeComponentConfiguration

Describes the monitoring configuration of the component.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeComponentConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeComponentConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeComponentConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeComponentConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeComponentConfigurationRequest req = new DescribeComponentConfigurationRequest(                new DescribeComponentConfigurationRequest("error", "quia");, DescribeComponentConfigurationXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_COMPONENT_CONFIGURATION) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
            }};            

            DescribeComponentConfigurationResponse res = sdk.sdk.describeComponentConfiguration(req);

            if (res.describeComponentConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeComponentConfigurationRecommendation

Describes the recommended monitoring configuration of the component.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeComponentConfigurationRecommendationRequest;
import org.openapis.openapi.models.operations.DescribeComponentConfigurationRecommendationResponse;
import org.openapis.openapi.models.operations.DescribeComponentConfigurationRecommendationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeComponentConfigurationRecommendationRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TierEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeComponentConfigurationRecommendationRequest req = new DescribeComponentConfigurationRecommendationRequest(                new DescribeComponentConfigurationRecommendationRequest("tenetur", "ipsam", TierEnum.ORACLE);, DescribeComponentConfigurationRecommendationXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_COMPONENT_CONFIGURATION_RECOMMENDATION) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            DescribeComponentConfigurationRecommendationResponse res = sdk.sdk.describeComponentConfigurationRecommendation(req);

            if (res.describeComponentConfigurationRecommendationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLogPattern

Describe a specific log pattern from a <code>LogPatternSet</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLogPatternRequest;
import org.openapis.openapi.models.operations.DescribeLogPatternResponse;
import org.openapis.openapi.models.operations.DescribeLogPatternXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLogPatternRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLogPatternRequest req = new DescribeLogPatternRequest(                new DescribeLogPatternRequest("voluptatibus", "vero", "nihil");, DescribeLogPatternXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_LOG_PATTERN) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "omnis";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "perferendis";
            }};            

            DescribeLogPatternResponse res = sdk.sdk.describeLogPattern(req);

            if (res.describeLogPatternResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeObservation

Describes an anomaly or error with the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeObservationRequest;
import org.openapis.openapi.models.operations.DescribeObservationResponse;
import org.openapis.openapi.models.operations.DescribeObservationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeObservationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeObservationRequest req = new DescribeObservationRequest(                new DescribeObservationRequest("reprehenderit");, DescribeObservationXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_OBSERVATION) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "dicta";
                xAmzDate = "corporis";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "dicta";
            }};            

            DescribeObservationResponse res = sdk.sdk.describeObservation(req);

            if (res.describeObservationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProblem

Describes an application problem.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProblemRequest;
import org.openapis.openapi.models.operations.DescribeProblemResponse;
import org.openapis.openapi.models.operations.DescribeProblemXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProblemRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProblemRequest req = new DescribeProblemRequest(                new DescribeProblemRequest("enim");, DescribeProblemXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_PROBLEM) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            DescribeProblemResponse res = sdk.sdk.describeProblem(req);

            if (res.describeProblemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProblemObservations

Describes the anomalies or errors associated with the problem.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProblemObservationsRequest;
import org.openapis.openapi.models.operations.DescribeProblemObservationsResponse;
import org.openapis.openapi.models.operations.DescribeProblemObservationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProblemObservationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProblemObservationsRequest req = new DescribeProblemObservationsRequest(                new DescribeProblemObservationsRequest("pariatur");, DescribeProblemObservationsXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_PROBLEM_OBSERVATIONS) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
            }};            

            DescribeProblemObservationsResponse res = sdk.sdk.describeProblemObservations(req);

            if (res.describeProblemObservationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplications

Lists the IDs of the applications that you are monitoring. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationsRequest;
import org.openapis.openapi.models.operations.ListApplicationsResponse;
import org.openapis.openapi.models.operations.ListApplicationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListApplicationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationsRequest req = new ListApplicationsRequest(                new ListApplicationsRequest() {{
                                maxResults = 929297L;
                                nextToken = "incidunt";
                            }};, ListApplicationsXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_LIST_APPLICATIONS) {{
                maxResults = "enim";
                nextToken = "consequatur";
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "explicabo";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "labore";
            }};            

            ListApplicationsResponse res = sdk.sdk.listApplications(req);

            if (res.listApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComponents

Lists the auto-grouped, standalone, and custom components of the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComponentsRequest;
import org.openapis.openapi.models.operations.ListComponentsResponse;
import org.openapis.openapi.models.operations.ListComponentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListComponentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComponentsRequest req = new ListComponentsRequest(                new ListComponentsRequest("qui") {{
                                maxResults = 397821L;
                                nextToken = "cupiditate";
                            }};, ListComponentsXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_LIST_COMPONENTS) {{
                maxResults = "quos";
                nextToken = "perferendis";
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ipsam";
                xAmzDate = "alias";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "excepturi";
            }};            

            ListComponentsResponse res = sdk.sdk.listComponents(req);

            if (res.listComponentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConfigurationHistory

<p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConfigurationHistoryRequest;
import org.openapis.openapi.models.operations.ListConfigurationHistoryResponse;
import org.openapis.openapi.models.operations.ListConfigurationHistoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfigurationEventStatusEnum;
import org.openapis.openapi.models.shared.ListConfigurationHistoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConfigurationHistoryRequest req = new ListConfigurationHistoryRequest(                new ListConfigurationHistoryRequest() {{
                                endTime = OffsetDateTime.parse("2021-07-13T07:24:02.478Z");
                                eventStatus = ConfigurationEventStatusEnum.INFO;
                                maxResults = 962189L;
                                nextToken = "eum";
                                resourceGroupName = "non";
                                startTime = OffsetDateTime.parse("2021-04-10T02:35:06.342Z");
                            }};, ListConfigurationHistoryXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_LIST_CONFIGURATION_HISTORY) {{
                maxResults = "aliquid";
                nextToken = "provident";
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListConfigurationHistoryResponse res = sdk.sdk.listConfigurationHistory(req);

            if (res.listConfigurationHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLogPatternSets

Lists the log pattern sets in the specific application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLogPatternSetsRequest;
import org.openapis.openapi.models.operations.ListLogPatternSetsResponse;
import org.openapis.openapi.models.operations.ListLogPatternSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLogPatternSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLogPatternSetsRequest req = new ListLogPatternSetsRequest(                new ListLogPatternSetsRequest("in") {{
                                maxResults = 846409L;
                                nextToken = "maiores";
                            }};, ListLogPatternSetsXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_LIST_LOG_PATTERN_SETS) {{
                maxResults = "rerum";
                nextToken = "dicta";
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            ListLogPatternSetsResponse res = sdk.sdk.listLogPatternSets(req);

            if (res.listLogPatternSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLogPatterns

Lists the log patterns in the specific log <code>LogPatternSet</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLogPatternsRequest;
import org.openapis.openapi.models.operations.ListLogPatternsResponse;
import org.openapis.openapi.models.operations.ListLogPatternsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLogPatternsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLogPatternsRequest req = new ListLogPatternsRequest(                new ListLogPatternsRequest("occaecati") {{
                                maxResults = 313218L;
                                nextToken = "accusamus";
                                patternSetName = "delectus";
                            }};, ListLogPatternsXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_LIST_LOG_PATTERNS) {{
                maxResults = "quidem";
                nextToken = "provident";
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "id";
                xAmzCredential = "blanditiis";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "deserunt";
            }};            

            ListLogPatternsResponse res = sdk.sdk.listLogPatterns(req);

            if (res.listLogPatternsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProblems

Lists the problems with your application.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProblemsRequest;
import org.openapis.openapi.models.operations.ListProblemsResponse;
import org.openapis.openapi.models.operations.ListProblemsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListProblemsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProblemsRequest req = new ListProblemsRequest(                new ListProblemsRequest() {{
                                componentName = "vel";
                                endTime = OffsetDateTime.parse("2021-10-15T07:59:26.631Z");
                                maxResults = 474867L;
                                nextToken = "perferendis";
                                resourceGroupName = "nihil";
                                startTime = OffsetDateTime.parse("2022-04-14T15:11:13.227Z");
                            }};, ListProblemsXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_LIST_PROBLEMS) {{
                maxResults = "id";
                nextToken = "labore";
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "natus";
                xAmzDate = "nobis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aspernatur";
            }};            

            ListProblemsResponse res = sdk.sdk.listProblems(req);

            if (res.listProblemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("magnam");, ListTagsForResourceXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "ullam";
                xAmzDate = "provident";
                xAmzSecurityToken = "quos";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "accusantium";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("reiciendis",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("dolor", "necessitatibus") {{
                                                    key = "ad";
                                                    value = "eum";
                                                }}),
                                                add(new Tag("quasi", "iure") {{
                                                    key = "odit";
                                                    value = "nemo";
                                                }}),
                                                add(new Tag("eius", "maxime") {{
                                                    key = "doloribus";
                                                    value = "debitis";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "in";
                xAmzDate = "architecto";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "ullam";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Remove one or more tags (keys and values) from a specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("nihil",                 new String[]{{
                                                add("quibusdam"),
                                                add("sed"),
                                                add("saepe"),
                                                add("pariatur"),
                                            }});, UntagResourceXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "praesentium";
                xAmzDate = "natus";
                xAmzSecurityToken = "magni";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "quo";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApplication

Updates the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.operations.UpdateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest(                new UpdateApplicationRequest("pariatur") {{
                                autoConfigEnabled = false;
                                cweMonitorEnabled = false;
                                opsCenterEnabled = false;
                                opsItemSNSTopicArn = "maxime";
                                removeSNSTopic = false;
                            }};, UpdateApplicationXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_UPDATE_APPLICATION) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "odit";
                xAmzDate = "ea";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "maiores";
            }};            

            UpdateApplicationResponse res = sdk.sdk.updateApplication(req);

            if (res.updateApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateComponent

Updates the custom component name and/or the list of resources that make up the component.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateComponentRequest;
import org.openapis.openapi.models.operations.UpdateComponentResponse;
import org.openapis.openapi.models.operations.UpdateComponentXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateComponentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateComponentRequest req = new UpdateComponentRequest(                new UpdateComponentRequest("ipsam", "voluptate") {{
                                newComponentName = "autem";
                                resourceList = new String[]{{
                                    add("eaque"),
                                    add("pariatur"),
                                    add("nemo"),
                                }};
                            }};, UpdateComponentXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_UPDATE_COMPONENT) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "fugiat";
                xAmzDate = "amet";
                xAmzSecurityToken = "aut";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "corporis";
            }};            

            UpdateComponentResponse res = sdk.sdk.updateComponent(req);

            if (res.updateComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateComponentConfiguration

Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateComponentConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateComponentConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateComponentConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TierEnum;
import org.openapis.openapi.models.shared.UpdateComponentConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateComponentConfigurationRequest req = new UpdateComponentConfigurationRequest(                new UpdateComponentConfigurationRequest("libero", "nobis") {{
                                autoConfigEnabled = false;
                                componentConfiguration = "dolores";
                                monitor = false;
                                tier = TierEnum.SQL_SERVER;
                            }};, UpdateComponentConfigurationXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_UPDATE_COMPONENT_CONFIGURATION) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "eaque";
                xAmzDate = "quis";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "perferendis";
            }};            

            UpdateComponentConfigurationResponse res = sdk.sdk.updateComponentConfiguration(req);

            if (res.updateComponentConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLogPattern

Adds a log pattern to a <code>LogPatternSet</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLogPatternRequest;
import org.openapis.openapi.models.operations.UpdateLogPatternResponse;
import org.openapis.openapi.models.operations.UpdateLogPatternXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLogPatternRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLogPatternRequest req = new UpdateLogPatternRequest(                new UpdateLogPatternRequest("minus", "quam", "dolor") {{
                                pattern = "vero";
                                rank = 345352L;
                            }};, UpdateLogPatternXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_UPDATE_LOG_PATTERN) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "facilis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "porro";
            }};            

            UpdateLogPatternResponse res = sdk.sdk.updateLogPattern(req);

            if (res.updateLogPatternResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
