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
import org.openapis.openapi.models.operations.GETCancelJobActionEnum;
import org.openapis.openapi.models.operations.GETCancelJobOperationEnum;
import org.openapis.openapi.models.operations.GETCancelJobRequest;
import org.openapis.openapi.models.operations.GETCancelJobResponse;
import org.openapis.openapi.models.operations.GETCancelJobVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCancelJobRequest req = new GETCancelJobRequest("provident", GETCancelJobActionEnum.CANCEL_JOB, "distinctio", GETCancelJobOperationEnum.CANCEL_JOB, "quibusdam", "unde", "nulla", "corrupti", GETCancelJobVersionEnum.TWO_THOUSAND_AND_TEN0601) {{
                apiVersion = "illum";
            }};            

            GETCancelJobResponse res = sdk.getCancelJob(req);

            if (res.body != null) {
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

* [getCancelJob](docs/sdk/README.md#getcanceljob) - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* [getCreateJob](docs/sdk/README.md#getcreatejob) - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* [getGETShippingLabel](docs/sdk/README.md#getgetshippinglabel) - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* [getGETStatus](docs/sdk/README.md#getgetstatus) - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* [getListJobs](docs/sdk/README.md#getlistjobs) - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* [getUpdateJob](docs/sdk/README.md#getupdatejob) - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
* [postCancelJob](docs/sdk/README.md#postcanceljob) - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* [postCreateJob](docs/sdk/README.md#postcreatejob) - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* [postGetShippingLabel](docs/sdk/README.md#postgetshippinglabel) - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* [postGetStatus](docs/sdk/README.md#postgetstatus) - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* [postListJobs](docs/sdk/README.md#postlistjobs) - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* [postUpdateJob](docs/sdk/README.md#postupdatejob) - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
