# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/translate/2017-07-01/go
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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateParallelDataRequest{
        Headers: operations.CreateParallelDataHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSShineFrontendService_20170701.CreateParallelData",
        },
        Request: shared.CreateParallelDataRequest{
            ClientToken: "nihil",
            Description: "fuga",
            EncryptionKey: &shared.EncryptionKey{
                ID: "facilis",
                Type: "KMS",
            },
            Name: "iusto",
            ParallelDataConfig: shared.ParallelDataConfig{
                Format: "TSV",
                S3URI: "saepe",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sapiente",
                    Value: "enim",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateParallelData(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateParallelDataResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateParallelData` - Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.
* `DeleteParallelData` - Deletes a parallel data resource in Amazon Translate.
* `DeleteTerminology` - A synchronous action that deletes a custom terminology.
* `DescribeTextTranslationJob` - Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
* `GetParallelData` - Provides information about a parallel data resource.
* `GetTerminology` - Retrieves a custom terminology.
* `ImportTerminology` - <p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>
* `ListLanguages` - Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.
* `ListParallelData` - Provides a list of your parallel data resources in Amazon Translate.
* `ListTagsForResource` - Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* `ListTerminologies` - Provides a list of custom terminologies associated with your account.
* `ListTextTranslationJobs` - Gets a list of the batch translation jobs that you have submitted.
* `StartTextTranslationJob` - <p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
* `StopTextTranslationJob` - <p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>
* `TagResource` - Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* `TranslateText` - Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.
* `UntagResource` - Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
* `UpdateParallelData` - Updates a previously created parallel data resource by importing a new input file from Amazon S3.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
