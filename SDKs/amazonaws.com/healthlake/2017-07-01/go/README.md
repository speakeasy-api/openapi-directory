# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/healthlake/2017-07-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateFHIRDatastoreRequest{
        CreateFHIRDatastoreRequest: shared.CreateFHIRDatastoreRequest{
            ClientToken: "corrupti",
            DatastoreName: "provident",
            DatastoreTypeVersion: "R4",
            PreloadDataConfig: &shared.PreloadDataConfig{
                PreloadDataType: "SYNTHEA",
            },
            SseConfiguration: &shared.SseConfiguration{
                KmsEncryptionConfig: shared.KmsEncryptionConfig{
                    CmkType: "AWS_OWNED_KMS_KEY",
                    KmsKeyID: "quibusdam",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nulla",
                    Value: "corrupti",
                },
                shared.Tag{
                    Key: "illum",
                    Value: "vel",
                },
                shared.Tag{
                    Key: "error",
                    Value: "deserunt",
                },
            },
        },
        XAmzAlgorithm: "suscipit",
        XAmzContentSha256: "iure",
        XAmzCredential: "magnam",
        XAmzDate: "debitis",
        XAmzSecurityToken: "ipsa",
        XAmzSignature: "delectus",
        XAmzSignedHeaders: "tempora",
        XAmzTarget: "HealthLake.CreateFHIRDatastore",
    }

    ctx := context.Background()
    res, err := s.CreateFHIRDatastore(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFHIRDatastoreResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateFHIRDatastore` - Creates a Data Store that can ingest and export FHIR formatted data.
* `DeleteFHIRDatastore` - Deletes a Data Store. 
* `DescribeFHIRDatastore` - Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.
* `DescribeFHIRExportJob` - Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
* `DescribeFHIRImportJob` - Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 
* `ListFHIRDatastores` - Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.
* `ListFHIRExportJobs` -  Lists all FHIR export jobs associated with an account and their statuses. 
* `ListFHIRImportJobs` -  Lists all FHIR import jobs associated with an account and their statuses. 
* `ListTagsForResource` -  Returns a list of all existing tags associated with a Data Store. 
* `StartFHIRExportJob` - Begins a FHIR export job.
* `StartFHIRImportJob` - Begins a FHIR Import job.
* `TagResource` -  Adds a user specifed key and value tag to a Data Store. 
* `UntagResource` -  Removes tags from a Data Store. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
