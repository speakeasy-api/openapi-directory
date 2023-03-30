# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/transcribe/2017-10-26/go
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

    req := operations.CreateCallAnalyticsCategoryRequest{
        Headers: operations.CreateCallAnalyticsCategoryHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
        },
        Request: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "illum",
            InputType: "REAL_TIME",
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 645894,
                            First: 384382,
                            Last: 437587,
                            StartTime: 297534,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 56713,
                            First: 963663,
                            Last: 272656,
                            StartPercentage: 383441,
                        },
                        Threshold: 477665,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 791725,
                            First: 812169,
                            Last: 528895,
                            StartTime: 479977,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 568045,
                            First: 392785,
                            Last: 925597,
                            StartPercentage: 836079,
                        },
                        Threshold: 71036,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 337396,
                            First: 87129,
                            Last: 648172,
                            StartTime: 20218,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 832620,
                            First: 957156,
                            Last: 778157,
                            StartPercentage: 140350,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "MIXED",
                            "MIXED",
                            "NEGATIVE",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 800911,
                            First: 461479,
                            Last: 520478,
                            StartTime: 780529,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 118274,
                            First: 720633,
                            Last: 639921,
                            StartPercentage: 582020,
                        },
                        Targets: []string{
                            "deleniti",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 944669,
                            First: 758616,
                            Last: 521848,
                            StartTime: 105907,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 473600,
                            First: 264555,
                            Last: 186332,
                            StartPercentage: 774234,
                        },
                        Threshold: 736918,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 456150,
                            First: 216550,
                            Last: 568434,
                            StartTime: 135218,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 18789,
                            First: 324141,
                            Last: 617636,
                            StartPercentage: 149675,
                        },
                        Threshold: 612096,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 222321,
                            First: 616934,
                            Last: 386489,
                            StartTime: 943749,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 681820,
                            First: 449950,
                            Last: 359508,
                            StartPercentage: 613064,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "MIXED",
                            "NEUTRAL",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 99280,
                            First: 60225,
                            Last: 969810,
                            StartTime: 666767,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 670638,
                            First: 170909,
                            Last: 210382,
                            StartPercentage: 358152,
                        },
                        Targets: []string{
                            "nobis",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 315428,
                            First: 607831,
                            Last: 363711,
                            StartTime: 325047,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 38425,
                            First: 438601,
                            Last: 634274,
                            StartPercentage: 988374,
                        },
                        Threshold: 958950,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 102044,
                            First: 652790,
                            Last: 208876,
                            StartTime: 635059,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 161309,
                            First: 995300,
                            Last: 653108,
                            StartPercentage: 581850,
                        },
                        Threshold: 253291,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 414369,
                            First: 466311,
                            Last: 474697,
                            StartTime: 244425,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 158969,
                            First: 338007,
                            Last: 110375,
                            StartPercentage: 674752,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEGATIVE",
                            "POSITIVE",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 196582,
                            First: 949572,
                            Last: 368725,
                            StartTime: 662527,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 13571,
                            First: 97101,
                            Last: 622846,
                            StartPercentage: 837945,
                        },
                        Targets: []string{
                            "quasi",
                            "reiciendis",
                            "voluptatibus",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateCallAnalyticsCategory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCallAnalyticsCategoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateCallAnalyticsCategory` - <p>Creates a new Call Analytics category.</p> <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively.</p> <p>When creating a new category, you can use the <code>InputType</code> parameter to label the category as a <code>POST_CALL</code> or a <code>REAL_TIME</code> category. <code>POST_CALL</code> categories can only be applied to post-call transcriptions and <code>REAL_TIME</code> categories can only be applied to real-time transcriptions. If you do not include <code>InputType</code>, your category is created as a <code>POST_CALL</code> category by default.</p> <p>Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and .</p> <p>To update an existing category, see .</p> <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p>
* `CreateLanguageModel` - <p>Creates a new custom language model.</p> <p>When creating a new custom language model, you must specify:</p> <ul> <li> <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model</p> </li> <li> <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p> </li> <li> <p>The language of your model</p> </li> <li> <p>A unique name for your model</p> </li> </ul>
* `CreateMedicalVocabulary` - <p>Creates a new custom medical vocabulary.</p> <p>Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the <code>Phrases</code> flag; <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code> flag and only accepts vocabularies in table format.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* `CreateVocabulary` - <p>Creates a new custom vocabulary.</p> <p>When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the <code>Phrases</code> flag.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* `CreateVocabularyFilter` - <p>Creates a new custom vocabulary filter.</p> <p>You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary filtering</a>.</p>
* `DeleteCallAnalyticsCategory` - Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using <code>CategoryName</code>. Category names are case sensitive.
* `DeleteCallAnalyticsJob` - Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using <code>CallAnalyticsJobName</code>. Job names are case sensitive.
* `DeleteLanguageModel` - Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using <code>ModelName</code>. custom language model names are case sensitive.
* `DeleteMedicalTranscriptionJob` - Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are case sensitive.
* `DeleteMedicalVocabulary` - Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* `DeleteTranscriptionJob` - Deletes a transcription job. To use this operation, specify the name of the job you want to delete using <code>TranscriptionJobName</code>. Job names are case sensitive.
* `DeleteVocabulary` - Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* `DeleteVocabularyFilter` - Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>. Custom vocabulary filter names are case sensitive.
* `DescribeLanguageModel` - <p>Provides information about the specified custom language model.</p> <p>This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.</p> <p>If you tried to create a new custom language model and the request wasn't successful, you can use <code>DescribeLanguageModel</code> to help identify the reason for this failure.</p>
* `GetCallAnalyticsCategory` - <p>Provides information about the specified Call Analytics category.</p> <p>To get a list of your Call Analytics categories, use the operation.</p>
* `GetCallAnalyticsJob` - <p>Provides information about the specified Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in <code>RedactedMediaFileUri</code>.</p> <p>To get a list of your Call Analytics jobs, use the operation.</p>
* `GetMedicalTranscriptionJob` - <p>Provides information about the specified medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>To get a list of your medical transcription jobs, use the operation.</p>
* `GetMedicalVocabulary` - <p>Provides information about the specified custom medical vocabulary.</p> <p>To view the status of the specified custom medical vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary failed.</p> <p>To get a list of your custom medical vocabularies, use the operation.</p>
* `GetTranscriptionJob` - <p>Provides information about the specified transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>To get a list of your transcription jobs, use the operation.</p>
* `GetVocabulary` - <p>Provides information about the specified custom vocabulary.</p> <p>To view the status of the specified custom vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your custom vocabulary failed.</p> <p>To get a list of your custom vocabularies, use the operation.</p>
* `GetVocabularyFilter` - <p>Provides information about the specified custom vocabulary filter.</p> <p>To get a list of your custom vocabulary filters, use the operation.</p>
* `ListCallAnalyticsCategories` - <p>Provides a list of Call Analytics categories, including all rules that make up each category.</p> <p>To get detailed information about a specific Call Analytics category, use the operation.</p>
* `ListCallAnalyticsJobs` - <p>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned.</p> <p>To get detailed information about a specific Call Analytics job, use the operation.</p>
* `ListLanguageModels` - <p>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned.</p> <p>To get detailed information about a specific custom language model, use the operation.</p>
* `ListMedicalTranscriptionJobs` - <p>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned.</p> <p>To get detailed information about a specific medical transcription job, use the operation.</p>
* `ListMedicalVocabularies` - <p>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned.</p> <p>To get detailed information about a specific custom medical vocabulary, use the operation.</p>
* `ListTagsForResource` - <p>Lists all tags associated with the specified transcription job, vocabulary, model, or resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* `ListTranscriptionJobs` - <p>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned.</p> <p>To get detailed information about a specific transcription job, use the operation.</p>
* `ListVocabularies` - <p>Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary, use the operation.</p>
* `ListVocabularyFilters` - <p>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary filter, use the operation.</p>
* `StartCallAnalyticsJob` - <p>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> <p>If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>Note that job queuing is enabled by default for Call Analytics jobs.</p> <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>CallAnalyticsJobName</code>: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.</p> </li> <li> <p> <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code> or <code>RedactedMediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> </ul> <note> <p>With Call Analytics, you can redact the audio contained in your media file by including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> </note>
* `StartMedicalTranscriptionJob` - <p>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical works</a>.</p> <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartMedicalTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>MedicalTranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p> <code>LanguageCode</code>: This must be <code>en-US</code>.</p> </li> <li> <p> <code>OutputBucketName</code>: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include <code>OutputKey</code>.</p> </li> <li> <p> <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p> </li> <li> <p> <code>Type</code>: Choose whether your audio is a conversation or a dictation.</p> </li> </ul>
* `StartTranscriptionJob` - <p>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request.</p> <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>TranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code>: If you know the language of your media file, specify it using the <code>LanguageCode</code> parameter; you can find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. If you don't know the languages spoken in your media, use either <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify the languages for you.</p> </li> </ul>
* `TagResource` - <p>Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* `UntagResource` - <p>Removes the specified tags from the specified Amazon Transcribe resource.</p> <p>If you include <code>UntagResource</code> in your request, you must also include <code>ResourceArn</code> and <code>TagKeys</code>.</p>
* `UpdateCallAnalyticsCategory` - <p>Updates the specified Call Analytics category with new rules. Note that the <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.</p> <p>To create a new category, see .</p>
* `UpdateMedicalVocabulary` - Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* `UpdateVocabulary` - Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* `UpdateVocabularyFilter` - Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
