# SDK

## Overview

<p>AWS IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations.</p> <p> To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.</p> <p> AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot/>
### Available Operations

* [describeJobExecution](#describejobexecution) - Gets details of a job execution.
* [getPendingJobExecutions](#getpendingjobexecutions) - Gets the list of all jobs for a thing that are not in a terminal status.
* [startNextPendingJobExecution](#startnextpendingjobexecution) - Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.
* [updateJobExecution](#updatejobexecution) - Updates the status of a job execution.

## describeJobExecution

Gets details of a job execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeJobExecutionRequest;
import org.openapis.openapi.models.operations.DescribeJobExecutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobExecutionRequest req = new DescribeJobExecutionRequest("iure", "magnam") {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
                executionNumber = 812169L;
                includeJobDocument = false;
            }};            

            DescribeJobExecutionResponse res = sdk.sdk.describeJobExecution(req);

            if (res.describeJobExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPendingJobExecutions

Gets the list of all jobs for a thing that are not in a terminal status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPendingJobExecutionsRequest;
import org.openapis.openapi.models.operations.GetPendingJobExecutionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPendingJobExecutionsRequest req = new GetPendingJobExecutionsRequest("iusto") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            GetPendingJobExecutionsResponse res = sdk.sdk.getPendingJobExecutions(req);

            if (res.getPendingJobExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startNextPendingJobExecution

Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartNextPendingJobExecutionRequest;
import org.openapis.openapi.models.operations.StartNextPendingJobExecutionRequestBody;
import org.openapis.openapi.models.operations.StartNextPendingJobExecutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartNextPendingJobExecutionRequest req = new StartNextPendingJobExecutionRequest(                new StartNextPendingJobExecutionRequestBody() {{
                                statusDetails = new java.util.HashMap<String, String>() {{
                                    put("ipsam", "repellendus");
                                }};
                                stepTimeoutInMinutes = 957156L;
                            }};, "quo") {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            StartNextPendingJobExecutionResponse res = sdk.sdk.startNextPendingJobExecution(req);

            if (res.startNextPendingJobExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateJobExecution

Updates the status of a job execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateJobExecutionRequest;
import org.openapis.openapi.models.operations.UpdateJobExecutionRequestBody;
import org.openapis.openapi.models.operations.UpdateJobExecutionRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateJobExecutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateJobExecutionRequest req = new UpdateJobExecutionRequest(                new UpdateJobExecutionRequestBody(UpdateJobExecutionRequestBodyStatusEnum.TIMED_OUT) {{
                                executionNumber = 780529L;
                                expectedVersion = 678880L;
                                includeJobDocument = false;
                                includeJobExecutionState = false;
                                statusDetails = new java.util.HashMap<String, String>() {{
                                    put("nam", "officia");
                                }};
                                stepTimeoutInMinutes = 582020L;
                            }};, "fugit", "deleniti") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "optio";
                xAmzCredential = "totam";
                xAmzDate = "beatae";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "modi";
            }};            

            UpdateJobExecutionResponse res = sdk.sdk.updateJobExecution(req);

            if (res.updateJobExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
