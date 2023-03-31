# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/transcribe/2017-10-26/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateCallAnalyticsCategoryRequest(
    create_call_analytics_category_request=shared.CreateCallAnalyticsCategoryRequest(
        category_name="corrupti",
        input_type="POST_CALL",
        rules=[
            shared.Rule(
                interruption_filter=shared.InterruptionFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=844266,
                        first=602763,
                        last=857946,
                        start_time=544883,
                    ),
                    negate=False,
                    participant_role="CUSTOMER",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=423655,
                        first=623564,
                        last=645894,
                        start_percentage=384382,
                    ),
                    threshold=437587,
                ),
                non_talk_time_filter=shared.NonTalkTimeFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=297534,
                        first=891773,
                        last=56713,
                        start_time=963663,
                    ),
                    negate=False,
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=272656,
                        first=383441,
                        last=477665,
                        start_percentage=791725,
                    ),
                    threshold=812169,
                ),
                sentiment_filter=shared.SentimentFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=528895,
                        first=479977,
                        last=568045,
                        start_time=392785,
                    ),
                    negate=False,
                    participant_role="CUSTOMER",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=836079,
                        first=71036,
                        last=337396,
                        start_percentage=87129,
                    ),
                    sentiments=[
                        "POSITIVE",
                        "NEGATIVE",
                        "MIXED",
                    ],
                ),
                transcript_filter=shared.TranscriptFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=957156,
                        first=778157,
                        last=140350,
                        start_time=870013,
                    ),
                    negate=False,
                    participant_role="CUSTOMER",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=978619,
                        first=473608,
                        last=799159,
                        start_percentage=800911,
                    ),
                    targets=[
                        "totam",
                        "porro",
                    ],
                    transcript_filter_type="EXACT",
                ),
            ),
            shared.Rule(
                interruption_filter=shared.InterruptionFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=678880,
                        first=118274,
                        last=720633,
                        start_time=639921,
                    ),
                    negate=False,
                    participant_role="CUSTOMER",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=143353,
                        first=537373,
                        last=944669,
                        start_percentage=758616,
                    ),
                    threshold=521848,
                ),
                non_talk_time_filter=shared.NonTalkTimeFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=105907,
                        first=414662,
                        last=473600,
                        start_time=264555,
                    ),
                    negate=False,
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=186332,
                        first=774234,
                        last=736918,
                        start_percentage=456150,
                    ),
                    threshold=216550,
                ),
                sentiment_filter=shared.SentimentFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=568434,
                        first=135218,
                        last=18789,
                        start_time=324141,
                    ),
                    negate=False,
                    participant_role="CUSTOMER",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=149675,
                        first=612096,
                        last=222321,
                        start_percentage=616934,
                    ),
                    sentiments=[
                        "MIXED",
                        "MIXED",
                    ],
                ),
                transcript_filter=shared.TranscriptFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=681820,
                        first=449950,
                        last=359508,
                        start_time=613064,
                    ),
                    negate=False,
                    participant_role="AGENT",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=902349,
                        first=697631,
                        last=99280,
                        start_percentage=60225,
                    ),
                    targets=[
                        "est",
                        "mollitia",
                        "laborum",
                        "dolores",
                    ],
                    transcript_filter_type="EXACT",
                ),
            ),
            shared.Rule(
                interruption_filter=shared.InterruptionFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=210382,
                        first=358152,
                        last=128926,
                        start_time=750686,
                    ),
                    negate=False,
                    participant_role="AGENT",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=607831,
                        first=363711,
                        last=325047,
                        start_percentage=570197,
                    ),
                    threshold=38425,
                ),
                non_talk_time_filter=shared.NonTalkTimeFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=438601,
                        first=634274,
                        last=988374,
                        start_time=958950,
                    ),
                    negate=False,
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=102044,
                        first=652790,
                        last=208876,
                        start_percentage=635059,
                    ),
                    threshold=161309,
                ),
                sentiment_filter=shared.SentimentFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=995300,
                        first=653108,
                        last=581850,
                        start_time=253291,
                    ),
                    negate=False,
                    participant_role="AGENT",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=466311,
                        first=474697,
                        last=244425,
                        start_percentage=623510,
                    ),
                    sentiments=[
                        "NEGATIVE",
                    ],
                ),
                transcript_filter=shared.TranscriptFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=110375,
                        first=674752,
                        last=656330,
                        start_time=317202,
                    ),
                    negate=False,
                    participant_role="AGENT",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=778346,
                        first=196582,
                        last=949572,
                        start_percentage=368725,
                    ),
                    targets=[
                        "possimus",
                        "aut",
                        "quasi",
                    ],
                    transcript_filter_type="EXACT",
                ),
            ),
        ],
    ),
    x_amz_algorithm="error",
    x_amz_content_sha256="temporibus",
    x_amz_credential="laborum",
    x_amz_date="quasi",
    x_amz_security_token="reiciendis",
    x_amz_signature="voluptatibus",
    x_amz_signed_headers="vero",
    x_amz_target="Transcribe.CreateCallAnalyticsCategory",
)
    
res = s.create_call_analytics_category(req)

