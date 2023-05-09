# SDK

## Overview

<p>Amazon Transcribe offers three main types of batch transcription: <b>Standard</b>, <b>Medical</b>, and <b>Call Analytics</b>.</p> <ul> <li> <p> <b>Standard transcriptions</b> are the most common option. Refer to for details.</p> </li> <li> <p> <b>Medical transcriptions</b> are tailored to medical professionals and incorporate medical terms. A common use case for this service is transcribing doctor-patient dialogue into after-visit notes. Refer to for details.</p> </li> <li> <p> <b>Call Analytics transcriptions</b> are designed for use with call center audio on two different channels; if you're looking for insight into customer service calls, use this option. Refer to for details.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/transcribe/>
### Available Operations

* [createCallAnalyticsCategory](#createcallanalyticscategory) - <p>Creates a new Call Analytics category.</p> <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively.</p> <p>When creating a new category, you can use the <code>InputType</code> parameter to label the category as a <code>POST_CALL</code> or a <code>REAL_TIME</code> category. <code>POST_CALL</code> categories can only be applied to post-call transcriptions and <code>REAL_TIME</code> categories can only be applied to real-time transcriptions. If you do not include <code>InputType</code>, your category is created as a <code>POST_CALL</code> category by default.</p> <p>Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and .</p> <p>To update an existing category, see .</p> <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p>
* [createLanguageModel](#createlanguagemodel) - <p>Creates a new custom language model.</p> <p>When creating a new custom language model, you must specify:</p> <ul> <li> <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model</p> </li> <li> <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p> </li> <li> <p>The language of your model</p> </li> <li> <p>A unique name for your model</p> </li> </ul>
* [createMedicalVocabulary](#createmedicalvocabulary) - <p>Creates a new custom medical vocabulary.</p> <p>Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the <code>Phrases</code> flag; <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code> flag and only accepts vocabularies in table format.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* [createVocabulary](#createvocabulary) - <p>Creates a new custom vocabulary.</p> <p>When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the <code>Phrases</code> flag.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* [createVocabularyFilter](#createvocabularyfilter) - <p>Creates a new custom vocabulary filter.</p> <p>You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary filtering</a>.</p>
* [deleteCallAnalyticsCategory](#deletecallanalyticscategory) - Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using <code>CategoryName</code>. Category names are case sensitive.
* [deleteCallAnalyticsJob](#deletecallanalyticsjob) - Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using <code>CallAnalyticsJobName</code>. Job names are case sensitive.
* [deleteLanguageModel](#deletelanguagemodel) - Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using <code>ModelName</code>. custom language model names are case sensitive.
* [deleteMedicalTranscriptionJob](#deletemedicaltranscriptionjob) - Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are case sensitive.
* [deleteMedicalVocabulary](#deletemedicalvocabulary) - Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* [deleteTranscriptionJob](#deletetranscriptionjob) - Deletes a transcription job. To use this operation, specify the name of the job you want to delete using <code>TranscriptionJobName</code>. Job names are case sensitive.
* [deleteVocabulary](#deletevocabulary) - Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* [deleteVocabularyFilter](#deletevocabularyfilter) - Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>. Custom vocabulary filter names are case sensitive.
* [describeLanguageModel](#describelanguagemodel) - <p>Provides information about the specified custom language model.</p> <p>This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.</p> <p>If you tried to create a new custom language model and the request wasn't successful, you can use <code>DescribeLanguageModel</code> to help identify the reason for this failure.</p>
* [getCallAnalyticsCategory](#getcallanalyticscategory) - <p>Provides information about the specified Call Analytics category.</p> <p>To get a list of your Call Analytics categories, use the operation.</p>
* [getCallAnalyticsJob](#getcallanalyticsjob) - <p>Provides information about the specified Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in <code>RedactedMediaFileUri</code>.</p> <p>To get a list of your Call Analytics jobs, use the operation.</p>
* [getMedicalTranscriptionJob](#getmedicaltranscriptionjob) - <p>Provides information about the specified medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>To get a list of your medical transcription jobs, use the operation.</p>
* [getMedicalVocabulary](#getmedicalvocabulary) - <p>Provides information about the specified custom medical vocabulary.</p> <p>To view the status of the specified custom medical vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary failed.</p> <p>To get a list of your custom medical vocabularies, use the operation.</p>
* [getTranscriptionJob](#gettranscriptionjob) - <p>Provides information about the specified transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>To get a list of your transcription jobs, use the operation.</p>
* [getVocabulary](#getvocabulary) - <p>Provides information about the specified custom vocabulary.</p> <p>To view the status of the specified custom vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your custom vocabulary failed.</p> <p>To get a list of your custom vocabularies, use the operation.</p>
* [getVocabularyFilter](#getvocabularyfilter) - <p>Provides information about the specified custom vocabulary filter.</p> <p>To get a list of your custom vocabulary filters, use the operation.</p>
* [listCallAnalyticsCategories](#listcallanalyticscategories) - <p>Provides a list of Call Analytics categories, including all rules that make up each category.</p> <p>To get detailed information about a specific Call Analytics category, use the operation.</p>
* [listCallAnalyticsJobs](#listcallanalyticsjobs) - <p>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned.</p> <p>To get detailed information about a specific Call Analytics job, use the operation.</p>
* [listLanguageModels](#listlanguagemodels) - <p>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned.</p> <p>To get detailed information about a specific custom language model, use the operation.</p>
* [listMedicalTranscriptionJobs](#listmedicaltranscriptionjobs) - <p>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned.</p> <p>To get detailed information about a specific medical transcription job, use the operation.</p>
* [listMedicalVocabularies](#listmedicalvocabularies) - <p>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned.</p> <p>To get detailed information about a specific custom medical vocabulary, use the operation.</p>
* [listTagsForResource](#listtagsforresource) - <p>Lists all tags associated with the specified transcription job, vocabulary, model, or resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* [listTranscriptionJobs](#listtranscriptionjobs) - <p>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned.</p> <p>To get detailed information about a specific transcription job, use the operation.</p>
* [listVocabularies](#listvocabularies) - <p>Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary, use the operation.</p>
* [listVocabularyFilters](#listvocabularyfilters) - <p>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary filter, use the operation.</p>
* [startCallAnalyticsJob](#startcallanalyticsjob) - <p>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> <p>If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>Note that job queuing is enabled by default for Call Analytics jobs.</p> <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>CallAnalyticsJobName</code>: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.</p> </li> <li> <p> <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code> or <code>RedactedMediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> </ul> <note> <p>With Call Analytics, you can redact the audio contained in your media file by including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> </note>
* [startMedicalTranscriptionJob](#startmedicaltranscriptionjob) - <p>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical works</a>.</p> <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartMedicalTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>MedicalTranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p> <code>LanguageCode</code>: This must be <code>en-US</code>.</p> </li> <li> <p> <code>OutputBucketName</code>: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include <code>OutputKey</code>.</p> </li> <li> <p> <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p> </li> <li> <p> <code>Type</code>: Choose whether your audio is a conversation or a dictation.</p> </li> </ul>
* [startTranscriptionJob](#starttranscriptionjob) - <p>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request.</p> <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>TranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code>: If you know the language of your media file, specify it using the <code>LanguageCode</code> parameter; you can find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. If you don't know the languages spoken in your media, use either <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify the languages for you.</p> </li> </ul>
* [tagResource](#tagresource) - <p>Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* [untagResource](#untagresource) - <p>Removes the specified tags from the specified Amazon Transcribe resource.</p> <p>If you include <code>UntagResource</code> in your request, you must also include <code>ResourceArn</code> and <code>TagKeys</code>.</p>
* [updateCallAnalyticsCategory](#updatecallanalyticscategory) - <p>Updates the specified Call Analytics category with new rules. Note that the <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.</p> <p>To create a new category, see .</p>
* [updateMedicalVocabulary](#updatemedicalvocabulary) - Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* [updateVocabulary](#updatevocabulary) - Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* [updateVocabularyFilter](#updatevocabularyfilter) - Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.

## createCallAnalyticsCategory

<p>Creates a new Call Analytics category.</p> <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively.</p> <p>When creating a new category, you can use the <code>InputType</code> parameter to label the category as a <code>POST_CALL</code> or a <code>REAL_TIME</code> category. <code>POST_CALL</code> categories can only be applied to post-call transcriptions and <code>REAL_TIME</code> categories can only be applied to real-time transcriptions. If you do not include <code>InputType</code>, your category is created as a <code>POST_CALL</code> category by default.</p> <p>Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and .</p> <p>To update an existing category, see .</p> <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryResponse;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.AbsoluteTimeRange;
import org.openapis.openapi.models.shared.CreateCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.shared.InputTypeEnum;
import org.openapis.openapi.models.shared.InterruptionFilter;
import org.openapis.openapi.models.shared.NonTalkTimeFilter;
import org.openapis.openapi.models.shared.ParticipantRoleEnum;
import org.openapis.openapi.models.shared.RelativeTimeRange;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SentimentFilter;
import org.openapis.openapi.models.shared.SentimentValueEnum;
import org.openapis.openapi.models.shared.TranscriptFilter;
import org.openapis.openapi.models.shared.TranscriptFilterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCallAnalyticsCategoryRequest req = new CreateCallAnalyticsCategoryRequest(                new CreateCallAnalyticsCategoryRequest("pariatur",                 new org.openapis.openapi.models.shared.Rule[]{{
                                                add(new Rule() {{
                                                    interruptionFilter = new InterruptionFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 508969L;
                                                            first = 523248L;
                                                            last = 916723L;
                                                            startTime = 93940L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 575947L;
                                                            first = 83112L;
                                                            last = 929297L;
                                                            startPercentage = 277718L;
                                                        }};
                                                        threshold = 318569L;
                                                    }};
                                                    nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 9356L;
                                                            first = 667411L;
                                                            last = 842342L;
                                                            startTime = 131797L;
                                                        }};
                                                        negate = false;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 647174L;
                                                            first = 716327L;
                                                            last = 841386L;
                                                            startPercentage = 289406L;
                                                        }};
                                                        threshold = 264730L;
                                                    }};
                                                    sentimentFilter = new SentimentFilter(                new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                                        add(SentimentValueEnum.NEGATIVE),
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                    }}) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 183191L;
                                                            first = 397821L;
                                                            last = 586513L;
                                                            startTime = 552822L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 164940L;
                                                            first = 828940L;
                                                            last = 369808L;
                                                            startPercentage = 4695L;
                                                        }};
                                                        sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                            add(SentimentValueEnum.NEUTRAL),
                                                        }};
                                                    }};
                                                    transcriptFilter = new TranscriptFilter(                new String[]{{
                                                                        add("dolorum"),
                                                                        add("in"),
                                                                        add("in"),
                                                                        add("illum"),
                                                                    }}, TranscriptFilterTypeEnum.EXACT) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 288476L;
                                                            first = 962189L;
                                                            last = 433288L;
                                                            startTime = 248753L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 576157L;
                                                            first = 396098L;
                                                            last = 592042L;
                                                            startPercentage = 896039L;
                                                        }};
                                                        targets = new String[]{{
                                                            add("officia"),
                                                            add("dolor"),
                                                            add("debitis"),
                                                        }};
                                                        transcriptFilterType = TranscriptFilterTypeEnum.EXACT;
                                                    }};
                                                }}),
                                                add(new Rule() {{
                                                    interruptionFilter = new InterruptionFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 978571L;
                                                            first = 699479L;
                                                            last = 116202L;
                                                            startTime = 297437L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 813798L;
                                                            first = 411820L;
                                                            last = 396506L;
                                                            startPercentage = 675439L;
                                                        }};
                                                        threshold = 881104L;
                                                    }};
                                                    nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 249796L;
                                                            first = 581273L;
                                                            last = 313218L;
                                                            startTime = 881736L;
                                                        }};
                                                        negate = false;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 965417L;
                                                            first = 692532L;
                                                            last = 588465L;
                                                            startPercentage = 725255L;
                                                        }};
                                                        threshold = 659669L;
                                                    }};
                                                    sentimentFilter = new SentimentFilter(                new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                    }}) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 501324L;
                                                            first = 533206L;
                                                            last = 956084L;
                                                            startTime = 230533L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 394869L;
                                                            first = 423855L;
                                                            last = 618809L;
                                                            startPercentage = 606393L;
                                                        }};
                                                        sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                            add(SentimentValueEnum.POSITIVE),
                                                            add(SentimentValueEnum.NEGATIVE),
                                                        }};
                                                    }};
                                                    transcriptFilter = new TranscriptFilter(                new String[]{{
                                                                        add("provident"),
                                                                        add("quos"),
                                                                    }}, TranscriptFilterTypeEnum.EXACT) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 287991L;
                                                            first = 290077L;
                                                            last = 383462L;
                                                            startTime = 618016L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 428769L;
                                                            first = 878453L;
                                                            last = 135474L;
                                                            startPercentage = 102863L;
                                                        }};
                                                        targets = new String[]{{
                                                            add("et"),
                                                            add("excepturi"),
                                                        }};
                                                        transcriptFilterType = TranscriptFilterTypeEnum.EXACT;
                                                    }};
                                                }}),
                                            }}) {{
                                inputType = InputTypeEnum.POST_CALL;
                            }};, CreateCallAnalyticsCategoryXAmzTargetEnum.TRANSCRIBE_CREATE_CALL_ANALYTICS_CATEGORY) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
            }};            

            CreateCallAnalyticsCategoryResponse res = sdk.sdk.createCallAnalyticsCategory(req);

            if (res.createCallAnalyticsCategoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLanguageModel

<p>Creates a new custom language model.</p> <p>When creating a new custom language model, you must specify:</p> <ul> <li> <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model</p> </li> <li> <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p> </li> <li> <p>The language of your model</p> </li> <li> <p>A unique name for your model</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLanguageModelRequest;
import org.openapis.openapi.models.operations.CreateLanguageModelResponse;
import org.openapis.openapi.models.operations.CreateLanguageModelXAmzTargetEnum;
import org.openapis.openapi.models.shared.BaseModelNameEnum;
import org.openapis.openapi.models.shared.CLMLanguageCodeEnum;
import org.openapis.openapi.models.shared.CreateLanguageModelRequest;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLanguageModelRequest req = new CreateLanguageModelRequest(                new CreateLanguageModelRequest(BaseModelNameEnum.NARROW_BAND,                 new InputDataConfig("nemo", "quasi") {{
                                                tuningDataS3Uri = "iure";
                                            }};, CLMLanguageCodeEnum.JA_JP, "debitis") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("facilis", "in") {{
                                        key = "maxime";
                                        value = "deleniti";
                                    }}),
                                    add(new Tag("repudiandae", "ullam") {{
                                        key = "architecto";
                                        value = "architecto";
                                    }}),
                                }};
                            }};, CreateLanguageModelXAmzTargetEnum.TRANSCRIBE_CREATE_LANGUAGE_MODEL) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
            }};            

            CreateLanguageModelResponse res = sdk.sdk.createLanguageModel(req);

            if (res.createLanguageModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMedicalVocabulary

<p>Creates a new custom medical vocabulary.</p> <p>Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the <code>Phrases</code> flag; <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code> flag and only accepts vocabularies in table format.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMedicalVocabularyRequest;
import org.openapis.openapi.models.operations.CreateMedicalVocabularyResponse;
import org.openapis.openapi.models.operations.CreateMedicalVocabularyXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateMedicalVocabularyRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMedicalVocabularyRequest req = new CreateMedicalVocabularyRequest(                new CreateMedicalVocabularyRequest(LanguageCodeEnum.EN_AB, "praesentium", "natus") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("illum", "pariatur") {{
                                        key = "sunt";
                                        value = "quo";
                                    }}),
                                }};
                            }};, CreateMedicalVocabularyXAmzTargetEnum.TRANSCRIBE_CREATE_MEDICAL_VOCABULARY) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "ea";
                xAmzCredential = "excepturi";
                xAmzDate = "odit";
                xAmzSecurityToken = "ea";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "ab";
            }};            

            CreateMedicalVocabularyResponse res = sdk.sdk.createMedicalVocabulary(req);

            if (res.createMedicalVocabularyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVocabulary

<p>Creates a new custom vocabulary.</p> <p>When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the <code>Phrases</code> flag.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVocabularyRequest;
import org.openapis.openapi.models.operations.CreateVocabularyResponse;
import org.openapis.openapi.models.operations.CreateVocabularyXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateVocabularyRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVocabularyRequest req = new CreateVocabularyRequest(                new CreateVocabularyRequest(LanguageCodeEnum.PTPT, "ipsam") {{
                                dataAccessRoleArn = "voluptate";
                                phrases = new String[]{{
                                    add("nam"),
                                    add("eaque"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("perferendis", "fugiat") {{
                                        key = "nemo";
                                        value = "voluptatibus";
                                    }}),
                                    add(new Tag("cumque", "corporis") {{
                                        key = "amet";
                                        value = "aut";
                                    }}),
                                    add(new Tag("nobis", "dolores") {{
                                        key = "hic";
                                        value = "libero";
                                    }}),
                                    add(new Tag("dignissimos", "eaque") {{
                                        key = "quis";
                                        value = "totam";
                                    }}),
                                }};
                                vocabularyFileUri = "quis";
                            }};, CreateVocabularyXAmzTargetEnum.TRANSCRIBE_CREATE_VOCABULARY) {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "eos";
                xAmzCredential = "perferendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "minus";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "dolor";
            }};            

            CreateVocabularyResponse res = sdk.sdk.createVocabulary(req);

            if (res.createVocabularyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVocabularyFilter

<p>Creates a new custom vocabulary filter.</p> <p>You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary filtering</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVocabularyFilterRequest;
import org.openapis.openapi.models.operations.CreateVocabularyFilterResponse;
import org.openapis.openapi.models.operations.CreateVocabularyFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateVocabularyFilterRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVocabularyFilterRequest req = new CreateVocabularyFilterRequest(                new CreateVocabularyFilterRequest(LanguageCodeEnum.ESES, "hic") {{
                                dataAccessRoleArn = "recusandae";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("voluptatem", "porro") {{
                                        key = "facilis";
                                        value = "perspiciatis";
                                    }}),
                                    add(new Tag("error", "eaque") {{
                                        key = "consequuntur";
                                        value = "blanditiis";
                                    }}),
                                    add(new Tag("adipisci", "asperiores") {{
                                        key = "occaecati";
                                        value = "rerum";
                                    }}),
                                }};
                                vocabularyFilterFileUri = "earum";
                                words = new String[]{{
                                    add("iste"),
                                    add("dolorum"),
                                }};
                            }};, CreateVocabularyFilterXAmzTargetEnum.TRANSCRIBE_CREATE_VOCABULARY_FILTER) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "provident";
                xAmzDate = "nobis";
                xAmzSecurityToken = "libero";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quaerat";
            }};            

            CreateVocabularyFilterResponse res = sdk.sdk.createVocabularyFilter(req);

            if (res.createVocabularyFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCallAnalyticsCategory

Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using <code>CategoryName</code>. Category names are case sensitive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.operations.DeleteCallAnalyticsCategoryResponse;
import org.openapis.openapi.models.operations.DeleteCallAnalyticsCategoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCallAnalyticsCategoryRequest req = new DeleteCallAnalyticsCategoryRequest(                new DeleteCallAnalyticsCategoryRequest("aliquid");, DeleteCallAnalyticsCategoryXAmzTargetEnum.TRANSCRIBE_DELETE_CALL_ANALYTICS_CATEGORY) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolor";
                xAmzDate = "qui";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
            }};            

            DeleteCallAnalyticsCategoryResponse res = sdk.sdk.deleteCallAnalyticsCategory(req);

            if (res.deleteCallAnalyticsCategoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCallAnalyticsJob

Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using <code>CallAnalyticsJobName</code>. Job names are case sensitive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCallAnalyticsJobRequest;
import org.openapis.openapi.models.operations.DeleteCallAnalyticsJobResponse;
import org.openapis.openapi.models.operations.DeleteCallAnalyticsJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCallAnalyticsJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCallAnalyticsJobRequest req = new DeleteCallAnalyticsJobRequest(                new DeleteCallAnalyticsJobRequest("voluptate");, DeleteCallAnalyticsJobXAmzTargetEnum.TRANSCRIBE_DELETE_CALL_ANALYTICS_JOB) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "amet";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
            }};            

            DeleteCallAnalyticsJobResponse res = sdk.sdk.deleteCallAnalyticsJob(req);

            if (res.deleteCallAnalyticsJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLanguageModel

Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using <code>ModelName</code>. custom language model names are case sensitive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLanguageModelRequest;
import org.openapis.openapi.models.operations.DeleteLanguageModelResponse;
import org.openapis.openapi.models.operations.DeleteLanguageModelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLanguageModelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLanguageModelRequest req = new DeleteLanguageModelRequest(                new DeleteLanguageModelRequest("iure");, DeleteLanguageModelXAmzTargetEnum.TRANSCRIBE_DELETE_LANGUAGE_MODEL) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "accusamus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "natus";
            }};            

            DeleteLanguageModelResponse res = sdk.sdk.deleteLanguageModel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMedicalTranscriptionJob

Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are case sensitive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMedicalTranscriptionJobRequest;
import org.openapis.openapi.models.operations.DeleteMedicalTranscriptionJobResponse;
import org.openapis.openapi.models.operations.DeleteMedicalTranscriptionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMedicalTranscriptionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMedicalTranscriptionJobRequest req = new DeleteMedicalTranscriptionJobRequest(                new DeleteMedicalTranscriptionJobRequest("atque");, DeleteMedicalTranscriptionJobXAmzTargetEnum.TRANSCRIBE_DELETE_MEDICAL_TRANSCRIPTION_JOB) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ab";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "voluptate";
            }};            

            DeleteMedicalTranscriptionJobResponse res = sdk.sdk.deleteMedicalTranscriptionJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMedicalVocabulary

Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMedicalVocabularyRequest;
import org.openapis.openapi.models.operations.DeleteMedicalVocabularyResponse;
import org.openapis.openapi.models.operations.DeleteMedicalVocabularyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMedicalVocabularyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMedicalVocabularyRequest req = new DeleteMedicalVocabularyRequest(                new DeleteMedicalVocabularyRequest("deleniti");, DeleteMedicalVocabularyXAmzTargetEnum.TRANSCRIBE_DELETE_MEDICAL_VOCABULARY) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "voluptate";
            }};            

            DeleteMedicalVocabularyResponse res = sdk.sdk.deleteMedicalVocabulary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTranscriptionJob

