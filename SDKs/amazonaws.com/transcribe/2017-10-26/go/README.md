# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateCallAnalyticsCategoryRequest{
        Headers: operations.CreateCallAnalyticsCategoryHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
        },
        Request: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "fugit",
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 2661732831099943416,
                            First: 8325060299420976708,
                            Last: 7837839688282259259,
                            StartTime: 2518412263346885298,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 7144924247938981575,
                            First: 161231572858529631,
                            Last: 7259475919510918339,
                            StartPercentage: 7373105480197164748,
                        },
                        Threshold: 3287288577352441706,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 3930927879439176946,
                            First: 4706154865122290029,
                            Last: 2217592893536642650,
                            StartTime: 1929546706668609706,
                        },
                        Negate: true,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3706853784096366226,
                            First: 2627038740284806767,
                            Last: 6303220950515014660,
                            StartPercentage: 4035568504096476779,
                        },
                        Threshold: 959367522974354090,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 2914295034816259174,
                            First: 1395437218309923052,
                            Last: 6745438398739480977,
                            StartTime: 2897681629866238117,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3317123977833389635,
                            First: 5001958211167890979,
                            Last: 167566062957544642,
                            StartPercentage: 4778690082005258714,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "POSITIVE",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 5558237345453186302,
                            First: 7845762441295307478,
                            Last: 771642788862502430,
                            StartTime: 8514850266767180993,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 7699391924090763411,
                            First: 388440063886460141,
                            Last: 7561811714888168464,
                            StartPercentage: 3959279844101328186,
                        },
                        Targets: []string{
                            "modi",
                            "sint",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
            },
        },
    }
    
    res, err := s.CreateCallAnalyticsCategory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCallAnalyticsCategoryResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateCallAnalyticsCategory` - Creates an analytics category. Amazon Transcribe applies the conditions specified by your analytics categories to your call analytics jobs. For each analytics category, you specify one or more rules. For example, you can specify a rule that the customer sentiment was neutral or negative within that category. If you start a call analytics job, Amazon Transcribe applies the category to the analytics job that you've specified.
* `CreateLanguageModel` - Creates a new custom language model. Use Amazon S3 prefixes to provide the location of your input files. The time it takes to create your model depends on the size of your training data.
* `CreateMedicalVocabulary` - Creates a new custom vocabulary that you can use to modify how Amazon Transcribe Medical transcribes your audio file.
* `CreateVocabulary` - Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file.
* `CreateVocabularyFilter` - Creates a new vocabulary filter that you can use to filter words, such as profane words, from the output of a transcription job.
* `DeleteCallAnalyticsCategory` - Deletes a call analytics category using its name.
* `DeleteCallAnalyticsJob` - Deletes a call analytics job using its name.
* `DeleteLanguageModel` - Deletes a custom language model using its name.
* `DeleteMedicalTranscriptionJob` - Deletes a transcription job generated by Amazon Transcribe Medical and any related information.
* `DeleteMedicalVocabulary` - Deletes a vocabulary from Amazon Transcribe Medical.
* `DeleteTranscriptionJob` - Deletes a previously submitted transcription job along with any other generated results such as the transcription, models, and so on.
* `DeleteVocabulary` - Deletes a vocabulary from Amazon Transcribe. 
* `DeleteVocabularyFilter` - Removes a vocabulary filter.
* `DescribeLanguageModel` - Gets information about a single custom language model. Use this information to see details about the language model in your Amazon Web Services account. You can also see whether the base language model used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If the language model wasn't created, you can use this operation to understand why Amazon Transcribe couldn't create it. 
* `GetCallAnalyticsCategory` - Retrieves information about a call analytics category.
* `GetCallAnalyticsJob` - Returns information about a call analytics job. To see the status of the job, check the <code>CallAnalyticsJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable personally identifiable information (PII) redaction, the redacted transcript appears in the <code>RedactedTranscriptFileUri</code> field.
* `GetMedicalTranscriptionJob` - Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You find the results of the completed job in the <code>TranscriptFileUri</code> field.
* `GetMedicalVocabulary` - Retrieves information about a medical vocabulary.
* `GetTranscriptionJob` - Returns information about a transcription job. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted transcript appears in <code>RedactedTranscriptFileUri</code>.
* `GetVocabulary` - Gets information about a vocabulary. 
* `GetVocabularyFilter` - Returns information about a vocabulary filter.
* `ListCallAnalyticsCategories` - Provides more information about the call analytics categories that you've created. You can use the information in this list to find a specific category. You can then use the operation to get more information about it.
* `ListCallAnalyticsJobs` - List call analytics jobs with a specified status or substring that matches their names.
* `ListLanguageModels` - Provides more information about the custom language models you've created. You can use the information in this list to find a specific custom language model. You can then use the operation to get more information about it.
* `ListMedicalTranscriptionJobs` - Lists medical transcription jobs with a specified status or substring that matches their names.
* `ListMedicalVocabularies` - Returns a list of vocabularies that match the specified criteria. If you don't enter a value in any of the request parameters, returns the entire list of vocabularies.
* `ListTagsForResource` - Lists all tags associated with a given transcription job, vocabulary, or resource.
* `ListTranscriptionJobs` - Lists transcription jobs with the specified status.
* `ListVocabularies` - Returns a list of vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.
* `ListVocabularyFilters` - Gets information about vocabulary filters.
* `StartCallAnalyticsJob` - Starts an asynchronous analytics job that not only transcribes the audio recording of a caller and agent, but also returns additional insights. These insights include how quickly or loudly the caller or agent was speaking. To retrieve additional insights with your analytics jobs, create categories. A category is a way to classify analytics jobs based on attributes, such as a customer's sentiment or a particular phrase being used during the call. For more information, see the operation. 
* `StartMedicalTranscriptionJob` - Starts a batch job to transcribe medical speech to text.
* `StartTranscriptionJob` - Starts an asynchronous job to transcribe speech to text.
* `TagResource` - Tags a Amazon Transcribe resource with the given list of tags.
* `UntagResource` - Removes specified tags from a specified Amazon Transcribe resource.
* `UpdateCallAnalyticsCategory` - Updates the call analytics category with new values. The <code>UpdateCallAnalyticsCategory</code> operation overwrites all of the existing information with the values that you provide in the request. 
* `UpdateMedicalVocabulary` - Updates a vocabulary with new values that you provide in a different text file from the one you used to create the vocabulary. The <code>UpdateMedicalVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request.
* `UpdateVocabulary` - Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request. 
* `UpdateVocabularyFilter` - Updates a vocabulary filter with a new list of filtered words.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
