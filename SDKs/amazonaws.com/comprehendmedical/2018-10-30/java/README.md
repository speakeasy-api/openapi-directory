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
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobRequest;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobResponse;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEntitiesDetectionV2JobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEntitiesDetectionV2JobRequest req = new DescribeEntitiesDetectionV2JobRequest(                new DescribeEntitiesDetectionV2JobRequest("provident");, DescribeEntitiesDetectionV2JobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_DESCRIBE_ENTITIES_DETECTION_V2_JOB) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            DescribeEntitiesDetectionV2JobResponse res = sdk.describeEntitiesDetectionV2Job(req);

            if (res.describeEntitiesDetectionV2JobResponse != null) {
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

* [describeEntitiesDetectionV2Job](docs/sdk/README.md#describeentitiesdetectionv2job) - Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
* [describeIcd10CMInferenceJob](docs/sdk/README.md#describeicd10cminferencejob) - Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
* [describePHIDetectionJob](docs/sdk/README.md#describephidetectionjob) - Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
* [describeRxNormInferenceJob](docs/sdk/README.md#describerxnorminferencejob) - Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
* [describeSNOMEDCTInferenceJob](docs/sdk/README.md#describesnomedctinferencejob) -  Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job. 
* [~~detectEntities~~](docs/sdk/README.md#detectentities) - <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p> :warning: **Deprecated**
* [detectEntitiesV2](docs/sdk/README.md#detectentitiesv2) - <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
* [detectPHI](docs/sdk/README.md#detectphi) -  Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
* [inferIcd10CM](docs/sdk/README.md#infericd10cm) - InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 
* [inferRxNorm](docs/sdk/README.md#inferrxnorm) - InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 
* [inferSNOMEDCT](docs/sdk/README.md#infersnomedct) -  InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology
* [listEntitiesDetectionV2Jobs](docs/sdk/README.md#listentitiesdetectionv2jobs) - Gets a list of medical entity detection jobs that you have submitted.
* [listIcd10CMInferenceJobs](docs/sdk/README.md#listicd10cminferencejobs) - Gets a list of InferICD10CM jobs that you have submitted.
* [listPHIDetectionJobs](docs/sdk/README.md#listphidetectionjobs) - Gets a list of protected health information (PHI) detection jobs that you have submitted.
* [listRxNormInferenceJobs](docs/sdk/README.md#listrxnorminferencejobs) - Gets a list of InferRxNorm jobs that you have submitted.
* [listSNOMEDCTInferenceJobs](docs/sdk/README.md#listsnomedctinferencejobs) -  Gets a list of InferSNOMEDCT jobs a user has submitted. 
* [startEntitiesDetectionV2Job](docs/sdk/README.md#startentitiesdetectionv2job) - Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
* [startIcd10CMInferenceJob](docs/sdk/README.md#starticd10cminferencejob) - Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
* [startPHIDetectionJob](docs/sdk/README.md#startphidetectionjob) - Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
* [startRxNormInferenceJob](docs/sdk/README.md#startrxnorminferencejob) - Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
* [startSNOMEDCTInferenceJob](docs/sdk/README.md#startsnomedctinferencejob) -  Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job. 
* [stopEntitiesDetectionV2Job](docs/sdk/README.md#stopentitiesdetectionv2job) - Stops a medical entities detection job in progress.
* [stopIcd10CMInferenceJob](docs/sdk/README.md#stopicd10cminferencejob) - Stops an InferICD10CM inference job in progress.
* [stopPHIDetectionJob](docs/sdk/README.md#stopphidetectionjob) - Stops a protected health information (PHI) detection job in progress.
* [stopRxNormInferenceJob](docs/sdk/README.md#stoprxnorminferencejob) - Stops an InferRxNorm inference job in progress.
* [stopSNOMEDCTInferenceJob](docs/sdk/README.md#stopsnomedctinferencejob) -  Stops an InferSNOMEDCT inference job in progress. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