Deletes a transcription job. To use this operation, specify the name of the job you want to delete using <code>TranscriptionJobName</code>. Job names are case sensitive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTranscriptionJobRequest;
import org.openapis.openapi.models.operations.DeleteTranscriptionJobResponse;
import org.openapis.openapi.models.operations.DeleteTranscriptionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTranscriptionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTranscriptionJobRequest req = new DeleteTranscriptionJobRequest(                new DeleteTranscriptionJobRequest("saepe");, DeleteTranscriptionJobXAmzTargetEnum.TRANSCRIBE_DELETE_TRANSCRIPTION_JOB) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "optio";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "ad";
            }};            

            DeleteTranscriptionJobResponse res = sdk.sdk.deleteTranscriptionJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVocabulary

Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVocabularyRequest;
import org.openapis.openapi.models.operations.DeleteVocabularyResponse;
import org.openapis.openapi.models.operations.DeleteVocabularyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteVocabularyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVocabularyRequest req = new DeleteVocabularyRequest(                new DeleteVocabularyRequest("suscipit");, DeleteVocabularyXAmzTargetEnum.TRANSCRIBE_DELETE_VOCABULARY) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "provident";
                xAmzCredential = "minima";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "totam";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "alias";
            }};            

            DeleteVocabularyResponse res = sdk.sdk.deleteVocabulary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVocabularyFilter

Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>. Custom vocabulary filter names are case sensitive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVocabularyFilterRequest;
import org.openapis.openapi.models.operations.DeleteVocabularyFilterResponse;
import org.openapis.openapi.models.operations.DeleteVocabularyFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteVocabularyFilterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVocabularyFilterRequest req = new DeleteVocabularyFilterRequest(                new DeleteVocabularyFilterRequest("quaerat");, DeleteVocabularyFilterXAmzTargetEnum.TRANSCRIBE_DELETE_VOCABULARY_FILTER) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "vel";
                xAmzCredential = "quod";
                xAmzDate = "officiis";
                xAmzSecurityToken = "qui";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "a";
            }};            

            DeleteVocabularyFilterResponse res = sdk.sdk.deleteVocabularyFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLanguageModel

