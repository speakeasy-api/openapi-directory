# SDK

## Overview

<p><fullname>Amazon Managed Workflows for Apache Airflow</fullname> <p>This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html">What Is Amazon MWAA?</a>.</p> <p> <b>Endpoints</b> </p> <ul> <li> <p> <code>api.airflow.{region}.amazonaws.com</code> - This endpoint is used for environment management.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateEnvironment.html">CreateEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_DeleteEnvironment.html">DeleteEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_GetEnvironment.html">GetEnvironment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_ListEnvironments.html">ListEnvironments</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_ListTagsForResource.html">ListTagsForResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_TagResource.html">TagResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_UntagResource.html">UntagResource</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_UpdateEnvironment.html">UpdateEnvironment</a> </p> </li> </ul> </li> <li> <p> <code>env.airflow.{region}.amazonaws.com</code> - This endpoint is used to operate the Airflow environment.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateCliToken.html ">CreateCliToken</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateWebLoginToken.html">CreateWebLoginToken</a> </p> </li> </ul> </li> <li> <p> <code>ops.airflow.{region}.amazonaws.com</code> - This endpoint is used to push environment metrics that track environment health.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mwaa/latest/API/API_PublishMetrics.html ">PublishMetrics</a> </p> </li> </ul> </li> </ul> <p> <b>Regions</b> </p> <p>For a list of regions that Amazon MWAA supports, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html#regions-mwaa">Region availability</a> in the <i>Amazon MWAA User Guide</i>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/airflow/>
### Available Operations

