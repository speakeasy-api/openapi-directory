# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/comprehendmedical/2018-10-30/go
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

    req := operations.DescribeEntitiesDetectionV2JobRequest{
        DescribeEntitiesDetectionV2JobRequest: shared.DescribeEntitiesDetectionV2JobRequest{
            JobID: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        XAmzTarget: "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job",
    }

    ctx := context.Background()
    res, err := s.DescribeEntitiesDetectionV2Job(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEntitiesDetectionV2JobResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DescribeEntitiesDetectionV2Job` - Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
* `DescribeIcd10CMInferenceJob` - Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
* `DescribePHIDetectionJob` - Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
* `DescribeRxNormInferenceJob` - Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
* `DescribeSNOMEDCTInferenceJob` -  Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job. 
* `DetectEntities` - <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>
* `DetectEntitiesV2` - <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
* `DetectPHI` -  Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
* `InferIcd10CM` - InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 
* `InferRxNorm` - InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 
* `InferSNOMEDCT` -  InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology
* `ListEntitiesDetectionV2Jobs` - Gets a list of medical entity detection jobs that you have submitted.
* `ListIcd10CMInferenceJobs` - Gets a list of InferICD10CM jobs that you have submitted.
* `ListPHIDetectionJobs` - Gets a list of protected health information (PHI) detection jobs that you have submitted.
* `ListRxNormInferenceJobs` - Gets a list of InferRxNorm jobs that you have submitted.
* `ListSNOMEDCTInferenceJobs` -  Gets a list of InferSNOMEDCT jobs a user has submitted. 
* `StartEntitiesDetectionV2Job` - Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
* `StartIcd10CMInferenceJob` - Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
* `StartPHIDetectionJob` - Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
* `StartRxNormInferenceJob` - Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
* `StartSNOMEDCTInferenceJob` -  Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job. 
* `StopEntitiesDetectionV2Job` - Stops a medical entities detection job in progress.
* `StopIcd10CMInferenceJob` - Stops an InferICD10CM inference job in progress.
* `StopPHIDetectionJob` - Stops a protected health information (PHI) detection job in progress.
* `StopRxNormInferenceJob` - Stops an InferRxNorm inference job in progress.
* `StopSNOMEDCTInferenceJob` -  Stops an InferSNOMEDCT inference job in progress. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
