# SDK

## Overview

 Comprehend Medical; extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/comprehendmedical/>
### Available Operations

* [describeEntitiesDetectionV2Job](#describeentitiesdetectionv2job) - Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
* [describeIcd10CMInferenceJob](#describeicd10cminferencejob) - Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
* [describePHIDetectionJob](#describephidetectionjob) - Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
* [describeRxNormInferenceJob](#describerxnorminferencejob) - Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
* [describeSNOMEDCTInferenceJob](#describesnomedctinferencejob) -  Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job. 
* [~~detectEntities~~](#detectentities) - <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p> :warning: **Deprecated**
* [detectEntitiesV2](#detectentitiesv2) - <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
* [detectPHI](#detectphi) -  Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
* [inferIcd10CM](#infericd10cm) - InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 
* [inferRxNorm](#inferrxnorm) - InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 
* [inferSNOMEDCT](#infersnomedct) -  InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology
* [listEntitiesDetectionV2Jobs](#listentitiesdetectionv2jobs) - Gets a list of medical entity detection jobs that you have submitted.
* [listIcd10CMInferenceJobs](#listicd10cminferencejobs) - Gets a list of InferICD10CM jobs that you have submitted.
* [listPHIDetectionJobs](#listphidetectionjobs) - Gets a list of protected health information (PHI) detection jobs that you have submitted.
* [listRxNormInferenceJobs](#listrxnorminferencejobs) - Gets a list of InferRxNorm jobs that you have submitted.
* [listSNOMEDCTInferenceJobs](#listsnomedctinferencejobs) -  Gets a list of InferSNOMEDCT jobs a user has submitted. 
* [startEntitiesDetectionV2Job](#startentitiesdetectionv2job) - Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
* [startIcd10CMInferenceJob](#starticd10cminferencejob) - Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
* [startPHIDetectionJob](#startphidetectionjob) - Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
* [startRxNormInferenceJob](#startrxnorminferencejob) - Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
* [startSNOMEDCTInferenceJob](#startsnomedctinferencejob) -  Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job. 
* [stopEntitiesDetectionV2Job](#stopentitiesdetectionv2job) - Stops a medical entities detection job in progress.
* [stopIcd10CMInferenceJob](#stopicd10cminferencejob) - Stops an InferICD10CM inference job in progress.
* [stopPHIDetectionJob](#stopphidetectionjob) - Stops a protected health information (PHI) detection job in progress.
* [stopRxNormInferenceJob](#stoprxnorminferencejob) - Stops an InferRxNorm inference job in progress.
* [stopSNOMEDCTInferenceJob](#stopsnomedctinferencejob) -  Stops an InferSNOMEDCT inference job in progress. 

## describeEntitiesDetectionV2Job

Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.

### Example Usage

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
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEntitiesDetectionV2JobRequest req = new DescribeEntitiesDetectionV2JobRequest(                new DescribeEntitiesDetectionV2JobRequest("deserunt");, DescribeEntitiesDetectionV2JobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_DESCRIBE_ENTITIES_DETECTION_V2_JOB) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            DescribeEntitiesDetectionV2JobResponse res = sdk.sdk.describeEntitiesDetectionV2Job(req);

            if (res.describeEntitiesDetectionV2JobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeIcd10CMInferenceJob

Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIcd10CMInferenceJobRequest;
import org.openapis.openapi.models.operations.DescribeIcd10CMInferenceJobResponse;
import org.openapis.openapi.models.operations.DescribeIcd10CMInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeIcd10CMInferenceJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeIcd10CMInferenceJobRequest req = new DescribeIcd10CMInferenceJobRequest(                new DescribeIcd10CMInferenceJobRequest("molestiae");, DescribeIcd10CMInferenceJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_DESCRIBE_ICD10_CM_INFERENCE_JOB) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            DescribeIcd10CMInferenceJobResponse res = sdk.sdk.describeIcd10CMInferenceJob(req);

            if (res.describeIcd10CMInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePHIDetectionJob

Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePHIDetectionJobRequest;
import org.openapis.openapi.models.operations.DescribePHIDetectionJobResponse;
import org.openapis.openapi.models.operations.DescribePHIDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePHIDetectionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePHIDetectionJobRequest req = new DescribePHIDetectionJobRequest(                new DescribePHIDetectionJobRequest("ab");, DescribePHIDetectionJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_DESCRIBE_PHI_DETECTION_JOB) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            DescribePHIDetectionJobResponse res = sdk.sdk.describePHIDetectionJob(req);

            if (res.describePHIDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRxNormInferenceJob

Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRxNormInferenceJobRequest;
import org.openapis.openapi.models.operations.DescribeRxNormInferenceJobResponse;
import org.openapis.openapi.models.operations.DescribeRxNormInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRxNormInferenceJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRxNormInferenceJobRequest req = new DescribeRxNormInferenceJobRequest(                new DescribeRxNormInferenceJobRequest("odit");, DescribeRxNormInferenceJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_DESCRIBE_RX_NORM_INFERENCE_JOB) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "at";
                xAmzCredential = "maiores";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "quod";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "esse";
            }};            

            DescribeRxNormInferenceJobResponse res = sdk.sdk.describeRxNormInferenceJob(req);

            if (res.describeRxNormInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSNOMEDCTInferenceJob

 Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSNOMEDCTInferenceJobRequest;
import org.openapis.openapi.models.operations.DescribeSNOMEDCTInferenceJobResponse;
import org.openapis.openapi.models.operations.DescribeSNOMEDCTInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSNOMEDCTInferenceJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSNOMEDCTInferenceJobRequest req = new DescribeSNOMEDCTInferenceJobRequest(                new DescribeSNOMEDCTInferenceJobRequest("porro");, DescribeSNOMEDCTInferenceJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_DESCRIBE_SNOMEDCT_INFERENCE_JOB) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            DescribeSNOMEDCTInferenceJobResponse res = sdk.sdk.describeSNOMEDCTInferenceJob(req);

            if (res.describeSNOMEDCTInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~detectEntities~~

<p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectEntitiesRequest;
import org.openapis.openapi.models.operations.DetectEntitiesResponse;
import org.openapis.openapi.models.operations.DetectEntitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetectEntitiesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectEntitiesRequest req = new DetectEntitiesRequest(                new DetectEntitiesRequest("optio");, DetectEntitiesXAmzTargetEnum.COMPREHEND_MEDICAL20181030_DETECT_ENTITIES) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "commodi";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
            }};            

            DetectEntitiesResponse res = sdk.sdk.detectEntities(req);

            if (res.detectEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectEntitiesV2

<p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectEntitiesV2Request;
import org.openapis.openapi.models.operations.DetectEntitiesV2Response;
import org.openapis.openapi.models.operations.DetectEntitiesV2XAmzTargetEnum;
import org.openapis.openapi.models.shared.DetectEntitiesV2Request;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectEntitiesV2Request req = new DetectEntitiesV2Request(                new DetectEntitiesV2Request("esse");, DetectEntitiesV2XAmzTargetEnum.COMPREHEND_MEDICAL20181030_DETECT_ENTITIES_V2) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ad";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "sed";
            }};            

            DetectEntitiesV2Response res = sdk.sdk.detectEntitiesV2(req);

            if (res.detectEntitiesV2Response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectPHI

 Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectPHIRequest;
import org.openapis.openapi.models.operations.DetectPHIResponse;
import org.openapis.openapi.models.operations.DetectPHIXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetectPHIRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectPHIRequest req = new DetectPHIRequest(                new DetectPHIRequest("dolor");, DetectPHIXAmzTargetEnum.COMPREHEND_MEDICAL20181030_DETECT_PHI) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "hic";
                xAmzDate = "saepe";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            DetectPHIResponse res = sdk.sdk.detectPHI(req);

            if (res.detectPHIResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inferIcd10CM

InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InferIcd10CMRequest;
import org.openapis.openapi.models.operations.InferIcd10CMResponse;
import org.openapis.openapi.models.operations.InferIcd10CMXAmzTargetEnum;
import org.openapis.openapi.models.shared.InferIcd10CMRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InferIcd10CMRequest req = new InferIcd10CMRequest(                new InferIcd10CMRequest("iure");, InferIcd10CMXAmzTargetEnum.COMPREHEND_MEDICAL20181030_INFER_ICD10_CM) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "architecto";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "est";
                xAmzSignedHeaders = "mollitia";
            }};            

            InferIcd10CMResponse res = sdk.sdk.inferIcd10CM(req);

            if (res.inferIcd10CMResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inferRxNorm

InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InferRxNormRequest;
import org.openapis.openapi.models.operations.InferRxNormResponse;
import org.openapis.openapi.models.operations.InferRxNormXAmzTargetEnum;
import org.openapis.openapi.models.shared.InferRxNormRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InferRxNormRequest req = new InferRxNormRequest(                new InferRxNormRequest("dolores");, InferRxNormXAmzTargetEnum.COMPREHEND_MEDICAL20181030_INFER_RX_NORM) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
            }};            

            InferRxNormResponse res = sdk.sdk.inferRxNorm(req);

            if (res.inferRxNormResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inferSNOMEDCT

 InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InferSNOMEDCTRequest;
import org.openapis.openapi.models.operations.InferSNOMEDCTResponse;
import org.openapis.openapi.models.operations.InferSNOMEDCTXAmzTargetEnum;
import org.openapis.openapi.models.shared.InferSNOMEDCTRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InferSNOMEDCTRequest req = new InferSNOMEDCTRequest(                new InferSNOMEDCTRequest("excepturi");, InferSNOMEDCTXAmzTargetEnum.COMPREHEND_MEDICAL20181030_INFER_SNOMEDCT) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
            }};            

            InferSNOMEDCTResponse res = sdk.sdk.inferSNOMEDCT(req);

            if (res.inferSNOMEDCTResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEntitiesDetectionV2Jobs

Gets a list of medical entity detection jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEntitiesDetectionV2JobsRequest;
import org.openapis.openapi.models.operations.ListEntitiesDetectionV2JobsResponse;
import org.openapis.openapi.models.operations.ListEntitiesDetectionV2JobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComprehendMedicalAsyncJobFilter;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListEntitiesDetectionV2JobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEntitiesDetectionV2JobsRequest req = new ListEntitiesDetectionV2JobsRequest(                new ListEntitiesDetectionV2JobsRequest() {{
                                filter = new ComprehendMedicalAsyncJobFilter() {{
                                    jobName = "culpa";
                                    jobStatus = JobStatusEnum.IN_PROGRESS;
                                    submitTimeAfter = OffsetDateTime.parse("2021-01-15T20:18:47.519Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-06-30T02:19:51.375Z");
                                }};;
                                maxResults = 414369L;
                                nextToken = "quam";
                            }};, ListEntitiesDetectionV2JobsXAmzTargetEnum.COMPREHEND_MEDICAL20181030_LIST_ENTITIES_DETECTION_V2_JOBS) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
            }};            

            ListEntitiesDetectionV2JobsResponse res = sdk.sdk.listEntitiesDetectionV2Jobs(req);

            if (res.listEntitiesDetectionV2JobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIcd10CMInferenceJobs

Gets a list of InferICD10CM jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIcd10CMInferenceJobsRequest;
import org.openapis.openapi.models.operations.ListIcd10CMInferenceJobsResponse;
import org.openapis.openapi.models.operations.ListIcd10CMInferenceJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComprehendMedicalAsyncJobFilter;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListIcd10CMInferenceJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIcd10CMInferenceJobsRequest req = new ListIcd10CMInferenceJobsRequest(                new ListIcd10CMInferenceJobsRequest() {{
                                filter = new ComprehendMedicalAsyncJobFilter() {{
                                    jobName = "enim";
                                    jobStatus = JobStatusEnum.SUBMITTED;
                                    submitTimeAfter = OffsetDateTime.parse("2022-05-30T17:48:55.594Z");
                                    submitTimeBefore = OffsetDateTime.parse("2021-11-23T05:54:08.890Z");
                                }};;
                                maxResults = 662527L;
                                nextToken = "possimus";
                            }};, ListIcd10CMInferenceJobsXAmzTargetEnum.COMPREHEND_MEDICAL20181030_LIST_ICD10_CM_INFERENCE_JOBS) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "error";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "reiciendis";
            }};            

            ListIcd10CMInferenceJobsResponse res = sdk.sdk.listIcd10CMInferenceJobs(req);

            if (res.listIcd10CMInferenceJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPHIDetectionJobs

Gets a list of protected health information (PHI) detection jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPHIDetectionJobsRequest;
import org.openapis.openapi.models.operations.ListPHIDetectionJobsResponse;
import org.openapis.openapi.models.operations.ListPHIDetectionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComprehendMedicalAsyncJobFilter;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListPHIDetectionJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPHIDetectionJobsRequest req = new ListPHIDetectionJobsRequest(                new ListPHIDetectionJobsRequest() {{
                                filter = new ComprehendMedicalAsyncJobFilter() {{
                                    jobName = "vero";
                                    jobStatus = JobStatusEnum.PARTIAL_SUCCESS;
                                    submitTimeAfter = OffsetDateTime.parse("2021-01-17T23:08:44.457Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-05-25T05:33:11.349Z");
                                }};;
                                maxResults = 451159L;
                                nextToken = "cum";
                            }};, ListPHIDetectionJobsXAmzTargetEnum.COMPREHEND_MEDICAL20181030_LIST_PHI_DETECTION_JOBS) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
            }};            

            ListPHIDetectionJobsResponse res = sdk.sdk.listPHIDetectionJobs(req);

            if (res.listPHIDetectionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRxNormInferenceJobs

Gets a list of InferRxNorm jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRxNormInferenceJobsRequest;
import org.openapis.openapi.models.operations.ListRxNormInferenceJobsResponse;
import org.openapis.openapi.models.operations.ListRxNormInferenceJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComprehendMedicalAsyncJobFilter;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListRxNormInferenceJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRxNormInferenceJobsRequest req = new ListRxNormInferenceJobsRequest(                new ListRxNormInferenceJobsRequest() {{
                                filter = new ComprehendMedicalAsyncJobFilter() {{
                                    jobName = "iusto";
                                    jobStatus = JobStatusEnum.SUBMITTED;
                                    submitTimeAfter = OffsetDateTime.parse("2022-05-13T20:56:04.612Z");
                                    submitTimeBefore = OffsetDateTime.parse("2021-10-04T09:10:06.610Z");
                                }};;
                                maxResults = 918236L;
                                nextToken = "quae";
                            }};, ListRxNormInferenceJobsXAmzTargetEnum.COMPREHEND_MEDICAL20181030_LIST_RX_NORM_INFERENCE_JOBS) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            ListRxNormInferenceJobsResponse res = sdk.sdk.listRxNormInferenceJobs(req);

            if (res.listRxNormInferenceJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSNOMEDCTInferenceJobs

 Gets a list of InferSNOMEDCT jobs a user has submitted. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSNOMEDCTInferenceJobsRequest;
import org.openapis.openapi.models.operations.ListSNOMEDCTInferenceJobsResponse;
import org.openapis.openapi.models.operations.ListSNOMEDCTInferenceJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComprehendMedicalAsyncJobFilter;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListSNOMEDCTInferenceJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSNOMEDCTInferenceJobsRequest req = new ListSNOMEDCTInferenceJobsRequest(                new ListSNOMEDCTInferenceJobsRequest() {{
                                filter = new ComprehendMedicalAsyncJobFilter() {{
                                    jobName = "voluptates";
                                    jobStatus = JobStatusEnum.SUBMITTED;
                                    submitTimeAfter = OffsetDateTime.parse("2021-04-10T08:07:33.561Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-01-26T19:21:55.034Z");
                                }};;
                                maxResults = 277718L;
                                nextToken = "enim";
                            }};, ListSNOMEDCTInferenceJobsXAmzTargetEnum.COMPREHEND_MEDICAL20181030_LIST_SNOMEDCT_INFERENCE_JOBS) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
            }};            

            ListSNOMEDCTInferenceJobsResponse res = sdk.sdk.listSNOMEDCTInferenceJobs(req);

            if (res.listSNOMEDCTInferenceJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startEntitiesDetectionV2Job

Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartEntitiesDetectionV2JobRequest;
import org.openapis.openapi.models.operations.StartEntitiesDetectionV2JobResponse;
import org.openapis.openapi.models.operations.StartEntitiesDetectionV2JobXAmzTargetEnum;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartEntitiesDetectionV2JobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartEntitiesDetectionV2JobRequest req = new StartEntitiesDetectionV2JobRequest(                new StartEntitiesDetectionV2JobRequest("modi",                 new InputDataConfig("qui") {{
                                                s3Key = "aliquid";
                                            }};, LanguageCodeEnum.EN,                 new OutputDataConfig("cupiditate") {{
                                                s3Key = "quos";
                                            }};) {{
                                clientRequestToken = "perferendis";
                                jobName = "magni";
                                kmsKey = "assumenda";
                            }};, StartEntitiesDetectionV2JobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_START_ENTITIES_DETECTION_V2_JOB) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "fugit";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "facilis";
            }};            

            StartEntitiesDetectionV2JobResponse res = sdk.sdk.startEntitiesDetectionV2Job(req);

            if (res.startEntitiesDetectionV2JobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startIcd10CMInferenceJob

Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartIcd10CMInferenceJobRequest;
import org.openapis.openapi.models.operations.StartIcd10CMInferenceJobResponse;
import org.openapis.openapi.models.operations.StartIcd10CMInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartIcd10CMInferenceJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartIcd10CMInferenceJobRequest req = new StartIcd10CMInferenceJobRequest(                new StartIcd10CMInferenceJobRequest("labore",                 new InputDataConfig("delectus") {{
                                                s3Key = "eum";
                                            }};, LanguageCodeEnum.EN,                 new OutputDataConfig("non") {{
                                                s3Key = "eligendi";
                                            }};) {{
                                clientRequestToken = "sint";
                                jobName = "aliquid";
                                kmsKey = "provident";
                            }};, StartIcd10CMInferenceJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_START_ICD10_CM_INFERENCE_JOB) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            StartIcd10CMInferenceJobResponse res = sdk.sdk.startIcd10CMInferenceJob(req);

            if (res.startIcd10CMInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startPHIDetectionJob

Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartPHIDetectionJobRequest;
import org.openapis.openapi.models.operations.StartPHIDetectionJobResponse;
import org.openapis.openapi.models.operations.StartPHIDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartPHIDetectionJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartPHIDetectionJobRequest req = new StartPHIDetectionJobRequest(                new StartPHIDetectionJobRequest("in",                 new InputDataConfig("illum") {{
                                                s3Key = "maiores";
                                            }};, LanguageCodeEnum.EN,                 new OutputDataConfig("rerum") {{
                                                s3Key = "dicta";
                                            }};) {{
                                clientRequestToken = "magnam";
                                jobName = "cumque";
                                kmsKey = "facere";
                            }};, StartPHIDetectionJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_START_PHI_DETECTION_JOB) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            StartPHIDetectionJobResponse res = sdk.sdk.startPHIDetectionJob(req);

            if (res.startPHIDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startRxNormInferenceJob

Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartRxNormInferenceJobRequest;
import org.openapis.openapi.models.operations.StartRxNormInferenceJobResponse;
import org.openapis.openapi.models.operations.StartRxNormInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartRxNormInferenceJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartRxNormInferenceJobRequest req = new StartRxNormInferenceJobRequest(                new StartRxNormInferenceJobRequest("delectus",                 new InputDataConfig("quidem") {{
                                                s3Key = "provident";
                                            }};, LanguageCodeEnum.EN,                 new OutputDataConfig("nam") {{
                                                s3Key = "id";
                                            }};) {{
                                clientRequestToken = "blanditiis";
                                jobName = "deleniti";
                                kmsKey = "sapiente";
                            }};, StartRxNormInferenceJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_START_RX_NORM_INFERENCE_JOB) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            StartRxNormInferenceJobResponse res = sdk.sdk.startRxNormInferenceJob(req);

            if (res.startRxNormInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSNOMEDCTInferenceJob

 Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSNOMEDCTInferenceJobRequest;
import org.openapis.openapi.models.operations.StartSNOMEDCTInferenceJobResponse;
import org.openapis.openapi.models.operations.StartSNOMEDCTInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartSNOMEDCTInferenceJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSNOMEDCTInferenceJobRequest req = new StartSNOMEDCTInferenceJobRequest(                new StartSNOMEDCTInferenceJobRequest("nihil",                 new InputDataConfig("magnam") {{
                                                s3Key = "distinctio";
                                            }};, LanguageCodeEnum.EN,                 new OutputDataConfig("id") {{
                                                s3Key = "labore";
                                            }};) {{
                                clientRequestToken = "labore";
                                jobName = "suscipit";
                                kmsKey = "natus";
                            }};, StartSNOMEDCTInferenceJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_START_SNOMEDCT_INFERENCE_JOB) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "vero";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "et";
            }};            

            StartSNOMEDCTInferenceJobResponse res = sdk.sdk.startSNOMEDCTInferenceJob(req);

            if (res.startSNOMEDCTInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopEntitiesDetectionV2Job

Stops a medical entities detection job in progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopEntitiesDetectionV2JobRequest;
import org.openapis.openapi.models.operations.StopEntitiesDetectionV2JobResponse;
import org.openapis.openapi.models.operations.StopEntitiesDetectionV2JobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopEntitiesDetectionV2JobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopEntitiesDetectionV2JobRequest req = new StopEntitiesDetectionV2JobRequest(                new StopEntitiesDetectionV2JobRequest("ullam");, StopEntitiesDetectionV2JobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_STOP_ENTITIES_DETECTION_V2_JOB) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "quos";
                xAmzCredential = "sint";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "mollitia";
            }};            

            StopEntitiesDetectionV2JobResponse res = sdk.sdk.stopEntitiesDetectionV2Job(req);

            if (res.stopEntitiesDetectionV2JobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopIcd10CMInferenceJob

Stops an InferICD10CM inference job in progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopIcd10CMInferenceJobRequest;
import org.openapis.openapi.models.operations.StopIcd10CMInferenceJobResponse;
import org.openapis.openapi.models.operations.StopIcd10CMInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopIcd10CMInferenceJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopIcd10CMInferenceJobRequest req = new StopIcd10CMInferenceJobRequest(                new StopIcd10CMInferenceJobRequest("eum");, StopIcd10CMInferenceJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_STOP_ICD10_CM_INFERENCE_JOB) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "odit";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "doloribus";
            }};            

            StopIcd10CMInferenceJobResponse res = sdk.sdk.stopIcd10CMInferenceJob(req);

            if (res.stopIcd10CMInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPHIDetectionJob

Stops a protected health information (PHI) detection job in progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPHIDetectionJobRequest;
import org.openapis.openapi.models.operations.StopPHIDetectionJobResponse;
import org.openapis.openapi.models.operations.StopPHIDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopPHIDetectionJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopPHIDetectionJobRequest req = new StopPHIDetectionJobRequest(                new StopPHIDetectionJobRequest("eius");, StopPHIDetectionJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_STOP_PHI_DETECTION_JOB) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "facilis";
                xAmzDate = "in";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "repudiandae";
            }};            

            StopPHIDetectionJobResponse res = sdk.sdk.stopPHIDetectionJob(req);

            if (res.stopPHIDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopRxNormInferenceJob

Stops an InferRxNorm inference job in progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopRxNormInferenceJobRequest;
import org.openapis.openapi.models.operations.StopRxNormInferenceJobResponse;
import org.openapis.openapi.models.operations.StopRxNormInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopRxNormInferenceJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopRxNormInferenceJobRequest req = new StopRxNormInferenceJobRequest(                new StopRxNormInferenceJobRequest("expedita");, StopRxNormInferenceJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_STOP_RX_NORM_INFERENCE_JOB) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
            }};            

            StopRxNormInferenceJobResponse res = sdk.sdk.stopRxNormInferenceJob(req);

            if (res.stopRxNormInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopSNOMEDCTInferenceJob

 Stops an InferSNOMEDCT inference job in progress. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopSNOMEDCTInferenceJobRequest;
import org.openapis.openapi.models.operations.StopSNOMEDCTInferenceJobResponse;
import org.openapis.openapi.models.operations.StopSNOMEDCTInferenceJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopSNOMEDCTInferenceJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopSNOMEDCTInferenceJobRequest req = new StopSNOMEDCTInferenceJobRequest(                new StopSNOMEDCTInferenceJobRequest("praesentium");, StopSNOMEDCTInferenceJobXAmzTargetEnum.COMPREHEND_MEDICAL20181030_STOP_SNOMEDCT_INFERENCE_JOB) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "magni";
                xAmzCredential = "sunt";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "maxime";
            }};            

            StopSNOMEDCTInferenceJobResponse res = sdk.sdk.stopSNOMEDCTInferenceJob(req);

            if (res.stopSNOMEDCTInferenceJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
