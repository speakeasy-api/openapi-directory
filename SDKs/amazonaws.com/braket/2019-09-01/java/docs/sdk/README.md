# SDK

## Overview

<p>The Amazon Braket API Reference provides information about the operations and structures supported in Amazon Braket.</p> <p>Additional Resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html">Amazon Braket Developer Guide</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/braket/>
### Available Operations

* [cancelJob](#canceljob) - Cancels an Amazon Braket job.
* [cancelQuantumTask](#cancelquantumtask) - Cancels the specified task.
* [createJob](#createjob) - Creates an Amazon Braket job.
* [createQuantumTask](#createquantumtask) - Creates a quantum task.
* [getDevice](#getdevice) - <p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>
* [getJob](#getjob) - Retrieves the specified Amazon Braket job.
* [getQuantumTask](#getquantumtask) - Retrieves the specified quantum task.
* [listTagsForResource](#listtagsforresource) - Shows the tags associated with this resource.
* [searchDevices](#searchdevices) - Searches for devices using the specified filters.
* [searchJobs](#searchjobs) - Searches for Amazon Braket jobs that match the specified filter values.
* [searchQuantumTasks](#searchquantumtasks) - Searches for tasks that match the specified filter values.
* [tagResource](#tagresource) - Add a tag to the specified resource.
* [untagResource](#untagresource) - Remove tags from a resource.

## cancelJob

Cancels an Amazon Braket job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelJobRequest;
import org.openapis.openapi.models.operations.CancelJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelJobRequest req = new CancelJobRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            CancelJobResponse res = sdk.sdk.cancelJob(req);

            if (res.cancelJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelQuantumTask

Cancels the specified task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelQuantumTaskRequest;
import org.openapis.openapi.models.operations.CancelQuantumTaskRequestBody;
import org.openapis.openapi.models.operations.CancelQuantumTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelQuantumTaskRequest req = new CancelQuantumTaskRequest(                new CancelQuantumTaskRequestBody("molestiae");, "minus") {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }};            

            CancelQuantumTaskResponse res = sdk.sdk.cancelQuantumTask(req);

            if (res.cancelQuantumTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createJob

Creates an Amazon Braket job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateJobRequest;
import org.openapis.openapi.models.operations.CreateJobRequestBody;
import org.openapis.openapi.models.operations.CreateJobRequestBodyAlgorithmSpecification;
import org.openapis.openapi.models.operations.CreateJobRequestBodyCheckpointConfig;
import org.openapis.openapi.models.operations.CreateJobRequestBodyDeviceConfig;
import org.openapis.openapi.models.operations.CreateJobRequestBodyInstanceConfig;
import org.openapis.openapi.models.operations.CreateJobRequestBodyOutputDataConfig;
import org.openapis.openapi.models.operations.CreateJobRequestBodyStoppingCondition;
import org.openapis.openapi.models.operations.CreateJobResponse;
import org.openapis.openapi.models.shared.CompressionTypeEnum;
import org.openapis.openapi.models.shared.ContainerImage;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.InputFileConfig;
import org.openapis.openapi.models.shared.InstanceTypeEnum;
import org.openapis.openapi.models.shared.S3DataSource;
import org.openapis.openapi.models.shared.ScriptModeConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateJobRequest req = new CreateJobRequest(                new CreateJobRequestBody(                new CreateJobRequestBodyAlgorithmSpecification() {{
                                                containerImage = new ContainerImage("quis");;
                                                scriptModeConfig = new ScriptModeConfig("veritatis", "deserunt") {{
                                                    compressionType = CompressionTypeEnum.NONE;
                                                }};;
                                            }};, "ipsam",                 new CreateJobRequestBodyDeviceConfig() {{
                                                device = "repellendus";
                                            }};,                 new CreateJobRequestBodyInstanceConfig() {{
                                                instanceCount = 957156L;
                                                instanceType = InstanceTypeEnum.ML_C52XLARGE;
                                                volumeSizeInGb = 140350L;
                                            }};, "at",                 new CreateJobRequestBodyOutputDataConfig() {{
                                                kmsKeyId = "at";
                                                s3Path = "maiores";
                                            }};, "molestiae") {{
                                checkpointConfig = new CreateJobRequestBodyCheckpointConfig() {{
                                    localPath = "quod";
                                    s3Uri = "quod";
                                }};;
                                hyperParameters = new java.util.HashMap<String, String>() {{
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                }};
                                inputDataConfig = new org.openapis.openapi.models.shared.InputFileConfig[]{{
                                    add(new InputFileConfig("optio",                 new DataSource(                new S3DataSource("totam"););) {{
                                        channelName = "officia";
                                        contentType = "occaecati";
                                        dataSource = new DataSource(                new S3DataSource("hic");) {{
                                            s3DataSource = new S3DataSource("deleniti") {{
                                                s3Uri = "fugit";
                                            }};
                                        }};
                                    }}),
                                    add(new InputFileConfig("impedit",                 new DataSource(                new S3DataSource("cum"););) {{
                                        channelName = "beatae";
                                        contentType = "commodi";
                                        dataSource = new DataSource(                new S3DataSource("qui");) {{
                                            s3DataSource = new S3DataSource("modi") {{
                                                s3Uri = "molestiae";
                                            }};
                                        }};
                                    }}),
                                    add(new InputFileConfig("ad",                 new DataSource(                new S3DataSource("natus"););) {{
                                        channelName = "esse";
                                        contentType = "ipsum";
                                        dataSource = new DataSource(                new S3DataSource("perferendis");) {{
                                            s3DataSource = new S3DataSource("aspernatur") {{
                                                s3Uri = "excepturi";
                                            }};
                                        }};
                                    }}),
                                }};
                                stoppingCondition = new CreateJobRequestBodyStoppingCondition() {{
                                    maxRuntimeInSeconds = 149675L;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("dolor", "natus");
                                    put("laboriosam", "hic");
                                    put("saepe", "fuga");
                                }};
                            }};) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateJobResponse res = sdk.sdk.createJob(req);

            if (res.createJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createQuantumTask

Creates a quantum task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateQuantumTaskRequest;
import org.openapis.openapi.models.operations.CreateQuantumTaskRequestBody;
import org.openapis.openapi.models.operations.CreateQuantumTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateQuantumTaskRequest req = new CreateQuantumTaskRequest(                new CreateQuantumTaskRequestBody("reiciendis", "est", "mollitia", "laborum", "dolores", 210382L) {{
                                deviceParameters = "corporis";
                                jobToken = "explicabo";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("enim", "omnis");
                                    put("nemo", "minima");
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }};
                            }};) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateQuantumTaskResponse res = sdk.sdk.createQuantumTask(req);

            if (res.createQuantumTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevice

<p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceRequest;
import org.openapis.openapi.models.operations.GetDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceRequest req = new GetDeviceRequest("mollitia") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            GetDeviceResponse res = sdk.sdk.getDevice(req);

            if (res.getDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJob

Retrieves the specified Amazon Braket job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobRequest;
import org.openapis.openapi.models.operations.GetJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobRequest req = new GetJobRequest("quis") {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            GetJobResponse res = sdk.sdk.getJob(req);

            if (res.getJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuantumTask

Retrieves the specified quantum task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuantumTaskRequest;
import org.openapis.openapi.models.operations.GetQuantumTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQuantumTaskRequest req = new GetQuantumTaskRequest("ipsam") {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
            }};            

            GetQuantumTaskResponse res = sdk.sdk.getQuantumTask(req);

            if (res.getQuantumTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Shows the tags associated with this resource.

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
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("reiciendis") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
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

## searchDevices

Searches for devices using the specified filters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchDevicesRequest;
import org.openapis.openapi.models.operations.SearchDevicesRequestBody;
import org.openapis.openapi.models.operations.SearchDevicesResponse;
import org.openapis.openapi.models.shared.SearchDevicesFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchDevicesRequest req = new SearchDevicesRequest(                new SearchDevicesRequestBody(                new org.openapis.openapi.models.shared.SearchDevicesFilter[]{{
                                                add(new SearchDevicesFilter("dolore",                 new String[]{{
                                                                    add("dicta"),
                                                                    add("harum"),
                                                                }}) {{
                                                    name = "Sharon Kiehn";
                                                    values = new String[]{{
                                                        add("corporis"),
                                                    }};
                                                }}),
                                                add(new SearchDevicesFilter("modi",                 new String[]{{
                                                                    add("rem"),
                                                                    add("voluptates"),
                                                                    add("quasi"),
                                                                }}) {{
                                                    name = "Sophia Jerde I";
                                                    values = new String[]{{
                                                        add("molestias"),
                                                        add("excepturi"),
                                                        add("pariatur"),
                                                    }};
                                                }}),
                                                add(new SearchDevicesFilter("quibusdam",                 new String[]{{
                                                                    add("deserunt"),
                                                                }}) {{
                                                    name = "Kirk Boehm";
                                                    values = new String[]{{
                                                        add("consequatur"),
                                                        add("est"),
                                                    }};
                                                }}),
                                            }}) {{
                                maxResults = 716327L;
                                nextToken = "quibusdam";
                            }};) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
                maxResults = "magni";
                nextToken = "assumenda";
            }};            

            SearchDevicesResponse res = sdk.sdk.searchDevices(req);

            if (res.searchDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchJobs

Searches for Amazon Braket jobs that match the specified filter values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchJobsRequest;
import org.openapis.openapi.models.operations.SearchJobsRequestBody;
import org.openapis.openapi.models.operations.SearchJobsResponse;
import org.openapis.openapi.models.shared.SearchJobsFilter;
import org.openapis.openapi.models.shared.SearchJobsFilterOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchJobsRequest req = new SearchJobsRequest(                new SearchJobsRequestBody(                new org.openapis.openapi.models.shared.SearchJobsFilter[]{{
                                                add(new SearchJobsFilter("non", SearchJobsFilterOperatorEnum.BETWEEN,                 new String[]{{
                                                                    add("aliquid"),
                                                                    add("provident"),
                                                                    add("necessitatibus"),
                                                                }}) {{
                                                    name = "Sonya Marks";
                                                    operator = SearchJobsFilterOperatorEnum.BETWEEN;
                                                    values = new String[]{{
                                                        add("delectus"),
                                                        add("eum"),
                                                    }};
                                                }}),
                                            }}) {{
                                maxResults = 572252L;
                                nextToken = "officia";
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
                maxResults = "maiores";
                nextToken = "rerum";
            }};            

            SearchJobsResponse res = sdk.sdk.searchJobs(req);

            if (res.searchJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchQuantumTasks

Searches for tasks that match the specified filter values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchQuantumTasksRequest;
import org.openapis.openapi.models.operations.SearchQuantumTasksRequestBody;
import org.openapis.openapi.models.operations.SearchQuantumTasksResponse;
import org.openapis.openapi.models.shared.SearchQuantumTasksFilter;
import org.openapis.openapi.models.shared.SearchQuantumTasksFilterOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchQuantumTasksRequest req = new SearchQuantumTasksRequest(                new SearchQuantumTasksRequestBody(                new org.openapis.openapi.models.shared.SearchQuantumTasksFilter[]{{
                                                add(new SearchQuantumTasksFilter("enim", SearchQuantumTasksFilterOperatorEnum.BETWEEN,                 new String[]{{
                                                                    add("quidem"),
                                                                    add("provident"),
                                                                    add("nam"),
                                                                    add("id"),
                                                                }}) {{
                                                    name = "Irving Jenkins";
                                                    operator = SearchQuantumTasksFilterOperatorEnum.BETWEEN;
                                                    values = new String[]{{
                                                        add("occaecati"),
                                                    }};
                                                }}),
                                                add(new SearchQuantumTasksFilter("molestiae", SearchQuantumTasksFilterOperatorEnum.LT,                 new String[]{{
                                                                    add("magnam"),
                                                                    add("distinctio"),
                                                                }}) {{
                                                    name = "Jaime Will";
                                                    operator = SearchQuantumTasksFilterOperatorEnum.EQUAL;
                                                    values = new String[]{{
                                                        add("natus"),
                                                        add("omnis"),
                                                    }};
                                                }}),
                                            }}) {{
                                maxResults = 660174L;
                                nextToken = "labore";
                            }};) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "natus";
                xAmzDate = "nobis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aspernatur";
                maxResults = "architecto";
                nextToken = "magnam";
            }};            

            SearchQuantumTasksResponse res = sdk.sdk.searchQuantumTasks(req);

            if (res.searchQuantumTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Add a tag to the specified resource.

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
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("ullam", "provident");
                                                put("quos", "sint");
                                                put("accusantium", "mollitia");
                                            }});, "reiciendis") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ad";
                xAmzCredential = "eum";
                xAmzDate = "dolor";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "nemo";
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

Remove tags from a resource.

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
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("iure",                 new String[]{{
                                add("debitis"),
                                add("eius"),
                                add("maxime"),
                                add("deleniti"),
                            }}) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "in";
                xAmzCredential = "architecto";
                xAmzDate = "architecto";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "expedita";
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