* [createCliToken](#createclitoken) - Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.
* [createEnvironment](#createenvironment) - Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [createWebLoginToken](#createweblogintoken) - Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.
* [deleteEnvironment](#deleteenvironment) - Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [getEnvironment](#getenvironment) - Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [listEnvironments](#listenvironments) - Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.
* [listTagsForResource](#listtagsforresource) - Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. 
* [publishMetrics](#publishmetrics) -  <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.
* [tagResource](#tagresource) - Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. 
* [untagResource](#untagresource) - Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.
* [updateEnvironment](#updateenvironment) - Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

## createCliToken

Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCliTokenRequest;
import org.openapis.openapi.models.operations.CreateCliTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCliTokenRequest req = new CreateCliTokenRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            CreateCliTokenResponse res = sdk.sdk.createCliToken(req);

            if (res.createCliTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEnvironment

Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyLoggingConfiguration;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyNetworkConfiguration;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyWebserverAccessModeEnum;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;
import org.openapis.openapi.models.shared.LoggingLevelEnum;
import org.openapis.openapi.models.shared.ModuleLoggingConfigurationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEnvironmentRequest req = new CreateEnvironmentRequest("molestiae",                 new CreateEnvironmentRequestBody("minus", "placeat",                 new CreateEnvironmentRequestBodyNetworkConfiguration() {{
                                                securityGroupIds = new String[]{{
                                                    add("iusto"),
                                                    add("excepturi"),
                                                    add("nisi"),
                                                }};
                                                subnetIds = new String[]{{
                                                    add("temporibus"),
                                                    add("ab"),
                                                    add("quis"),
                                                    add("veritatis"),
                                                }};
                                            }};, "deserunt") {{
                                airflowConfigurationOptions = new java.util.HashMap<String, String>() {{
                                    put("ipsam", "repellendus");
                                }};
                                airflowVersion = "sapiente";
                                environmentClass = "quo";
                                kmsKey = "odit";
                                loggingConfiguration = new CreateEnvironmentRequestBodyLoggingConfiguration() {{
                                    dagProcessingLogs = new ModuleLoggingConfigurationInput(false, LoggingLevelEnum.DEBUG);;
                                    schedulerLogs = new ModuleLoggingConfigurationInput(false, LoggingLevelEnum.DEBUG);;
                                    taskLogs = new ModuleLoggingConfigurationInput(false, LoggingLevelEnum.DEBUG);;
                                    webserverLogs = new ModuleLoggingConfigurationInput(false, LoggingLevelEnum.WARNING);;
                                    workerLogs = new ModuleLoggingConfigurationInput(false, LoggingLevelEnum.INFO);;
                                }};;
                                maxWorkers = 800911L;
                                minWorkers = 461479L;
                                pluginsS3ObjectVersion = "totam";
                                pluginsS3Path = "porro";
                                requirementsS3ObjectVersion = "dolorum";
                                requirementsS3Path = "dicta";
                                schedulers = 720633L;
                                startupScriptS3ObjectVersion = "officia";
                                startupScriptS3Path = "occaecati";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("deleniti", "hic");
                                }};
                                webserverAccessMode = CreateEnvironmentRequestBodyWebserverAccessModeEnum.PUBLIC_ONLY;
                                weeklyMaintenanceWindowStart = "totam";
                            }};) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "molestiae";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "cum";
            }};            

            CreateEnvironmentResponse res = sdk.sdk.createEnvironment(req);

            if (res.createEnvironmentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWebLoginToken

Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebLoginTokenRequest;
import org.openapis.openapi.models.operations.CreateWebLoginTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWebLoginTokenRequest req = new CreateWebLoginTokenRequest("ipsum") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "ad";
                xAmzSecurityToken = "natus";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "iste";
            }};            

            CreateWebLoginTokenResponse res = sdk.sdk.createWebLoginToken(req);

            if (res.createWebLoginTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironment

Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEnvironmentRequest req = new DeleteEnvironmentRequest("natus") {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
            }};            

            DeleteEnvironmentResponse res = sdk.sdk.deleteEnvironment(req);

            if (res.deleteEnvironmentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironment

Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentRequest;
import org.openapis.openapi.models.operations.GetEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEnvironmentRequest req = new GetEnvironmentRequest("saepe") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "ipsa";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "est";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "laborum";
            }};            

            GetEnvironmentResponse res = sdk.sdk.getEnvironment(req);

            if (res.getEnvironmentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEnvironments

Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEnvironmentsRequest;
import org.openapis.openapi.models.operations.ListEnvironmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEnvironmentsRequest req = new ListEnvironmentsRequest() {{
                maxResults = 210382L;
                nextToken = "corporis";
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "enim";
                xAmzDate = "omnis";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "excepturi";
            }};            

            ListEnvironmentsResponse res = sdk.sdk.listEnvironments(req);

            if (res.listEnvironmentsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. 

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
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("iure") {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "sapiente";
                xAmzDate = "architecto";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "culpa";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishMetrics

 <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishMetricsRequest;
import org.openapis.openapi.models.operations.PublishMetricsRequestBody;
import org.openapis.openapi.models.operations.PublishMetricsResponse;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.MetricDatum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatisticSet;
import org.openapis.openapi.models.shared.UnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PublishMetricsRequest req = new PublishMetricsRequest("repellat",                 new PublishMetricsRequestBody(                new org.openapis.openapi.models.shared.MetricDatum[]{{
                                                add(new MetricDatum("cum", OffsetDateTime.parse("2022-12-17T16:42:52.927Z")) {{
                                                    dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                                        add(new Dimension("quia", "quis") {{
                                                            name = "Lucy Konopelski";
                                                            value = "error";
                                                        }}),
                                                        add(new Dimension("sequi", "tenetur") {{
                                                            name = "Kayla O'Kon";
                                                            value = "quo";
                                                        }}),
                                                        add(new Dimension("laborum", "quasi") {{
                                                            name = "Mr. Alberta Schuster";
                                                            value = "temporibus";
                                                        }}),
                                                    }};
                                                    metricName = "reiciendis";
                                                    statisticValues = new StatisticSet() {{
                                                        maximum = 9764.6;
                                                        minimum = 8781.94;
                                                        sampleCount = 468651L;
                                                        sum = 5096.24;
                                                    }};
                                                    timestamp = OffsetDateTime.parse("2022-10-31T23:49:03.388Z");
                                                    unit = UnitEnum.KILOBYTES_SECOND;
                                                    value = 4511.59;
                                                }}),
                                                add(new MetricDatum("itaque", OffsetDateTime.parse("2022-09-06T17:20:08.756Z")) {{
                                                    dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                                        add(new Dimension("dicta", "harum") {{
                                                            name = "Shawna Carter";
                                                            value = "iusto";
                                                        }}),
                                                        add(new Dimension("molestias", "excepturi") {{
                                                            name = "Sophia Jerde I";
                                                            value = "quidem";
                                                        }}),
                                                    }};
                                                    metricName = "pariatur";
                                                    statisticValues = new StatisticSet() {{
                                                        maximum = 2653.89;
                                                        minimum = 5089.69;
                                                        sampleCount = 523248L;
                                                        sum = 9167.23;
                                                    }};
                                                    timestamp = OffsetDateTime.parse("2022-01-29T18:39:33.469Z");
                                                    unit = UnitEnum.BYTES_SECOND;
                                                    value = 831.12;
                                                }}),
                                                add(new MetricDatum("fugit", OffsetDateTime.parse("2021-11-11T04:17:07.569Z")) {{
                                                    dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                                        add(new Dimension("labore", "modi") {{
                                                            name = "Taylor Cole";
                                                            value = "quibusdam";
                                                        }}),
                                                    }};
                                                    metricName = "qui";
                                                    statisticValues = new StatisticSet() {{
                                                        maximum = 3978.21;
                                                        minimum = 5865.13;
                                                        sampleCount = 552822L;
                                                        sum = 201.07;
                                                    }};
                                                    timestamp = OffsetDateTime.parse("2022-03-04T10:29:07.095Z");
                                                    unit = UnitEnum.KILOBITS;
                                                    value = 46.95;
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }};            

            PublishMetricsResponse res = sdk.sdk.publishMetrics(req);

            if (res.publishMetricsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. 

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
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("aliquid", "provident");
                                                put("necessitatibus", "sint");
                                                put("officia", "dolor");
                                            }});, "debitis") {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "in";
                xAmzDate = "in";
                xAmzSecurityToken = "illum";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "rerum";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.

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
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("magnam",                 new String[]{{
                                add("facere"),
                                add("ea"),
                                add("aliquid"),
                                add("laborum"),
                            }}) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEnvironment

Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequestBodyLoggingConfiguration;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequestBodyNetworkConfiguration;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequestBodyWebserverAccessModeEnum;
import org.openapis.openapi.models.operations.UpdateEnvironmentResponse;
import org.openapis.openapi.models.shared.LoggingLevelEnum;
import org.openapis.openapi.models.shared.ModuleLoggingConfigurationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEnvironmentRequest req = new UpdateEnvironmentRequest("nam",                 new UpdateEnvironmentRequestBody() {{
                                airflowConfigurationOptions = new java.util.HashMap<String, String>() {{
                                    put("blanditiis", "deleniti");
                                    put("sapiente", "amet");
                                    put("deserunt", "nisi");
                                }};
                                airflowVersion = "vel";
                                dagS3Path = "natus";
                                environmentClass = "omnis";
                                executionRoleArn = "molestiae";
                                loggingConfiguration = new UpdateEnvironmentRequestBodyLoggingConfiguration() {{
                                    dagProcessingLogs = new ModuleLoggingConfigurationInput(false, LoggingLevelEnum.CRITICAL);;
                                    schedulerLogs = new ModuleLoggingConfigurationInput(false, LoggingLevelEnum.WARNING);;
                                    taskLogs = new ModuleLoggingConfigurationInput(false, LoggingLevelEnum.ERROR);;
                                    webserverLogs = new ModuleLoggingConfigurationInput(false, LoggingLevelEnum.INFO);;
                                    workerLogs = new ModuleLoggingConfigurationInput(false, LoggingLevelEnum.INFO);;
                                }};;
                                maxWorkers = 287991L;
                                minWorkers = 290077L;
                                networkConfiguration = new UpdateEnvironmentRequestBodyNetworkConfiguration() {{
                                    securityGroupIds = new String[]{{
                                        add("natus"),
                                        add("nobis"),
                                    }};
                                }};;
                                pluginsS3ObjectVersion = "eum";
                                pluginsS3Path = "vero";
                                requirementsS3ObjectVersion = "aspernatur";
                                requirementsS3Path = "architecto";
                                schedulers = 298282L;
                                sourceBucketArn = "et";
                                startupScriptS3ObjectVersion = "excepturi";
                                startupScriptS3Path = "ullam";
                                webserverAccessMode = UpdateEnvironmentRequestBodyWebserverAccessModeEnum.PUBLIC_ONLY;
                                weeklyMaintenanceWindowStart = "quos";
                            }};) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "mollitia";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "eum";
            }};            

            UpdateEnvironmentResponse res = sdk.sdk.updateEnvironment(req);

            if (res.updateEnvironmentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
