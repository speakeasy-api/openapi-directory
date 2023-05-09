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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateFHIRDatastore(ctx, operations.CreateFHIRDatastoreRequest{
        CreateFHIRDatastoreRequest: shared.CreateFHIRDatastoreRequest{
            ClientToken: sdk.String("corrupti"),
            DatastoreName: sdk.String("provident"),
            DatastoreTypeVersion: shared.FHIRVersionEnumR4,
            PreloadDataConfig: &shared.PreloadDataConfig{
                PreloadDataType: shared.PreloadDataTypeEnumSynthea,
            },
            SseConfiguration: &shared.SseConfiguration{
                KmsEncryptionConfig: shared.KmsEncryptionConfig{
                    CmkType: shared.CmkTypeEnumAwsOwnedKmsKey,
                    KmsKeyID: sdk.String("quibusdam"),
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
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.CreateFHIRDatastoreXAmzTargetEnumHealthLakeCreateFhirDatastore,
    })
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

### [SDK](docs/sdk/README.md)

* [CreateFHIRDatastore](docs/sdk/README.md#createfhirdatastore) - Creates a Data Store that can ingest and export FHIR formatted data.
* [DeleteFHIRDatastore](docs/sdk/README.md#deletefhirdatastore) - Deletes a Data Store. 
* [DescribeFHIRDatastore](docs/sdk/README.md#describefhirdatastore) - Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.
* [DescribeFHIRExportJob](docs/sdk/README.md#describefhirexportjob) - Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
* [DescribeFHIRImportJob](docs/sdk/README.md#describefhirimportjob) - Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 
* [ListFHIRDatastores](docs/sdk/README.md#listfhirdatastores) - Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.
* [ListFHIRExportJobs](docs/sdk/README.md#listfhirexportjobs) -  Lists all FHIR export jobs associated with an account and their statuses. 
* [ListFHIRImportJobs](docs/sdk/README.md#listfhirimportjobs) -  Lists all FHIR import jobs associated with an account and their statuses. 
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) -  Returns a list of all existing tags associated with a Data Store. 
* [StartFHIRExportJob](docs/sdk/README.md#startfhirexportjob) - Begins a FHIR export job.
* [StartFHIRImportJob](docs/sdk/README.md#startfhirimportjob) - Begins a FHIR Import job.
* [TagResource](docs/sdk/README.md#tagresource) -  Adds a user specifed key and value tag to a Data Store. 
* [UntagResource](docs/sdk/README.md#untagresource) -  Removes tags from a Data Store. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
