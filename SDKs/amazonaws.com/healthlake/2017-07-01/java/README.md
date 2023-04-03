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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreRequest;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreResponse;
import org.openapis.openapi.models.shared.CreateFHIRDatastoreRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.SseConfiguration;
import org.openapis.openapi.models.shared.KmsEncryptionConfig;
import org.openapis.openapi.models.shared.CmkTypeEnum;
import org.openapis.openapi.models.shared.PreloadDataConfig;
import org.openapis.openapi.models.shared.PreloadDataTypeEnum;
import org.openapis.openapi.models.shared.FHIRVersionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFHIRDatastoreRequest req = new CreateFHIRDatastoreRequest() {{
                createFHIRDatastoreRequest = new CreateFHIRDatastoreRequest() {{
                    clientToken = "corrupti";
                    datastoreName = "provident";
                    datastoreTypeVersion = "R4";
                    preloadDataConfig = new PreloadDataConfig() {{
                        preloadDataType = "SYNTHEA";
                    }};
                    sseConfiguration = new SseConfiguration() {{
                        kmsEncryptionConfig = new KmsEncryptionConfig() {{
                            cmkType = "AWS_OWNED_KMS_KEY";
                            kmsKeyId = "quibusdam";
                        }};
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "nulla";
                            value = "corrupti";
                        }}),
                        add(new Tag() {{
                            key = "illum";
                            value = "vel";
                        }}),
                        add(new Tag() {{
                            key = "error";
                            value = "deserunt";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
                xAmzTarget = "HealthLake.CreateFHIRDatastore";
            }}            

            CreateFHIRDatastoreResponse res = sdk.createFHIRDatastore(req);

            if (res.createFHIRDatastoreResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

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
