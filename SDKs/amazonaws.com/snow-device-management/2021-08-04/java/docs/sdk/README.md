# SDK

## Overview

Amazon Web Services Snow Device Management documentation.

Amazon Web Services documentation
<https://docs.aws.amazon.com/snow-device-management/>
### Available Operations

* [cancelTask](#canceltask) - <p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p> <note> <p>A task might still run if it's processed from the queue before the <code>CancelTask</code> operation changes the task's state.</p> </note>
* [createTask](#createtask) - Instructs one or more devices to start a task, such as unlocking or rebooting.
* [describeDevice](#describedevice) - Checks device-specific information, such as the device type, software version, IP addresses, and lock status.
* [describeDeviceEc2Instances](#describedeviceec2instances) - Checks the current state of the Amazon EC2 instances. The output is similar to <code>describeDevice</code>, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields. 
* [describeExecution](#describeexecution) - Checks the status of a remote task running on one or more target devices.
* [describeTask](#describetask) - Checks the metadata for a given task on a device. 
* [listDeviceResources](#listdeviceresources) - Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.
* [listDevices](#listdevices) - Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.
* [listExecutions](#listexecutions) - Returns the status of tasks for one or more target devices.
* [listTagsForResource](#listtagsforresource) - Returns a list of tags for a managed device or task.
* [listTasks](#listtasks) - Returns a list of tasks that can be filtered by state.
* [tagResource](#tagresource) - Adds or replaces tags on a device or task.
* [untagResource](#untagresource) - Removes a tag from a device or task.

## cancelTask

<p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p> <note> <p>A task might still run if it's processed from the queue before the <code>CancelTask</code> operation changes the task's state.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelTaskRequest;
import org.openapis.openapi.models.operations.CancelTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelTaskRequest req = new CancelTaskRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            CancelTaskResponse res = sdk.sdk.cancelTask(req);

            if (res.cancelTaskOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTask

Instructs one or more devices to start a task, such as unlocking or rebooting.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTaskRequest;
import org.openapis.openapi.models.operations.CreateTaskRequestBody;
import org.openapis.openapi.models.operations.CreateTaskRequestBodyCommand;
import org.openapis.openapi.models.operations.CreateTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTaskRequest req = new CreateTaskRequest(                new CreateTaskRequestBody(                new CreateTaskRequestBodyCommand() {{
                                                reboot = new java.util.HashMap<String, Object>() {{
                                                    put("minus", "placeat");
                                                    put("voluptatum", "iusto");
                                                }};
                                                unlock = new java.util.HashMap<String, Object>() {{
                                                    put("nisi", "recusandae");
                                                    put("temporibus", "ab");
                                                    put("quis", "veritatis");
                                                }};
                                            }};,                 new String[]{{
                                                add("perferendis"),
                                                add("ipsam"),
                                                add("repellendus"),
                                            }}) {{
                                clientToken = "sapiente";
                                description = "quo";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("at", "at");
                                }};
                            }};) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "quod";
                xAmzDate = "quod";
                xAmzSecurityToken = "esse";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "porro";
            }};            

            CreateTaskResponse res = sdk.sdk.createTask(req);

            if (res.createTaskOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDevice

Checks device-specific information, such as the device type, software version, IP addresses, and lock status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDeviceRequest;
import org.openapis.openapi.models.operations.DescribeDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDeviceRequest req = new DescribeDeviceRequest("dicta") {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "officia";
                xAmzCredential = "occaecati";
                xAmzDate = "fugit";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "optio";
            }};            

            DescribeDeviceResponse res = sdk.sdk.describeDevice(req);

            if (res.describeDeviceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDeviceEc2Instances

Checks the current state of the Amazon EC2 instances. The output is similar to <code>describeDevice</code>, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDeviceEc2InstancesRequest;
import org.openapis.openapi.models.operations.DescribeDeviceEc2InstancesRequestBody;
import org.openapis.openapi.models.operations.DescribeDeviceEc2InstancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDeviceEc2InstancesRequest req = new DescribeDeviceEc2InstancesRequest(                new DescribeDeviceEc2InstancesRequestBody(                new String[]{{
                                                add("commodi"),
                                            }});, "molestiae") {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            DescribeDeviceEc2InstancesResponse res = sdk.sdk.describeDeviceEc2Instances(req);

            if (res.describeDeviceEc2Output != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeExecution

Checks the status of a remote task running on one or more target devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeExecutionRequest;
import org.openapis.openapi.models.operations.DescribeExecutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeExecutionRequest req = new DescribeExecutionRequest("perferendis", "ad") {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            DescribeExecutionResponse res = sdk.sdk.describeExecution(req);

            if (res.describeExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTask

Checks the metadata for a given task on a device. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTaskRequest;
import org.openapis.openapi.models.operations.DescribeTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTaskRequest req = new DescribeTaskRequest("fuga") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeTaskResponse res = sdk.sdk.describeTask(req);

            if (res.describeTaskOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeviceResources

Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeviceResourcesRequest;
import org.openapis.openapi.models.operations.ListDeviceResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeviceResourcesRequest req = new ListDeviceResourcesRequest("reiciendis") {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
                maxResults = 750686L;
                nextToken = "enim";
                type = "omnis";
            }};            

            ListDeviceResourcesResponse res = sdk.sdk.listDeviceResources(req);

            if (res.listDeviceResourcesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDevices

Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDevicesRequest;
import org.openapis.openapi.models.operations.ListDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDevicesRequest req = new ListDevicesRequest() {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
                jobId = "architecto";
                maxResults = 652790L;
                nextToken = "dolorem";
            }};            

            ListDevicesResponse res = sdk.sdk.listDevices(req);

            if (res.listDevicesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExecutions

Returns the status of tasks for one or more target devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExecutionsRequest;
import org.openapis.openapi.models.operations.ListExecutionsResponse;
import org.openapis.openapi.models.operations.ListExecutionsStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExecutionsRequest req = new ListExecutionsRequest("consequuntur") {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
                maxResults = 244425L;
                nextToken = "error";
                state = ListExecutionsStateEnum.IN_PROGRESS;
            }};            

            ListExecutionsResponse res = sdk.sdk.listExecutions(req);

            if (res.listExecutionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns a list of tags for a managed device or task.

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
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("vitae") {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
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

## listTasks

Returns a list of tasks that can be filtered by state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTasksRequest;
import org.openapis.openapi.models.operations.ListTasksResponse;
import org.openapis.openapi.models.operations.ListTasksStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTasksRequest req = new ListTasksRequest() {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
                maxResults = 96098L;
                nextToken = "reiciendis";
                state = ListTasksStateEnum.COMPLETED;
            }};            

            ListTasksResponse res = sdk.sdk.listTasks(req);

            if (res.listTasksOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds or replaces tags on a device or task.

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
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("praesentium", "voluptatibus");
                                                put("ipsa", "omnis");
                                            }});, "voluptate") {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a tag from a device or task.

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
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("dolore",                 new String[]{{
                                add("dicta"),
                                add("harum"),
                            }}) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
