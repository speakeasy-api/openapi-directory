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
            XAmzAlgorithm: "nemo",
            XAmzContentSha256: "voluptate",
            XAmzCredential: "harum",
            XAmzDate: "in",
            XAmzSecurityToken: "doloribus",
            XAmzSignature: "ut",
            XAmzSignedHeaders: "fugit",
            XAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
        },
        Request: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "quidem",
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 5336277454034406272,
                            First: 1218029543746308865,
                            Last: 8711323242707794750,
                            StartTime: 4786873994085620073,
                        },
                        Negate: true,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8681448736709792492,
                            First: 8843178762909941511,
                            Last: 5144550845621037084,
                            StartPercentage: 6580010265485859134,
                        },
                        Threshold: 6484329848990702586,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 9200300415099738243,
                            First: 9196412727204014287,
                            Last: 6045120471366708344,
                            StartTime: 6074370712228508279,
                        },
                        Negate: true,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8213733991439134579,
                            First: 6674178362169036754,
                            Last: 4021674889336767743,
                            StartPercentage: 4553174173746381904,
                        },
                        Threshold: 989091601292141376,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 1376927017588058395,
                            First: 6959983523951215426,
                            Last: 2428953924739529784,
                            StartTime: 1011461110648362546,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8528216463489172710,
                            First: 725235948094613350,
                            Last: 4233348973768874798,
                            StartPercentage: 1342125891621164403,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEUTRAL",
                            "POSITIVE",
                            "POSITIVE",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 8711730822118208836,
                            First: 5181346669559793201,
                            Last: 5574603858462484864,
                            StartTime: 9190244281140204256,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3663057658826620379,
                            First: 115823346082349085,
                            Last: 3363204431279602429,
                            StartPercentage: 57437767531503963,
                        },
                        Targets: []string{
                            "tempora",
                            "velit",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6613167672984031801,
                            First: 3584035640808979034,
                            Last: 7631329305858912387,
                            StartTime: 4883180688227366407,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 7011499513981219804,
                            First: 4471552887527204086,
                            Last: 4201207593044208891,
                            StartPercentage: 6463540908571642921,
                        },
                        Threshold: 8780590008709385125,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6903445559935402770,
                            First: 8411096056595132837,
                            Last: 2150676067792058941,
                            StartTime: 6642379958826014427,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 5389573714392081446,
                            First: 6521914908641398924,
                            Last: 6585424684882927481,
                            StartPercentage: 6108316656062704112,
                        },
                        Threshold: 7588503257562630111,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 3316505136672236965,
                            First: 3889838825141332195,
                            Last: 6006281059711840,
                            StartTime: 3007218505232506518,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 656218400201611567,
                            First: 7789084174083090295,
                            Last: 8259585080344169019,
                            StartPercentage: 2963641962930928403,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEGATIVE",
                            "MIXED",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6776125662575650986,
                            First: 6969188280212051739,
                            Last: 4912062599292149577,
                            StartTime: 5623759263480213541,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8278714757291536813,
                            First: 8862827163684169132,
                            Last: 2579969089363039556,
                            StartPercentage: 6220812115750260392,
                        },
                        Targets: []string{
                            "voluptatem",
                            "omnis",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 5286065203460241242,
                            First: 4238138030004755645,
                            Last: 4360352506346374904,
                            StartTime: 1881072773164933129,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 5620368036922258373,
                            First: 8581312207893161575,
                            Last: 9198946798273129036,
                            StartPercentage: 6416643106480811624,
                        },
                        Threshold: 5731495313057977443,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 7376201324970210606,
                            First: 7776899679625897395,
                            Last: 186419219586351569,
                            StartTime: 4224250376210029763,
                        },
                        Negate: true,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 4212988410140770605,
                            First: 8296866676506619135,
                            Last: 6639369403309398831,
                            StartPercentage: 648832223801244656,
                        },
                        Threshold: 1240810409161554001,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 8885171940256243686,
                            First: 5866761042508268179,
                            Last: 5338749943273899601,
                            StartTime: 5150259423224589213,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 2908546562159264772,
                            First: 4630004974886566506,
                            Last: 144153526583668598,
                            StartPercentage: 6771010612534797755,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEUTRAL",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 421120806850004545,
                            First: 5595691125029894066,
                            Last: 6823661893871202900,
                            StartTime: 5247443146048660447,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 2684399817121960666,
                            First: 8289392119546275015,
                            Last: 8768690139785603795,
                            StartPercentage: 1569509831803725495,
                        },
                        Targets: []string{
                            "maxime",
                            "quibusdam",
                            "asperiores",
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
