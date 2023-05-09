# SDK

## Overview

<p>Amazon Transcribe offers three main types of batch transcription: <b>Standard</b>, <b>Medical</b>, and <b>Call Analytics</b>.</p> <ul> <li> <p> <b>Standard transcriptions</b> are the most common option. Refer to for details.</p> </li> <li> <p> <b>Medical transcriptions</b> are tailored to medical professionals and incorporate medical terms. A common use case for this service is transcribing doctor-patient dialogue into after-visit notes. Refer to for details.</p> </li> <li> <p> <b>Call Analytics transcriptions</b> are designed for use with call center audio on two different channels; if you're looking for insight into customer service calls, use this option. Refer to for details.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/transcribe/>
### Available Operations

* [CreateCallAnalyticsCategory](#createcallanalyticscategory) - <p>Creates a new Call Analytics category.</p> <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively.</p> <p>When creating a new category, you can use the <code>InputType</code> parameter to label the category as a <code>POST_CALL</code> or a <code>REAL_TIME</code> category. <code>POST_CALL</code> categories can only be applied to post-call transcriptions and <code>REAL_TIME</code> categories can only be applied to real-time transcriptions. If you do not include <code>InputType</code>, your category is created as a <code>POST_CALL</code> category by default.</p> <p>Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and .</p> <p>To update an existing category, see .</p> <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p>
* [CreateLanguageModel](#createlanguagemodel) - <p>Creates a new custom language model.</p> <p>When creating a new custom language model, you must specify:</p> <ul> <li> <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model</p> </li> <li> <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p> </li> <li> <p>The language of your model</p> </li> <li> <p>A unique name for your model</p> </li> </ul>
* [CreateMedicalVocabulary](#createmedicalvocabulary) - <p>Creates a new custom medical vocabulary.</p> <p>Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the <code>Phrases</code> flag; <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code> flag and only accepts vocabularies in table format.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* [CreateVocabulary](#createvocabulary) - <p>Creates a new custom vocabulary.</p> <p>When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the <code>Phrases</code> flag.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* [CreateVocabularyFilter](#createvocabularyfilter) - <p>Creates a new custom vocabulary filter.</p> <p>You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary filtering</a>.</p>
* [DeleteCallAnalyticsCategory](#deletecallanalyticscategory) - Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using <code>CategoryName</code>. Category names are case sensitive.
* [DeleteCallAnalyticsJob](#deletecallanalyticsjob) - Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using <code>CallAnalyticsJobName</code>. Job names are case sensitive.
* [DeleteLanguageModel](#deletelanguagemodel) - Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using <code>ModelName</code>. custom language model names are case sensitive.
* [DeleteMedicalTranscriptionJob](#deletemedicaltranscriptionjob) - Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are case sensitive.
* [DeleteMedicalVocabulary](#deletemedicalvocabulary) - Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* [DeleteTranscriptionJob](#deletetranscriptionjob) - Deletes a transcription job. To use this operation, specify the name of the job you want to delete using <code>TranscriptionJobName</code>. Job names are case sensitive.
* [DeleteVocabulary](#deletevocabulary) - Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* [DeleteVocabularyFilter](#deletevocabularyfilter) - Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>. Custom vocabulary filter names are case sensitive.
* [DescribeLanguageModel](#describelanguagemodel) - <p>Provides information about the specified custom language model.</p> <p>This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.</p> <p>If you tried to create a new custom language model and the request wasn't successful, you can use <code>DescribeLanguageModel</code> to help identify the reason for this failure.</p>
* [GetCallAnalyticsCategory](#getcallanalyticscategory) - <p>Provides information about the specified Call Analytics category.</p> <p>To get a list of your Call Analytics categories, use the operation.</p>
* [GetCallAnalyticsJob](#getcallanalyticsjob) - <p>Provides information about the specified Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in <code>RedactedMediaFileUri</code>.</p> <p>To get a list of your Call Analytics jobs, use the operation.</p>
* [GetMedicalTranscriptionJob](#getmedicaltranscriptionjob) - <p>Provides information about the specified medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>To get a list of your medical transcription jobs, use the operation.</p>
* [GetMedicalVocabulary](#getmedicalvocabulary) - <p>Provides information about the specified custom medical vocabulary.</p> <p>To view the status of the specified custom medical vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary failed.</p> <p>To get a list of your custom medical vocabularies, use the operation.</p>
* [GetTranscriptionJob](#gettranscriptionjob) - <p>Provides information about the specified transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>To get a list of your transcription jobs, use the operation.</p>
* [GetVocabulary](#getvocabulary) - <p>Provides information about the specified custom vocabulary.</p> <p>To view the status of the specified custom vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your custom vocabulary failed.</p> <p>To get a list of your custom vocabularies, use the operation.</p>
* [GetVocabularyFilter](#getvocabularyfilter) - <p>Provides information about the specified custom vocabulary filter.</p> <p>To get a list of your custom vocabulary filters, use the operation.</p>
* [ListCallAnalyticsCategories](#listcallanalyticscategories) - <p>Provides a list of Call Analytics categories, including all rules that make up each category.</p> <p>To get detailed information about a specific Call Analytics category, use the operation.</p>
* [ListCallAnalyticsJobs](#listcallanalyticsjobs) - <p>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned.</p> <p>To get detailed information about a specific Call Analytics job, use the operation.</p>
* [ListLanguageModels](#listlanguagemodels) - <p>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned.</p> <p>To get detailed information about a specific custom language model, use the operation.</p>
* [ListMedicalTranscriptionJobs](#listmedicaltranscriptionjobs) - <p>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned.</p> <p>To get detailed information about a specific medical transcription job, use the operation.</p>
* [ListMedicalVocabularies](#listmedicalvocabularies) - <p>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned.</p> <p>To get detailed information about a specific custom medical vocabulary, use the operation.</p>
* [ListTagsForResource](#listtagsforresource) - <p>Lists all tags associated with the specified transcription job, vocabulary, model, or resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* [ListTranscriptionJobs](#listtranscriptionjobs) - <p>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned.</p> <p>To get detailed information about a specific transcription job, use the operation.</p>
* [ListVocabularies](#listvocabularies) - <p>Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary, use the operation.</p>
* [ListVocabularyFilters](#listvocabularyfilters) - <p>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary filter, use the operation.</p>
* [StartCallAnalyticsJob](#startcallanalyticsjob) - <p>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> <p>If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>Note that job queuing is enabled by default for Call Analytics jobs.</p> <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>CallAnalyticsJobName</code>: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.</p> </li> <li> <p> <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code> or <code>RedactedMediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> </ul> <note> <p>With Call Analytics, you can redact the audio contained in your media file by including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> </note>
* [StartMedicalTranscriptionJob](#startmedicaltranscriptionjob) - <p>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical works</a>.</p> <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartMedicalTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>MedicalTranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p> <code>LanguageCode</code>: This must be <code>en-US</code>.</p> </li> <li> <p> <code>OutputBucketName</code>: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include <code>OutputKey</code>.</p> </li> <li> <p> <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p> </li> <li> <p> <code>Type</code>: Choose whether your audio is a conversation or a dictation.</p> </li> </ul>
* [StartTranscriptionJob](#starttranscriptionjob) - <p>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request.</p> <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>TranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code>: If you know the language of your media file, specify it using the <code>LanguageCode</code> parameter; you can find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. If you don't know the languages spoken in your media, use either <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify the languages for you.</p> </li> </ul>
* [TagResource](#tagresource) - <p>Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* [UntagResource](#untagresource) - <p>Removes the specified tags from the specified Amazon Transcribe resource.</p> <p>If you include <code>UntagResource</code> in your request, you must also include <code>ResourceArn</code> and <code>TagKeys</code>.</p>
* [UpdateCallAnalyticsCategory](#updatecallanalyticscategory) - <p>Updates the specified Call Analytics category with new rules. Note that the <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.</p> <p>To create a new category, see .</p>
* [UpdateMedicalVocabulary](#updatemedicalvocabulary) - Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* [UpdateVocabulary](#updatevocabulary) - Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* [UpdateVocabularyFilter](#updatevocabularyfilter) - Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.

## CreateCallAnalyticsCategory

<p>Creates a new Call Analytics category.</p> <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively.</p> <p>When creating a new category, you can use the <code>InputType</code> parameter to label the category as a <code>POST_CALL</code> or a <code>REAL_TIME</code> category. <code>POST_CALL</code> categories can only be applied to post-call transcriptions and <code>REAL_TIME</code> categories can only be applied to real-time transcriptions. If you do not include <code>InputType</code>, your category is created as a <code>POST_CALL</code> category by default.</p> <p>Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and .</p> <p>To update an existing category, see .</p> <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p>

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
    res, err := s.SDK.CreateCallAnalyticsCategory(ctx, operations.CreateCallAnalyticsCategoryRequest{
        CreateCallAnalyticsCategoryRequest: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "nihil",
            InputType: shared.InputTypeEnumPostCall.ToPointer(),
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(55714),
                            First: sdk.Int64(604846),
                            Last: sdk.Int64(451159),
                            StartTime: sdk.Int64(739264),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumAgent.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(39187),
                            First: sdk.Int64(441711),
                            Last: sdk.Int64(282807),
                            StartPercentage: sdk.Int64(979587),
                        },
                        Threshold: sdk.Int64(120196),
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(359444),
                            First: sdk.Int64(296140),
                            Last: sdk.Int64(480894),
                            StartTime: sdk.Int64(118727),
                        },
                        Negate: sdk.Bool(false),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(688661),
                            First: sdk.Int64(317983),
                            Last: sdk.Int64(880476),
                            StartPercentage: sdk.Int64(414263),
                        },
                        Threshold: sdk.Int64(918236),
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(64147),
                            First: sdk.Int64(216822),
                            Last: sdk.Int64(692472),
                            StartTime: sdk.Int64(565189),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(865103),
                            First: sdk.Int64(265389),
                            Last: sdk.Int64(508969),
                            StartPercentage: sdk.Int64(523248),
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            shared.SentimentValueEnumPositive,
                            shared.SentimentValueEnumMixed,
                            shared.SentimentValueEnumNeutral,
                            shared.SentimentValueEnumPositive,
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(929297),
                            First: sdk.Int64(277718),
                            Last: sdk.Int64(318569),
                            StartTime: sdk.Int64(9356),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(842342),
                            First: sdk.Int64(131797),
                            Last: sdk.Int64(647174),
                            StartPercentage: sdk.Int64(716327),
                        },
                        Targets: []string{
                            "labore",
                            "modi",
                            "qui",
                            "aliquid",
                        },
                        TranscriptFilterType: shared.TranscriptFilterTypeEnumExact,
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(586513),
                            First: sdk.Int64(552822),
                            Last: sdk.Int64(20107),
                            StartTime: sdk.Int64(164940),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(369808),
                            First: sdk.Int64(4695),
                            Last: sdk.Int64(146441),
                            StartPercentage: sdk.Int64(677817),
                        },
                        Threshold: sdk.Int64(569618),
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(270008),
                            First: sdk.Int64(703737),
                            Last: sdk.Int64(735194),
                            StartTime: sdk.Int64(288476),
                        },
                        Negate: sdk.Bool(false),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(962189),
                            First: sdk.Int64(433288),
                            Last: sdk.Int64(248753),
                            StartPercentage: sdk.Int64(756107),
                        },
                        Threshold: sdk.Int64(576157),
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(396098),
                            First: sdk.Int64(592042),
                            Last: sdk.Int64(896039),
                            StartTime: sdk.Int64(572252),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(223081),
                            First: sdk.Int64(891555),
                            Last: sdk.Int64(952749),
                            StartPercentage: sdk.Int64(680056),
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            shared.SentimentValueEnumNegative,
                            shared.SentimentValueEnumMixed,
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(978571),
                            First: sdk.Int64(699479),
                            Last: sdk.Int64(116202),
                            StartTime: sdk.Int64(297437),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(813798),
                            First: sdk.Int64(411820),
                            Last: sdk.Int64(396506),
                            StartPercentage: sdk.Int64(675439),
                        },
                        Targets: []string{
                            "non",
                            "occaecati",
                            "enim",
                            "accusamus",
                        },
                        TranscriptFilterType: shared.TranscriptFilterTypeEnumExact,
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(965417),
                            First: sdk.Int64(692532),
                            Last: sdk.Int64(588465),
                            StartTime: sdk.Int64(725255),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(501324),
                            First: sdk.Int64(533206),
                            Last: sdk.Int64(956084),
                            StartPercentage: sdk.Int64(230533),
                        },
                        Threshold: sdk.Int64(643990),
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(394869),
                            First: sdk.Int64(423855),
                            Last: sdk.Int64(618809),
                            StartTime: sdk.Int64(606393),
                        },
                        Negate: sdk.Bool(false),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(474867),
                            First: sdk.Int64(19193),
                            Last: sdk.Int64(470132),
                            StartPercentage: sdk.Int64(301575),
                        },
                        Threshold: sdk.Int64(716075),
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(660174),
                            First: sdk.Int64(287991),
                            Last: sdk.Int64(290077),
                            StartTime: sdk.Int64(383462),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(749170),
                            First: sdk.Int64(428769),
                            Last: sdk.Int64(878453),
                            StartPercentage: sdk.Int64(135474),
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            shared.SentimentValueEnumNegative,
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(92373),
                            First: sdk.Int64(569965),
                            Last: sdk.Int64(354047),
                            StartTime: sdk.Int64(590873),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(574325),
                            First: sdk.Int64(33625),
                            Last: sdk.Int64(653201),
                            StartPercentage: sdk.Int64(968962),
                        },
                        Targets: []string{
                            "ad",
                            "eum",
                            "dolor",
                        },
                        TranscriptFilterType: shared.TranscriptFilterTypeEnumExact,
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(896547),
                            First: sdk.Int64(141264),
                            Last: sdk.Int64(367562),
                            StartTime: sdk.Int64(97260),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumAgent.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(984043),
                            First: sdk.Int64(891924),
                            Last: sdk.Int64(260341),
                            StartPercentage: sdk.Int64(806194),
                        },
                        Threshold: sdk.Int64(537023),
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(703889),
                            First: sdk.Int64(447926),
                            Last: sdk.Int64(100226),
                            StartTime: sdk.Int64(99569),
                        },
                        Negate: sdk.Bool(false),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(919483),
                            First: sdk.Int64(352312),
                            Last: sdk.Int64(714242),
                            StartPercentage: sdk.Int64(469249),
                        },
                        Threshold: sdk.Int64(998848),
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(841140),
                            First: sdk.Int64(149448),
                            Last: sdk.Int64(904648),
                            StartTime: sdk.Int64(868126),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumAgent.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(162493),
                            First: sdk.Int64(508315),
                            Last: sdk.Int64(615560),
                            StartPercentage: sdk.Int64(166847),
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            shared.SentimentValueEnumMixed,
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(848009),
                            First: sdk.Int64(864934),
                            Last: sdk.Int64(807319),
                            StartTime: sdk.Int64(411397),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(139972),
                            First: sdk.Int64(407183),
                            Last: sdk.Int64(33222),
                            StartPercentage: sdk.Int64(69167),
                        },
                        Targets: []string{
                            "quidem",
                            "ipsam",
                            "voluptate",
                            "autem",
                        },
                        TranscriptFilterType: shared.TranscriptFilterTypeEnumExact,
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.CreateCallAnalyticsCategoryXAmzTargetEnumTranscribeCreateCallAnalyticsCategory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCallAnalyticsCategoryResponse != nil {
        // handle response
    }
}
```

## CreateLanguageModel

<p>Creates a new custom language model.</p> <p>When creating a new custom language model, you must specify:</p> <ul> <li> <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model</p> </li> <li> <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p> </li> <li> <p>The language of your model</p> </li> <li> <p>A unique name for your model</p> </li> </ul>

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
    res, err := s.SDK.CreateLanguageModel(ctx, operations.CreateLanguageModelRequest{
        CreateLanguageModelRequest: shared.CreateLanguageModelRequest{
            BaseModelName: shared.BaseModelNameEnumNarrowBand,
            InputDataConfig: shared.InputDataConfig{
                DataAccessRoleArn: "aut",
                S3URI: "cumque",
                TuningDataS3URI: sdk.String("corporis"),
            },
            LanguageCode: shared.CLMLanguageCodeEnumJaJp,
            ModelName: "libero",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolores",
                    Value: "quis",
                },
                shared.Tag{
                    Key: "totam",
                    Value: "dignissimos",
                },
                shared.Tag{
                    Key: "eaque",
                    Value: "quis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.CreateLanguageModelXAmzTargetEnumTranscribeCreateLanguageModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLanguageModelResponse != nil {
        // handle response
    }
}
```

## CreateMedicalVocabulary

<p>Creates a new custom medical vocabulary.</p> <p>Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the <code>Phrases</code> flag; <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code> flag and only accepts vocabularies in table format.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>

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
    res, err := s.SDK.CreateMedicalVocabulary(ctx, operations.CreateMedicalVocabularyRequest{
        CreateMedicalVocabularyRequest: shared.CreateMedicalVocabularyRequest{
            LanguageCode: shared.LanguageCodeEnumThTh,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "hic",
                    Value: "recusandae",
                },
                shared.Tag{
                    Key: "omnis",
                    Value: "facilis",
                },
            },
            VocabularyFileURI: "perspiciatis",
            VocabularyName: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.CreateMedicalVocabularyXAmzTargetEnumTranscribeCreateMedicalVocabulary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMedicalVocabularyResponse != nil {
        // handle response
    }
}
```

## CreateVocabulary

<p>Creates a new custom vocabulary.</p> <p>When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the <code>Phrases</code> flag.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>

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
    res, err := s.SDK.CreateVocabulary(ctx, operations.CreateVocabularyRequest{
        CreateVocabularyRequest: shared.CreateVocabularyRequest{
            DataAccessRoleArn: sdk.String("adipisci"),
            LanguageCode: shared.LanguageCodeEnumSvSe,
            Phrases: []string{
                "modi",
                "iste",
                "dolorum",
                "deleniti",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "provident",
                    Value: "nobis",
                },
                shared.Tag{
                    Key: "libero",
                    Value: "delectus",
                },
                shared.Tag{
                    Key: "quaerat",
                    Value: "quos",
                },
                shared.Tag{
                    Key: "aliquid",
                    Value: "dolorem",
                },
            },
            VocabularyFileURI: sdk.String("dolorem"),
            VocabularyName: "dolor",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.CreateVocabularyXAmzTargetEnumTranscribeCreateVocabulary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVocabularyResponse != nil {
        // handle response
    }
}
```

## CreateVocabularyFilter

<p>Creates a new custom vocabulary filter.</p> <p>You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary filtering</a>.</p>

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
    res, err := s.SDK.CreateVocabularyFilter(ctx, operations.CreateVocabularyFilterRequest{
        CreateVocabularyFilterRequest: shared.CreateVocabularyFilterRequest{
            DataAccessRoleArn: sdk.String("reiciendis"),
            LanguageCode: shared.LanguageCodeEnumEnGb,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "numquam",
                    Value: "veritatis",
                },
                shared.Tag{
                    Key: "ipsa",
                    Value: "ipsa",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "odio",
                },
            },
            VocabularyFilterFileURI: sdk.String("quaerat"),
            VocabularyFilterName: "accusamus",
            Words: []string{
                "voluptatibus",
                "voluptas",
                "natus",
            },
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.CreateVocabularyFilterXAmzTargetEnumTranscribeCreateVocabularyFilter,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVocabularyFilterResponse != nil {
        // handle response
    }
}
```

## DeleteCallAnalyticsCategory

Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using <code>CategoryName</code>. Category names are case sensitive.

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
    res, err := s.SDK.DeleteCallAnalyticsCategory(ctx, operations.DeleteCallAnalyticsCategoryRequest{
        DeleteCallAnalyticsCategoryRequest: shared.DeleteCallAnalyticsCategoryRequest{
            CategoryName: "iusto",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DeleteCallAnalyticsCategoryXAmzTargetEnumTranscribeDeleteCallAnalyticsCategory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCallAnalyticsCategoryResponse != nil {
        // handle response
    }
}
```

## DeleteCallAnalyticsJob

Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using <code>CallAnalyticsJobName</code>. Job names are case sensitive.

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
    res, err := s.SDK.DeleteCallAnalyticsJob(ctx, operations.DeleteCallAnalyticsJobRequest{
        DeleteCallAnalyticsJobRequest: shared.DeleteCallAnalyticsJobRequest{
            CallAnalyticsJobName: "nihil",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DeleteCallAnalyticsJobXAmzTargetEnumTranscribeDeleteCallAnalyticsJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCallAnalyticsJobResponse != nil {
        // handle response
    }
}
```

## DeleteLanguageModel

Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using <code>ModelName</code>. custom language model names are case sensitive.

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
    res, err := s.SDK.DeleteLanguageModel(ctx, operations.DeleteLanguageModelRequest{
        DeleteLanguageModelRequest: shared.DeleteLanguageModelRequest{
            ModelName: "amet",
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DeleteLanguageModelXAmzTargetEnumTranscribeDeleteLanguageModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMedicalTranscriptionJob

Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are case sensitive.

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
    res, err := s.SDK.DeleteMedicalTranscriptionJob(ctx, operations.DeleteMedicalTranscriptionJobRequest{
        DeleteMedicalTranscriptionJobRequest: shared.DeleteMedicalTranscriptionJobRequest{
            MedicalTranscriptionJobName: "minima",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.DeleteMedicalTranscriptionJobXAmzTargetEnumTranscribeDeleteMedicalTranscriptionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMedicalVocabulary

Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.

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
    res, err := s.SDK.DeleteMedicalVocabulary(ctx, operations.DeleteMedicalVocabularyRequest{
        DeleteMedicalVocabularyRequest: shared.DeleteMedicalVocabularyRequest{
            VocabularyName: "vel",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.DeleteMedicalVocabularyXAmzTargetEnumTranscribeDeleteMedicalVocabulary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTranscriptionJob

Deletes a transcription job. To use this operation, specify the name of the job you want to delete using <code>TranscriptionJobName</code>. Job names are case sensitive.

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
    res, err := s.SDK.DeleteTranscriptionJob(ctx, operations.DeleteTranscriptionJobRequest{
        DeleteTranscriptionJobRequest: shared.DeleteTranscriptionJobRequest{
            TranscriptionJobName: "iusto",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DeleteTranscriptionJobXAmzTargetEnumTranscribeDeleteTranscriptionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteVocabulary

Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.

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
    res, err := s.SDK.DeleteVocabulary(ctx, operations.DeleteVocabularyRequest{
        DeleteVocabularyRequest: shared.DeleteVocabularyRequest{
            VocabularyName: "enim",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.DeleteVocabularyXAmzTargetEnumTranscribeDeleteVocabulary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteVocabularyFilter

Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>. Custom vocabulary filter names are case sensitive.

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
    res, err := s.SDK.DeleteVocabularyFilter(ctx, operations.DeleteVocabularyFilterRequest{
        DeleteVocabularyFilterRequest: shared.DeleteVocabularyFilterRequest{
            VocabularyFilterName: "sed",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.DeleteVocabularyFilterXAmzTargetEnumTranscribeDeleteVocabularyFilter,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeLanguageModel

<p>Provides information about the specified custom language model.</p> <p>This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.</p> <p>If you tried to create a new custom language model and the request wasn't successful, you can use <code>DescribeLanguageModel</code> to help identify the reason for this failure.</p>

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
    res, err := s.SDK.DescribeLanguageModel(ctx, operations.DescribeLanguageModelRequest{
        DescribeLanguageModelRequest: shared.DescribeLanguageModelRequest{
            ModelName: "qui",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DescribeLanguageModelXAmzTargetEnumTranscribeDescribeLanguageModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLanguageModelResponse != nil {
        // handle response
    }
}
```

## GetCallAnalyticsCategory

<p>Provides information about the specified Call Analytics category.</p> <p>To get a list of your Call Analytics categories, use the operation.</p>

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
    res, err := s.SDK.GetCallAnalyticsCategory(ctx, operations.GetCallAnalyticsCategoryRequest{
        GetCallAnalyticsCategoryRequest: shared.GetCallAnalyticsCategoryRequest{
            CategoryName: "incidunt",
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.GetCallAnalyticsCategoryXAmzTargetEnumTranscribeGetCallAnalyticsCategory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCallAnalyticsCategoryResponse != nil {
        // handle response
    }
}
```

## GetCallAnalyticsJob

<p>Provides information about the specified Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in <code>RedactedMediaFileUri</code>.</p> <p>To get a list of your Call Analytics jobs, use the operation.</p>

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
    res, err := s.SDK.GetCallAnalyticsJob(ctx, operations.GetCallAnalyticsJobRequest{
        GetCallAnalyticsJobRequest: shared.GetCallAnalyticsJobRequest{
            CallAnalyticsJobName: "temporibus",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.GetCallAnalyticsJobXAmzTargetEnumTranscribeGetCallAnalyticsJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCallAnalyticsJobResponse != nil {
        // handle response
    }
}
```

## GetMedicalTranscriptionJob

<p>Provides information about the specified medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>To get a list of your medical transcription jobs, use the operation.</p>

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
    res, err := s.SDK.GetMedicalTranscriptionJob(ctx, operations.GetMedicalTranscriptionJobRequest{
        GetMedicalTranscriptionJobRequest: shared.GetMedicalTranscriptionJobRequest{
            MedicalTranscriptionJobName: "nam",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.GetMedicalTranscriptionJobXAmzTargetEnumTranscribeGetMedicalTranscriptionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMedicalTranscriptionJobResponse != nil {
        // handle response
    }
}
```

## GetMedicalVocabulary

<p>Provides information about the specified custom medical vocabulary.</p> <p>To view the status of the specified custom medical vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary failed.</p> <p>To get a list of your custom medical vocabularies, use the operation.</p>

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
    res, err := s.SDK.GetMedicalVocabulary(ctx, operations.GetMedicalVocabularyRequest{
        GetMedicalVocabularyRequest: shared.GetMedicalVocabularyRequest{
            VocabularyName: "ipsum",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.GetMedicalVocabularyXAmzTargetEnumTranscribeGetMedicalVocabulary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMedicalVocabularyResponse != nil {
        // handle response
    }
}
```

## GetTranscriptionJob

<p>Provides information about the specified transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>To get a list of your transcription jobs, use the operation.</p>

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
    res, err := s.SDK.GetTranscriptionJob(ctx, operations.GetTranscriptionJobRequest{
        GetTranscriptionJobRequest: shared.GetTranscriptionJobRequest{
            TranscriptionJobName: "dolorem",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.GetTranscriptionJobXAmzTargetEnumTranscribeGetTranscriptionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTranscriptionJobResponse != nil {
        // handle response
    }
}
```

## GetVocabulary

<p>Provides information about the specified custom vocabulary.</p> <p>To view the status of the specified custom vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your custom vocabulary failed.</p> <p>To get a list of your custom vocabularies, use the operation.</p>

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
    res, err := s.SDK.GetVocabulary(ctx, operations.GetVocabularyRequest{
        GetVocabularyRequest: shared.GetVocabularyRequest{
            VocabularyName: "quas",
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("ut"),
        XAmzTarget: operations.GetVocabularyXAmzTargetEnumTranscribeGetVocabulary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVocabularyResponse != nil {
        // handle response
    }
}
```

## GetVocabularyFilter

<p>Provides information about the specified custom vocabulary filter.</p> <p>To get a list of your custom vocabulary filters, use the operation.</p>

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
    res, err := s.SDK.GetVocabularyFilter(ctx, operations.GetVocabularyFilterRequest{
        GetVocabularyFilterRequest: shared.GetVocabularyFilterRequest{
            VocabularyFilterName: "facilis",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.GetVocabularyFilterXAmzTargetEnumTranscribeGetVocabularyFilter,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVocabularyFilterResponse != nil {
        // handle response
    }
}
```

## ListCallAnalyticsCategories

<p>Provides a list of Call Analytics categories, including all rules that make up each category.</p> <p>To get detailed information about a specific Call Analytics category, use the operation.</p>

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
    res, err := s.SDK.ListCallAnalyticsCategories(ctx, operations.ListCallAnalyticsCategoriesRequest{
        ListCallAnalyticsCategoriesRequest: shared.ListCallAnalyticsCategoriesRequest{
            MaxResults: sdk.Int64(787542),
            NextToken: sdk.String("vero"),
        },
        MaxResults: sdk.String("omnis"),
        NextToken: sdk.String("quis"),
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.ListCallAnalyticsCategoriesXAmzTargetEnumTranscribeListCallAnalyticsCategories,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCallAnalyticsCategoriesResponse != nil {
        // handle response
    }
}
```

## ListCallAnalyticsJobs

<p>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned.</p> <p>To get detailed information about a specific Call Analytics job, use the operation.</p>

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
    res, err := s.SDK.ListCallAnalyticsJobs(ctx, operations.ListCallAnalyticsJobsRequest{
        ListCallAnalyticsJobsRequest: shared.ListCallAnalyticsJobsRequest{
            JobNameContains: sdk.String("hic"),
            MaxResults: sdk.Int64(715561),
            NextToken: sdk.String("quod"),
            Status: shared.CallAnalyticsJobStatusEnumInProgress.ToPointer(),
        },
        MaxResults: sdk.String("similique"),
        NextToken: sdk.String("facilis"),
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.ListCallAnalyticsJobsXAmzTargetEnumTranscribeListCallAnalyticsJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCallAnalyticsJobsResponse != nil {
        // handle response
    }
}
```

## ListLanguageModels

<p>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned.</p> <p>To get detailed information about a specific custom language model, use the operation.</p>

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
    res, err := s.SDK.ListLanguageModels(ctx, operations.ListLanguageModelsRequest{
        ListLanguageModelsRequest: shared.ListLanguageModelsRequest{
            MaxResults: sdk.Int64(773326),
            NameContains: sdk.String("aut"),
            NextToken: sdk.String("voluptatibus"),
            StatusEquals: shared.ModelStatusEnumFailed.ToPointer(),
        },
        MaxResults: sdk.String("nulla"),
        NextToken: sdk.String("fugit"),
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.ListLanguageModelsXAmzTargetEnumTranscribeListLanguageModels,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLanguageModelsResponse != nil {
        // handle response
    }
}
```

## ListMedicalTranscriptionJobs

<p>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned.</p> <p>To get detailed information about a specific medical transcription job, use the operation.</p>

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
    res, err := s.SDK.ListMedicalTranscriptionJobs(ctx, operations.ListMedicalTranscriptionJobsRequest{
        ListMedicalTranscriptionJobsRequest: shared.ListMedicalTranscriptionJobsRequest{
            JobNameContains: sdk.String("officia"),
            MaxResults: sdk.Int64(269479),
            NextToken: sdk.String("ipsam"),
            Status: shared.TranscriptionJobStatusEnumInProgress.ToPointer(),
        },
        MaxResults: sdk.String("aspernatur"),
        NextToken: sdk.String("vel"),
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ListMedicalTranscriptionJobsXAmzTargetEnumTranscribeListMedicalTranscriptionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMedicalTranscriptionJobsResponse != nil {
        // handle response
    }
}
```

## ListMedicalVocabularies

<p>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned.</p> <p>To get detailed information about a specific custom medical vocabulary, use the operation.</p>

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
    res, err := s.SDK.ListMedicalVocabularies(ctx, operations.ListMedicalVocabulariesRequest{
        ListMedicalVocabulariesRequest: shared.ListMedicalVocabulariesRequest{
            MaxResults: sdk.Int64(980700),
            NameContains: sdk.String("quasi"),
            NextToken: sdk.String("ex"),
            StateEquals: shared.VocabularyStateEnumFailed.ToPointer(),
        },
        MaxResults: sdk.String("excepturi"),
        NextToken: sdk.String("voluptatibus"),
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.ListMedicalVocabulariesXAmzTargetEnumTranscribeListMedicalVocabularies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMedicalVocabulariesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Lists all tags associated with the specified transcription job, vocabulary, model, or resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>

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
            ResourceArn: "veniam",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumTranscribeListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTranscriptionJobs

<p>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned.</p> <p>To get detailed information about a specific transcription job, use the operation.</p>

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
    res, err := s.SDK.ListTranscriptionJobs(ctx, operations.ListTranscriptionJobsRequest{
        ListTranscriptionJobsRequest: shared.ListTranscriptionJobsRequest{
            JobNameContains: sdk.String("aspernatur"),
            MaxResults: sdk.Int64(325310),
            NextToken: sdk.String("eaque"),
            Status: shared.TranscriptionJobStatusEnumCompleted.ToPointer(),
        },
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("aut"),
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("inventore"),
        XAmzTarget: operations.ListTranscriptionJobsXAmzTargetEnumTranscribeListTranscriptionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTranscriptionJobsResponse != nil {
        // handle response
    }
}
```

## ListVocabularies

<p>Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary, use the operation.</p>

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
    res, err := s.SDK.ListVocabularies(ctx, operations.ListVocabulariesRequest{
        ListVocabulariesRequest: shared.ListVocabulariesRequest{
            MaxResults: sdk.Int64(250622),
            NameContains: sdk.String("et"),
            NextToken: sdk.String("dolorum"),
            StateEquals: shared.VocabularyStateEnumFailed.ToPointer(),
        },
        MaxResults: sdk.String("placeat"),
        NextToken: sdk.String("velit"),
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.ListVocabulariesXAmzTargetEnumTranscribeListVocabularies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVocabulariesResponse != nil {
        // handle response
    }
}
```

## ListVocabularyFilters

<p>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary filter, use the operation.</p>

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
    res, err := s.SDK.ListVocabularyFilters(ctx, operations.ListVocabularyFiltersRequest{
        ListVocabularyFiltersRequest: shared.ListVocabularyFiltersRequest{
            MaxResults: sdk.Int64(727044),
            NameContains: sdk.String("quasi"),
            NextToken: sdk.String("tempora"),
        },
        MaxResults: sdk.String("numquam"),
        NextToken: sdk.String("explicabo"),
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.ListVocabularyFiltersXAmzTargetEnumTranscribeListVocabularyFilters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVocabularyFiltersResponse != nil {
        // handle response
    }
}
```

## StartCallAnalyticsJob

<p>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> <p>If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>Note that job queuing is enabled by default for Call Analytics jobs.</p> <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>CallAnalyticsJobName</code>: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.</p> </li> <li> <p> <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code> or <code>RedactedMediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> </ul> <note> <p>With Call Analytics, you can redact the audio contained in your media file by including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> </note>

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
    res, err := s.SDK.StartCallAnalyticsJob(ctx, operations.StartCallAnalyticsJobRequest{
        StartCallAnalyticsJobRequest: shared.StartCallAnalyticsJobRequest{
            CallAnalyticsJobName: "esse",
            ChannelDefinitions: []shared.ChannelDefinition{
                shared.ChannelDefinition{
                    ChannelID: sdk.Int64(683282),
                    ParticipantRole: shared.ParticipantRoleEnumAgent.ToPointer(),
                },
                shared.ChannelDefinition{
                    ChannelID: sdk.Int64(695626),
                    ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                },
                shared.ChannelDefinition{
                    ChannelID: sdk.Int64(283519),
                    ParticipantRole: shared.ParticipantRoleEnumAgent.ToPointer(),
                },
            },
            DataAccessRoleArn: sdk.String("suscipit"),
            Media: shared.Media{
                MediaFileURI: sdk.String("assumenda"),
                RedactedMediaFileURI: sdk.String("eos"),
            },
            OutputEncryptionKMSKeyID: sdk.String("praesentium"),
            OutputLocation: sdk.String("quisquam"),
            Settings: &shared.CallAnalyticsJobSettings{
                ContentRedaction: &shared.ContentRedaction{
                    PiiEntityTypes: []shared.PiiEntityTypeEnum{
                        shared.PiiEntityTypeEnumBankAccountNumber,
                    },
                    RedactionOutput: shared.RedactionOutputEnumRedactedAndUnredacted,
                    RedactionType: shared.RedactionTypeEnumPii,
                },
                LanguageIDSettings: map[string]shared.LanguageIDSettings{
                    "neque": shared.LanguageIDSettings{
                        LanguageModelName: sdk.String("quo"),
                        VocabularyFilterName: sdk.String("illum"),
                        VocabularyName: sdk.String("quo"),
                    },
                    "fuga": shared.LanguageIDSettings{
                        LanguageModelName: sdk.String("eius"),
                        VocabularyFilterName: sdk.String("eos"),
                        VocabularyName: sdk.String("voluptas"),
                    },
                    "ab": shared.LanguageIDSettings{
                        LanguageModelName: sdk.String("cupiditate"),
                        VocabularyFilterName: sdk.String("consequatur"),
                        VocabularyName: sdk.String("tempora"),
                    },
                },
                LanguageModelName: sdk.String("debitis"),
                LanguageOptions: []shared.LanguageCodeEnum{
                    shared.LanguageCodeEnumDeDe,
                    shared.LanguageCodeEnumEnAu,
                },
                VocabularyFilterMethod: shared.VocabularyFilterMethodEnumTag.ToPointer(),
                VocabularyFilterName: sdk.String("esse"),
                VocabularyName: sdk.String("recusandae"),
            },
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.StartCallAnalyticsJobXAmzTargetEnumTranscribeStartCallAnalyticsJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartCallAnalyticsJobResponse != nil {
        // handle response
    }
}
```

## StartMedicalTranscriptionJob

<p>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical works</a>.</p> <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartMedicalTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>MedicalTranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p> <code>LanguageCode</code>: This must be <code>en-US</code>.</p> </li> <li> <p> <code>OutputBucketName</code>: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include <code>OutputKey</code>.</p> </li> <li> <p> <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p> </li> <li> <p> <code>Type</code>: Choose whether your audio is a conversation or a dictation.</p> </li> </ul>

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
    res, err := s.SDK.StartMedicalTranscriptionJob(ctx, operations.StartMedicalTranscriptionJobRequest{
        StartMedicalTranscriptionJobRequest: shared.StartMedicalTranscriptionJobRequest{
            ContentIdentificationType: shared.MedicalContentIdentificationTypeEnumPhi.ToPointer(),
            KMSEncryptionContext: map[string]string{
                "aliquam": "odio",
                "occaecati": "commodi",
                "sapiente": "dolores",
                "deserunt": "molestiae",
            },
            LanguageCode: shared.LanguageCodeEnumArAe,
            Media: shared.Media{
                MediaFileURI: sdk.String("porro"),
                RedactedMediaFileURI: sdk.String("eum"),
            },
            MediaFormat: shared.MediaFormatEnumFlac.ToPointer(),
            MediaSampleRateHertz: sdk.Int64(510017),
            MedicalTranscriptionJobName: "consequuntur",
            OutputBucketName: "deleniti",
            OutputEncryptionKMSKeyID: sdk.String("fugit"),
            OutputKey: sdk.String("fuga"),
            Settings: &shared.MedicalTranscriptionSetting{
                ChannelIdentification: sdk.Bool(false),
                MaxAlternatives: sdk.Int64(649463),
                MaxSpeakerLabels: sdk.Int64(277596),
                ShowAlternatives: sdk.Bool(false),
                ShowSpeakerLabels: sdk.Bool(false),
                VocabularyName: sdk.String("atque"),
            },
            Specialty: shared.SpecialtyEnumPrimarycare,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "minima",
                    Value: "nisi",
                },
            },
            Type: shared.TypeEnumConversation,
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.StartMedicalTranscriptionJobXAmzTargetEnumTranscribeStartMedicalTranscriptionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartMedicalTranscriptionJobResponse != nil {
        // handle response
    }
}
```

## StartTranscriptionJob

<p>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request.</p> <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>TranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code>: If you know the language of your media file, specify it using the <code>LanguageCode</code> parameter; you can find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. If you don't know the languages spoken in your media, use either <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify the languages for you.</p> </li> </ul>

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
    res, err := s.SDK.StartTranscriptionJob(ctx, operations.StartTranscriptionJobRequest{
        StartTranscriptionJobRequest: shared.StartTranscriptionJobRequest{
            ContentRedaction: &shared.ContentRedaction{
                PiiEntityTypes: []shared.PiiEntityTypeEnum{
                    shared.PiiEntityTypeEnumPin,
                },
                RedactionOutput: shared.RedactionOutputEnumRedactedAndUnredacted,
                RedactionType: shared.RedactionTypeEnumPii,
            },
            IdentifyLanguage: sdk.Bool(false),
            IdentifyMultipleLanguages: sdk.Bool(false),
            JobExecutionSettings: &shared.JobExecutionSettings{
                AllowDeferredExecution: sdk.Bool(false),
                DataAccessRoleArn: sdk.String("accusamus"),
            },
            KMSEncryptionContext: map[string]string{
                "esse": "quod",
            },
            LanguageCode: shared.LanguageCodeEnumRuRu.ToPointer(),
            LanguageIDSettings: map[string]shared.LanguageIDSettings{
                "aliquid": shared.LanguageIDSettings{
                    LanguageModelName: sdk.String("quasi"),
                    VocabularyFilterName: sdk.String("saepe"),
                    VocabularyName: sdk.String("vel"),
                },
                "harum": shared.LanguageIDSettings{
                    LanguageModelName: sdk.String("molestiae"),
                    VocabularyFilterName: sdk.String("rerum"),
                    VocabularyName: sdk.String("occaecati"),
                },
                "minima": shared.LanguageIDSettings{
                    LanguageModelName: sdk.String("distinctio"),
                    VocabularyFilterName: sdk.String("eligendi"),
                    VocabularyName: sdk.String("sit"),
                },
                "culpa": shared.LanguageIDSettings{
                    LanguageModelName: sdk.String("tempore"),
                    VocabularyFilterName: sdk.String("adipisci"),
                    VocabularyName: sdk.String("cumque"),
                },
            },
            LanguageOptions: []shared.LanguageCodeEnum{
                shared.LanguageCodeEnumAfZa,
            },
            Media: shared.Media{
                MediaFileURI: sdk.String("minus"),
                RedactedMediaFileURI: sdk.String("quaerat"),
            },
            MediaFormat: shared.MediaFormatEnumWebm.ToPointer(),
            MediaSampleRateHertz: sdk.Int64(232865),
            ModelSettings: &shared.ModelSettings{
                LanguageModelName: sdk.String("esse"),
            },
            OutputBucketName: sdk.String("blanditiis"),
            OutputEncryptionKMSKeyID: sdk.String("provident"),
            OutputKey: sdk.String("a"),
            Settings: &shared.Settings{
                ChannelIdentification: sdk.Bool(false),
                MaxAlternatives: sdk.Int64(857723),
                MaxSpeakerLabels: sdk.Int64(557811),
                ShowAlternatives: sdk.Bool(false),
                ShowSpeakerLabels: sdk.Bool(false),
                VocabularyFilterMethod: shared.VocabularyFilterMethodEnumMask.ToPointer(),
                VocabularyFilterName: sdk.String("quasi"),
                VocabularyName: sdk.String("a"),
            },
            Subtitles: &shared.Subtitles{
                Formats: []shared.SubtitleFormatEnum{
                    shared.SubtitleFormatEnumSrt,
                    shared.SubtitleFormatEnumSrt,
                    shared.SubtitleFormatEnumSrt,
                },
                OutputStartIndex: sdk.Int64(157632),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "asperiores",
                    Value: "facere",
                },
                shared.Tag{
                    Key: "veritatis",
                    Value: "consequuntur",
                },
                shared.Tag{
                    Key: "quasi",
                    Value: "similique",
                },
                shared.Tag{
                    Key: "culpa",
                    Value: "aliquid",
                },
            },
            TranscriptionJobName: "tenetur",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.StartTranscriptionJobXAmzTargetEnumTranscribeStartTranscriptionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartTranscriptionJobResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>

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
            ResourceArn: "soluta",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "aliquam",
                    Value: "sapiente",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumTranscribeTagResource,
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

<p>Removes the specified tags from the specified Amazon Transcribe resource.</p> <p>If you include <code>UntagResource</code> in your request, you must also include <code>ResourceArn</code> and <code>TagKeys</code>.</p>

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
            ResourceArn: "qui",
            TagKeys: []string{
                "ex",
                "deleniti",
                "itaque",
                "dolorum",
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumTranscribeUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateCallAnalyticsCategory

<p>Updates the specified Call Analytics category with new rules. Note that the <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.</p> <p>To create a new category, see .</p>

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
    res, err := s.SDK.UpdateCallAnalyticsCategory(ctx, operations.UpdateCallAnalyticsCategoryRequest{
        UpdateCallAnalyticsCategoryRequest: shared.UpdateCallAnalyticsCategoryRequest{
            CategoryName: "ipsa",
            InputType: shared.InputTypeEnumRealTime.ToPointer(),
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(232744),
                            First: sdk.Int64(237173),
                            Last: sdk.Int64(614465),
                            StartTime: sdk.Int64(839513),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumAgent.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(522371),
                            First: sdk.Int64(15606),
                            Last: sdk.Int64(513075),
                            StartPercentage: sdk.Int64(428796),
                        },
                        Threshold: sdk.Int64(649832),
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(68074),
                            First: sdk.Int64(544591),
                            Last: sdk.Int64(251941),
                            StartTime: sdk.Int64(32465),
                        },
                        Negate: sdk.Bool(false),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(221161),
                            First: sdk.Int64(580152),
                            Last: sdk.Int64(253191),
                            StartPercentage: sdk.Int64(771089),
                        },
                        Threshold: sdk.Int64(131055),
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(376226),
                            First: sdk.Int64(12036),
                            Last: sdk.Int64(491025),
                            StartTime: sdk.Int64(115484),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(618480),
                            First: sdk.Int64(244651),
                            Last: sdk.Int64(974257),
                            StartPercentage: sdk.Int64(374323),
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            shared.SentimentValueEnumPositive,
                            shared.SentimentValueEnumNegative,
                            shared.SentimentValueEnumNegative,
                            shared.SentimentValueEnumPositive,
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(831520),
                            First: sdk.Int64(638762),
                            Last: sdk.Int64(807023),
                            StartTime: sdk.Int64(490305),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(989410),
                            First: sdk.Int64(368102),
                            Last: sdk.Int64(65304),
                            StartPercentage: sdk.Int64(312753),
                        },
                        Targets: []string{
                            "quod",
                            "labore",
                            "ab",
                            "adipisci",
                        },
                        TranscriptFilterType: shared.TranscriptFilterTypeEnumExact,
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.UpdateCallAnalyticsCategoryXAmzTargetEnumTranscribeUpdateCallAnalyticsCategory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCallAnalyticsCategoryResponse != nil {
        // handle response
    }
}
```

## UpdateMedicalVocabulary

Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

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
    res, err := s.SDK.UpdateMedicalVocabulary(ctx, operations.UpdateMedicalVocabularyRequest{
        UpdateMedicalVocabularyRequest: shared.UpdateMedicalVocabularyRequest{
            LanguageCode: shared.LanguageCodeEnumIDID,
            VocabularyFileURI: "fugiat",
            VocabularyName: "vel",
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.UpdateMedicalVocabularyXAmzTargetEnumTranscribeUpdateMedicalVocabulary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMedicalVocabularyResponse != nil {
        // handle response
    }
}
```

## UpdateVocabulary

Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

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
    res, err := s.SDK.UpdateVocabulary(ctx, operations.UpdateVocabularyRequest{
        UpdateVocabularyRequest: shared.UpdateVocabularyRequest{
            DataAccessRoleArn: sdk.String("commodi"),
            LanguageCode: shared.LanguageCodeEnumFrFr,
            Phrases: []string{
                "reiciendis",
                "assumenda",
            },
            VocabularyFileURI: sdk.String("nemo"),
            VocabularyName: "recusandae",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.UpdateVocabularyXAmzTargetEnumTranscribeUpdateVocabulary,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVocabularyResponse != nil {
        // handle response
    }
}
```

## UpdateVocabularyFilter

Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.

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
    res, err := s.SDK.UpdateVocabularyFilter(ctx, operations.UpdateVocabularyFilterRequest{
        UpdateVocabularyFilterRequest: shared.UpdateVocabularyFilterRequest{
            DataAccessRoleArn: sdk.String("facere"),
            VocabularyFilterFileURI: sdk.String("numquam"),
            VocabularyFilterName: "doloribus",
            Words: []string{
                "reiciendis",
                "quidem",
            },
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.UpdateVocabularyFilterXAmzTargetEnumTranscribeUpdateVocabularyFilter,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVocabularyFilterResponse != nil {
        // handle response
    }
}
```
