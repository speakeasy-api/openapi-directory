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
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobXAmzTargetEnum;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobRequest;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionV2JobResponse;
import org.openapis.openapi.models.shared.DescribeEntitiesDetectionV2JobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEntitiesDetectionV2JobRequest req = new DescribeEntitiesDetectionV2JobRequest() {{
                describeEntitiesDetectionV2JobRequest = new DescribeEntitiesDetectionV2JobRequest() {{
                    jobId = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job";
            }}            

            DescribeEntitiesDetectionV2JobResponse res = sdk.describeEntitiesDetectionV2Job(req);

            if (res.describeEntitiesDetectionV2JobResponse.isPresent()) {
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

* `describeEntitiesDetectionV2Job` - Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
* `describeIcd10CMInferenceJob` - Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
* `describePHIDetectionJob` - Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
* `describeRxNormInferenceJob` - Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
* `describeSNOMEDCTInferenceJob` -  Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job. 
* `detectEntities` - <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>
* `detectEntitiesV2` - <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
* `detectPHI` -  Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
* `inferIcd10CM` - InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 
* `inferRxNorm` - InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 
* `inferSNOMEDCT` -  InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology
* `listEntitiesDetectionV2Jobs` - Gets a list of medical entity detection jobs that you have submitted.
* `listIcd10CMInferenceJobs` - Gets a list of InferICD10CM jobs that you have submitted.
* `listPHIDetectionJobs` - Gets a list of protected health information (PHI) detection jobs that you have submitted.
* `listRxNormInferenceJobs` - Gets a list of InferRxNorm jobs that you have submitted.
* `listSNOMEDCTInferenceJobs` -  Gets a list of InferSNOMEDCT jobs a user has submitted. 
* `startEntitiesDetectionV2Job` - Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
* `startIcd10CMInferenceJob` - Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
* `startPHIDetectionJob` - Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
* `startRxNormInferenceJob` - Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
* `startSNOMEDCTInferenceJob` -  Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job. 
* `stopEntitiesDetectionV2Job` - Stops a medical entities detection job in progress.
* `stopIcd10CMInferenceJob` - Stops an InferICD10CM inference job in progress.
* `stopPHIDetectionJob` - Stops a protected health information (PHI) detection job in progress.
* `stopRxNormInferenceJob` - Stops an InferRxNorm inference job in progress.
* `stopSNOMEDCTInferenceJob` -  Stops an InferSNOMEDCT inference job in progress. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
