# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createFHIRDatastore` - Creates a Data Store that can ingest and export FHIR formatted data.
* `deleteFHIRDatastore` - Deletes a Data Store. 
* `describeFHIRDatastore` - Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.
* `describeFHIRExportJob` - Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
* `describeFHIRImportJob` - Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 
* `listFHIRDatastores` - Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.
* `listFHIRExportJobs` -  Lists all FHIR export jobs associated with an account and their statuses. 
* `listFHIRImportJobs` -  Lists all FHIR import jobs associated with an account and their statuses. 
* `listTagsForResource` -  Returns a list of all existing tags associated with a Data Store. 
* `startFHIRExportJob` - Begins a FHIR export job.
* `startFHIRImportJob` - Begins a FHIR Import job.
* `tagResource` -  Adds a user specifed key and value tag to a Data Store. 
* `untagResource` -  Removes tags from a Data Store. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