if res.create_call_analytics_category_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_call_analytics_category` - <p>Creates a new Call Analytics category.</p> <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively.</p> <p>When creating a new category, you can use the <code>InputType</code> parameter to label the category as a <code>POST_CALL</code> or a <code>REAL_TIME</code> category. <code>POST_CALL</code> categories can only be applied to post-call transcriptions and <code>REAL_TIME</code> categories can only be applied to real-time transcriptions. If you do not include <code>InputType</code>, your category is created as a <code>POST_CALL</code> category by default.</p> <p>Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and .</p> <p>To update an existing category, see .</p> <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p>
* `create_language_model` - <p>Creates a new custom language model.</p> <p>When creating a new custom language model, you must specify:</p> <ul> <li> <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model</p> </li> <li> <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p> </li> <li> <p>The language of your model</p> </li> <li> <p>A unique name for your model</p> </li> </ul>
* `create_medical_vocabulary` - <p>Creates a new custom medical vocabulary.</p> <p>Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the <code>Phrases</code> flag; <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code> flag and only accepts vocabularies in table format.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* `create_vocabulary` - <p>Creates a new custom vocabulary.</p> <p>When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the <code>Phrases</code> flag.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* `create_vocabulary_filter` - <p>Creates a new custom vocabulary filter.</p> <p>You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary filtering</a>.</p>
* `delete_call_analytics_category` - Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using <code>CategoryName</code>. Category names are case sensitive.
* `delete_call_analytics_job` - Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using <code>CallAnalyticsJobName</code>. Job names are case sensitive.
* `delete_language_model` - Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using <code>ModelName</code>. custom language model names are case sensitive.
* `delete_medical_transcription_job` - Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are case sensitive.
* `delete_medical_vocabulary` - Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* `delete_transcription_job` - Deletes a transcription job. To use this operation, specify the name of the job you want to delete using <code>TranscriptionJobName</code>. Job names are case sensitive.
* `delete_vocabulary` - Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* `delete_vocabulary_filter` - Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>. Custom vocabulary filter names are case sensitive.
* `describe_language_model` - <p>Provides information about the specified custom language model.</p> <p>This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.</p> <p>If you tried to create a new custom language model and the request wasn't successful, you can use <code>DescribeLanguageModel</code> to help identify the reason for this failure.</p>
* `get_call_analytics_category` - <p>Provides information about the specified Call Analytics category.</p> <p>To get a list of your Call Analytics categories, use the operation.</p>
* `get_call_analytics_job` - <p>Provides information about the specified Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in <code>RedactedMediaFileUri</code>.</p> <p>To get a list of your Call Analytics jobs, use the operation.</p>
* `get_medical_transcription_job` - <p>Provides information about the specified medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>To get a list of your medical transcription jobs, use the operation.</p>
* `get_medical_vocabulary` - <p>Provides information about the specified custom medical vocabulary.</p> <p>To view the status of the specified custom medical vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary failed.</p> <p>To get a list of your custom medical vocabularies, use the operation.</p>
* `get_transcription_job` - <p>Provides information about the specified transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>To get a list of your transcription jobs, use the operation.</p>
* `get_vocabulary` - <p>Provides information about the specified custom vocabulary.</p> <p>To view the status of the specified custom vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your custom vocabulary failed.</p> <p>To get a list of your custom vocabularies, use the operation.</p>
* `get_vocabulary_filter` - <p>Provides information about the specified custom vocabulary filter.</p> <p>To get a list of your custom vocabulary filters, use the operation.</p>
* `list_call_analytics_categories` - <p>Provides a list of Call Analytics categories, including all rules that make up each category.</p> <p>To get detailed information about a specific Call Analytics category, use the operation.</p>
* `list_call_analytics_jobs` - <p>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned.</p> <p>To get detailed information about a specific Call Analytics job, use the operation.</p>
* `list_language_models` - <p>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned.</p> <p>To get detailed information about a specific custom language model, use the operation.</p>
* `list_medical_transcription_jobs` - <p>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned.</p> <p>To get detailed information about a specific medical transcription job, use the operation.</p>
* `list_medical_vocabularies` - <p>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned.</p> <p>To get detailed information about a specific custom medical vocabulary, use the operation.</p>
* `list_tags_for_resource` - <p>Lists all tags associated with the specified transcription job, vocabulary, model, or resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* `list_transcription_jobs` - <p>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned.</p> <p>To get detailed information about a specific transcription job, use the operation.</p>
* `list_vocabularies` - <p>Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary, use the operation.</p>
* `list_vocabulary_filters` - <p>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary filter, use the operation.</p>
* `start_call_analytics_job` - <p>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> <p>If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>Note that job queuing is enabled by default for Call Analytics jobs.</p> <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>CallAnalyticsJobName</code>: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.</p> </li> <li> <p> <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code> or <code>RedactedMediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> </ul> <note> <p>With Call Analytics, you can redact the audio contained in your media file by including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> </note>
* `start_medical_transcription_job` - <p>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical works</a>.</p> <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartMedicalTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>MedicalTranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p> <code>LanguageCode</code>: This must be <code>en-US</code>.</p> </li> <li> <p> <code>OutputBucketName</code>: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include <code>OutputKey</code>.</p> </li> <li> <p> <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p> </li> <li> <p> <code>Type</code>: Choose whether your audio is a conversation or a dictation.</p> </li> </ul>
* `start_transcription_job` - <p>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request.</p> <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>TranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code>: If you know the language of your media file, specify it using the <code>LanguageCode</code> parameter; you can find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. If you don't know the languages spoken in your media, use either <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify the languages for you.</p> </li> </ul>
* `tag_resource` - <p>Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* `untag_resource` - <p>Removes the specified tags from the specified Amazon Transcribe resource.</p> <p>If you include <code>UntagResource</code> in your request, you must also include <code>ResourceArn</code> and <code>TagKeys</code>.</p>
* `update_call_analytics_category` - <p>Updates the specified Call Analytics category with new rules. Note that the <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.</p> <p>To create a new category, see .</p>
* `update_medical_vocabulary` - Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* `update_vocabulary` - Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* `update_vocabulary_filter` - Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
