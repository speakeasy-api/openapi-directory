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
            XAmzAlgorithm: "dolorem",
            XAmzContentSha256: "quos",
            XAmzCredential: "deleniti",
            XAmzDate: "commodi",
            XAmzSecurityToken: "nobis",
            XAmzSignature: "ea",
            XAmzSignedHeaders: "aspernatur",
            XAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
        },
        Request: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "et",
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6415833391072357588,
                            First: 3572998533988533354,
                            Last: 186115592639377320,
                            StartTime: 8371597839286912540,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 1737084578504854227,
                            First: 4072567731903858704,
                            Last: 4237085410032209086,
                            StartPercentage: 3111927870552615307,
                        },
                        Threshold: 5810679218075794205,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 4375415044152406675,
                            First: 6065226614949015610,
                            Last: 5255522860651016346,
                            StartTime: 4904486519077315581,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8950864482110226516,
                            First: 635778494545269976,
                            Last: 732909964824197774,
                            StartPercentage: 3574948044123775516,
                        },
                        Threshold: 8837983961987368305,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 5910514474348776200,
                            First: 6822908827298521697,
                            Last: 6724775564262686261,
                            StartTime: 448293307772452745,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 5824651986652714030,
                            First: 6131616903038811778,
                            Last: 4594817126626365342,
                            StartPercentage: 5909463814165818777,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 4757942231363494366,
                            First: 6398098165847865044,
                            Last: 8555143277468378870,
                            StartTime: 2953219465361743600,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 9094254215425192755,
                            First: 8700678006278600136,
                            Last: 4987874047483574799,
                            StartPercentage: 1867551380647168719,
                        },
                        Targets: []string{
                            "voluptas",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 1354945883733857766,
                            First: 2429851522834465117,
                            Last: 4014337987995578881,
                            StartTime: 2407209082118264778,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8059088005692139324,
                            First: 1616693811299928439,
                            Last: 6166181411057100347,
                            StartPercentage: 7028536834256048015,
                        },
                        Threshold: 1174564792239911455,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 2323166218679581466,
                            First: 7469748512072958204,
                            Last: 7765873993746785792,
                            StartTime: 7182270801018086339,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3252394919724459204,
                            First: 4839093639110720179,
                            Last: 6513358929122907454,
                            StartPercentage: 7230693517838244503,
                        },
                        Threshold: 6854478643425791986,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 4432917687975454065,
                            First: 3838103805727716046,
                            Last: 5088282042390589507,
                            StartTime: 7067021397838106794,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 6950814023290779017,
                            First: 2685439770505515950,
                            Last: 301785877603363027,
                            StartPercentage: 3728036883544637968,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 1058936719184805791,
                            First: 9128763404757230253,
                            Last: 8358558923616582182,
                            StartTime: 6209843430664353487,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 777632575137638028,
                            First: 1039248335667233226,
                            Last: 1768953860407738737,
                            StartPercentage: 2732151556483902484,
                        },
                        Targets: []string{
                            "alias",
                            "id",
                            "in",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 8981508418491254011,
                            First: 2670592554296272629,
                            Last: 4609291726380021962,
                            StartTime: 2838559931627351935,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3011457315831140961,
                            First: 7813841376088152101,
                            Last: 5646368466189309592,
                            StartPercentage: 7279099440217309754,
                        },
                        Threshold: 8291728496659502847,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 3616220076055127616,
                            First: 1889402167586546675,
                            Last: 6631662835676981989,
                            StartTime: 2489959074308973683,
                        },
                        Negate: true,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3935710304177491303,
                            First: 3594503320079042333,
                            Last: 5067957230603510300,
                            StartPercentage: 4613481507084047686,
                        },
                        Threshold: 8645490517459002672,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6183506943487606482,
                            First: 7653920585589605553,
                            Last: 6151577229671946683,
                            StartTime: 26606651514557410,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3166852158880406779,
                            First: 927782600915074395,
                            Last: 2541103059884869503,
                            StartPercentage: 9089901266438170756,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "POSITIVE",
                            "NEGATIVE",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6741667782486366789,
                            First: 2142001216773853386,
                            Last: 58572451421529771,
                            StartTime: 8036607006448114164,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3450701776215534863,
                            First: 5317553351886277283,
                            Last: 3848007284071124204,
                            StartPercentage: 8598532481109664405,
                        },
                        Targets: []string{
                            "non",
                            "rerum",
                            "repellat",
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
