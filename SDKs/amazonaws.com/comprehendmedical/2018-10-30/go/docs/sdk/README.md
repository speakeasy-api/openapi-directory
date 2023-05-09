# SDK

## Overview

 Comprehend Medical; extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/comprehendmedical/>
### Available Operations

* [DescribeEntitiesDetectionV2Job](#describeentitiesdetectionv2job) - Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
* [DescribeIcd10CMInferenceJob](#describeicd10cminferencejob) - Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
* [DescribePHIDetectionJob](#describephidetectionjob) - Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
* [DescribeRxNormInferenceJob](#describerxnorminferencejob) - Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
* [DescribeSNOMEDCTInferenceJob](#describesnomedctinferencejob) -  Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job. 
* [~~DetectEntities~~](#detectentities) - <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p> :warning: **Deprecated**
* [DetectEntitiesV2](#detectentitiesv2) - <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
* [DetectPHI](#detectphi) -  Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
* [InferIcd10CM](#infericd10cm) - InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 
* [InferRxNorm](#inferrxnorm) - InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 
* [InferSNOMEDCT](#infersnomedct) -  InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology
* [ListEntitiesDetectionV2Jobs](#listentitiesdetectionv2jobs) - Gets a list of medical entity detection jobs that you have submitted.
* [ListIcd10CMInferenceJobs](#listicd10cminferencejobs) - Gets a list of InferICD10CM jobs that you have submitted.
* [ListPHIDetectionJobs](#listphidetectionjobs) - Gets a list of protected health information (PHI) detection jobs that you have submitted.
* [ListRxNormInferenceJobs](#listrxnorminferencejobs) - Gets a list of InferRxNorm jobs that you have submitted.
* [ListSNOMEDCTInferenceJobs](#listsnomedctinferencejobs) -  Gets a list of InferSNOMEDCT jobs a user has submitted. 
* [StartEntitiesDetectionV2Job](#startentitiesdetectionv2job) - Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
* [StartIcd10CMInferenceJob](#starticd10cminferencejob) - Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
* [StartPHIDetectionJob](#startphidetectionjob) - Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
* [StartRxNormInferenceJob](#startrxnorminferencejob) - Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
* [StartSNOMEDCTInferenceJob](#startsnomedctinferencejob) -  Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job. 
* [StopEntitiesDetectionV2Job](#stopentitiesdetectionv2job) - Stops a medical entities detection job in progress.
* [StopIcd10CMInferenceJob](#stopicd10cminferencejob) - Stops an InferICD10CM inference job in progress.
* [StopPHIDetectionJob](#stopphidetectionjob) - Stops a protected health information (PHI) detection job in progress.
* [StopRxNormInferenceJob](#stoprxnorminferencejob) - Stops an InferRxNorm inference job in progress.
* [StopSNOMEDCTInferenceJob](#stopsnomedctinferencejob) -  Stops an InferSNOMEDCT inference job in progress. 

## DescribeEntitiesDetectionV2Job

Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.

### Example Usage

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
    res, err := s.SDK.DescribeEntitiesDetectionV2Job(ctx, operations.DescribeEntitiesDetectionV2JobRequest{
        DescribeEntitiesDetectionV2JobRequest: shared.DescribeEntitiesDetectionV2JobRequest{
            JobID: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.DescribeEntitiesDetectionV2JobXAmzTargetEnumComprehendMedical20181030DescribeEntitiesDetectionV2Job,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEntitiesDetectionV2JobResponse != nil {
        // handle response
    }
}
```

## DescribeIcd10CMInferenceJob

Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.

### Example Usage

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
    res, err := s.SDK.DescribeIcd10CMInferenceJob(ctx, operations.DescribeIcd10CMInferenceJobRequest{
        DescribeIcd10CMInferenceJobRequest: shared.DescribeIcd10CMInferenceJobRequest{
            JobID: "delectus",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.DescribeIcd10CMInferenceJobXAmzTargetEnumComprehendMedical20181030DescribeIcd10CmInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeIcd10CMInferenceJobResponse != nil {
        // handle response
    }
}
```

## DescribePHIDetectionJob

Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.

### Example Usage

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
    res, err := s.SDK.DescribePHIDetectionJob(ctx, operations.DescribePHIDetectionJobRequest{
        DescribePHIDetectionJobRequest: shared.DescribePHIDetectionJobRequest{
            JobID: "excepturi",
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DescribePHIDetectionJobXAmzTargetEnumComprehendMedical20181030DescribePhiDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePHIDetectionJobResponse != nil {
        // handle response
    }
}
```

## DescribeRxNormInferenceJob

Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.

### Example Usage

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
    res, err := s.SDK.DescribeRxNormInferenceJob(ctx, operations.DescribeRxNormInferenceJobRequest{
        DescribeRxNormInferenceJobRequest: shared.DescribeRxNormInferenceJobRequest{
            JobID: "perferendis",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.DescribeRxNormInferenceJobXAmzTargetEnumComprehendMedical20181030DescribeRxNormInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRxNormInferenceJobResponse != nil {
        // handle response
    }
}
```

## DescribeSNOMEDCTInferenceJob

 Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job. 

### Example Usage

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
    res, err := s.SDK.DescribeSNOMEDCTInferenceJob(ctx, operations.DescribeSNOMEDCTInferenceJobRequest{
        DescribeSNOMEDCTInferenceJobRequest: shared.DescribeSNOMEDCTInferenceJobRequest{
            JobID: "maiores",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DescribeSNOMEDCTInferenceJobXAmzTargetEnumComprehendMedical20181030DescribeSnomedctInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSNOMEDCTInferenceJobResponse != nil {
        // handle response
    }
}
```

## ~~DetectEntities~~

<p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

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
    res, err := s.SDK.DetectEntities(ctx, operations.DetectEntitiesRequest{
        DetectEntitiesRequest: shared.DetectEntitiesRequest{
            Text: "dicta",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.DetectEntitiesXAmzTargetEnumComprehendMedical20181030DetectEntities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectEntitiesResponse != nil {
        // handle response
    }
}
```

## DetectEntitiesV2

<p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>

### Example Usage

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
    res, err := s.SDK.DetectEntitiesV2(ctx, operations.DetectEntitiesV2Request{
        DetectEntitiesV2Request: shared.DetectEntitiesV2Request{
            Text: "totam",
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DetectEntitiesV2XAmzTargetEnumComprehendMedical20181030DetectEntitiesV2,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectEntitiesV2Response != nil {
        // handle response
    }
}
```

## DetectPHI

 Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.

### Example Usage

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
    res, err := s.SDK.DetectPHI(ctx, operations.DetectPHIRequest{
        DetectPHIRequest: shared.DetectPHIRequest{
            Text: "esse",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.DetectPHIXAmzTargetEnumComprehendMedical20181030DetectPhi,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectPHIResponse != nil {
        // handle response
    }
}
```

## InferIcd10CM

InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 

### Example Usage

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
    res, err := s.SDK.InferIcd10CM(ctx, operations.InferIcd10CMRequest{
        InferIcd10CMRequest: shared.InferIcd10CMRequest{
            Text: "iste",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.InferIcd10CMXAmzTargetEnumComprehendMedical20181030InferIcd10Cm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InferIcd10CMResponse != nil {
        // handle response
    }
}
```

## InferRxNorm

InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 

### Example Usage

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
    res, err := s.SDK.InferRxNorm(ctx, operations.InferRxNormRequest{
        InferRxNormRequest: shared.InferRxNormRequest{
            Text: "corporis",
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.InferRxNormXAmzTargetEnumComprehendMedical20181030InferRxNorm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InferRxNormResponse != nil {
        // handle response
    }
}
```

## InferSNOMEDCT

 InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology

### Example Usage

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
    res, err := s.SDK.InferSNOMEDCT(ctx, operations.InferSNOMEDCTRequest{
        InferSNOMEDCTRequest: shared.InferSNOMEDCTRequest{
            Text: "est",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.InferSNOMEDCTXAmzTargetEnumComprehendMedical20181030InferSnomedct,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InferSNOMEDCTResponse != nil {
        // handle response
    }
}
```

## ListEntitiesDetectionV2Jobs

Gets a list of medical entity detection jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEntitiesDetectionV2Jobs(ctx, operations.ListEntitiesDetectionV2JobsRequest{
        ListEntitiesDetectionV2JobsRequest: shared.ListEntitiesDetectionV2JobsRequest{
            Filter: &shared.ComprehendMedicalAsyncJobFilter{
                JobName: sdk.String("enim"),
                JobStatus: shared.JobStatusEnumFailed.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2022-09-04T08:35:09.957Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-12-03T22:47:10.600Z"),
            },
            MaxResults: sdk.Int64(438601),
            NextToken: sdk.String("culpa"),
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.ListEntitiesDetectionV2JobsXAmzTargetEnumComprehendMedical20181030ListEntitiesDetectionV2Jobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEntitiesDetectionV2JobsResponse != nil {
        // handle response
    }
}
```

## ListIcd10CMInferenceJobs

Gets a list of InferICD10CM jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListIcd10CMInferenceJobs(ctx, operations.ListIcd10CMInferenceJobsRequest{
        ListIcd10CMInferenceJobsRequest: shared.ListIcd10CMInferenceJobsRequest{
            Filter: &shared.ComprehendMedicalAsyncJobFilter{
                JobName: sdk.String("repellat"),
                JobStatus: shared.JobStatusEnumFailed.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2022-06-30T02:19:51.375Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-07-14T19:07:02.935Z"),
            },
            MaxResults: sdk.Int64(474697),
            NextToken: sdk.String("velit"),
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.ListIcd10CMInferenceJobsXAmzTargetEnumComprehendMedical20181030ListIcd10CmInferenceJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIcd10CMInferenceJobsResponse != nil {
        // handle response
    }
}
```

## ListPHIDetectionJobs

Gets a list of protected health information (PHI) detection jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPHIDetectionJobs(ctx, operations.ListPHIDetectionJobsRequest{
        ListPHIDetectionJobsRequest: shared.ListPHIDetectionJobsRequest{
            Filter: &shared.ComprehendMedicalAsyncJobFilter{
                JobName: sdk.String("odit"),
                JobStatus: shared.JobStatusEnumStopRequested.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2022-01-19T09:45:27.272Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-05-04T04:15:52.352Z"),
            },
            MaxResults: sdk.Int64(820994),
            NextToken: sdk.String("aut"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.ListPHIDetectionJobsXAmzTargetEnumComprehendMedical20181030ListPhiDetectionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPHIDetectionJobsResponse != nil {
        // handle response
    }
}
```

## ListRxNormInferenceJobs

Gets a list of InferRxNorm jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRxNormInferenceJobs(ctx, operations.ListRxNormInferenceJobsRequest{
        ListRxNormInferenceJobsRequest: shared.ListRxNormInferenceJobsRequest{
            Filter: &shared.ComprehendMedicalAsyncJobFilter{
                JobName: sdk.String("vero"),
                JobStatus: shared.JobStatusEnumPartialSuccess.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2021-01-17T23:08:44.457Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-05-25T05:33:11.349Z"),
            },
            MaxResults: sdk.Int64(451159),
            NextToken: sdk.String("cum"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.ListRxNormInferenceJobsXAmzTargetEnumComprehendMedical20181030ListRxNormInferenceJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRxNormInferenceJobsResponse != nil {
        // handle response
    }
}
```

## ListSNOMEDCTInferenceJobs

 Gets a list of InferSNOMEDCT jobs a user has submitted. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSNOMEDCTInferenceJobs(ctx, operations.ListSNOMEDCTInferenceJobsRequest{
        ListSNOMEDCTInferenceJobsRequest: shared.ListSNOMEDCTInferenceJobsRequest{
            Filter: &shared.ComprehendMedicalAsyncJobFilter{
                JobName: sdk.String("dolore"),
                JobStatus: shared.JobStatusEnumPartialSuccess.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2022-04-24T15:19:40.519Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-02-13T15:01:52.114Z"),
            },
            MaxResults: sdk.Int64(414263),
            NextToken: sdk.String("repudiandae"),
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.ListSNOMEDCTInferenceJobsXAmzTargetEnumComprehendMedical20181030ListSnomedctInferenceJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSNOMEDCTInferenceJobsResponse != nil {
        // handle response
    }
}
```

## StartEntitiesDetectionV2Job

Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.

### Example Usage

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
    res, err := s.SDK.StartEntitiesDetectionV2Job(ctx, operations.StartEntitiesDetectionV2JobRequest{
        StartEntitiesDetectionV2JobRequest: shared.StartEntitiesDetectionV2JobRequest{
            ClientRequestToken: sdk.String("praesentium"),
            DataAccessRoleArn: "rem",
            InputDataConfig: shared.InputDataConfig{
                S3Bucket: "voluptates",
                S3Key: sdk.String("quasi"),
            },
            JobName: sdk.String("repudiandae"),
            KMSKey: sdk.String("sint"),
            LanguageCode: shared.LanguageCodeEnumEn,
            OutputDataConfig: shared.OutputDataConfig{
                S3Bucket: "veritatis",
                S3Key: sdk.String("itaque"),
            },
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.StartEntitiesDetectionV2JobXAmzTargetEnumComprehendMedical20181030StartEntitiesDetectionV2Job,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartEntitiesDetectionV2JobResponse != nil {
        // handle response
    }
}
```

## StartIcd10CMInferenceJob

Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.

### Example Usage

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
    res, err := s.SDK.StartIcd10CMInferenceJob(ctx, operations.StartIcd10CMInferenceJobRequest{
        StartIcd10CMInferenceJobRequest: shared.StartIcd10CMInferenceJobRequest{
            ClientRequestToken: sdk.String("distinctio"),
            DataAccessRoleArn: "quibusdam",
            InputDataConfig: shared.InputDataConfig{
                S3Bucket: "labore",
                S3Key: sdk.String("modi"),
            },
            JobName: sdk.String("qui"),
            KMSKey: sdk.String("aliquid"),
            LanguageCode: shared.LanguageCodeEnumEn,
            OutputDataConfig: shared.OutputDataConfig{
                S3Bucket: "cupiditate",
                S3Key: sdk.String("quos"),
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.StartIcd10CMInferenceJobXAmzTargetEnumComprehendMedical20181030StartIcd10CmInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartIcd10CMInferenceJobResponse != nil {
        // handle response
    }
}
```

## StartPHIDetectionJob

Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.

### Example Usage

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
    res, err := s.SDK.StartPHIDetectionJob(ctx, operations.StartPHIDetectionJobRequest{
        StartPHIDetectionJobRequest: shared.StartPHIDetectionJobRequest{
            ClientRequestToken: sdk.String("excepturi"),
            DataAccessRoleArn: "tempora",
            InputDataConfig: shared.InputDataConfig{
                S3Bucket: "facilis",
                S3Key: sdk.String("tempore"),
            },
            JobName: sdk.String("labore"),
            KMSKey: sdk.String("delectus"),
            LanguageCode: shared.LanguageCodeEnumEn,
            OutputDataConfig: shared.OutputDataConfig{
                S3Bucket: "eum",
                S3Key: sdk.String("non"),
            },
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.StartPHIDetectionJobXAmzTargetEnumComprehendMedical20181030StartPhiDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartPHIDetectionJobResponse != nil {
        // handle response
    }
}
```

## StartRxNormInferenceJob

Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.

### Example Usage

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
    res, err := s.SDK.StartRxNormInferenceJob(ctx, operations.StartRxNormInferenceJobRequest{
        StartRxNormInferenceJobRequest: shared.StartRxNormInferenceJobRequest{
            ClientRequestToken: sdk.String("dolor"),
            DataAccessRoleArn: "debitis",
            InputDataConfig: shared.InputDataConfig{
                S3Bucket: "a",
                S3Key: sdk.String("dolorum"),
            },
            JobName: sdk.String("in"),
            KMSKey: sdk.String("in"),
            LanguageCode: shared.LanguageCodeEnumEn,
            OutputDataConfig: shared.OutputDataConfig{
                S3Bucket: "illum",
                S3Key: sdk.String("maiores"),
            },
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.StartRxNormInferenceJobXAmzTargetEnumComprehendMedical20181030StartRxNormInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartRxNormInferenceJobResponse != nil {
        // handle response
    }
}
```

## StartSNOMEDCTInferenceJob

 Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job. 

### Example Usage

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
    res, err := s.SDK.StartSNOMEDCTInferenceJob(ctx, operations.StartSNOMEDCTInferenceJobRequest{
        StartSNOMEDCTInferenceJobRequest: shared.StartSNOMEDCTInferenceJobRequest{
            ClientRequestToken: sdk.String("laborum"),
            DataAccessRoleArn: "accusamus",
            InputDataConfig: shared.InputDataConfig{
                S3Bucket: "non",
                S3Key: sdk.String("occaecati"),
            },
            JobName: sdk.String("enim"),
            KMSKey: sdk.String("accusamus"),
            LanguageCode: shared.LanguageCodeEnumEn,
            OutputDataConfig: shared.OutputDataConfig{
                S3Bucket: "delectus",
                S3Key: sdk.String("quidem"),
            },
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.StartSNOMEDCTInferenceJobXAmzTargetEnumComprehendMedical20181030StartSnomedctInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartSNOMEDCTInferenceJobResponse != nil {
        // handle response
    }
}
```

## StopEntitiesDetectionV2Job

Stops a medical entities detection job in progress.

### Example Usage

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
    res, err := s.SDK.StopEntitiesDetectionV2Job(ctx, operations.StopEntitiesDetectionV2JobRequest{
        StopEntitiesDetectionV2JobRequest: shared.StopEntitiesDetectionV2JobRequest{
            JobID: "deserunt",
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.StopEntitiesDetectionV2JobXAmzTargetEnumComprehendMedical20181030StopEntitiesDetectionV2Job,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopEntitiesDetectionV2JobResponse != nil {
        // handle response
    }
}
```

## StopIcd10CMInferenceJob

Stops an InferICD10CM inference job in progress.

### Example Usage

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
    res, err := s.SDK.StopIcd10CMInferenceJob(ctx, operations.StopIcd10CMInferenceJobRequest{
        StopIcd10CMInferenceJobRequest: shared.StopIcd10CMInferenceJobRequest{
            JobID: "magnam",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.StopIcd10CMInferenceJobXAmzTargetEnumComprehendMedical20181030StopIcd10CmInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopIcd10CMInferenceJobResponse != nil {
        // handle response
    }
}
```

## StopPHIDetectionJob

Stops a protected health information (PHI) detection job in progress.

### Example Usage

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
    res, err := s.SDK.StopPHIDetectionJob(ctx, operations.StopPHIDetectionJobRequest{
        StopPHIDetectionJobRequest: shared.StopPHIDetectionJobRequest{
            JobID: "eum",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.StopPHIDetectionJobXAmzTargetEnumComprehendMedical20181030StopPhiDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopPHIDetectionJobResponse != nil {
        // handle response
    }
}
```

## StopRxNormInferenceJob

Stops an InferRxNorm inference job in progress.

### Example Usage

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
    res, err := s.SDK.StopRxNormInferenceJob(ctx, operations.StopRxNormInferenceJobRequest{
        StopRxNormInferenceJobRequest: shared.StopRxNormInferenceJobRequest{
            JobID: "provident",
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.StopRxNormInferenceJobXAmzTargetEnumComprehendMedical20181030StopRxNormInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopRxNormInferenceJobResponse != nil {
        // handle response
    }
}
```

## StopSNOMEDCTInferenceJob

 Stops an InferSNOMEDCT inference job in progress. 

### Example Usage

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
    res, err := s.SDK.StopSNOMEDCTInferenceJob(ctx, operations.StopSNOMEDCTInferenceJobRequest{
        StopSNOMEDCTInferenceJobRequest: shared.StopSNOMEDCTInferenceJobRequest{
            JobID: "eum",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.StopSNOMEDCTInferenceJobXAmzTargetEnumComprehendMedical20181030StopSnomedctInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopSNOMEDCTInferenceJobResponse != nil {
        // handle response
    }
}
```
