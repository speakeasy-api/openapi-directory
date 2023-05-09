# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeJobExecutionRequest req = new DescribeJobExecutionRequest("provident", "distinctio") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
                executionNumber = 645894L;
                includeJobDocument = false;
            }};            

            DescribeJobExecutionResponse res = sdk.describeJobExecution(req);

            if (res.describeJobExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [describeJobExecution](docs/sdk/README.md#describejobexecution) - Gets details of a job execution.
* [getPendingJobExecutions](docs/sdk/README.md#getpendingjobexecutions) - Gets the list of all jobs for a thing that are not in a terminal status.
* [startNextPendingJobExecution](docs/sdk/README.md#startnextpendingjobexecution) - Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.
* [updateJobExecution](docs/sdk/README.md#updatejobexecution) - Updates the status of a job execution.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
