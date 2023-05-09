# SDK

## Overview

This is the <i>Amazon Omics API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/omics/latest/dev/">What is Amazon Omics?</a> in the <i>Amazon Omics Developer Guide</i>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/omics/>
### Available Operations

* [BatchDeleteReadSet](#batchdeletereadset) - Deletes one or more read sets.
* [CancelAnnotationImportJob](#cancelannotationimportjob) - Cancels an annotation import job.
* [CancelRun](#cancelrun) - Cancels a run.
* [CancelVariantImportJob](#cancelvariantimportjob) - Cancels a variant import job.
* [CreateAnnotationStore](#createannotationstore) - Creates an annotation store.
* [CreateReferenceStore](#createreferencestore) - Creates a reference store.
* [CreateRunGroup](#createrungroup) - Creates a run group.
* [CreateSequenceStore](#createsequencestore) - Creates a sequence store.
* [CreateVariantStore](#createvariantstore) - Creates a variant store.
* [CreateWorkflow](#createworkflow) - Creates a workflow.
* [DeleteAnnotationStore](#deleteannotationstore) - Deletes an annotation store.
* [DeleteReference](#deletereference) - Deletes a genome reference.
* [DeleteReferenceStore](#deletereferencestore) - Deletes a genome reference store.
* [DeleteRun](#deleterun) - Deletes a workflow run.
* [DeleteRunGroup](#deleterungroup) - Deletes a workflow run group.
* [DeleteSequenceStore](#deletesequencestore) - Deletes a sequence store.
* [DeleteVariantStore](#deletevariantstore) - Deletes a variant store.
* [DeleteWorkflow](#deleteworkflow) - Deletes a workflow.
* [GetAnnotationImportJob](#getannotationimportjob) - Gets information about an annotation import job.
* [GetAnnotationStore](#getannotationstore) - Gets information about an annotation store.
* [GetReadSet](#getreadset) - Gets a file from a read set.
* [GetReadSetActivationJob](#getreadsetactivationjob) - Gets information about a read set activation job.
* [GetReadSetExportJob](#getreadsetexportjob) - Gets information about a read set export job.
* [GetReadSetImportJob](#getreadsetimportjob) - Gets information about a read set import job.
* [GetReadSetMetadata](#getreadsetmetadata) - Gets details about a read set.
* [GetReference](#getreference) - Gets a reference file.
* [GetReferenceImportJob](#getreferenceimportjob) - Gets information about a reference import job.
* [GetReferenceMetadata](#getreferencemetadata) - Gets information about a genome reference's metadata.
* [GetReferenceStore](#getreferencestore) - Gets information about a reference store.
* [GetRun](#getrun) - Gets information about a workflow run.
* [GetRunGroup](#getrungroup) - Gets information about a workflow run group.
* [GetRunTask](#getruntask) - Gets information about a workflow run task.
* [GetSequenceStore](#getsequencestore) - Gets information about a sequence store.
* [GetVariantImportJob](#getvariantimportjob) - Gets information about a variant import job.
* [GetVariantStore](#getvariantstore) - Gets information about a variant store.
* [GetWorkflow](#getworkflow) - Gets information about a workflow.
* [ListAnnotationImportJobs](#listannotationimportjobs) - Retrieves a list of annotation import jobs.
* [ListAnnotationStores](#listannotationstores) - Retrieves a list of annotation stores.
* [ListReadSetActivationJobs](#listreadsetactivationjobs) - Retrieves a list of read set activation jobs.
* [ListReadSetExportJobs](#listreadsetexportjobs) - Retrieves a list of read set export jobs.
* [ListReadSetImportJobs](#listreadsetimportjobs) - Retrieves a list of read set import jobs.
* [ListReadSets](#listreadsets) - Retrieves a list of read sets.
* [ListReferenceImportJobs](#listreferenceimportjobs) - Retrieves a list of reference import jobs.
* [ListReferenceStores](#listreferencestores) - Retrieves a list of reference stores.
* [ListReferences](#listreferences) - Retrieves a list of references.
* [ListRunGroups](#listrungroups) - Retrieves a list of run groups.
* [ListRunTasks](#listruntasks) - Retrieves a list of tasks for a run.
* [ListRuns](#listruns) - Retrieves a list of runs.
* [ListSequenceStores](#listsequencestores) - Retrieves a list of sequence stores.
* [ListTagsForResource](#listtagsforresource) - Retrieves a list of tags for a resource.
* [ListVariantImportJobs](#listvariantimportjobs) - Retrieves a list of variant import jobs.
* [ListVariantStores](#listvariantstores) - Retrieves a list of variant stores.
* [ListWorkflows](#listworkflows) - Retrieves a list of workflows.
* [StartAnnotationImportJob](#startannotationimportjob) - Starts an annotation import job.
* [StartReadSetActivationJob](#startreadsetactivationjob) - Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.
* [StartReadSetExportJob](#startreadsetexportjob) - Exports a read set to Amazon S3.
* [StartReadSetImportJob](#startreadsetimportjob) - Starts a read set import job.
* [StartReferenceImportJob](#startreferenceimportjob) - Starts a reference import job.
* [StartRun](#startrun) - Starts a run.
* [StartVariantImportJob](#startvariantimportjob) - Starts a variant import job.
* [TagResource](#tagresource) - Tags a resource.
* [UntagResource](#untagresource) - Removes tags from a resource.
* [UpdateAnnotationStore](#updateannotationstore) - Updates an annotation store.
* [UpdateRunGroup](#updaterungroup) - Updates a run group.
* [UpdateVariantStore](#updatevariantstore) - Updates a variant store.
* [UpdateWorkflow](#updateworkflow) - Updates a workflow.

## BatchDeleteReadSet

Deletes one or more read sets.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDeleteReadSet(ctx, operations.BatchDeleteReadSetRequest{
        RequestBody: operations.BatchDeleteReadSetRequestBody{
            Ids: []string{
                "magnam",
                "debitis",
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
        SequenceStoreID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteReadSetResponse != nil {
        // handle response
    }
}
```

## CancelAnnotationImportJob

Cancels an annotation import job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelAnnotationImportJob(ctx, operations.CancelAnnotationImportJobRequest{
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
        JobID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelAnnotationImportResponse != nil {
        // handle response
    }
}
```

## CancelRun

Cancels a run.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelRun(ctx, operations.CancelRunRequest{
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("odit"),
        ID: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CancelVariantImportJob

Cancels a variant import job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelVariantImportJob(ctx, operations.CancelVariantImportJobRequest{
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        JobID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelVariantImportResponse != nil {
        // handle response
    }
}
```

## CreateAnnotationStore

Creates an annotation store.

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
    res, err := s.SDK.CreateAnnotationStore(ctx, operations.CreateAnnotationStoreRequest{
        RequestBody: operations.CreateAnnotationStoreRequestBody{
            Description: sdk.String("saepe"),
            Name: sdk.String("Harvey Hessel"),
            Reference: &operations.CreateAnnotationStoreRequestBodyReference{
                ReferenceArn: sdk.String("saepe"),
            },
            SseConfig: &operations.CreateAnnotationStoreRequestBodySseConfig{
                KeyArn: sdk.String("quidem"),
                Type: shared.EncryptionTypeEnumKms.ToPointer(),
            },
            StoreFormat: operations.CreateAnnotationStoreRequestBodyStoreFormatEnumGff,
            StoreOptions: &operations.CreateAnnotationStoreRequestBodyStoreOptions{
                TsvStoreOptions: &shared.TsvStoreOptions{
                    AnnotationType: shared.AnnotationTypeEnumGeneric.ToPointer(),
                    FormatToHeader: map[string]string{
                        "est": "mollitia",
                        "laborum": "dolores",
                        "dolorem": "corporis",
                        "explicabo": "nobis",
                    },
                    Schema: []map[string]shared.SchemaValueTypeEnum{
                        map[string]shared.SchemaValueTypeEnum{
                            "nemo": shared.SchemaValueTypeEnumInt,
                            "excepturi": shared.SchemaValueTypeEnumLong,
                            "iure": shared.SchemaValueTypeEnumFloat,
                        },
                        map[string]shared.SchemaValueTypeEnum{
                            "sapiente": shared.SchemaValueTypeEnumLong,
                            "mollitia": shared.SchemaValueTypeEnumInt,
                            "culpa": shared.SchemaValueTypeEnumLong,
                            "repellat": shared.SchemaValueTypeEnumFloat,
                        },
                    },
                },
            },
            Tags: map[string]string{
                "numquam": "commodi",
                "quam": "molestiae",
                "velit": "error",
            },
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAnnotationStoreResponse != nil {
        // handle response
    }
}
```

## CreateReferenceStore

Creates a reference store.

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
    res, err := s.SDK.CreateReferenceStore(ctx, operations.CreateReferenceStoreRequest{
        RequestBody: operations.CreateReferenceStoreRequestBody{
            ClientToken: sdk.String("quo"),
            Description: sdk.String("sequi"),
            Name: "Vernon Ondricka Sr.",
            SseConfig: &operations.CreateReferenceStoreRequestBodySseConfig{
                KeyArn: sdk.String("error"),
                Type: shared.EncryptionTypeEnumKms.ToPointer(),
            },
            Tags: map[string]string{
                "laborum": "quasi",
                "reiciendis": "voluptatibus",
                "vero": "nihil",
                "praesentium": "voluptatibus",
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReferenceStoreResponse != nil {
        // handle response
    }
}
```

## CreateRunGroup

Creates a run group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRunGroup(ctx, operations.CreateRunGroupRequest{
        RequestBody: operations.CreateRunGroupRequestBody{
            MaxCpus: sdk.Int64(282807),
            MaxDuration: sdk.Int64(979587),
            MaxRuns: sdk.Int64(120196),
            Name: sdk.String("Miss Valerie Kshlerin"),
            RequestID: "accusamus",
            Tags: map[string]string{
                "repudiandae": "quae",
                "ipsum": "quidem",
            },
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRunGroupResponse != nil {
        // handle response
    }
}
```

## CreateSequenceStore

Creates a sequence store.

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
    res, err := s.SDK.CreateSequenceStore(ctx, operations.CreateSequenceStoreRequest{
        RequestBody: operations.CreateSequenceStoreRequestBody{
            ClientToken: sdk.String("quasi"),
            Description: sdk.String("repudiandae"),
            Name: "Patrick Ward",
            SseConfig: &operations.CreateSequenceStoreRequestBodySseConfig{
                KeyArn: sdk.String("consequatur"),
                Type: shared.EncryptionTypeEnumKms.ToPointer(),
            },
            Tags: map[string]string{
                "quibusdam": "explicabo",
                "deserunt": "distinctio",
                "quibusdam": "labore",
            },
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSequenceStoreResponse != nil {
        // handle response
    }
}
```

## CreateVariantStore

Creates a variant store.

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
    res, err := s.SDK.CreateVariantStore(ctx, operations.CreateVariantStoreRequest{
        RequestBody: operations.CreateVariantStoreRequestBody{
            Description: sdk.String("assumenda"),
            Name: sdk.String("Linda Corkery"),
            Reference: operations.CreateVariantStoreRequestBodyReference{
                ReferenceArn: sdk.String("tempora"),
            },
            SseConfig: &operations.CreateVariantStoreRequestBodySseConfig{
                KeyArn: sdk.String("facilis"),
                Type: shared.EncryptionTypeEnumKms.ToPointer(),
            },
            Tags: map[string]string{
                "labore": "delectus",
                "eum": "non",
                "eligendi": "sint",
            },
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVariantStoreResponse != nil {
        // handle response
    }
}
```

## CreateWorkflow

Creates a workflow.

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
    res, err := s.SDK.CreateWorkflow(ctx, operations.CreateWorkflowRequest{
        RequestBody: operations.CreateWorkflowRequestBody{
            DefinitionURI: sdk.String("a"),
            DefinitionZip: sdk.String("dolorum"),
            Description: sdk.String("in"),
            Engine: operations.CreateWorkflowRequestBodyEngineEnumWdl.ToPointer(),
            Main: sdk.String("illum"),
            Name: sdk.String("Jean Buckridge"),
            ParameterTemplate: map[string]shared.WorkflowParameter{
                "ea": shared.WorkflowParameter{
                    Description: sdk.String("aliquid"),
                    Optional: sdk.Bool(false),
                },
                "laborum": shared.WorkflowParameter{
                    Description: sdk.String("accusamus"),
                    Optional: sdk.Bool(false),
                },
                "non": shared.WorkflowParameter{
                    Description: sdk.String("occaecati"),
                    Optional: sdk.Bool(false),
                },
                "enim": shared.WorkflowParameter{
                    Description: sdk.String("accusamus"),
                    Optional: sdk.Bool(false),
                },
            },
            RequestID: "delectus",
            StorageCapacity: sdk.Int64(692532),
            Tags: map[string]string{
                "nam": "id",
                "blanditiis": "deleniti",
                "sapiente": "amet",
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkflowResponse != nil {
        // handle response
    }
}
```

## DeleteAnnotationStore

Deletes an annotation store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAnnotationStore(ctx, operations.DeleteAnnotationStoreRequest{
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        Force: sdk.Bool(false),
        Name: "Robin Keebler",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAnnotationStoreResponse != nil {
        // handle response
    }
}
```

## DeleteReference

Deletes a genome reference.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteReference(ctx, operations.DeleteReferenceRequest{
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("quos"),
        ID: "90afa563-e251-46fe-8c8b-711e5b7fd2ed",
        ReferenceStoreID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReferenceResponse != nil {
        // handle response
    }
}
```

## DeleteReferenceStore

Deletes a genome reference store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteReferenceStore(ctx, operations.DeleteReferenceStoreRequest{
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        ID: "dc692601-fb57-46b0-95f0-d30c5fbb2587",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReferenceStoreResponse != nil {
        // handle response
    }
}
```

## DeleteRun

Deletes a workflow run.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRun(ctx, operations.DeleteRunRequest{
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("minus"),
        ID: "73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRunGroup

Deletes a workflow run group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRunGroup(ctx, operations.DeleteRunGroupRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("hic"),
        ID: "9b77f3a4-1006-474e-bf69-280d1ba77a89",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSequenceStore

Deletes a sequence store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSequenceStore(ctx, operations.DeleteSequenceStoreRequest{
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("id"),
        ID: "e4203ce5-e6a9-45d8-a0d4-46ce2af7a73c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSequenceStoreResponse != nil {
        // handle response
    }
}
```

## DeleteVariantStore

Deletes a variant store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVariantStore(ctx, operations.DeleteVariantStoreRequest{
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        Force: sdk.Bool(false),
        Name: "Miss Jimmie Kozey",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVariantStoreResponse != nil {
        // handle response
    }
}
```

## DeleteWorkflow

Deletes a workflow.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteWorkflow(ctx, operations.DeleteWorkflowRequest{
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        ID: "429cdb1a-8422-4bb6-b9d2-322715bf0cbb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAnnotationImportJob

Gets information about an annotation import job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAnnotationImportJob(ctx, operations.GetAnnotationImportJobRequest{
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("tempore"),
        JobID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAnnotationImportResponse != nil {
        // handle response
    }
}
```

## GetAnnotationStore

Gets information about an annotation store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAnnotationStore(ctx, operations.GetAnnotationStoreRequest{
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        Name: "Amy Armstrong",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAnnotationStoreResponse != nil {
        // handle response
    }
}
```

## GetReadSet

Gets a file from a read set.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReadSet(ctx, operations.GetReadSetRequest{
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("facilis"),
        File: operations.GetReadSetFileEnumSource2.ToPointer(),
        ID: "21879fce-953f-473e-b7fb-c7abd74dd39c",
        PartNumber: 13236,
        SequenceStoreID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReadSetResponse != nil {
        // handle response
    }
}
```

## GetReadSetActivationJob

Gets information about a read set activation job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReadSetActivationJob(ctx, operations.GetReadSetActivationJobRequest{
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("iusto"),
        ID: "c70a4562-6d43-4681-bf16-d9f5fce6c556",
        SequenceStoreID: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReadSetActivationJobResponse != nil {
        // handle response
    }
}
```

## GetReadSetExportJob

Gets information about a read set export job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReadSetExportJob(ctx, operations.GetReadSetExportJobRequest{
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("minima"),
        ID: "0fb008c4-2e14-41aa-8366-c8dd6b144290",
        SequenceStoreID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReadSetExportJobResponse != nil {
        // handle response
    }
}
```

## GetReadSetImportJob

Gets information about a read set import job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReadSetImportJob(ctx, operations.GetReadSetImportJobRequest{
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("fuga"),
        ID: "7bd466d2-8c10-4ab3-8dca-4251904e523c",
        SequenceStoreID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReadSetImportJobResponse != nil {
        // handle response
    }
}
```

## GetReadSetMetadata

Gets details about a read set.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReadSetMetadata(ctx, operations.GetReadSetMetadataRequest{
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("nihil"),
        ID: "8e4796f2-a70c-4688-a82a-a482562f222e",
        SequenceStoreID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReadSetMetadataResponse != nil {
        // handle response
    }
}
```

## GetReference

Gets a reference file.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReference(ctx, operations.GetReferenceRequest{
        Range: sdk.String("atque"),
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("quod"),
        File: operations.GetReferenceFileEnumIndex.ToPointer(),
        ID: "e61e6b7b-95bc-40ab-bc20-c4f3789fd871",
        PartNumber: 951875,
        ReferenceStoreID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReferenceResponse != nil {
        // handle response
    }
}
```

## GetReferenceImportJob

Gets information about a reference import job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReferenceImportJob(ctx, operations.GetReferenceImportJobRequest{
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("facere"),
        ID: "121aa6f1-e674-4bdb-84f1-5756082d68ea",
        ReferenceStoreID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReferenceImportJobResponse != nil {
        // handle response
    }
}
```

## GetReferenceMetadata

Gets information about a genome reference's metadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReferenceMetadata(ctx, operations.GetReferenceMetadataRequest{
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        ID: "51339d08-086a-4184-8394-c26071f93f5f",
        ReferenceStoreID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReferenceMetadataResponse != nil {
        // handle response
    }
}
```

## GetReferenceStore

Gets information about a reference store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReferenceStore(ctx, operations.GetReferenceStoreRequest{
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        ID: "af515cc4-13aa-463a-ae8d-67864dbb675f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReferenceStoreResponse != nil {
        // handle response
    }
}
```

## GetRun

Gets information about a workflow run.

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
    res, err := s.SDK.GetRun(ctx, operations.GetRunRequest{
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        Export: []shared.RunExportEnum{
            shared.RunExportEnumDefinition,
            shared.RunExportEnumDefinition,
        },
        ID: "5ed4f6fb-ee41-4f33-b17f-e35b60eb1ea4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRunResponse != nil {
        // handle response
    }
}
```

## GetRunGroup

Gets information about a workflow run group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRunGroup(ctx, operations.GetRunGroupRequest{
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        ID: "3c28744e-d53b-488f-ba8d-8f5c0b2f2fb7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRunGroupResponse != nil {
        // handle response
    }
}
```

## GetRunTask

Gets information about a workflow run task.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRunTask(ctx, operations.GetRunTaskRequest{
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("in"),
        ID: "6b26916f-e1f0-48f4-a94e-3698f447f603",
        TaskID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRunTaskResponse != nil {
        // handle response
    }
}
```

## GetSequenceStore

Gets information about a sequence store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSequenceStore(ctx, operations.GetSequenceStoreRequest{
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("rem"),
        ID: "0ca55efd-20e4-457e-9858-b6a89fbe3a5a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSequenceStoreResponse != nil {
        // handle response
    }
}
```

## GetVariantImportJob

Gets information about a variant import job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetVariantImportJob(ctx, operations.GetVariantImportJobRequest{
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("ut"),
        JobID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVariantImportResponse != nil {
        // handle response
    }
}
```

## GetVariantStore

Gets information about a variant store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetVariantStore(ctx, operations.GetVariantStoreRequest{
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        Name: "Nora Lynch",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVariantStoreResponse != nil {
        // handle response
    }
}
```

## GetWorkflow

Gets information about a workflow.

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
    res, err := s.SDK.GetWorkflow(ctx, operations.GetWorkflowRequest{
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("nostrum"),
        Export: []shared.WorkflowExportEnum{
            shared.WorkflowExportEnumDefinition,
            shared.WorkflowExportEnumDefinition,
            shared.WorkflowExportEnumDefinition,
            shared.WorkflowExportEnumDefinition,
        },
        ID: "904f3b11-94b8-4abf-a03a-79f9dfe0ab7d",
        Type: operations.GetWorkflowTypeEnumPrivate.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkflowResponse != nil {
        // handle response
    }
}
```

## ListAnnotationImportJobs

Retrieves a list of annotation import jobs.

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
    res, err := s.SDK.ListAnnotationImportJobs(ctx, operations.ListAnnotationImportJobsRequest{
        RequestBody: operations.ListAnnotationImportJobsRequestBody{
            Filter: &operations.ListAnnotationImportJobsRequestBodyFilter{
                Status: shared.JobStatusEnumFailed.ToPointer(),
                StoreName: sdk.String("praesentium"),
            },
            Ids: []string{
                "veniam",
                "voluptatem",
                "quisquam",
            },
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        MaxResults: sdk.Int64(693957),
        NextToken: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAnnotationImportJobsResponse != nil {
        // handle response
    }
}
```

## ListAnnotationStores

Retrieves a list of annotation stores.

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
    res, err := s.SDK.ListAnnotationStores(ctx, operations.ListAnnotationStoresRequest{
        RequestBody: operations.ListAnnotationStoresRequestBody{
            Filter: &operations.ListAnnotationStoresRequestBodyFilter{
                Status: shared.StoreStatusEnumCreating.ToPointer(),
            },
            Ids: []string{
                "amet",
                "assumenda",
            },
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("natus"),
        MaxResults: sdk.Int64(328303),
        NextToken: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAnnotationStoresResponse != nil {
        // handle response
    }
}
```

## ListReadSetActivationJobs

Retrieves a list of read set activation jobs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListReadSetActivationJobs(ctx, operations.ListReadSetActivationJobsRequest{
        RequestBody: operations.ListReadSetActivationJobsRequestBody{
            Filter: &operations.ListReadSetActivationJobsRequestBodyFilter{
                CreatedAfter: types.MustTimeFromString("2022-01-08T02:07:04.894Z"),
                CreatedBefore: types.MustTimeFromString("2021-04-04T14:18:49.875Z"),
                Status: shared.ReadSetActivationJobStatusEnumFailed.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        MaxResults: sdk.Int64(680697),
        NextToken: sdk.String("repellendus"),
        SequenceStoreID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReadSetActivationJobsResponse != nil {
        // handle response
    }
}
```

## ListReadSetExportJobs

Retrieves a list of read set export jobs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListReadSetExportJobs(ctx, operations.ListReadSetExportJobsRequest{
        RequestBody: operations.ListReadSetExportJobsRequestBody{
            Filter: &operations.ListReadSetExportJobsRequestBodyFilter{
                CreatedAfter: types.MustTimeFromString("2022-11-14T22:34:47.186Z"),
                CreatedBefore: types.MustTimeFromString("2022-08-26T20:56:06.979Z"),
                Status: shared.ReadSetExportJobStatusEnumSubmitted.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("molestias"),
        MaxResults: sdk.Int64(300029),
        NextToken: sdk.String("saepe"),
        SequenceStoreID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReadSetExportJobsResponse != nil {
        // handle response
    }
}
```

## ListReadSetImportJobs

Retrieves a list of read set import jobs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListReadSetImportJobs(ctx, operations.ListReadSetImportJobsRequest{
        RequestBody: operations.ListReadSetImportJobsRequestBody{
            Filter: &operations.ListReadSetImportJobsRequestBodyFilter{
                CreatedAfter: types.MustTimeFromString("2021-03-24T23:56:32.062Z"),
                CreatedBefore: types.MustTimeFromString("2022-02-09T03:10:10.926Z"),
                Status: shared.ReadSetImportJobStatusEnumInProgress.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        MaxResults: sdk.Int64(625528),
        NextToken: sdk.String("illo"),
        SequenceStoreID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReadSetImportJobsResponse != nil {
        // handle response
    }
}
```

## ListReadSets

Retrieves a list of read sets.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListReadSets(ctx, operations.ListReadSetsRequest{
        RequestBody: operations.ListReadSetsRequestBody{
            Filter: &operations.ListReadSetsRequestBodyFilter{
                CreatedAfter: types.MustTimeFromString("2021-03-06T23:23:06.913Z"),
                CreatedBefore: types.MustTimeFromString("2022-02-14T08:24:16.303Z"),
                Name: sdk.String("Vera Beier IV"),
                ReferenceArn: sdk.String("eveniet"),
                Status: shared.ReadSetStatusEnumArchived.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        MaxResults: sdk.Int64(523006),
        NextToken: sdk.String("aliquam"),
        SequenceStoreID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReadSetsResponse != nil {
        // handle response
    }
}
```

## ListReferenceImportJobs

Retrieves a list of reference import jobs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListReferenceImportJobs(ctx, operations.ListReferenceImportJobsRequest{
        RequestBody: operations.ListReferenceImportJobsRequestBody{
            Filter: &operations.ListReferenceImportJobsRequestBodyFilter{
                CreatedAfter: types.MustTimeFromString("2022-12-28T14:32:37.413Z"),
                CreatedBefore: types.MustTimeFromString("2022-05-27T23:37:34.170Z"),
                Status: shared.ReferenceImportJobStatusEnumCancelled.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("id"),
        MaxResults: sdk.Int64(327988),
        NextToken: sdk.String("dolore"),
        ReferenceStoreID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReferenceImportJobsResponse != nil {
        // handle response
    }
}
```

## ListReferenceStores

Retrieves a list of reference stores.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListReferenceStores(ctx, operations.ListReferenceStoresRequest{
        RequestBody: operations.ListReferenceStoresRequestBody{
            Filter: &operations.ListReferenceStoresRequestBodyFilter{
                CreatedAfter: types.MustTimeFromString("2022-12-08T22:18:03.712Z"),
                CreatedBefore: types.MustTimeFromString("2021-03-07T01:29:10.520Z"),
                Name: sdk.String("Minnie Jacobson"),
            },
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("esse"),
        MaxResults: sdk.Int64(592081),
        NextToken: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReferenceStoresResponse != nil {
        // handle response
    }
}
```

## ListReferences

Retrieves a list of references.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListReferences(ctx, operations.ListReferencesRequest{
        RequestBody: operations.ListReferencesRequestBody{
            Filter: &operations.ListReferencesRequestBodyFilter{
                CreatedAfter: types.MustTimeFromString("2022-01-11T18:28:30.775Z"),
                CreatedBefore: types.MustTimeFromString("2022-09-25T14:08:27.344Z"),
                Md5: sdk.String("ullam"),
                Name: sdk.String("Lynda Heathcote"),
            },
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        MaxResults: sdk.Int64(351893),
        NextToken: sdk.String("in"),
        ReferenceStoreID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReferencesResponse != nil {
        // handle response
    }
}
```

## ListRunGroups

Retrieves a list of run groups.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRunGroups(ctx, operations.ListRunGroupsRequest{
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("molestias"),
        MaxResults: sdk.Int64(889794),
        Name: sdk.String("Noel Bruen"),
        StartingToken: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRunGroupsResponse != nil {
        // handle response
    }
}
```

## ListRunTasks

Retrieves a list of tasks for a run.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRunTasks(ctx, operations.ListRunTasksRequest{
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        ID: "648dc2f6-1519-49eb-bd0e-9fe6c632ca3a",
        MaxResults: sdk.Int64(898760),
        StartingToken: sdk.String("nulla"),
        Status: operations.ListRunTasksStatusEnumPending.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRunTasksResponse != nil {
        // handle response
    }
}
```

## ListRuns

Retrieves a list of runs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRuns(ctx, operations.ListRunsRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        MaxResults: sdk.Int64(96562),
        Name: sdk.String("Melba Stokes I"),
        RunGroupID: sdk.String("nihil"),
        StartingToken: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRunsResponse != nil {
        // handle response
    }
}
```

## ListSequenceStores

Retrieves a list of sequence stores.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSequenceStores(ctx, operations.ListSequenceStoresRequest{
        RequestBody: operations.ListSequenceStoresRequestBody{
            Filter: &operations.ListSequenceStoresRequestBodyFilter{
                CreatedAfter: types.MustTimeFromString("2022-07-09T21:21:21.316Z"),
                CreatedBefore: types.MustTimeFromString("2022-06-29T10:30:00.284Z"),
                Name: sdk.String("Dr. Van Kassulke Sr."),
            },
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        MaxResults: sdk.Int64(671384),
        NextToken: sdk.String("sunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSequenceStoresResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Retrieves a list of tags for a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        ResourceArn: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListVariantImportJobs

Retrieves a list of variant import jobs.

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
    res, err := s.SDK.ListVariantImportJobs(ctx, operations.ListVariantImportJobsRequest{
        RequestBody: operations.ListVariantImportJobsRequestBody{
            Filter: &operations.ListVariantImportJobsRequestBodyFilter{
                Status: shared.JobStatusEnumCancelled.ToPointer(),
                StoreName: sdk.String("voluptas"),
            },
            Ids: []string{
                "id",
                "ab",
                "error",
            },
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        MaxResults: sdk.Int64(316220),
        NextToken: sdk.String("vitae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVariantImportJobsResponse != nil {
        // handle response
    }
}
```

## ListVariantStores

Retrieves a list of variant stores.

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
    res, err := s.SDK.ListVariantStores(ctx, operations.ListVariantStoresRequest{
        RequestBody: operations.ListVariantStoresRequestBody{
            Filter: &operations.ListVariantStoresRequestBodyFilter{
                Status: shared.StoreStatusEnumFailed.ToPointer(),
            },
            Ids: []string{
                "quo",
                "ex",
            },
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        MaxResults: sdk.Int64(109784),
        NextToken: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVariantStoresResponse != nil {
        // handle response
    }
}
```

## ListWorkflows

Retrieves a list of workflows.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListWorkflows(ctx, operations.ListWorkflowsRequest{
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        MaxResults: sdk.Int64(889288),
        Name: sdk.String("Kristine Stroman Jr."),
        StartingToken: sdk.String("deleniti"),
        Type: operations.ListWorkflowsTypeEnumPrivate.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowsResponse != nil {
        // handle response
    }
}
```

## StartAnnotationImportJob

Starts an annotation import job.

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
    res, err := s.SDK.StartAnnotationImportJob(ctx, operations.StartAnnotationImportJobRequest{
        RequestBody: operations.StartAnnotationImportJobRequestBody{
            DestinationName: "earum",
            FormatOptions: &operations.StartAnnotationImportJobRequestBodyFormatOptions{
                TsvOptions: &shared.TsvOptions{
                    ReadOptions: &shared.ReadOptions{
                        Comment: sdk.String("ex"),
                        Encoding: sdk.String("sapiente"),
                        Escape: sdk.String("rem"),
                        EscapeQuotes: sdk.Bool(false),
                        Header: sdk.Bool(false),
                        LineSep: sdk.String("minus"),
                        Quote: sdk.String("nemo"),
                        QuoteAll: sdk.Bool(false),
                        Sep: sdk.String("asperiores"),
                    },
                },
                VcfOptions: &shared.VcfOptions{
                    IgnoreFilterField: sdk.Bool(false),
                    IgnoreQualField: sdk.Bool(false),
                },
            },
            Items: []shared.AnnotationImportItemSource{
                shared.AnnotationImportItemSource{
                    Source: "ullam",
                },
            },
            RoleArn: "perferendis",
            RunLeftNormalization: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartAnnotationImportResponse != nil {
        // handle response
    }
}
```

## StartReadSetActivationJob

Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.

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
    res, err := s.SDK.StartReadSetActivationJob(ctx, operations.StartReadSetActivationJobRequest{
        RequestBody: operations.StartReadSetActivationJobRequestBody{
            ClientToken: sdk.String("dolor"),
            Sources: []shared.StartReadSetActivationJobSourceItem{
                shared.StartReadSetActivationJobSourceItem{
                    ReadSetID: "inventore",
                },
                shared.StartReadSetActivationJobSourceItem{
                    ReadSetID: "deleniti",
                },
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("modi"),
        SequenceStoreID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartReadSetActivationJobResponse != nil {
        // handle response
    }
}
```

## StartReadSetExportJob

Exports a read set to Amazon S3.

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
    res, err := s.SDK.StartReadSetExportJob(ctx, operations.StartReadSetExportJobRequest{
        RequestBody: operations.StartReadSetExportJobRequestBody{
            ClientToken: sdk.String("ab"),
            Destination: "laudantium",
            RoleArn: "quae",
            Sources: []shared.ExportReadSet{
                shared.ExportReadSet{
                    ReadSetID: "fugiat",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("officiis"),
        SequenceStoreID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartReadSetExportJobResponse != nil {
        // handle response
    }
}
```

## StartReadSetImportJob

Starts a read set import job.

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
    res, err := s.SDK.StartReadSetImportJob(ctx, operations.StartReadSetImportJobRequest{
        RequestBody: operations.StartReadSetImportJobRequestBody{
            ClientToken: sdk.String("necessitatibus"),
            RoleArn: "sed",
            Sources: []shared.StartReadSetImportJobSourceItem{
                shared.StartReadSetImportJobSourceItem{
                    Description: sdk.String("nesciunt"),
                    GeneratedFrom: sdk.String("expedita"),
                    Name: sdk.String("Kristin Legros"),
                    ReferenceArn: "ab",
                    SampleID: "porro",
                    SourceFileType: shared.FileTypeEnumBam,
                    SourceFiles: shared.SourceFiles{
                        Source1: "nobis",
                        Source2: sdk.String("laboriosam"),
                    },
                    SubjectID: "recusandae",
                    Tags: map[string]string{
                        "voluptatem": "exercitationem",
                    },
                },
                shared.StartReadSetImportJobSourceItem{
                    Description: sdk.String("necessitatibus"),
                    GeneratedFrom: sdk.String("quasi"),
                    Name: sdk.String("Teri Thiel"),
                    ReferenceArn: "sequi",
                    SampleID: "doloribus",
                    SourceFileType: shared.FileTypeEnumCram,
                    SourceFiles: shared.SourceFiles{
                        Source1: "optio",
                        Source2: sdk.String("occaecati"),
                    },
                    SubjectID: "nemo",
                    Tags: map[string]string{
                        "blanditiis": "officia",
                        "voluptas": "numquam",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("fuga"),
        SequenceStoreID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartReadSetImportJobResponse != nil {
        // handle response
    }
}
```

## StartReferenceImportJob

Starts a reference import job.

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
    res, err := s.SDK.StartReferenceImportJob(ctx, operations.StartReferenceImportJobRequest{
        RequestBody: operations.StartReferenceImportJobRequestBody{
            ClientToken: sdk.String("incidunt"),
            RoleArn: "quasi",
            Sources: []shared.StartReferenceImportJobSourceItem{
                shared.StartReferenceImportJobSourceItem{
                    Description: sdk.String("fugiat"),
                    Name: "Elsie Cronin V",
                    SourceFile: "reiciendis",
                    Tags: map[string]string{
                        "alias": "omnis",
                        "eos": "occaecati",
                        "iste": "magni",
                    },
                },
                shared.StartReferenceImportJobSourceItem{
                    Description: sdk.String("inventore"),
                    Name: "Tomas Wolff",
                    SourceFile: "delectus",
                    Tags: map[string]string{
                        "praesentium": "maxime",
                        "magnam": "temporibus",
                    },
                },
                shared.StartReferenceImportJobSourceItem{
                    Description: sdk.String("quos"),
                    Name: "Lorena Johns",
                    SourceFile: "modi",
                    Tags: map[string]string{
                        "vero": "voluptatem",
                        "ipsam": "vel",
                        "alias": "quasi",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("esse"),
        ReferenceStoreID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartReferenceImportJobResponse != nil {
        // handle response
    }
}
```

## StartRun

Starts a run.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartRun(ctx, operations.StartRunRequest{
        RequestBody: operations.StartRunRequestBody{
            LogLevel: operations.StartRunRequestBodyLogLevelEnumFatal.ToPointer(),
            Name: sdk.String("Alvin Marquardt"),
            OutputURI: sdk.String("hic"),
            Parameters: map[string]interface{}{
                "asperiores": "ex",
                "voluptas": "debitis",
                "delectus": "quae",
                "minus": "fuga",
            },
            Priority: sdk.Int64(675689),
            RequestID: "consectetur",
            RoleArn: "velit",
            RunGroupID: sdk.String("atque"),
            RunID: sdk.String("ipsum"),
            StorageCapacity: sdk.Int64(773035),
            Tags: map[string]string{
                "soluta": "repudiandae",
            },
            WorkflowID: sdk.String("nam"),
            WorkflowType: operations.StartRunRequestBodyWorkflowTypeEnumPrivate.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartRunResponse != nil {
        // handle response
    }
}
```

## StartVariantImportJob

Starts a variant import job.

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
    res, err := s.SDK.StartVariantImportJob(ctx, operations.StartVariantImportJobRequest{
        RequestBody: operations.StartVariantImportJobRequestBody{
            DestinationName: "deleniti",
            Items: []shared.VariantImportItemSource{
                shared.VariantImportItemSource{
                    Source: "iure",
                },
                shared.VariantImportItemSource{
                    Source: "odit",
                },
                shared.VariantImportItemSource{
                    Source: "voluptatibus",
                },
                shared.VariantImportItemSource{
                    Source: "vel",
                },
            },
            RoleArn: "magnam",
            RunLeftNormalization: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartVariantImportResponse != nil {
        // handle response
    }
}
```

## TagResource

Tags a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "aliquam": "velit",
                "illo": "accusantium",
                "vel": "ea",
                "beatae": "vero",
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        ResourceArn: "impedit",
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

Removes tags from a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("velit"),
        ResourceArn: "laborum",
        TagKeys: []string{
            "dolor",
            "iusto",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAnnotationStore

Updates an annotation store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAnnotationStore(ctx, operations.UpdateAnnotationStoreRequest{
        RequestBody: operations.UpdateAnnotationStoreRequestBody{
            Description: sdk.String("sit"),
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        Name: "Guadalupe Mertz",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAnnotationStoreResponse != nil {
        // handle response
    }
}
```

## UpdateRunGroup

Updates a run group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRunGroup(ctx, operations.UpdateRunGroupRequest{
        RequestBody: operations.UpdateRunGroupRequestBody{
            MaxCpus: sdk.Int64(954334),
            MaxDuration: sdk.Int64(455579),
            MaxRuns: sdk.Int64(351936),
            Name: sdk.String("Terence O'Keefe"),
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("vero"),
        ID: "31135296-5bb8-4a72-8261-1435e139dbc2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateVariantStore

Updates a variant store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateVariantStore(ctx, operations.UpdateVariantStoreRequest{
        RequestBody: operations.UpdateVariantStoreRequestBody{
            Description: sdk.String("quia"),
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        Name: "Ms. Morris Schulist DVM",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVariantStoreResponse != nil {
        // handle response
    }
}
```

## UpdateWorkflow

Updates a workflow.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateWorkflow(ctx, operations.UpdateWorkflowRequest{
        RequestBody: operations.UpdateWorkflowRequestBody{
            Description: sdk.String("inventore"),
            Name: sdk.String("Lena Greenholt"),
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("est"),
        ID: "d879eeb9-665b-485e-bbd0-2bae0be2d782",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
