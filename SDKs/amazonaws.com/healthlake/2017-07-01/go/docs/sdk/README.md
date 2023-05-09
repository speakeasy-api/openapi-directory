# SDK

## Overview

Amazon HealthLake is a HIPAA eligibile service that allows customers to store, transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud.

Amazon Web Services documentation
<https://docs.aws.amazon.com/healthlake/>
### Available Operations

* [CreateFHIRDatastore](#createfhirdatastore) - Creates a Data Store that can ingest and export FHIR formatted data.
* [DeleteFHIRDatastore](#deletefhirdatastore) - Deletes a Data Store. 
* [DescribeFHIRDatastore](#describefhirdatastore) - Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.
* [DescribeFHIRExportJob](#describefhirexportjob) - Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
* [DescribeFHIRImportJob](#describefhirimportjob) - Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 
* [ListFHIRDatastores](#listfhirdatastores) - Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.
* [ListFHIRExportJobs](#listfhirexportjobs) -  Lists all FHIR export jobs associated with an account and their statuses. 
* [ListFHIRImportJobs](#listfhirimportjobs) -  Lists all FHIR import jobs associated with an account and their statuses. 
* [ListTagsForResource](#listtagsforresource) -  Returns a list of all existing tags associated with a Data Store. 
* [StartFHIRExportJob](#startfhirexportjob) - Begins a FHIR export job.
* [StartFHIRImportJob](#startfhirimportjob) - Begins a FHIR Import job.
* [TagResource](#tagresource) -  Adds a user specifed key and value tag to a Data Store. 
* [UntagResource](#untagresource) -  Removes tags from a Data Store. 

## CreateFHIRDatastore

Creates a Data Store that can ingest and export FHIR formatted data.

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
    res, err := s.SDK.CreateFHIRDatastore(ctx, operations.CreateFHIRDatastoreRequest{
        CreateFHIRDatastoreRequest: shared.CreateFHIRDatastoreRequest{
            ClientToken: sdk.String("suscipit"),
            DatastoreName: sdk.String("molestiae"),
            DatastoreTypeVersion: shared.FHIRVersionEnumR4,
            PreloadDataConfig: &shared.PreloadDataConfig{
                PreloadDataType: shared.PreloadDataTypeEnumSynthea,
            },
            SseConfiguration: &shared.SseConfiguration{
                KmsEncryptionConfig: shared.KmsEncryptionConfig{
                    CmkType: shared.CmkTypeEnumAwsOwnedKmsKey,
                    KmsKeyID: sdk.String("placeat"),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: "excepturi",
                },
                shared.Tag{
                    Key: "nisi",
                    Value: "recusandae",
                },
                shared.Tag{
                    Key: "temporibus",
                    Value: "ab",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
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

## DeleteFHIRDatastore

Deletes a Data Store. 

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
    res, err := s.SDK.DeleteFHIRDatastore(ctx, operations.DeleteFHIRDatastoreRequest{
        DeleteFHIRDatastoreRequest: shared.DeleteFHIRDatastoreRequest{
            DatastoreID: sdk.String("quo"),
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.DeleteFHIRDatastoreXAmzTargetEnumHealthLakeDeleteFhirDatastore,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFHIRDatastoreResponse != nil {
        // handle response
    }
}
```

## DescribeFHIRDatastore

Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.

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
    res, err := s.SDK.DescribeFHIRDatastore(ctx, operations.DescribeFHIRDatastoreRequest{
        DescribeFHIRDatastoreRequest: shared.DescribeFHIRDatastoreRequest{
            DatastoreID: sdk.String("esse"),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.DescribeFHIRDatastoreXAmzTargetEnumHealthLakeDescribeFhirDatastore,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFHIRDatastoreResponse != nil {
        // handle response
    }
}
```

## DescribeFHIRExportJob

Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.

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
    res, err := s.SDK.DescribeFHIRExportJob(ctx, operations.DescribeFHIRExportJobRequest{
        DescribeFHIRExportJobRequest: shared.DescribeFHIRExportJobRequest{
            DatastoreID: "fugit",
            JobID: "deleniti",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.DescribeFHIRExportJobXAmzTargetEnumHealthLakeDescribeFhirExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFHIRExportJobResponse != nil {
        // handle response
    }
}
```

## DescribeFHIRImportJob

Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 

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
    res, err := s.SDK.DescribeFHIRImportJob(ctx, operations.DescribeFHIRImportJobRequest{
        DescribeFHIRImportJobRequest: shared.DescribeFHIRImportJobRequest{
            DatastoreID: "qui",
            JobID: "impedit",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.DescribeFHIRImportJobXAmzTargetEnumHealthLakeDescribeFhirImportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFHIRImportJobResponse != nil {
        // handle response
    }
}
```

## ListFHIRDatastores

Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.

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
    res, err := s.SDK.ListFHIRDatastores(ctx, operations.ListFHIRDatastoresRequest{
        ListFHIRDatastoresRequest: shared.ListFHIRDatastoresRequest{
            Filter: &shared.DatastoreFilter{
                CreatedAfter: types.MustTimeFromString("2022-09-13T17:41:46.141Z"),
                CreatedBefore: types.MustTimeFromString("2022-07-22T16:55:44.795Z"),
                DatastoreName: sdk.String("natus"),
                DatastoreStatus: shared.DatastoreStatusEnumActive.ToPointer(),
            },
            MaxResults: sdk.Int64(943749),
            NextToken: sdk.String("saepe"),
        },
        MaxResults: sdk.String("fuga"),
        NextToken: sdk.String("in"),
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.ListFHIRDatastoresXAmzTargetEnumHealthLakeListFhirDatastores,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFHIRDatastoresResponse != nil {
        // handle response
    }
}
```

## ListFHIRExportJobs

 Lists all FHIR export jobs associated with an account and their statuses. 

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
    res, err := s.SDK.ListFHIRExportJobs(ctx, operations.ListFHIRExportJobsRequest{
        ListFHIRExportJobsRequest: shared.ListFHIRExportJobsRequest{
            DatastoreID: "reiciendis",
            JobName: sdk.String("est"),
            JobStatus: shared.JobStatusEnumCompleted.ToPointer(),
            MaxResults: sdk.Int64(670638),
            NextToken: sdk.String("dolores"),
            SubmittedAfter: types.MustTimeFromString("2022-08-23T06:35:12.519Z"),
            SubmittedBefore: types.MustTimeFromString("2022-04-01T23:59:21.675Z"),
        },
        MaxResults: sdk.String("enim"),
        NextToken: sdk.String("omnis"),
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.ListFHIRExportJobsXAmzTargetEnumHealthLakeListFhirExportJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFHIRExportJobsResponse != nil {
        // handle response
    }
}
```

## ListFHIRImportJobs

 Lists all FHIR import jobs associated with an account and their statuses. 

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
    res, err := s.SDK.ListFHIRImportJobs(ctx, operations.ListFHIRImportJobsRequest{
        ListFHIRImportJobsRequest: shared.ListFHIRImportJobsRequest{
            DatastoreID: "sapiente",
            JobName: sdk.String("architecto"),
            JobStatus: shared.JobStatusEnumCompleted.ToPointer(),
            MaxResults: sdk.Int64(208876),
            NextToken: sdk.String("culpa"),
            SubmittedAfter: types.MustTimeFromString("2022-01-02T17:10:32.894Z"),
            SubmittedBefore: types.MustTimeFromString("2021-11-02T05:58:55.429Z"),
        },
        MaxResults: sdk.String("numquam"),
        NextToken: sdk.String("commodi"),
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.ListFHIRImportJobsXAmzTargetEnumHealthLakeListFhirImportJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFHIRImportJobsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

 Returns a list of all existing tags associated with a Data Store. 

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "laborum",
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumHealthLakeListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## StartFHIRExportJob

Begins a FHIR export job.

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
    res, err := s.SDK.StartFHIRExportJob(ctx, operations.StartFHIRExportJobRequest{
        StartFHIRExportJobRequest: shared.StartFHIRExportJobRequest{
            ClientToken: "id",
            DataAccessRoleArn: "possimus",
            DatastoreID: "aut",
            JobName: sdk.String("quasi"),
            OutputDataConfig: shared.OutputDataConfig{
                S3Configuration: &shared.S3Configuration{
                    KmsKeyID: "error",
                    S3URI: "temporibus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.StartFHIRExportJobXAmzTargetEnumHealthLakeStartFhirExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartFHIRExportJobResponse != nil {
        // handle response
    }
}
```

## StartFHIRImportJob

Begins a FHIR Import job.

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
    res, err := s.SDK.StartFHIRImportJob(ctx, operations.StartFHIRImportJobRequest{
        StartFHIRImportJobRequest: shared.StartFHIRImportJobRequest{
            ClientToken: "voluptatibus",
            DataAccessRoleArn: "ipsa",
            DatastoreID: "omnis",
            InputDataConfig: shared.InputDataConfig{
                S3URI: sdk.String("voluptate"),
            },
            JobName: sdk.String("cum"),
            JobOutputDataConfig: shared.OutputDataConfig{
                S3Configuration: &shared.S3Configuration{
                    KmsKeyID: "perferendis",
                    S3URI: "doloremque",
                },
            },
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.StartFHIRImportJobXAmzTargetEnumHealthLakeStartFhirImportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartFHIRImportJobResponse != nil {
        // handle response
    }
}
```

## TagResource

 Adds a user specifed key and value tag to a Data Store. 

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "dicta",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "enim",
                    Value: "accusamus",
                },
                shared.Tag{
                    Key: "commodi",
                    Value: "repudiandae",
                },
                shared.Tag{
                    Key: "quae",
                    Value: "ipsum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumHealthLakeTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

 Removes tags from a Data Store. 

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "voluptates",
            TagKeys: []string{
                "repudiandae",
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumHealthLakeUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```
