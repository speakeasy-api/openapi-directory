# SDK

## Overview

<p>Amazon EMR Serverless is a new deployment option for Amazon EMR. EMR Serverless provides a serverless runtime environment that simplifies running analytics applications using the latest open source frameworks such as Apache Spark and Apache Hive. With EMR Serverless, you don’t have to configure, optimize, secure, or operate clusters to run applications with these frameworks.</p> <p>The API reference to Amazon EMR Serverless is <code>emr-serverless</code>. The <code>emr-serverless</code> prefix is used in the following scenarios: </p> <ul> <li> <p>It is the prefix in the CLI commands for Amazon EMR Serverless. For example, <code>aws emr-serverless start-job-run</code>.</p> </li> <li> <p>It is the prefix before IAM policy actions for Amazon EMR Serverless. For example, <code>"Action": ["emr-serverless:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR Serverless</a>.</p> </li> <li> <p>It is the prefix used in Amazon EMR Serverless service endpoints. For example, <code>emr-serverless.us-east-2.amazonaws.com</code>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/emr-serverless/>
### Available Operations

* [cancelJobRun](#canceljobrun) - Cancels a job run.
* [createApplication](#createapplication) - Creates an application.
* [deleteApplication](#deleteapplication) - Deletes an application. An application has to be in a stopped or created state in order to be deleted.
* [getApplication](#getapplication) - Displays detailed information about a specified application.
* [getDashboardForJobRun](#getdashboardforjobrun) - Returns a URL to access the job run dashboard. The generated URL is valid for one hour, after which you must invoke the API again to generate a new URL.
* [getJobRun](#getjobrun) - Displays detailed information about a job run.
* [listApplications](#listapplications) - Lists applications based on a set of parameters.
* [listJobRuns](#listjobruns) - Lists job runs based on a set of parameters.
* [listTagsForResource](#listtagsforresource) - Lists the tags assigned to the resources.
* [startApplication](#startapplication) - Starts a specified application and initializes initial capacity if configured.
* [startJobRun](#startjobrun) - Starts a job run.
* [stopApplication](#stopapplication) - Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.
* [tagResource](#tagresource) - Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. 
* [untagResource](#untagresource) - Removes tags from resources.
* [updateApplication](#updateapplication) - Updates a specified application. An application has to be in a stopped or created state in order to be updated.

## cancelJobRun

Cancels a job run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelJobRunRequest;
import org.openapis.openapi.models.operations.CancelJobRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelJobRunRequest req = new CancelJobRunRequest("suscipit", "iure") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            CancelJobRunResponse res = sdk.sdk.cancelJobRun(req);

            if (res.cancelJobRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApplication

Creates an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyArchitectureEnum;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyAutoStartConfiguration;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyAutoStopConfiguration;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyImageConfiguration;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyMaximumCapacity;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyNetworkConfiguration;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.shared.ImageConfigurationInput;
import org.openapis.openapi.models.shared.InitialCapacityConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkerResourceConfig;
import org.openapis.openapi.models.shared.WorkerTypeSpecificationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequestBody("placeat", "voluptatum", "iusto") {{
                                architecture = CreateApplicationRequestBodyArchitectureEnum.X8664;
                                autoStartConfiguration = new CreateApplicationRequestBodyAutoStartConfiguration() {{
                                    enabled = false;
                                }};;
                                autoStopConfiguration = new CreateApplicationRequestBodyAutoStopConfiguration() {{
                                    enabled = false;
                                    idleTimeoutMinutes = 392785L;
                                }};;
                                imageConfiguration = new CreateApplicationRequestBodyImageConfiguration() {{
                                    imageUri = "recusandae";
                                }};;
                                initialCapacity = new java.util.HashMap<String, org.openapis.openapi.models.shared.InitialCapacityConfig>() {{
                                    put("ab", new InitialCapacityConfig(957156L) {{
                                        workerConfiguration = new WorkerResourceConfig("perferendis", "ipsam") {{
                                            cpu = "quis";
                                            disk = "veritatis";
                                            memory = "deserunt";
                                        }};
                                        workerCount = 832620L;
                                    }});
                                    put("quo", new InitialCapacityConfig(800911L) {{
                                        workerConfiguration = new WorkerResourceConfig("maiores", "molestiae") {{
                                            cpu = "odit";
                                            disk = "at";
                                            memory = "at";
                                        }};
                                        workerCount = 799159L;
                                    }});
                                    put("esse", new InitialCapacityConfig(582020L) {{
                                        workerConfiguration = new WorkerResourceConfig("dicta", "nam") {{
                                            cpu = "totam";
                                            disk = "porro";
                                            memory = "dolorum";
                                        }};
                                        workerCount = 639921L;
                                    }});
                                    put("fugit", new InitialCapacityConfig(473600L) {{
                                        workerConfiguration = new WorkerResourceConfig("totam", "beatae") {{
                                            cpu = "deleniti";
                                            disk = "hic";
                                            memory = "optio";
                                        }};
                                        workerCount = 414662L;
                                    }});
                                }};
                                maximumCapacity = new CreateApplicationRequestBodyMaximumCapacity() {{
                                    cpu = "modi";
                                    disk = "qui";
                                    memory = "impedit";
                                }};;
                                name = "Cory Emmerich";
                                networkConfiguration = new CreateApplicationRequestBodyNetworkConfiguration() {{
                                    securityGroupIds = new String[]{{
                                        add("ad"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("sed"),
                                        add("iste"),
                                        add("dolor"),
                                    }};
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("laboriosam", "hic");
                                    put("saepe", "fuga");
                                    put("in", "corporis");
                                }};
                                workerTypeSpecifications = new java.util.HashMap<String, org.openapis.openapi.models.shared.WorkerTypeSpecificationInput>() {{
                                    put("iure", new WorkerTypeSpecificationInput() {{
                                        imageConfiguration = new ImageConfigurationInput() {{
                                            imageUri = "saepe";
                                        }};
                                    }});
                                    put("quidem", new WorkerTypeSpecificationInput() {{
                                        imageConfiguration = new ImageConfigurationInput() {{
                                            imageUri = "architecto";
                                        }};
                                    }});
                                    put("ipsa", new WorkerTypeSpecificationInput() {{
                                        imageConfiguration = new ImageConfigurationInput() {{
                                            imageUri = "reiciendis";
                                        }};
                                    }});
                                }};
                            }};) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
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

## deleteApplication

Deletes an application. An application has to be in a stopped or created state in order to be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest("enim") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
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

## getApplication

Displays detailed information about a specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationRequest;
import org.openapis.openapi.models.operations.GetApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApplicationRequest req = new GetApplicationRequest("sapiente") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "dolorem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "mollitia";
            }};            

            GetApplicationResponse res = sdk.sdk.getApplication(req);

            if (res.getApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDashboardForJobRun

Returns a URL to access the job run dashboard. The generated URL is valid for one hour, after which you must invoke the API again to generate a new URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDashboardForJobRunRequest;
import org.openapis.openapi.models.operations.GetDashboardForJobRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDashboardForJobRunRequest req = new GetDashboardForJobRunRequest("numquam", "commodi") {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            GetDashboardForJobRunResponse res = sdk.sdk.getDashboardForJobRun(req);

            if (res.getDashboardForJobRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJobRun

Displays detailed information about a job run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobRunRequest;
import org.openapis.openapi.models.operations.GetJobRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobRunRequest req = new GetJobRunRequest("animi", "enim") {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "quo";
                xAmzCredential = "sequi";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "possimus";
            }};            

            GetJobRunResponse res = sdk.sdk.getJobRun(req);

            if (res.getJobRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplications

Lists applications based on a set of parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationsRequest;
import org.openapis.openapi.models.operations.ListApplicationsResponse;
import org.openapis.openapi.models.shared.ApplicationStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationsRequest req = new ListApplicationsRequest() {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
                maxResults = 878194L;
                nextToken = "nihil";
                states = new org.openapis.openapi.models.shared.ApplicationStateEnum[]{{
                    add(ApplicationStateEnum.TERMINATED),
                    add(ApplicationStateEnum.CREATING),
                    add(ApplicationStateEnum.STOPPING),
                }};
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

## listJobRuns

Lists job runs based on a set of parameters.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListJobRunsRequest;
import org.openapis.openapi.models.operations.ListJobRunsResponse;
import org.openapis.openapi.models.shared.JobRunStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListJobRunsRequest req = new ListJobRunsRequest("cum") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
                createdAtAfter = OffsetDateTime.parse("2022-07-09T11:22:20.922Z");
                createdAtBefore = OffsetDateTime.parse("2022-04-24T15:19:40.519Z");
                maxResults = 317983L;
                nextToken = "accusamus";
                states = new org.openapis.openapi.models.shared.JobRunStateEnum[]{{
                    add(JobRunStateEnum.CANCELLED),
                    add(JobRunStateEnum.SUBMITTED),
                }};
            }};            

            ListJobRunsResponse res = sdk.sdk.listJobRuns(req);

            if (res.listJobRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags assigned to the resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("quidem") {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "pariatur";
                xAmzDate = "modi";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "voluptates";
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

## startApplication

Starts a specified application and initializes initial capacity if configured.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartApplicationRequest;
import org.openapis.openapi.models.operations.StartApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartApplicationRequest req = new StartApplicationRequest("repudiandae") {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "itaque";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "enim";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            StartApplicationResponse res = sdk.sdk.startApplication(req);

            if (res.startApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startJobRun

Starts a job run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartJobRunRequest;
import org.openapis.openapi.models.operations.StartJobRunRequestBody;
import org.openapis.openapi.models.operations.StartJobRunRequestBodyConfigurationOverrides;
import org.openapis.openapi.models.operations.StartJobRunRequestBodyJobDriver;
import org.openapis.openapi.models.operations.StartJobRunResponse;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.Hive;
import org.openapis.openapi.models.shared.ManagedPersistenceMonitoringConfiguration;
import org.openapis.openapi.models.shared.MonitoringConfiguration;
import org.openapis.openapi.models.shared.S3MonitoringConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SparkSubmit;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartJobRunRequest req = new StartJobRunRequest(                new StartJobRunRequestBody("explicabo", "deserunt") {{
                                configurationOverrides = new StartJobRunRequestBodyConfigurationOverrides() {{
                                    applicationConfiguration = new org.openapis.openapi.models.shared.Configuration[]{{
                                        add(new Configuration("qui") {{
                                            classification = "quibusdam";
                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                            }};
                                            properties = "modi";
                                        }}),
                                        add(new Configuration("perferendis") {{
                                            classification = "aliquid";
                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                            }};
                                            properties = "quos";
                                        }}),
                                        add(new Configuration("alias") {{
                                            classification = "magni";
                                            configurations = new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                                add(new Configuration() {{}}),
                                            }};
                                            properties = "ipsam";
                                        }}),
                                    }};
                                    monitoringConfiguration = new MonitoringConfiguration() {{
                                        managedPersistenceMonitoringConfiguration = new ManagedPersistenceMonitoringConfiguration() {{
                                            enabled = false;
                                            encryptionKeyArn = "fugit";
                                        }};;
                                        s3MonitoringConfiguration = new S3MonitoringConfiguration() {{
                                            encryptionKeyArn = "dolorum";
                                            logUri = "excepturi";
                                        }};;
                                    }};;
                                }};;
                                executionTimeoutMinutes = 270008L;
                                jobDriver = new StartJobRunRequestBodyJobDriver() {{
                                    hive = new Hive("facilis") {{
                                        initQueryFile = "tempore";
                                        parameters = "labore";
                                    }};;
                                    sparkSubmit = new SparkSubmit("delectus") {{
                                        entryPointArguments = new String[]{{
                                            add("non"),
                                            add("eligendi"),
                                        }};
                                        sparkSubmitParameters = "sint";
                                    }};;
                                }};;
                                name = "Sherri Tremblay";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("debitis", "a");
                                }};
                            }};, "dolorum") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "in";
                xAmzCredential = "illum";
                xAmzDate = "maiores";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "magnam";
            }};            

            StartJobRunResponse res = sdk.sdk.startJobRun(req);

            if (res.startJobRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopApplication

Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopApplicationRequest;
import org.openapis.openapi.models.operations.StopApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopApplicationRequest req = new StopApplicationRequest("facere") {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            StopApplicationResponse res = sdk.sdk.stopApplication(req);

            if (res.stopApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("quidem", "provident");
                                                put("nam", "id");
                                                put("blanditiis", "deleniti");
                                                put("sapiente", "amet");
                                            }});, "deserunt") {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "vel";
                xAmzCredential = "natus";
                xAmzDate = "omnis";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "nihil";
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

Removes tags from resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("distinctio",                 new String[]{{
                                add("labore"),
                                add("labore"),
                                add("suscipit"),
                            }}) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "eum";
                xAmzDate = "vero";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "magnam";
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

Updates a specified application. An application has to be in a stopped or created state in order to be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBody;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBodyArchitectureEnum;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBodyAutoStartConfiguration;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBodyAutoStopConfiguration;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBodyImageConfiguration;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBodyMaximumCapacity;
import org.openapis.openapi.models.operations.UpdateApplicationRequestBodyNetworkConfiguration;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.shared.ImageConfigurationInput;
import org.openapis.openapi.models.shared.InitialCapacityConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkerResourceConfig;
import org.openapis.openapi.models.shared.WorkerTypeSpecificationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest(                new UpdateApplicationRequestBody("excepturi") {{
                                architecture = UpdateApplicationRequestBodyArchitectureEnum.ARM64;
                                autoStartConfiguration = new UpdateApplicationRequestBodyAutoStartConfiguration() {{
                                    enabled = false;
                                }};;
                                autoStopConfiguration = new UpdateApplicationRequestBodyAutoStopConfiguration() {{
                                    enabled = false;
                                    idleTimeoutMinutes = 590873L;
                                }};;
                                imageConfiguration = new UpdateApplicationRequestBodyImageConfiguration() {{
                                    imageUri = "quos";
                                }};;
                                initialCapacity = new java.util.HashMap<String, org.openapis.openapi.models.shared.InitialCapacityConfig>() {{
                                    put("accusantium", new InitialCapacityConfig(896547L) {{
                                        workerConfiguration = new WorkerResourceConfig("ad", "eum") {{
                                            cpu = "mollitia";
                                            disk = "reiciendis";
                                            memory = "mollitia";
                                        }};
                                        workerCount = 221262L;
                                    }});
                                    put("odit", new InitialCapacityConfig(806194L) {{
                                        workerConfiguration = new WorkerResourceConfig("doloribus", "debitis") {{
                                            cpu = "nemo";
                                            disk = "quasi";
                                            memory = "iure";
                                        }};
                                        workerCount = 260341L;
                                    }});
                                    put("deleniti", new InitialCapacityConfig(714242L) {{
                                        workerConfiguration = new WorkerResourceConfig("architecto", "repudiandae") {{
                                            cpu = "facilis";
                                            disk = "in";
                                            memory = "architecto";
                                        }};
                                        workerCount = 352312L;
                                    }});
                                }};
                                maximumCapacity = new UpdateApplicationRequestBodyMaximumCapacity() {{
                                    cpu = "nihil";
                                    disk = "repellat";
                                    memory = "quibusdam";
                                }};;
                                networkConfiguration = new UpdateApplicationRequestBodyNetworkConfiguration() {{
                                    securityGroupIds = new String[]{{
                                        add("saepe"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("accusantium"),
                                        add("consequuntur"),
                                        add("praesentium"),
                                        add("natus"),
                                    }};
                                }};;
                                workerTypeSpecifications = new java.util.HashMap<String, org.openapis.openapi.models.shared.WorkerTypeSpecificationInput>() {{
                                    put("sunt", new WorkerTypeSpecificationInput() {{
                                        imageConfiguration = new ImageConfigurationInput() {{
                                            imageUri = "quo";
                                        }};
                                    }});
                                }};
                            }};, "illum") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "ea";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "odit";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "accusantium";
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
