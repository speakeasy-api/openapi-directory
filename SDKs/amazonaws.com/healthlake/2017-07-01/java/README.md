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
import org.openapis.openapi.models.operations.CreateFHIRDatastoreRequest;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreResponse;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.CmkTypeEnum;
import org.openapis.openapi.models.shared.CreateFHIRDatastoreRequest;
import org.openapis.openapi.models.shared.FHIRVersionEnum;
import org.openapis.openapi.models.shared.KmsEncryptionConfig;
import org.openapis.openapi.models.shared.PreloadDataConfig;
import org.openapis.openapi.models.shared.PreloadDataTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SseConfiguration;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFHIRDatastoreRequest req = new CreateFHIRDatastoreRequest(                new CreateFHIRDatastoreRequest(FHIRVersionEnum.R4) {{
                                clientToken = "provident";
                                datastoreName = "distinctio";
                                preloadDataConfig = new PreloadDataConfig(PreloadDataTypeEnum.SYNTHEA);;
                                sseConfiguration = new SseConfiguration(                new KmsEncryptionConfig(CmkTypeEnum.AWS_OWNED_KMS_KEY) {{
                                                    kmsKeyId = "unde";
                                                }};);;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("vel", "error") {{
                                        key = "corrupti";
                                        value = "illum";
                                    }}),
                                    add(new Tag("iure", "magnam") {{
                                        key = "deserunt";
                                        value = "suscipit";
                                    }}),
                                    add(new Tag("delectus", "tempora") {{
                                        key = "debitis";
                                        value = "ipsa";
                                    }}),
                                    add(new Tag("minus", "placeat") {{
                                        key = "suscipit";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};, CreateFHIRDatastoreXAmzTargetEnum.HEALTH_LAKE_CREATE_FHIR_DATASTORE) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            CreateFHIRDatastoreResponse res = sdk.createFHIRDatastore(req);

            if (res.createFHIRDatastoreResponse != null) {
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

* [createFHIRDatastore](docs/sdk/README.md#createfhirdatastore) - Creates a Data Store that can ingest and export FHIR formatted data.
* [deleteFHIRDatastore](docs/sdk/README.md#deletefhirdatastore) - Deletes a Data Store. 
* [describeFHIRDatastore](docs/sdk/README.md#describefhirdatastore) - Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.
* [describeFHIRExportJob](docs/sdk/README.md#describefhirexportjob) - Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
* [describeFHIRImportJob](docs/sdk/README.md#describefhirimportjob) - Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 
* [listFHIRDatastores](docs/sdk/README.md#listfhirdatastores) - Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.
* [listFHIRExportJobs](docs/sdk/README.md#listfhirexportjobs) -  Lists all FHIR export jobs associated with an account and their statuses. 
* [listFHIRImportJobs](docs/sdk/README.md#listfhirimportjobs) -  Lists all FHIR import jobs associated with an account and their statuses. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) -  Returns a list of all existing tags associated with a Data Store. 
* [startFHIRExportJob](docs/sdk/README.md#startfhirexportjob) - Begins a FHIR export job.
* [startFHIRImportJob](docs/sdk/README.md#startfhirimportjob) - Begins a FHIR Import job.
* [tagResource](docs/sdk/README.md#tagresource) -  Adds a user specifed key and value tag to a Data Store. 
* [untagResource](docs/sdk/README.md#untagresource) -  Removes tags from a Data Store. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
