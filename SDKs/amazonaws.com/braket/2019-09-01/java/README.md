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
import org.openapis.openapi.models.operations.CancelJobRequest;
import org.openapis.openapi.models.operations.CancelJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelJobRequest req = new CancelJobRequest("provident") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            CancelJobResponse res = sdk.cancelJob(req);

            if (res.cancelJobResponse != null) {
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

* [cancelJob](docs/sdk/README.md#canceljob) - Cancels an Amazon Braket job.
* [cancelQuantumTask](docs/sdk/README.md#cancelquantumtask) - Cancels the specified task.
* [createJob](docs/sdk/README.md#createjob) - Creates an Amazon Braket job.
* [createQuantumTask](docs/sdk/README.md#createquantumtask) - Creates a quantum task.
* [getDevice](docs/sdk/README.md#getdevice) - <p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>
* [getJob](docs/sdk/README.md#getjob) - Retrieves the specified Amazon Braket job.
* [getQuantumTask](docs/sdk/README.md#getquantumtask) - Retrieves the specified quantum task.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Shows the tags associated with this resource.
* [searchDevices](docs/sdk/README.md#searchdevices) - Searches for devices using the specified filters.
* [searchJobs](docs/sdk/README.md#searchjobs) - Searches for Amazon Braket jobs that match the specified filter values.
* [searchQuantumTasks](docs/sdk/README.md#searchquantumtasks) - Searches for tasks that match the specified filter values.
* [tagResource](docs/sdk/README.md#tagresource) - Add a tag to the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Remove tags from a resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
