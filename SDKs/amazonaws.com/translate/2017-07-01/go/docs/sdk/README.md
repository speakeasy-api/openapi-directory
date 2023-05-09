# SDK

## Overview

Provides translation of the input content from the source language to the target language.

Amazon Web Services documentation
<https://docs.aws.amazon.com/translate/>
### Available Operations

* [CreateParallelData](#createparalleldata) - Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.
* [DeleteParallelData](#deleteparalleldata) - Deletes a parallel data resource in Amazon Translate.
* [DeleteTerminology](#deleteterminology) - A synchronous action that deletes a custom terminology.
* [DescribeTextTranslationJob](#describetexttranslationjob) - Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
* [GetParallelData](#getparalleldata) - Provides information about a parallel data resource.
* [GetTerminology](#getterminology) - Retrieves a custom terminology.
* [ImportTerminology](#importterminology) - <p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>
* [ListLanguages](#listlanguages) - Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.
* [ListParallelData](#listparalleldata) - Provides a list of your parallel data resources in Amazon Translate.
* [ListTagsForResource](#listtagsforresource) - Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [ListTerminologies](#listterminologies) - Provides a list of custom terminologies associated with your account.
* [ListTextTranslationJobs](#listtexttranslationjobs) - Gets a list of the batch translation jobs that you have submitted.
* [StartTextTranslationJob](#starttexttranslationjob) - <p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
* [StopTextTranslationJob](#stoptexttranslationjob) - <p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>
* [TagResource](#tagresource) - Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [TranslateText](#translatetext) - Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.
* [UntagResource](#untagresource) - Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* [UpdateParallelData](#updateparalleldata) - Updates a previously created parallel data resource by importing a new input file from Amazon S3.

## CreateParallelData

Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.

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
    res, err := s.SDK.CreateParallelData(ctx, operations.CreateParallelDataRequest{
        CreateParallelDataRequest: shared.CreateParallelDataRequest{
            ClientToken: "totam",
            Description: sdk.String("beatae"),
            EncryptionKey: &shared.EncryptionKey{
                ID: "6742cb73-9205-4929-b96f-ea7596eb10fa",
                Type: shared.EncryptionKeyTypeEnumKms,
            },
            Name: "Cameron Dach",
            ParallelDataConfig: shared.ParallelDataConfig{
                Format: shared.ParallelDataFormatEnumTsv,
                S3URI: "nobis",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "omnis",
                    Value: "nemo",
                },
                shared.Tag{
                    Key: "minima",
                    Value: "excepturi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.CreateParallelDataXAmzTargetEnumAwsShineFrontendService20170701CreateParallelData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateParallelDataResponse != nil {
        // handle response
    }
}
```

## DeleteParallelData

Deletes a parallel data resource in Amazon Translate.

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
    res, err := s.SDK.DeleteParallelData(ctx, operations.DeleteParallelDataRequest{
        DeleteParallelDataRequest: shared.DeleteParallelDataRequest{
            Name: "Cecilia Crooks",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.DeleteParallelDataXAmzTargetEnumAwsShineFrontendService20170701DeleteParallelData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteParallelDataResponse != nil {
        // handle response
    }
}
```

## DeleteTerminology

A synchronous action that deletes a custom terminology.

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
    res, err := s.SDK.DeleteTerminology(ctx, operations.DeleteTerminologyRequest{
        DeleteTerminologyRequest: shared.DeleteTerminologyRequest{
            Name: "Beatrice Brown",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.DeleteTerminologyXAmzTargetEnumAwsShineFrontendService20170701DeleteTerminology,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeTextTranslationJob

Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.

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
    res, err := s.SDK.DescribeTextTranslationJob(ctx, operations.DescribeTextTranslationJobRequest{
        DescribeTextTranslationJobRequest: shared.DescribeTextTranslationJobRequest{
            JobID: "possimus",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.DescribeTextTranslationJobXAmzTargetEnumAwsShineFrontendService20170701DescribeTextTranslationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTextTranslationJobResponse != nil {
        // handle response
    }
}
```

## GetParallelData

Provides information about a parallel data resource.

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
    res, err := s.SDK.GetParallelData(ctx, operations.GetParallelDataRequest{
        GetParallelDataRequest: shared.GetParallelDataRequest{
            Name: "Caleb Koss",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzTarget: operations.GetParallelDataXAmzTargetEnumAwsShineFrontendService20170701GetParallelData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetParallelDataResponse != nil {
        // handle response
    }
}
```

## GetTerminology

Retrieves a custom terminology.

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
    res, err := s.SDK.GetTerminology(ctx, operations.GetTerminologyRequest{
        GetTerminologyRequest: shared.GetTerminologyRequest{
            Name: "Shawna Carter",
            TerminologyDataFormat: shared.TerminologyDataFormatEnumTmx.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.GetTerminologyXAmzTargetEnumAwsShineFrontendService20170701GetTerminology,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTerminologyResponse != nil {
        // handle response
    }
}
```

## ImportTerminology

<p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>

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
    res, err := s.SDK.ImportTerminology(ctx, operations.ImportTerminologyRequest{
        ImportTerminologyRequest: shared.ImportTerminologyRequest{
            Description: sdk.String("ipsum"),
            EncryptionKey: &shared.EncryptionKey{
                ID: "b99d488e-1e91-4e45-8ad2-abd44269802d",
                Type: shared.EncryptionKeyTypeEnumKms,
            },
            MergeStrategy: shared.MergeStrategyEnumOverwrite,
            Name: "Linda Corkery",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "facilis",
                    Value: "tempore",
                },
                shared.Tag{
                    Key: "labore",
                    Value: "delectus",
                },
            },
            TerminologyData: shared.TerminologyData{
                Directionality: shared.DirectionalityEnumUni.ToPointer(),
                File: "non",
                Format: shared.TerminologyDataFormatEnumTsv,
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ImportTerminologyXAmzTargetEnumAwsShineFrontendService20170701ImportTerminology,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportTerminologyResponse != nil {
        // handle response
    }
}
```

## ListLanguages

Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.

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
    res, err := s.SDK.ListLanguages(ctx, operations.ListLanguagesRequest{
        ListLanguagesRequest: shared.ListLanguagesRequest{
            DisplayLanguageCode: shared.DisplayLanguageCodeEnumZh.ToPointer(),
            MaxResults: sdk.Int64(952749),
            NextToken: sdk.String("dolorum"),
        },
        MaxResults: sdk.String("in"),
        NextToken: sdk.String("in"),
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmzTarget: operations.ListLanguagesXAmzTargetEnumAwsShineFrontendService20170701ListLanguages,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLanguagesResponse != nil {
        // handle response
    }
}
```

## ListParallelData

Provides a list of your parallel data resources in Amazon Translate.

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
    res, err := s.SDK.ListParallelData(ctx, operations.ListParallelDataRequest{
        ListParallelDataRequest: shared.ListParallelDataRequest{
            MaxResults: sdk.Int64(411820),
            NextToken: sdk.String("aliquid"),
        },
        MaxResults: sdk.String("laborum"),
        NextToken: sdk.String("accusamus"),
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.ListParallelDataXAmzTargetEnumAwsShineFrontendService20170701ListParallelData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListParallelDataResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

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
            ResourceArn: "nam",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsShineFrontendService20170701ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTerminologies

Provides a list of custom terminologies associated with your account.

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
    res, err := s.SDK.ListTerminologies(ctx, operations.ListTerminologiesRequest{
        ListTerminologiesRequest: shared.ListTerminologiesRequest{
            MaxResults: sdk.Int64(423855),
            NextToken: sdk.String("natus"),
        },
        MaxResults: sdk.String("omnis"),
        NextToken: sdk.String("molestiae"),
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.ListTerminologiesXAmzTargetEnumAwsShineFrontendService20170701ListTerminologies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTerminologiesResponse != nil {
        // handle response
    }
}
```

## ListTextTranslationJobs

Gets a list of the batch translation jobs that you have submitted.

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
    res, err := s.SDK.ListTextTranslationJobs(ctx, operations.ListTextTranslationJobsRequest{
        ListTextTranslationJobsRequest: shared.ListTextTranslationJobsRequest{
            Filter: &shared.TextTranslationJobFilter{
                JobName: sdk.String("suscipit"),
                JobStatus: shared.JobStatusEnumFailed.ToPointer(),
                SubmittedAfterTime: types.MustTimeFromString("2022-02-21T23:58:20.071Z"),
                SubmittedBeforeTime: types.MustTimeFromString("2022-08-05T15:44:28.456Z"),
            },
            MaxResults: sdk.Int64(102863),
            NextToken: sdk.String("magnam"),
        },
        MaxResults: sdk.String("et"),
        NextToken: sdk.String("excepturi"),
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.ListTextTranslationJobsXAmzTargetEnumAwsShineFrontendService20170701ListTextTranslationJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTextTranslationJobsResponse != nil {
        // handle response
    }
}
```

## StartTextTranslationJob

<p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>

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
    res, err := s.SDK.StartTextTranslationJob(ctx, operations.StartTextTranslationJobRequest{
        StartTextTranslationJobRequest: shared.StartTextTranslationJobRequest{
            ClientToken: "mollitia",
            DataAccessRoleArn: "ad",
            InputDataConfig: shared.InputDataConfig{
                ContentType: "eum",
                S3URI: "dolor",
            },
            JobName: sdk.String("necessitatibus"),
            OutputDataConfig: shared.OutputDataConfig{
                EncryptionKey: &shared.EncryptionKey{
                    ID: "2516fe4c-8b71-41e5-b7fd-2ed028921cdd",
                    Type: shared.EncryptionKeyTypeEnumKms,
                },
                S3URI: "maxime",
            },
            ParallelDataNames: []string{
                "excepturi",
                "odit",
            },
            Settings: &shared.TranslationSettings{
                Formality: shared.FormalityEnumFormal.ToPointer(),
                Profanity: shared.ProfanityEnumMask.ToPointer(),
            },
            SourceLanguageCode: "accusantium",
            TargetLanguageCodes: []string{
                "maiores",
            },
            TerminologyNames: []string{
                "ipsam",
                "voluptate",
                "autem",
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.StartTextTranslationJobXAmzTargetEnumAwsShineFrontendService20170701StartTextTranslationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartTextTranslationJobResponse != nil {
        // handle response
    }
}
```

## StopTextTranslationJob

<p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>

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
    res, err := s.SDK.StopTextTranslationJob(ctx, operations.StopTextTranslationJobRequest{
        StopTextTranslationJobRequest: shared.StopTextTranslationJobRequest{
            JobID: "amet",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.StopTextTranslationJobXAmzTargetEnumAwsShineFrontendService20170701StopTextTranslationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopTextTranslationJobResponse != nil {
        // handle response
    }
}
```

## TagResource

Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

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
            ResourceArn: "quis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dignissimos",
                    Value: "eaque",
                },
                shared.Tag{
                    Key: "quis",
                    Value: "nesciunt",
                },
                shared.Tag{
                    Key: "eos",
                    Value: "perferendis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsShineFrontendService20170701TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## TranslateText

Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.

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
    res, err := s.SDK.TranslateText(ctx, operations.TranslateTextRequest{
        TranslateTextRequest: shared.TranslateTextRequest{
            Settings: &shared.TranslationSettings{
                Formality: shared.FormalityEnumInformal.ToPointer(),
                Profanity: shared.ProfanityEnumMask.ToPointer(),
            },
            SourceLanguageCode: "omnis",
            TargetLanguageCode: "facilis",
            TerminologyNames: []string{
                "voluptatem",
                "porro",
                "consequuntur",
            },
            Text: "blanditiis",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.TranslateTextXAmzTargetEnumAwsShineFrontendService20170701TranslateText,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TranslateTextResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.

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
            ResourceArn: "modi",
            TagKeys: []string{
                "dolorum",
                "deleniti",
                "pariatur",
            },
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsShineFrontendService20170701UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateParallelData

Updates a previously created parallel data resource by importing a new input file from Amazon S3.

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
    res, err := s.SDK.UpdateParallelData(ctx, operations.UpdateParallelDataRequest{
        UpdateParallelDataRequest: shared.UpdateParallelDataRequest{
            ClientToken: "dolorem",
            Description: sdk.String("dolorem"),
            Name: "Norma Erdman",
            ParallelDataConfig: shared.ParallelDataConfig{
                Format: shared.ParallelDataFormatEnumTmx,
                S3URI: "voluptate",
            },
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.UpdateParallelDataXAmzTargetEnumAwsShineFrontendService20170701UpdateParallelData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateParallelDataResponse != nil {
        // handle response
    }
}
```