<p>Provides information about the specified custom language model.</p> <p>This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.</p> <p>If you tried to create a new custom language model and the request wasn't successful, you can use <code>DescribeLanguageModel</code> to help identify the reason for this failure.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLanguageModelRequest;
import org.openapis.openapi.models.operations.DescribeLanguageModelResponse;
import org.openapis.openapi.models.operations.DescribeLanguageModelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLanguageModelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLanguageModelRequest req = new DescribeLanguageModelRequest(                new DescribeLanguageModelRequest("harum");, DescribeLanguageModelXAmzTargetEnum.TRANSCRIBE_DESCRIBE_LANGUAGE_MODEL) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
            }};            

            DescribeLanguageModelResponse res = sdk.sdk.describeLanguageModel(req);

            if (res.describeLanguageModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallAnalyticsCategory

<p>Provides information about the specified Call Analytics category.</p> <p>To get a list of your Call Analytics categories, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.operations.GetCallAnalyticsCategoryResponse;
import org.openapis.openapi.models.operations.GetCallAnalyticsCategoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCallAnalyticsCategoryRequest req = new GetCallAnalyticsCategoryRequest(                new GetCallAnalyticsCategoryRequest("enim");, GetCallAnalyticsCategoryXAmzTargetEnum.TRANSCRIBE_GET_CALL_ANALYTICS_CATEGORY) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "totam";
                xAmzDate = "nihil";
                xAmzSecurityToken = "sit";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "neque";
            }};            

            GetCallAnalyticsCategoryResponse res = sdk.sdk.getCallAnalyticsCategory(req);

            if (res.getCallAnalyticsCategoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallAnalyticsJob

<p>Provides information about the specified Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in <code>RedactedMediaFileUri</code>.</p> <p>To get a list of your Call Analytics jobs, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallAnalyticsJobRequest;
import org.openapis.openapi.models.operations.GetCallAnalyticsJobResponse;
import org.openapis.openapi.models.operations.GetCallAnalyticsJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCallAnalyticsJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCallAnalyticsJobRequest req = new GetCallAnalyticsJobRequest(                new GetCallAnalyticsJobRequest("vel");, GetCallAnalyticsJobXAmzTargetEnum.TRANSCRIBE_GET_CALL_ANALYTICS_JOB) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            GetCallAnalyticsJobResponse res = sdk.sdk.getCallAnalyticsJob(req);

            if (res.getCallAnalyticsJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMedicalTranscriptionJob

<p>Provides information about the specified medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>To get a list of your medical transcription jobs, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMedicalTranscriptionJobRequest;
import org.openapis.openapi.models.operations.GetMedicalTranscriptionJobResponse;
import org.openapis.openapi.models.operations.GetMedicalTranscriptionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMedicalTranscriptionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMedicalTranscriptionJobRequest req = new GetMedicalTranscriptionJobRequest(                new GetMedicalTranscriptionJobRequest("maxime");, GetMedicalTranscriptionJobXAmzTargetEnum.TRANSCRIBE_GET_MEDICAL_TRANSCRIPTION_JOB) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dicta";
                xAmzDate = "laborum";
                xAmzSecurityToken = "totam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "aspernatur";
            }};            

            GetMedicalTranscriptionJobResponse res = sdk.sdk.getMedicalTranscriptionJob(req);

            if (res.getMedicalTranscriptionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMedicalVocabulary

<p>Provides information about the specified custom medical vocabulary.</p> <p>To view the status of the specified custom medical vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary failed.</p> <p>To get a list of your custom medical vocabularies, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMedicalVocabularyRequest;
import org.openapis.openapi.models.operations.GetMedicalVocabularyResponse;
import org.openapis.openapi.models.operations.GetMedicalVocabularyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMedicalVocabularyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMedicalVocabularyRequest req = new GetMedicalVocabularyRequest(                new GetMedicalVocabularyRequest("distinctio");, GetMedicalVocabularyXAmzTargetEnum.TRANSCRIBE_GET_MEDICAL_VOCABULARY) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quam";
                xAmzDate = "molestias";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "neque";
            }};            

            GetMedicalVocabularyResponse res = sdk.sdk.getMedicalVocabulary(req);

            if (res.getMedicalVocabularyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTranscriptionJob

<p>Provides information about the specified transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>To get a list of your transcription jobs, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTranscriptionJobRequest;
import org.openapis.openapi.models.operations.GetTranscriptionJobResponse;
import org.openapis.openapi.models.operations.GetTranscriptionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTranscriptionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTranscriptionJobRequest req = new GetTranscriptionJobRequest(                new GetTranscriptionJobRequest("magni");, GetTranscriptionJobXAmzTargetEnum.TRANSCRIBE_GET_TRANSCRIPTION_JOB) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
            }};            

            GetTranscriptionJobResponse res = sdk.sdk.getTranscriptionJob(req);

            if (res.getTranscriptionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVocabulary

<p>Provides information about the specified custom vocabulary.</p> <p>To view the status of the specified custom vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your custom vocabulary failed.</p> <p>To get a list of your custom vocabularies, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVocabularyRequest;
import org.openapis.openapi.models.operations.GetVocabularyResponse;
import org.openapis.openapi.models.operations.GetVocabularyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetVocabularyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVocabularyRequest req = new GetVocabularyRequest(                new GetVocabularyRequest("nobis");, GetVocabularyXAmzTargetEnum.TRANSCRIBE_GET_VOCABULARY) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ipsum";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "tempore";
            }};            

            GetVocabularyResponse res = sdk.sdk.getVocabulary(req);

            if (res.getVocabularyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVocabularyFilter

<p>Provides information about the specified custom vocabulary filter.</p> <p>To get a list of your custom vocabulary filters, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVocabularyFilterRequest;
import org.openapis.openapi.models.operations.GetVocabularyFilterResponse;
import org.openapis.openapi.models.operations.GetVocabularyFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetVocabularyFilterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVocabularyFilterRequest req = new GetVocabularyFilterRequest(                new GetVocabularyFilterRequest("aperiam");, GetVocabularyFilterXAmzTargetEnum.TRANSCRIBE_GET_VOCABULARY_FILTER) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolore";
                xAmzDate = "labore";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "architecto";
            }};            

            GetVocabularyFilterResponse res = sdk.sdk.getVocabularyFilter(req);

            if (res.getVocabularyFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCallAnalyticsCategories

<p>Provides a list of Call Analytics categories, including all rules that make up each category.</p> <p>To get detailed information about a specific Call Analytics category, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCallAnalyticsCategoriesRequest;
import org.openapis.openapi.models.operations.ListCallAnalyticsCategoriesResponse;
import org.openapis.openapi.models.operations.ListCallAnalyticsCategoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCallAnalyticsCategoriesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCallAnalyticsCategoriesRequest req = new ListCallAnalyticsCategoriesRequest(                new ListCallAnalyticsCategoriesRequest() {{
                                maxResults = 16429L;
                                nextToken = "quas";
                            }};, ListCallAnalyticsCategoriesXAmzTargetEnum.TRANSCRIBE_LIST_CALL_ANALYTICS_CATEGORIES) {{
                maxResults = "itaque";
                nextToken = "consequatur";
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "porro";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "ut";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "cupiditate";
            }};            

            ListCallAnalyticsCategoriesResponse res = sdk.sdk.listCallAnalyticsCategories(req);

            if (res.listCallAnalyticsCategoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCallAnalyticsJobs

<p>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned.</p> <p>To get detailed information about a specific Call Analytics job, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCallAnalyticsJobsRequest;
import org.openapis.openapi.models.operations.ListCallAnalyticsJobsResponse;
import org.openapis.openapi.models.operations.ListCallAnalyticsJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CallAnalyticsJobStatusEnum;
import org.openapis.openapi.models.shared.ListCallAnalyticsJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCallAnalyticsJobsRequest req = new ListCallAnalyticsJobsRequest(                new ListCallAnalyticsJobsRequest() {{
                                jobNameContains = "quae";
                                maxResults = 512393L;
                                nextToken = "odio";
                                status = CallAnalyticsJobStatusEnum.FAILED;
                            }};, ListCallAnalyticsJobsXAmzTargetEnum.TRANSCRIBE_LIST_CALL_ANALYTICS_JOBS) {{
                maxResults = "voluptatibus";
                nextToken = "quisquam";
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "quis";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "consectetur";
            }};            

            ListCallAnalyticsJobsResponse res = sdk.sdk.listCallAnalyticsJobs(req);

            if (res.listCallAnalyticsJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLanguageModels

<p>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned.</p> <p>To get detailed information about a specific custom language model, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLanguageModelsRequest;
import org.openapis.openapi.models.operations.ListLanguageModelsResponse;
import org.openapis.openapi.models.operations.ListLanguageModelsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLanguageModelsRequest;
import org.openapis.openapi.models.shared.ModelStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLanguageModelsRequest req = new ListLanguageModelsRequest(                new ListLanguageModelsRequest() {{
                                maxResults = 949319L;
                                nameContains = "dignissimos";
                                nextToken = "hic";
                                statusEquals = ModelStatusEnum.COMPLETED;
                            }};, ListLanguageModelsXAmzTargetEnum.TRANSCRIBE_LIST_LANGUAGE_MODELS) {{
                maxResults = "quod";
                nextToken = "odio";
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "vero";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "illum";
            }};            

            ListLanguageModelsResponse res = sdk.sdk.listLanguageModels(req);

            if (res.listLanguageModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMedicalTranscriptionJobs

<p>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned.</p> <p>To get detailed information about a specific medical transcription job, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMedicalTranscriptionJobsRequest;
import org.openapis.openapi.models.operations.ListMedicalTranscriptionJobsResponse;
import org.openapis.openapi.models.operations.ListMedicalTranscriptionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMedicalTranscriptionJobsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TranscriptionJobStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMedicalTranscriptionJobsRequest req = new ListMedicalTranscriptionJobsRequest(                new ListMedicalTranscriptionJobsRequest() {{
                                jobNameContains = "natus";
                                maxResults = 773326L;
                                nextToken = "aut";
                                status = TranscriptionJobStatusEnum.COMPLETED;
                            }};, ListMedicalTranscriptionJobsXAmzTargetEnum.TRANSCRIBE_LIST_MEDICAL_TRANSCRIPTION_JOBS) {{
                maxResults = "exercitationem";
                nextToken = "nulla";
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "porro";
                xAmzCredential = "maiores";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "ducimus";
            }};            

            ListMedicalTranscriptionJobsResponse res = sdk.sdk.listMedicalTranscriptionJobs(req);

            if (res.listMedicalTranscriptionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMedicalVocabularies

<p>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned.</p> <p>To get detailed information about a specific custom medical vocabulary, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMedicalVocabulariesRequest;
import org.openapis.openapi.models.operations.ListMedicalVocabulariesResponse;
import org.openapis.openapi.models.operations.ListMedicalVocabulariesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMedicalVocabulariesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VocabularyStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMedicalVocabulariesRequest req = new ListMedicalVocabulariesRequest(                new ListMedicalVocabulariesRequest() {{
                                maxResults = 639473L;
                                nameContains = "tempora";
                                nextToken = "ipsam";
                                stateEquals = VocabularyStateEnum.READY;
                            }};, ListMedicalVocabulariesXAmzTargetEnum.TRANSCRIBE_LIST_MEDICAL_VOCABULARIES) {{
                maxResults = "aspernatur";
                nextToken = "vel";
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "ratione";
                xAmzDate = "ex";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "dolor";
            }};            

            ListMedicalVocabulariesResponse res = sdk.sdk.listMedicalVocabularies(req);

            if (res.listMedicalVocabulariesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Lists all tags associated with the specified transcription job, vocabulary, model, or resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("quasi");, ListTagsForResourceXAmzTargetEnum.TRANSCRIBE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "excepturi";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quisquam";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTranscriptionJobs

<p>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned.</p> <p>To get detailed information about a specific transcription job, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTranscriptionJobsRequest;
import org.openapis.openapi.models.operations.ListTranscriptionJobsResponse;
import org.openapis.openapi.models.operations.ListTranscriptionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTranscriptionJobsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TranscriptionJobStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTranscriptionJobsRequest req = new ListTranscriptionJobsRequest(                new ListTranscriptionJobsRequest() {{
                                jobNameContains = "ea";
                                maxResults = 774048L;
                                nextToken = "corporis";
                                status = TranscriptionJobStatusEnum.IN_PROGRESS;
                            }};, ListTranscriptionJobsXAmzTargetEnum.TRANSCRIBE_LIST_TRANSCRIPTION_JOBS) {{
                maxResults = "aliquid";
                nextToken = "inventore";
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "quo";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "minima";
            }};            

            ListTranscriptionJobsResponse res = sdk.sdk.listTranscriptionJobs(req);

            if (res.listTranscriptionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVocabularies

<p>Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVocabulariesRequest;
import org.openapis.openapi.models.operations.ListVocabulariesResponse;
import org.openapis.openapi.models.operations.ListVocabulariesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListVocabulariesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VocabularyStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVocabulariesRequest req = new ListVocabulariesRequest(                new ListVocabulariesRequest() {{
                                maxResults = 952871L;
                                nameContains = "libero";
                                nextToken = "aut";
                                stateEquals = VocabularyStateEnum.PENDING;
                            }};, ListVocabulariesXAmzTargetEnum.TRANSCRIBE_LIST_VOCABULARIES) {{
                maxResults = "deleniti";
                nextToken = "impedit";
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "accusamus";
                xAmzDate = "inventore";
                xAmzSecurityToken = "non";
                xAmzSignature = "et";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListVocabulariesResponse res = sdk.sdk.listVocabularies(req);

            if (res.listVocabulariesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVocabularyFilters

<p>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary filter, use the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVocabularyFiltersRequest;
import org.openapis.openapi.models.operations.ListVocabularyFiltersResponse;
import org.openapis.openapi.models.operations.ListVocabularyFiltersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListVocabularyFiltersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVocabularyFiltersRequest req = new ListVocabularyFiltersRequest(                new ListVocabularyFiltersRequest() {{
                                maxResults = 810424L;
                                nameContains = "velit";
                                nextToken = "eum";
                            }};, ListVocabularyFiltersXAmzTargetEnum.TRANSCRIBE_LIST_VOCABULARY_FILTERS) {{
                maxResults = "autem";
                nextToken = "nobis";
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "nulla";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "libero";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "tempora";
            }};            

            ListVocabularyFiltersResponse res = sdk.sdk.listVocabularyFilters(req);

            if (res.listVocabularyFiltersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startCallAnalyticsJob

<p>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> <p>If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>Note that job queuing is enabled by default for Call Analytics jobs.</p> <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>CallAnalyticsJobName</code>: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.</p> </li> <li> <p> <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code> or <code>RedactedMediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> </ul> <note> <p>With Call Analytics, you can redact the audio contained in your media file by including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartCallAnalyticsJobRequest;
import org.openapis.openapi.models.operations.StartCallAnalyticsJobResponse;
import org.openapis.openapi.models.operations.StartCallAnalyticsJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.CallAnalyticsJobSettings;
import org.openapis.openapi.models.shared.ChannelDefinition;
import org.openapis.openapi.models.shared.ContentRedaction;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.LanguageIdSettings;
import org.openapis.openapi.models.shared.Media;
import org.openapis.openapi.models.shared.ParticipantRoleEnum;
import org.openapis.openapi.models.shared.PiiEntityTypeEnum;
import org.openapis.openapi.models.shared.RedactionOutputEnum;
import org.openapis.openapi.models.shared.RedactionTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartCallAnalyticsJobRequest;
import org.openapis.openapi.models.shared.VocabularyFilterMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartCallAnalyticsJobRequest req = new StartCallAnalyticsJobRequest(                new StartCallAnalyticsJobRequest("explicabo",                 new Media() {{
                                                mediaFileUri = "provident";
                                                redactedMediaFileUri = "ipsa";
                                            }};) {{
                                channelDefinitions = new org.openapis.openapi.models.shared.ChannelDefinition[]{{
                                    add(new ChannelDefinition() {{
                                        channelId = 301598L;
                                        participantRole = ParticipantRoleEnum.AGENT;
                                    }}),
                                    add(new ChannelDefinition() {{
                                        channelId = 262118L;
                                        participantRole = ParticipantRoleEnum.AGENT;
                                    }}),
                                }};
                                dataAccessRoleArn = "esse";
                                outputEncryptionKMSKeyId = "rem";
                                outputLocation = "fuga";
                                settings = new CallAnalyticsJobSettings() {{
                                    contentRedaction = new ContentRedaction(RedactionOutputEnum.REDACTED, RedactionTypeEnum.PII) {{
                                        piiEntityTypes = new org.openapis.openapi.models.shared.PiiEntityTypeEnum[]{{
                                            add(PiiEntityTypeEnum.SSN),
                                            add(PiiEntityTypeEnum.CREDIT_DEBIT_CVV),
                                            add(PiiEntityTypeEnum.PIN),
                                        }};
                                    }};;
                                    languageIdSettings = new java.util.HashMap<String, org.openapis.openapi.models.shared.LanguageIdSettings>() {{
                                        put("assumenda", new LanguageIdSettings() {{
                                            languageModelName = "eos";
                                            vocabularyFilterName = "praesentium";
                                            vocabularyName = "quisquam";
                                        }});
                                        put("veritatis", new LanguageIdSettings() {{
                                            languageModelName = "ipsa";
                                            vocabularyFilterName = "id";
                                            vocabularyName = "quidem";
                                        }});
                                    }};
                                    languageModelName = "neque";
                                    languageOptions = new org.openapis.openapi.models.shared.LanguageCodeEnum[]{{
                                        add(LanguageCodeEnum.ZH_TW),
                                        add(LanguageCodeEnum.TE_IN),
                                        add(LanguageCodeEnum.PT_BR),
                                        add(LanguageCodeEnum.EN_IN),
                                    }};
                                    vocabularyFilterMethod = VocabularyFilterMethodEnum.REMOVE;
                                    vocabularyFilterName = "voluptas";
                                    vocabularyName = "ab";
                                }};;
                            }};, StartCallAnalyticsJobXAmzTargetEnum.TRANSCRIBE_START_CALL_ANALYTICS_JOB) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "tempora";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "sequi";
            }};            

            StartCallAnalyticsJobResponse res = sdk.sdk.startCallAnalyticsJob(req);

            if (res.startCallAnalyticsJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startMedicalTranscriptionJob

<p>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical works</a>.</p> <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartMedicalTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>MedicalTranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p> <code>LanguageCode</code>: This must be <code>en-US</code>.</p> </li> <li> <p> <code>OutputBucketName</code>: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include <code>OutputKey</code>.</p> </li> <li> <p> <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p> </li> <li> <p> <code>Type</code>: Choose whether your audio is a conversation or a dictation.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartMedicalTranscriptionJobRequest;
import org.openapis.openapi.models.operations.StartMedicalTranscriptionJobResponse;
import org.openapis.openapi.models.operations.StartMedicalTranscriptionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Media;
import org.openapis.openapi.models.shared.MediaFormatEnum;
import org.openapis.openapi.models.shared.MedicalContentIdentificationTypeEnum;
import org.openapis.openapi.models.shared.MedicalTranscriptionSetting;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpecialtyEnum;
import org.openapis.openapi.models.shared.StartMedicalTranscriptionJobRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartMedicalTranscriptionJobRequest req = new StartMedicalTranscriptionJobRequest(                new StartMedicalTranscriptionJobRequest(LanguageCodeEnum.FRFR,                 new Media() {{
                                                mediaFileUri = "recusandae";
                                                redactedMediaFileUri = "aperiam";
                                            }};, "distinctio", "quod", SpecialtyEnum.PRIMARYCARE, TypeEnum.CONVERSATION) {{
                                contentIdentificationType = MedicalContentIdentificationTypeEnum.PHI;
                                kmsEncryptionContext = new java.util.HashMap<String, String>() {{
                                    put("nihil", "totam");
                                }};
                                mediaFormat = MediaFormatEnum.WEBM;
                                mediaSampleRateHertz = 306810L;
                                outputEncryptionKMSKeyId = "odio";
                                outputKey = "occaecati";
                                settings = new MedicalTranscriptionSetting() {{
                                    channelIdentification = false;
                                    maxAlternatives = 414567L;
                                    maxSpeakerLabels = 959434L;
                                    showAlternatives = false;
                                    showSpeakerLabels = false;
                                    vocabularyName = "dolores";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("porro", "eum") {{
                                        key = "molestiae";
                                        value = "accusantium";
                                    }}),
                                    add(new Tag("consequuntur", "deleniti") {{
                                        key = "quas";
                                        value = "praesentium";
                                    }}),
                                    add(new Tag("mollitia", "incidunt") {{
                                        key = "fugit";
                                        value = "fuga";
                                    }}),
                                }};
                            }};, StartMedicalTranscriptionJobXAmzTargetEnum.TRANSCRIBE_START_MEDICAL_TRANSCRIPTION_JOB) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
            }};            

            StartMedicalTranscriptionJobResponse res = sdk.sdk.startMedicalTranscriptionJob(req);

            if (res.startMedicalTranscriptionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startTranscriptionJob

<p>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request.</p> <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>TranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code>: If you know the language of your media file, specify it using the <code>LanguageCode</code> parameter; you can find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. If you don't know the languages spoken in your media, use either <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify the languages for you.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTranscriptionJobRequest;
import org.openapis.openapi.models.operations.StartTranscriptionJobResponse;
import org.openapis.openapi.models.operations.StartTranscriptionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContentRedaction;
import org.openapis.openapi.models.shared.JobExecutionSettings;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.LanguageIdSettings;
import org.openapis.openapi.models.shared.Media;
import org.openapis.openapi.models.shared.MediaFormatEnum;
import org.openapis.openapi.models.shared.ModelSettings;
import org.openapis.openapi.models.shared.PiiEntityTypeEnum;
import org.openapis.openapi.models.shared.RedactionOutputEnum;
import org.openapis.openapi.models.shared.RedactionTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Settings;
import org.openapis.openapi.models.shared.StartTranscriptionJobRequest;
import org.openapis.openapi.models.shared.SubtitleFormatEnum;
import org.openapis.openapi.models.shared.Subtitles;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VocabularyFilterMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartTranscriptionJobRequest req = new StartTranscriptionJobRequest(                new StartTranscriptionJobRequest(                new Media() {{
                                                mediaFileUri = "explicabo";
                                                redactedMediaFileUri = "saepe";
                                            }};, "occaecati") {{
                                contentRedaction = new ContentRedaction(RedactionOutputEnum.REDACTED_AND_UNREDACTED, RedactionTypeEnum.PII) {{
                                    piiEntityTypes = new org.openapis.openapi.models.shared.PiiEntityTypeEnum[]{{
                                        add(PiiEntityTypeEnum.PIN),
                                    }};
                                }};;
                                identifyLanguage = false;
                                identifyMultipleLanguages = false;
                                jobExecutionSettings = new JobExecutionSettings() {{
                                    allowDeferredExecution = false;
                                    dataAccessRoleArn = "eveniet";
                                }};;
                                kmsEncryptionContext = new java.util.HashMap<String, String>() {{
                                    put("veritatis", "esse");
                                    put("quod", "nam");
                                    put("vero", "aliquid");
                                    put("quasi", "saepe");
                                }};
                                languageCode = LanguageCodeEnum.FR_CA;
                                languageIdSettings = new java.util.HashMap<String, org.openapis.openapi.models.shared.LanguageIdSettings>() {{
                                    put("molestiae", new LanguageIdSettings() {{
                                        languageModelName = "rerum";
                                        vocabularyFilterName = "occaecati";
                                        vocabularyName = "minima";
                                    }});
                                    put("distinctio", new LanguageIdSettings() {{
                                        languageModelName = "eligendi";
                                        vocabularyFilterName = "sit";
                                        vocabularyName = "culpa";
                                    }});
                                    put("tempore", new LanguageIdSettings() {{
                                        languageModelName = "adipisci";
                                        vocabularyFilterName = "cumque";
                                        vocabularyName = "consequuntur";
                                    }});
                                }};
                                languageOptions = new org.openapis.openapi.models.shared.LanguageCodeEnum[]{{
                                    add(LanguageCodeEnum.TRTR),
                                }};
                                mediaFormat = MediaFormatEnum.WAV;
                                mediaSampleRateHertz = 959167L;
                                modelSettings = new ModelSettings() {{
                                    languageModelName = "consectetur";
                                }};;
                                outputBucketName = "esse";
                                outputEncryptionKMSKeyId = "blanditiis";
                                outputKey = "provident";
                                settings = new Settings() {{
                                    channelIdentification = false;
                                    maxAlternatives = 953722L;
                                    maxSpeakerLabels = 857723L;
                                    showAlternatives = false;
                                    showSpeakerLabels = false;
                                    vocabularyFilterMethod = VocabularyFilterMethodEnum.MASK;
                                    vocabularyFilterName = "esse";
                                    vocabularyName = "quasi";
                                }};;
                                subtitles = new Subtitles() {{
                                    formats = new org.openapis.openapi.models.shared.SubtitleFormatEnum[]{{
                                        add(SubtitleFormatEnum.SRT),
                                        add(SubtitleFormatEnum.SRT),
                                        add(SubtitleFormatEnum.SRT),
                                        add(SubtitleFormatEnum.SRT),
                                    }};
                                    outputStartIndex = 157632L;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("veritatis", "consequuntur") {{
                                        key = "asperiores";
                                        value = "facere";
                                    }}),
                                    add(new Tag("culpa", "aliquid") {{
                                        key = "quasi";
                                        value = "similique";
                                    }}),
                                    add(new Tag("earum", "vel") {{
                                        key = "tenetur";
                                        value = "quae";
                                    }}),
                                    add(new Tag("libero", "illum") {{
                                        key = "in";
                                        value = "eius";
                                    }}),
                                }};
                            }};, StartTranscriptionJobXAmzTargetEnum.TRANSCRIBE_START_TRANSCRIPTION_JOB) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "aliquam";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            StartTranscriptionJobResponse res = sdk.sdk.startTranscriptionJob(req);

            if (res.startTranscriptionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("nisi",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("quibusdam", "ex") {{
                                                    key = "voluptatum";
                                                    value = "qui";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.TRANSCRIBE_TAG_RESOURCE) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quasi";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

<p>Removes the specified tags from the specified Amazon Transcribe resource.</p> <p>If you include <code>UntagResource</code> in your request, you must also include <code>ResourceArn</code> and <code>TagKeys</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("et",                 new String[]{{
                                                add("ipsa"),
                                                add("minima"),
                                            }});, UntagResourceXAmzTargetEnum.TRANSCRIBE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "adipisci";
                xAmzDate = "iste";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "rem";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCallAnalyticsCategory

<p>Updates the specified Call Analytics category with new rules. Note that the <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.</p> <p>To create a new category, see .</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.operations.UpdateCallAnalyticsCategoryResponse;
import org.openapis.openapi.models.operations.UpdateCallAnalyticsCategoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.AbsoluteTimeRange;
import org.openapis.openapi.models.shared.InputTypeEnum;
import org.openapis.openapi.models.shared.InterruptionFilter;
import org.openapis.openapi.models.shared.NonTalkTimeFilter;
import org.openapis.openapi.models.shared.ParticipantRoleEnum;
import org.openapis.openapi.models.shared.RelativeTimeRange;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SentimentFilter;
import org.openapis.openapi.models.shared.SentimentValueEnum;
import org.openapis.openapi.models.shared.TranscriptFilter;
import org.openapis.openapi.models.shared.TranscriptFilterTypeEnum;
import org.openapis.openapi.models.shared.UpdateCallAnalyticsCategoryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCallAnalyticsCategoryRequest req = new UpdateCallAnalyticsCategoryRequest(                new UpdateCallAnalyticsCategoryRequest("laudantium",                 new org.openapis.openapi.models.shared.Rule[]{{
                                                add(new Rule() {{
                                                    interruptionFilter = new InterruptionFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 649832L;
                                                            first = 68074L;
                                                            last = 544591L;
                                                            startTime = 251941L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 221161L;
                                                            first = 580152L;
                                                            last = 253191L;
                                                            startPercentage = 771089L;
                                                        }};
                                                        threshold = 131055L;
                                                    }};
                                                    nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 376226L;
                                                            first = 12036L;
                                                            last = 491025L;
                                                            startTime = 115484L;
                                                        }};
                                                        negate = false;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 981640L;
                                                            first = 618480L;
                                                            last = 244651L;
                                                            startPercentage = 974257L;
                                                        }};
                                                        threshold = 374323L;
                                                    }};
                                                    sentimentFilter = new SentimentFilter(                new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                                        add(SentimentValueEnum.MIXED),
                                                                        add(SentimentValueEnum.MIXED),
                                                                    }}) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 990345L;
                                                            first = 45659L;
                                                            last = 409054L;
                                                            startTime = 310067L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 831520L;
                                                            first = 638762L;
                                                            last = 807023L;
                                                            startPercentage = 490305L;
                                                        }};
                                                        sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                            add(SentimentValueEnum.MIXED),
                                                            add(SentimentValueEnum.NEGATIVE),
                                                            add(SentimentValueEnum.POSITIVE),
                                                        }};
                                                    }};
                                                    transcriptFilter = new TranscriptFilter(                new String[]{{
                                                                        add("vel"),
                                                                        add("labore"),
                                                                        add("possimus"),
                                                                    }}, TranscriptFilterTypeEnum.EXACT) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 288398L;
                                                            first = 70447L;
                                                            last = 241418L;
                                                            startTime = 683573L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 380729L;
                                                            first = 246063L;
                                                            last = 633931L;
                                                            startPercentage = 665859L;
                                                        }};
                                                        targets = new String[]{{
                                                            add("totam"),
                                                            add("fugiat"),
                                                            add("vel"),
                                                            add("ducimus"),
                                                        }};
                                                        transcriptFilterType = TranscriptFilterTypeEnum.EXACT;
                                                    }};
                                                }}),
                                                add(new Rule() {{
                                                    interruptionFilter = new InterruptionFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 706575L;
                                                            first = 738227L;
                                                            last = 414857L;
                                                            startTime = 447144L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 968904L;
                                                            first = 828657L;
                                                            last = 363161L;
                                                            startPercentage = 924967L;
                                                        }};
                                                        threshold = 397533L;
                                                    }};
                                                    nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 46007L;
                                                            first = 738683L;
                                                            last = 232627L;
                                                            startTime = 449083L;
                                                        }};
                                                        negate = false;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 348519L;
                                                            first = 937285L;
                                                            last = 814967L;
                                                            startPercentage = 257233L;
                                                        }};
                                                        threshold = 985492L;
                                                    }};
                                                    sentimentFilter = new SentimentFilter(                new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                                        add(SentimentValueEnum.NEGATIVE),
                                                                    }}) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 381760L;
                                                            first = 968972L;
                                                            last = 697142L;
                                                            startTime = 904949L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 296556L;
                                                            first = 121059L;
                                                            last = 992012L;
                                                            startPercentage = 241545L;
                                                        }};
                                                        sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                            add(SentimentValueEnum.POSITIVE),
                                                        }};
                                                    }};
                                                    transcriptFilter = new TranscriptFilter(                new String[]{{
                                                                        add("tempora"),
                                                                        add("aspernatur"),
                                                                        add("voluptas"),
                                                                    }}, TranscriptFilterTypeEnum.EXACT) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 950953L;
                                                            first = 891523L;
                                                            last = 233420L;
                                                            startTime = 358107L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 385237L;
                                                            first = 58356L;
                                                            last = 916727L;
                                                            startPercentage = 730709L;
                                                        }};
                                                        targets = new String[]{{
                                                            add("accusamus"),
                                                        }};
                                                        transcriptFilterType = TranscriptFilterTypeEnum.EXACT;
                                                    }};
                                                }}),
                                            }}) {{
                                inputType = InputTypeEnum.REAL_TIME;
                            }};, UpdateCallAnalyticsCategoryXAmzTargetEnum.TRANSCRIBE_UPDATE_CALL_ANALYTICS_CATEGORY) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "minima";
                xAmzCredential = "nobis";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "dolores";
            }};            

            UpdateCallAnalyticsCategoryResponse res = sdk.sdk.updateCallAnalyticsCategory(req);

            if (res.updateCallAnalyticsCategoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMedicalVocabulary

Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMedicalVocabularyRequest;
import org.openapis.openapi.models.operations.UpdateMedicalVocabularyResponse;
import org.openapis.openapi.models.operations.UpdateMedicalVocabularyXAmzTargetEnum;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateMedicalVocabularyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMedicalVocabularyRequest req = new UpdateMedicalVocabularyRequest(                new UpdateMedicalVocabularyRequest(LanguageCodeEnum.FRFR, "dolore", "aliquam");, UpdateMedicalVocabularyXAmzTargetEnum.TRANSCRIBE_UPDATE_MEDICAL_VOCABULARY) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ullam";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "cum";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "quas";
            }};            

            UpdateMedicalVocabularyResponse res = sdk.sdk.updateMedicalVocabulary(req);

            if (res.updateMedicalVocabularyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVocabulary

Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVocabularyRequest;
import org.openapis.openapi.models.operations.UpdateVocabularyResponse;
import org.openapis.openapi.models.operations.UpdateVocabularyXAmzTargetEnum;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateVocabularyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVocabularyRequest req = new UpdateVocabularyRequest(                new UpdateVocabularyRequest(LanguageCodeEnum.EN_AU, "culpa") {{
                                dataAccessRoleArn = "corrupti";
                                phrases = new String[]{{
                                    add("totam"),
                                    add("hic"),
                                    add("exercitationem"),
                                    add("nobis"),
                                }};
                                vocabularyFileUri = "sit";
                            }};, UpdateVocabularyXAmzTargetEnum.TRANSCRIBE_UPDATE_VOCABULARY) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "sed";
                xAmzCredential = "reiciendis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "voluptate";
            }};            

            UpdateVocabularyResponse res = sdk.sdk.updateVocabulary(req);

            if (res.updateVocabularyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVocabularyFilter

Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVocabularyFilterRequest;
import org.openapis.openapi.models.operations.UpdateVocabularyFilterResponse;
import org.openapis.openapi.models.operations.UpdateVocabularyFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateVocabularyFilterRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVocabularyFilterRequest req = new UpdateVocabularyFilterRequest(                new UpdateVocabularyFilterRequest("ab") {{
                                dataAccessRoleArn = "iste";
                                vocabularyFilterFileUri = "dolore";
                                words = new String[]{{
                                    add("sed"),
                                    add("in"),
                                    add("commodi"),
                                }};
                            }};, UpdateVocabularyFilterXAmzTargetEnum.TRANSCRIBE_UPDATE_VOCABULARY_FILTER) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "unde";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "sapiente";
            }};            

            UpdateVocabularyFilterResponse res = sdk.sdk.updateVocabularyFilter(req);

            if (res.updateVocabularyFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
