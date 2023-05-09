# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/importexport/2010-06-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GETCancelJob(ctx, operations.GETCancelJobRequest{
        APIVersion: sdk.String("corrupti"),
        AWSAccessKeyID: "provident",
        Action: operations.GETCancelJobActionEnumCancelJob,
        JobID: "distinctio",
        Operation: operations.GETCancelJobOperationEnumCancelJob,
        Signature: "quibusdam",
        SignatureMethod: "unde",
        SignatureVersion: "nulla",
        Timestamp: "corrupti",
        Version: operations.GETCancelJobVersionEnumTwoThousandAndTen0601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GETCancelJob](docs/sdk/README.md#getcanceljob) - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* [GETCreateJob](docs/sdk/README.md#getcreatejob) - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* [GETGETShippingLabel](docs/sdk/README.md#getgetshippinglabel) - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* [GETGETStatus](docs/sdk/README.md#getgetstatus) - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* [GETListJobs](docs/sdk/README.md#getlistjobs) - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* [GETUpdateJob](docs/sdk/README.md#getupdatejob) - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
* [POSTCancelJob](docs/sdk/README.md#postcanceljob) - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* [POSTCreateJob](docs/sdk/README.md#postcreatejob) - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* [POSTGetShippingLabel](docs/sdk/README.md#postgetshippinglabel) - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* [POSTGetStatus](docs/sdk/README.md#postgetstatus) - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* [POSTListJobs](docs/sdk/README.md#postlistjobs) - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* [POSTUpdateJob](docs/sdk/README.md#postupdatejob) - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
