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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallAnalyticsCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCallAnalyticsCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\InterruptionFilter;
use \OpenAPI\OpenAPI\Models\Shared\AbsoluteTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\ParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\RelativeTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\NonTalkTimeFilter;
use \OpenAPI\OpenAPI\Models\Shared\SentimentFilter;
use \OpenAPI\OpenAPI\Models\Shared\SentimentValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\TranscriptFilter;
use \OpenAPI\OpenAPI\Models\Shared\TranscriptFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallAnalyticsCategoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCallAnalyticsCategoryRequest();
    $request->createCallAnalyticsCategoryRequest = new CreateCallAnalyticsCategoryRequest();
    $request->createCallAnalyticsCategoryRequest->categoryName = 'deserunt';
    $request->createCallAnalyticsCategoryRequest->inputType = InputTypeEnum::REAL_TIME;
    $request->createCallAnalyticsCategoryRequest->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = CreateCallAnalyticsCategoryXAmzTargetEnum::TRANSCRIBE_CREATE_CALL_ANALYTICS_CATEGORY;

    $response = $sdk->sdk->createCallAnalyticsCategory($request);

    if ($response->createCallAnalyticsCategoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLanguageModel

<p>Creates a new custom language model.</p> <p>When creating a new custom language model, you must specify:</p> <ul> <li> <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model</p> </li> <li> <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p> </li> <li> <p>The language of your model</p> </li> <li> <p>A unique name for your model</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLanguageModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLanguageModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\BaseModelNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\CLMLanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateLanguageModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLanguageModelRequest();
    $request->createLanguageModelRequest = new CreateLanguageModelRequest();
    $request->createLanguageModelRequest->baseModelName = BaseModelNameEnum::WIDE_BAND;
    $request->createLanguageModelRequest->inputDataConfig = new InputDataConfig();
    $request->createLanguageModelRequest->inputDataConfig->dataAccessRoleArn = 'placeat';
    $request->createLanguageModelRequest->inputDataConfig->s3Uri = 'voluptatum';
    $request->createLanguageModelRequest->inputDataConfig->tuningDataS3Uri = 'iusto';
    $request->createLanguageModelRequest->languageCode = CLMLanguageCodeEnum::EN_GB;
    $request->createLanguageModelRequest->modelName = 'nisi';
    $request->createLanguageModelRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = CreateLanguageModelXAmzTargetEnum::TRANSCRIBE_CREATE_LANGUAGE_MODEL;

    $response = $sdk->sdk->createLanguageModel($request);

    if ($response->createLanguageModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMedicalVocabulary

<p>Creates a new custom medical vocabulary.</p> <p>Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the <code>Phrases</code> flag; <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code> flag and only accepts vocabularies in table format.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMedicalVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMedicalVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateMedicalVocabularyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMedicalVocabularyRequest();
    $request->createMedicalVocabularyRequest = new CreateMedicalVocabularyRequest();
    $request->createMedicalVocabularyRequest->languageCode = LanguageCodeEnum::ZH_CN;
    $request->createMedicalVocabularyRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createMedicalVocabularyRequest->vocabularyFileUri = 'quo';
    $request->createMedicalVocabularyRequest->vocabularyName = 'odit';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = CreateMedicalVocabularyXAmzTargetEnum::TRANSCRIBE_CREATE_MEDICAL_VOCABULARY;

    $response = $sdk->sdk->createMedicalVocabulary($request);

    if ($response->createMedicalVocabularyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVocabulary

<p>Creates a new custom vocabulary.</p> <p>When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the <code>Phrases</code> flag.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateVocabularyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVocabularyRequest();
    $request->createVocabularyRequest = new CreateVocabularyRequest();
    $request->createVocabularyRequest->dataAccessRoleArn = 'totam';
    $request->createVocabularyRequest->languageCode = LanguageCodeEnum::TE_IN;
    $request->createVocabularyRequest->phrases = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->createVocabularyRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createVocabularyRequest->vocabularyFileUri = 'fugit';
    $request->createVocabularyRequest->vocabularyName = 'deleniti';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = CreateVocabularyXAmzTargetEnum::TRANSCRIBE_CREATE_VOCABULARY;

    $response = $sdk->sdk->createVocabulary($request);

    if ($response->createVocabularyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVocabularyFilter

<p>Creates a new custom vocabulary filter.</p> <p>You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary filtering</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVocabularyFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVocabularyFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateVocabularyFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVocabularyFilterRequest();
    $request->createVocabularyFilterRequest = new CreateVocabularyFilterRequest();
    $request->createVocabularyFilterRequest->dataAccessRoleArn = 'qui';
    $request->createVocabularyFilterRequest->languageCode = LanguageCodeEnum::TE_IN;
    $request->createVocabularyFilterRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createVocabularyFilterRequest->vocabularyFilterFileUri = 'esse';
    $request->createVocabularyFilterRequest->vocabularyFilterName = 'ipsum';
    $request->createVocabularyFilterRequest->words = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = CreateVocabularyFilterXAmzTargetEnum::TRANSCRIBE_CREATE_VOCABULARY_FILTER;

    $response = $sdk->sdk->createVocabularyFilter($request);

    if ($response->createVocabularyFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCallAnalyticsCategory

Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using <code>CategoryName</code>. Category names are case sensitive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCallAnalyticsCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCallAnalyticsCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCallAnalyticsCategoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCallAnalyticsCategoryRequest();
    $request->deleteCallAnalyticsCategoryRequest = new DeleteCallAnalyticsCategoryRequest();
    $request->deleteCallAnalyticsCategoryRequest->categoryName = 'saepe';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DeleteCallAnalyticsCategoryXAmzTargetEnum::TRANSCRIBE_DELETE_CALL_ANALYTICS_CATEGORY;

    $response = $sdk->sdk->deleteCallAnalyticsCategory($request);

    if ($response->deleteCallAnalyticsCategoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCallAnalyticsJob

Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using <code>CallAnalyticsJobName</code>. Job names are case sensitive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCallAnalyticsJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCallAnalyticsJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCallAnalyticsJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCallAnalyticsJobRequest();
    $request->deleteCallAnalyticsJobRequest = new DeleteCallAnalyticsJobRequest();
    $request->deleteCallAnalyticsJobRequest->callAnalyticsJobName = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DeleteCallAnalyticsJobXAmzTargetEnum::TRANSCRIBE_DELETE_CALL_ANALYTICS_JOB;

    $response = $sdk->sdk->deleteCallAnalyticsJob($request);

    if ($response->deleteCallAnalyticsJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLanguageModel

Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using <code>ModelName</code>. custom language model names are case sensitive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLanguageModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLanguageModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLanguageModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLanguageModelRequest();
    $request->deleteLanguageModelRequest = new DeleteLanguageModelRequest();
    $request->deleteLanguageModelRequest->modelName = 'corporis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DeleteLanguageModelXAmzTargetEnum::TRANSCRIBE_DELETE_LANGUAGE_MODEL;

    $response = $sdk->sdk->deleteLanguageModel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMedicalTranscriptionJob

Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are case sensitive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMedicalTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMedicalTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMedicalTranscriptionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMedicalTranscriptionJobRequest();
    $request->deleteMedicalTranscriptionJobRequest = new DeleteMedicalTranscriptionJobRequest();
    $request->deleteMedicalTranscriptionJobRequest->medicalTranscriptionJobName = 'accusantium';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DeleteMedicalTranscriptionJobXAmzTargetEnum::TRANSCRIBE_DELETE_MEDICAL_TRANSCRIPTION_JOB;

    $response = $sdk->sdk->deleteMedicalTranscriptionJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMedicalVocabulary

Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMedicalVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMedicalVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMedicalVocabularyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMedicalVocabularyRequest();
    $request->deleteMedicalVocabularyRequest = new DeleteMedicalVocabularyRequest();
    $request->deleteMedicalVocabularyRequest->vocabularyName = 'culpa';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = DeleteMedicalVocabularyXAmzTargetEnum::TRANSCRIBE_DELETE_MEDICAL_VOCABULARY;

    $response = $sdk->sdk->deleteMedicalVocabulary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTranscriptionJob

Deletes a transcription job. To use this operation, specify the name of the job you want to delete using <code>TranscriptionJobName</code>. Job names are case sensitive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTranscriptionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTranscriptionJobRequest();
    $request->deleteTranscriptionJobRequest = new DeleteTranscriptionJobRequest();
    $request->deleteTranscriptionJobRequest->transcriptionJobName = 'molestiae';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = DeleteTranscriptionJobXAmzTargetEnum::TRANSCRIBE_DELETE_TRANSCRIPTION_JOB;

    $response = $sdk->sdk->deleteTranscriptionJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVocabulary

Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVocabularyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVocabularyRequest();
    $request->deleteVocabularyRequest = new DeleteVocabularyRequest();
    $request->deleteVocabularyRequest->vocabularyName = 'enim';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = DeleteVocabularyXAmzTargetEnum::TRANSCRIBE_DELETE_VOCABULARY;

    $response = $sdk->sdk->deleteVocabulary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVocabularyFilter

Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>. Custom vocabulary filter names are case sensitive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVocabularyFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVocabularyFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVocabularyFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVocabularyFilterRequest();
    $request->deleteVocabularyFilterRequest = new DeleteVocabularyFilterRequest();
    $request->deleteVocabularyFilterRequest->vocabularyFilterName = 'aut';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DeleteVocabularyFilterXAmzTargetEnum::TRANSCRIBE_DELETE_VOCABULARY_FILTER;

    $response = $sdk->sdk->deleteVocabularyFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLanguageModel

<p>Provides information about the specified custom language model.</p> <p>This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.</p> <p>If you tried to create a new custom language model and the request wasn't successful, you can use <code>DescribeLanguageModel</code> to help identify the reason for this failure.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLanguageModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLanguageModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLanguageModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLanguageModelRequest();
    $request->describeLanguageModelRequest = new DescribeLanguageModelRequest();
    $request->describeLanguageModelRequest->modelName = 'vero';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = DescribeLanguageModelXAmzTargetEnum::TRANSCRIBE_DESCRIBE_LANGUAGE_MODEL;

    $response = $sdk->sdk->describeLanguageModel($request);

    if ($response->describeLanguageModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallAnalyticsCategory

<p>Provides information about the specified Call Analytics category.</p> <p>To get a list of your Call Analytics categories, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCallAnalyticsCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCallAnalyticsCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallAnalyticsCategoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallAnalyticsCategoryRequest();
    $request->getCallAnalyticsCategoryRequest = new GetCallAnalyticsCategoryRequest();
    $request->getCallAnalyticsCategoryRequest->categoryName = 'perferendis';
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = GetCallAnalyticsCategoryXAmzTargetEnum::TRANSCRIBE_GET_CALL_ANALYTICS_CATEGORY;

    $response = $sdk->sdk->getCallAnalyticsCategory($request);

    if ($response->getCallAnalyticsCategoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallAnalyticsJob

<p>Provides information about the specified Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in <code>RedactedMediaFileUri</code>.</p> <p>To get a list of your Call Analytics jobs, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCallAnalyticsJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCallAnalyticsJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallAnalyticsJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallAnalyticsJobRequest();
    $request->getCallAnalyticsJobRequest = new GetCallAnalyticsJobRequest();
    $request->getCallAnalyticsJobRequest->callAnalyticsJobName = 'iusto';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = GetCallAnalyticsJobXAmzTargetEnum::TRANSCRIBE_GET_CALL_ANALYTICS_JOB;

    $response = $sdk->sdk->getCallAnalyticsJob($request);

    if ($response->getCallAnalyticsJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMedicalTranscriptionJob

<p>Provides information about the specified medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>To get a list of your medical transcription jobs, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMedicalTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMedicalTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMedicalTranscriptionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMedicalTranscriptionJobRequest();
    $request->getMedicalTranscriptionJobRequest = new GetMedicalTranscriptionJobRequest();
    $request->getMedicalTranscriptionJobRequest->medicalTranscriptionJobName = 'ipsum';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = GetMedicalTranscriptionJobXAmzTargetEnum::TRANSCRIBE_GET_MEDICAL_TRANSCRIPTION_JOB;

    $response = $sdk->sdk->getMedicalTranscriptionJob($request);

    if ($response->getMedicalTranscriptionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMedicalVocabulary

<p>Provides information about the specified custom medical vocabulary.</p> <p>To view the status of the specified custom medical vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary failed.</p> <p>To get a list of your custom medical vocabularies, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMedicalVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMedicalVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMedicalVocabularyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMedicalVocabularyRequest();
    $request->getMedicalVocabularyRequest = new GetMedicalVocabularyRequest();
    $request->getMedicalVocabularyRequest->vocabularyName = 'voluptates';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = GetMedicalVocabularyXAmzTargetEnum::TRANSCRIBE_GET_MEDICAL_VOCABULARY;

    $response = $sdk->sdk->getMedicalVocabulary($request);

    if ($response->getMedicalVocabularyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTranscriptionJob

<p>Provides information about the specified transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>To get a list of your transcription jobs, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTranscriptionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTranscriptionJobRequest();
    $request->getTranscriptionJobRequest = new GetTranscriptionJobRequest();
    $request->getTranscriptionJobRequest->transcriptionJobName = 'consequatur';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = GetTranscriptionJobXAmzTargetEnum::TRANSCRIBE_GET_TRANSCRIPTION_JOB;

    $response = $sdk->sdk->getTranscriptionJob($request);

    if ($response->getTranscriptionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVocabulary

<p>Provides information about the specified custom vocabulary.</p> <p>To view the status of the specified custom vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your custom vocabulary failed.</p> <p>To get a list of your custom vocabularies, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVocabularyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVocabularyRequest();
    $request->getVocabularyRequest = new GetVocabularyRequest();
    $request->getVocabularyRequest->vocabularyName = 'modi';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = GetVocabularyXAmzTargetEnum::TRANSCRIBE_GET_VOCABULARY;

    $response = $sdk->sdk->getVocabulary($request);

    if ($response->getVocabularyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVocabularyFilter

<p>Provides information about the specified custom vocabulary filter.</p> <p>To get a list of your custom vocabulary filters, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVocabularyFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetVocabularyFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVocabularyFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVocabularyFilterRequest();
    $request->getVocabularyFilterRequest = new GetVocabularyFilterRequest();
    $request->getVocabularyFilterRequest->vocabularyFilterName = 'ipsam';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = GetVocabularyFilterXAmzTargetEnum::TRANSCRIBE_GET_VOCABULARY_FILTER;

    $response = $sdk->sdk->getVocabularyFilter($request);

    if ($response->getVocabularyFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCallAnalyticsCategories

<p>Provides a list of Call Analytics categories, including all rules that make up each category.</p> <p>To get detailed information about a specific Call Analytics category, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCallAnalyticsCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCallAnalyticsCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCallAnalyticsCategoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCallAnalyticsCategoriesRequest();
    $request->listCallAnalyticsCategoriesRequest = new ListCallAnalyticsCategoriesRequest();
    $request->listCallAnalyticsCategoriesRequest->maxResults = 288476;
    $request->listCallAnalyticsCategoriesRequest->nextToken = 'delectus';
    $request->maxResults = 'eum';
    $request->nextToken = 'non';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = ListCallAnalyticsCategoriesXAmzTargetEnum::TRANSCRIBE_LIST_CALL_ANALYTICS_CATEGORIES;

    $response = $sdk->sdk->listCallAnalyticsCategories($request);

    if ($response->listCallAnalyticsCategoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCallAnalyticsJobs

<p>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned.</p> <p>To get detailed information about a specific Call Analytics job, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCallAnalyticsJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCallAnalyticsJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallAnalyticsJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCallAnalyticsJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCallAnalyticsJobsRequest();
    $request->listCallAnalyticsJobsRequest = new ListCallAnalyticsJobsRequest();
    $request->listCallAnalyticsJobsRequest->jobNameContains = 'dolor';
    $request->listCallAnalyticsJobsRequest->maxResults = 891555;
    $request->listCallAnalyticsJobsRequest->nextToken = 'a';
    $request->listCallAnalyticsJobsRequest->status = CallAnalyticsJobStatusEnum::FAILED;
    $request->maxResults = 'in';
    $request->nextToken = 'in';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';
    $request->xAmzTarget = ListCallAnalyticsJobsXAmzTargetEnum::TRANSCRIBE_LIST_CALL_ANALYTICS_JOBS;

    $response = $sdk->sdk->listCallAnalyticsJobs($request);

    if ($response->listCallAnalyticsJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLanguageModels

<p>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned.</p> <p>To get detailed information about a specific custom language model, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLanguageModelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLanguageModelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLanguageModelsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLanguageModelsRequest();
    $request->listLanguageModelsRequest = new ListLanguageModelsRequest();
    $request->listLanguageModelsRequest->maxResults = 411820;
    $request->listLanguageModelsRequest->nameContains = 'aliquid';
    $request->listLanguageModelsRequest->nextToken = 'laborum';
    $request->listLanguageModelsRequest->statusEquals = ModelStatusEnum::COMPLETED;
    $request->maxResults = 'non';
    $request->nextToken = 'occaecati';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = ListLanguageModelsXAmzTargetEnum::TRANSCRIBE_LIST_LANGUAGE_MODELS;

    $response = $sdk->sdk->listLanguageModels($request);

    if ($response->listLanguageModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMedicalTranscriptionJobs

<p>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned.</p> <p>To get detailed information about a specific medical transcription job, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMedicalTranscriptionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMedicalTranscriptionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TranscriptionJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMedicalTranscriptionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMedicalTranscriptionJobsRequest();
    $request->listMedicalTranscriptionJobsRequest = new ListMedicalTranscriptionJobsRequest();
    $request->listMedicalTranscriptionJobsRequest->jobNameContains = 'blanditiis';
    $request->listMedicalTranscriptionJobsRequest->maxResults = 533206;
    $request->listMedicalTranscriptionJobsRequest->nextToken = 'sapiente';
    $request->listMedicalTranscriptionJobsRequest->status = TranscriptionJobStatusEnum::QUEUED;
    $request->maxResults = 'deserunt';
    $request->nextToken = 'nisi';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = ListMedicalTranscriptionJobsXAmzTargetEnum::TRANSCRIBE_LIST_MEDICAL_TRANSCRIPTION_JOBS;

    $response = $sdk->sdk->listMedicalTranscriptionJobs($request);

    if ($response->listMedicalTranscriptionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMedicalVocabularies

<p>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned.</p> <p>To get detailed information about a specific custom medical vocabulary, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMedicalVocabulariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMedicalVocabulariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\VocabularyStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMedicalVocabulariesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMedicalVocabulariesRequest();
    $request->listMedicalVocabulariesRequest = new ListMedicalVocabulariesRequest();
    $request->listMedicalVocabulariesRequest->maxResults = 716075;
    $request->listMedicalVocabulariesRequest->nameContains = 'id';
    $request->listMedicalVocabulariesRequest->nextToken = 'labore';
    $request->listMedicalVocabulariesRequest->stateEquals = VocabularyStateEnum::PENDING;
    $request->maxResults = 'suscipit';
    $request->nextToken = 'natus';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = ListMedicalVocabulariesXAmzTargetEnum::TRANSCRIBE_LIST_MEDICAL_VOCABULARIES;

    $response = $sdk->sdk->listMedicalVocabularies($request);

    if ($response->listMedicalVocabulariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Lists all tags associated with the specified transcription job, vocabulary, model, or resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'excepturi';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::TRANSCRIBE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTranscriptionJobs

<p>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned.</p> <p>To get detailed information about a specific transcription job, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTranscriptionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTranscriptionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TranscriptionJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTranscriptionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTranscriptionJobsRequest();
    $request->listTranscriptionJobsRequest = new ListTranscriptionJobsRequest();
    $request->listTranscriptionJobsRequest->jobNameContains = 'mollitia';
    $request->listTranscriptionJobsRequest->maxResults = 320997;
    $request->listTranscriptionJobsRequest->nextToken = 'eum';
    $request->listTranscriptionJobsRequest->status = TranscriptionJobStatusEnum::QUEUED;
    $request->maxResults = 'necessitatibus';
    $request->nextToken = 'odit';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = ListTranscriptionJobsXAmzTargetEnum::TRANSCRIBE_LIST_TRANSCRIPTION_JOBS;

    $response = $sdk->sdk->listTranscriptionJobs($request);

    if ($response->listTranscriptionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVocabularies

<p>Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVocabulariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListVocabulariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\VocabularyStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListVocabulariesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVocabulariesRequest();
    $request->listVocabulariesRequest = new ListVocabulariesRequest();
    $request->listVocabulariesRequest->maxResults = 537023;
    $request->listVocabulariesRequest->nameContains = 'facilis';
    $request->listVocabulariesRequest->nextToken = 'in';
    $request->listVocabulariesRequest->stateEquals = VocabularyStateEnum::PENDING;
    $request->maxResults = 'architecto';
    $request->nextToken = 'repudiandae';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = ListVocabulariesXAmzTargetEnum::TRANSCRIBE_LIST_VOCABULARIES;

    $response = $sdk->sdk->listVocabularies($request);

    if ($response->listVocabulariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVocabularyFilters

<p>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary filter, use the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVocabularyFiltersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListVocabularyFiltersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVocabularyFiltersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVocabularyFiltersRequest();
    $request->listVocabularyFiltersRequest = new ListVocabularyFiltersRequest();
    $request->listVocabularyFiltersRequest->maxResults = 868126;
    $request->listVocabularyFiltersRequest->nameContains = 'accusantium';
    $request->listVocabularyFiltersRequest->nextToken = 'consequuntur';
    $request->maxResults = 'praesentium';
    $request->nextToken = 'natus';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = ListVocabularyFiltersXAmzTargetEnum::TRANSCRIBE_LIST_VOCABULARY_FILTERS;

    $response = $sdk->sdk->listVocabularyFilters($request);

    if ($response->listVocabularyFiltersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startCallAnalyticsJob

<p>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> <p>If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>Note that job queuing is enabled by default for Call Analytics jobs.</p> <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>CallAnalyticsJobName</code>: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.</p> </li> <li> <p> <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code> or <code>RedactedMediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> </ul> <note> <p>With Call Analytics, you can redact the audio contained in your media file by including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartCallAnalyticsJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartCallAnalyticsJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\Media;
use \OpenAPI\OpenAPI\Models\Shared\CallAnalyticsJobSettings;
use \OpenAPI\OpenAPI\Models\Shared\ContentRedaction;
use \OpenAPI\OpenAPI\Models\Shared\PiiEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedactionOutputEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedactionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageIdSettings;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VocabularyFilterMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartCallAnalyticsJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartCallAnalyticsJobRequest();
    $request->startCallAnalyticsJobRequest = new StartCallAnalyticsJobRequest();
    $request->startCallAnalyticsJobRequest->callAnalyticsJobName = 'excepturi';
    $request->startCallAnalyticsJobRequest->channelDefinitions = [
        new ChannelDefinition(),
    ];
    $request->startCallAnalyticsJobRequest->dataAccessRoleArn = 'ea';
    $request->startCallAnalyticsJobRequest->media = new Media();
    $request->startCallAnalyticsJobRequest->media->mediaFileUri = 'accusantium';
    $request->startCallAnalyticsJobRequest->media->redactedMediaFileUri = 'ab';
    $request->startCallAnalyticsJobRequest->outputEncryptionKMSKeyId = 'maiores';
    $request->startCallAnalyticsJobRequest->outputLocation = 'quidem';
    $request->startCallAnalyticsJobRequest->settings = new CallAnalyticsJobSettings();
    $request->startCallAnalyticsJobRequest->settings->contentRedaction = new ContentRedaction();
    $request->startCallAnalyticsJobRequest->settings->contentRedaction->piiEntityTypes = [
        PiiEntityTypeEnum::PIN,
        PiiEntityTypeEnum::PIN,
    ];
    $request->startCallAnalyticsJobRequest->settings->contentRedaction->redactionOutput = RedactionOutputEnum::REDACTED_AND_UNREDACTED;
    $request->startCallAnalyticsJobRequest->settings->contentRedaction->redactionType = RedactionTypeEnum::PII;
    $request->startCallAnalyticsJobRequest->settings->languageIdSettings = [
        'pariatur' => new LanguageIdSettings(),
    ];
    $request->startCallAnalyticsJobRequest->settings->languageModelName = 'nemo';
    $request->startCallAnalyticsJobRequest->settings->languageOptions = [
        LanguageCodeEnum::AF_ZA,
        LanguageCodeEnum::ZH_TW,
        LanguageCodeEnum::EN_GB,
        LanguageCodeEnum::AF_ZA,
    ];
    $request->startCallAnalyticsJobRequest->settings->vocabularyFilterMethod = VocabularyFilterMethodEnum::TAG;
    $request->startCallAnalyticsJobRequest->settings->vocabularyFilterName = 'corporis';
    $request->startCallAnalyticsJobRequest->settings->vocabularyName = 'hic';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = StartCallAnalyticsJobXAmzTargetEnum::TRANSCRIBE_START_CALL_ANALYTICS_JOB;

    $response = $sdk->sdk->startCallAnalyticsJob($request);

    if ($response->startCallAnalyticsJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startMedicalTranscriptionJob

<p>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical works</a>.</p> <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartMedicalTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>MedicalTranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p> <code>LanguageCode</code>: This must be <code>en-US</code>.</p> </li> <li> <p> <code>OutputBucketName</code>: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include <code>OutputKey</code>.</p> </li> <li> <p> <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p> </li> <li> <p> <code>Type</code>: Choose whether your audio is a conversation or a dictation.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartMedicalTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartMedicalTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\MedicalContentIdentificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Media;
use \OpenAPI\OpenAPI\Models\Shared\MediaFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\MedicalTranscriptionSetting;
use \OpenAPI\OpenAPI\Models\Shared\SpecialtyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartMedicalTranscriptionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartMedicalTranscriptionJobRequest();
    $request->startMedicalTranscriptionJobRequest = new StartMedicalTranscriptionJobRequest();
    $request->startMedicalTranscriptionJobRequest->contentIdentificationType = MedicalContentIdentificationTypeEnum::PHI;
    $request->startMedicalTranscriptionJobRequest->kmsEncryptionContext = [
        'nesciunt' => 'eos',
        'perferendis' => 'dolores',
    ];
    $request->startMedicalTranscriptionJobRequest->languageCode = LanguageCodeEnum::TE_IN;
    $request->startMedicalTranscriptionJobRequest->media = new Media();
    $request->startMedicalTranscriptionJobRequest->media->mediaFileUri = 'quam';
    $request->startMedicalTranscriptionJobRequest->media->redactedMediaFileUri = 'dolor';
    $request->startMedicalTranscriptionJobRequest->mediaFormat = MediaFormatEnum::WEBM;
    $request->startMedicalTranscriptionJobRequest->mediaSampleRateHertz = 345352;
    $request->startMedicalTranscriptionJobRequest->medicalTranscriptionJobName = 'hic';
    $request->startMedicalTranscriptionJobRequest->outputBucketName = 'recusandae';
    $request->startMedicalTranscriptionJobRequest->outputEncryptionKMSKeyId = 'omnis';
    $request->startMedicalTranscriptionJobRequest->outputKey = 'facilis';
    $request->startMedicalTranscriptionJobRequest->settings = new MedicalTranscriptionSetting();
    $request->startMedicalTranscriptionJobRequest->settings->channelIdentification = false;
    $request->startMedicalTranscriptionJobRequest->settings->maxAlternatives = 596656;
    $request->startMedicalTranscriptionJobRequest->settings->maxSpeakerLabels = 31838;
    $request->startMedicalTranscriptionJobRequest->settings->showAlternatives = false;
    $request->startMedicalTranscriptionJobRequest->settings->showSpeakerLabels = false;
    $request->startMedicalTranscriptionJobRequest->settings->vocabularyName = 'porro';
    $request->startMedicalTranscriptionJobRequest->specialty = SpecialtyEnum::PRIMARYCARE;
    $request->startMedicalTranscriptionJobRequest->tags = [
        new Tag(),
    ];
    $request->startMedicalTranscriptionJobRequest->type = TypeEnum::DICTATION;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzTarget = StartMedicalTranscriptionJobXAmzTargetEnum::TRANSCRIBE_START_MEDICAL_TRANSCRIPTION_JOB;

    $response = $sdk->sdk->startMedicalTranscriptionJob($request);

    if ($response->startMedicalTranscriptionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTranscriptionJob

<p>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request.</p> <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>TranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code>: If you know the language of your media file, specify it using the <code>LanguageCode</code> parameter; you can find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. If you don't know the languages spoken in your media, use either <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify the languages for you.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartTranscriptionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContentRedaction;
use \OpenAPI\OpenAPI\Models\Shared\PiiEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedactionOutputEnum;
use \OpenAPI\OpenAPI\Models\Shared\RedactionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionSettings;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageIdSettings;
use \OpenAPI\OpenAPI\Models\Shared\Media;
use \OpenAPI\OpenAPI\Models\Shared\MediaFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModelSettings;
use \OpenAPI\OpenAPI\Models\Shared\Settings;
use \OpenAPI\OpenAPI\Models\Shared\VocabularyFilterMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subtitles;
use \OpenAPI\OpenAPI\Models\Shared\SubtitleFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\StartTranscriptionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTranscriptionJobRequest();
    $request->startTranscriptionJobRequest = new StartTranscriptionJobRequest();
    $request->startTranscriptionJobRequest->contentRedaction = new ContentRedaction();
    $request->startTranscriptionJobRequest->contentRedaction->piiEntityTypes = [
        PiiEntityTypeEnum::ADDRESS,
        PiiEntityTypeEnum::NAME,
    ];
    $request->startTranscriptionJobRequest->contentRedaction->redactionOutput = RedactionOutputEnum::REDACTED_AND_UNREDACTED;
    $request->startTranscriptionJobRequest->contentRedaction->redactionType = RedactionTypeEnum::PII;
    $request->startTranscriptionJobRequest->identifyLanguage = false;
    $request->startTranscriptionJobRequest->identifyMultipleLanguages = false;
    $request->startTranscriptionJobRequest->jobExecutionSettings = new JobExecutionSettings();
    $request->startTranscriptionJobRequest->jobExecutionSettings->allowDeferredExecution = false;
    $request->startTranscriptionJobRequest->jobExecutionSettings->dataAccessRoleArn = 'pariatur';
    $request->startTranscriptionJobRequest->kmsEncryptionContext = [
        'nobis' => 'libero',
        'delectus' => 'quaerat',
        'quos' => 'aliquid',
    ];
    $request->startTranscriptionJobRequest->languageCode = LanguageCodeEnum::EN_GB;
    $request->startTranscriptionJobRequest->languageIdSettings = [
        'dolor' => new LanguageIdSettings(),
    ];
    $request->startTranscriptionJobRequest->languageOptions = [
        LanguageCodeEnum::EN_GB,
    ];
    $request->startTranscriptionJobRequest->media = new Media();
    $request->startTranscriptionJobRequest->media->mediaFileUri = 'hic';
    $request->startTranscriptionJobRequest->media->redactedMediaFileUri = 'excepturi';
    $request->startTranscriptionJobRequest->mediaFormat = MediaFormatEnum::AMR;
    $request->startTranscriptionJobRequest->mediaSampleRateHertz = 452109;
    $request->startTranscriptionJobRequest->modelSettings = new ModelSettings();
    $request->startTranscriptionJobRequest->modelSettings->languageModelName = 'dignissimos';
    $request->startTranscriptionJobRequest->outputBucketName = 'reiciendis';
    $request->startTranscriptionJobRequest->outputEncryptionKMSKeyId = 'amet';
    $request->startTranscriptionJobRequest->outputKey = 'dolorum';
    $request->startTranscriptionJobRequest->settings = new Settings();
    $request->startTranscriptionJobRequest->settings->channelIdentification = false;
    $request->startTranscriptionJobRequest->settings->maxAlternatives = 254356;
    $request->startTranscriptionJobRequest->settings->maxSpeakerLabels = 85295;
    $request->startTranscriptionJobRequest->settings->showAlternatives = false;
    $request->startTranscriptionJobRequest->settings->showSpeakerLabels = false;
    $request->startTranscriptionJobRequest->settings->vocabularyFilterMethod = VocabularyFilterMethodEnum::REMOVE;
    $request->startTranscriptionJobRequest->settings->vocabularyFilterName = 'ipsa';
    $request->startTranscriptionJobRequest->settings->vocabularyName = 'iure';
    $request->startTranscriptionJobRequest->subtitles = new Subtitles();
    $request->startTranscriptionJobRequest->subtitles->formats = [
        SubtitleFormatEnum::VTT,
        SubtitleFormatEnum::SRT,
    ];
    $request->startTranscriptionJobRequest->subtitles->outputStartIndex = 696344;
    $request->startTranscriptionJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->startTranscriptionJobRequest->transcriptionJobName = 'voluptas';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = StartTranscriptionJobXAmzTargetEnum::TRANSCRIBE_START_TRANSCRIPTION_JOB;

    $response = $sdk->sdk->startTranscriptionJob($request);

    if ($response->startTranscriptionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'dolorum';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::TRANSCRIBE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Removes the specified tags from the specified Amazon Transcribe resource.</p> <p>If you include <code>UntagResource</code> in your request, you must also include <code>ResourceArn</code> and <code>TagKeys</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'nihil';
    $request->untagResourceRequest->tagKeys = [
        'voluptate',
    ];
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::TRANSCRIBE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCallAnalyticsCategory

<p>Updates the specified Call Analytics category with new rules. Note that the <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.</p> <p>To create a new category, see .</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallAnalyticsCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCallAnalyticsCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\InterruptionFilter;
use \OpenAPI\OpenAPI\Models\Shared\AbsoluteTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\ParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\RelativeTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\NonTalkTimeFilter;
use \OpenAPI\OpenAPI\Models\Shared\SentimentFilter;
use \OpenAPI\OpenAPI\Models\Shared\SentimentValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\TranscriptFilter;
use \OpenAPI\OpenAPI\Models\Shared\TranscriptFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallAnalyticsCategoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCallAnalyticsCategoryRequest();
    $request->updateCallAnalyticsCategoryRequest = new UpdateCallAnalyticsCategoryRequest();
    $request->updateCallAnalyticsCategoryRequest->categoryName = 'accusamus';
    $request->updateCallAnalyticsCategoryRequest->inputType = InputTypeEnum::REAL_TIME;
    $request->updateCallAnalyticsCategoryRequest->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = UpdateCallAnalyticsCategoryXAmzTargetEnum::TRANSCRIBE_UPDATE_CALL_ANALYTICS_CATEGORY;

    $response = $sdk->sdk->updateCallAnalyticsCategory($request);

    if ($response->updateCallAnalyticsCategoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMedicalVocabulary

Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMedicalVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMedicalVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMedicalVocabularyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMedicalVocabularyRequest();
    $request->updateMedicalVocabularyRequest = new UpdateMedicalVocabularyRequest();
    $request->updateMedicalVocabularyRequest->languageCode = LanguageCodeEnum::AF_ZA;
    $request->updateMedicalVocabularyRequest->vocabularyFileUri = 'at';
    $request->updateMedicalVocabularyRequest->vocabularyName = 'quaerat';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = UpdateMedicalVocabularyXAmzTargetEnum::TRANSCRIBE_UPDATE_MEDICAL_VOCABULARY;

    $response = $sdk->sdk->updateMedicalVocabulary($request);

    if ($response->updateMedicalVocabularyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVocabulary

Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateVocabularyRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVocabularyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVocabularyRequest();
    $request->updateVocabularyRequest = new UpdateVocabularyRequest();
    $request->updateVocabularyRequest->dataAccessRoleArn = 'esse';
    $request->updateVocabularyRequest->languageCode = LanguageCodeEnum::PT_BR;
    $request->updateVocabularyRequest->phrases = [
        'ipsum',
        'quisquam',
    ];
    $request->updateVocabularyRequest->vocabularyFileUri = 'tenetur';
    $request->updateVocabularyRequest->vocabularyName = 'amet';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = UpdateVocabularyXAmzTargetEnum::TRANSCRIBE_UPDATE_VOCABULARY;

    $response = $sdk->sdk->updateVocabulary($request);

    if ($response->updateVocabularyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVocabularyFilter

Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVocabularyFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateVocabularyFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVocabularyFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVocabularyFilterRequest();
    $request->updateVocabularyFilterRequest = new UpdateVocabularyFilterRequest();
    $request->updateVocabularyFilterRequest->dataAccessRoleArn = 'nihil';
    $request->updateVocabularyFilterRequest->vocabularyFilterFileUri = 'sit';
    $request->updateVocabularyFilterRequest->vocabularyFilterName = 'expedita';
    $request->updateVocabularyFilterRequest->words = [
        'sed',
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = UpdateVocabularyFilterXAmzTargetEnum::TRANSCRIBE_UPDATE_VOCABULARY_FILTER;

    $response = $sdk->sdk->updateVocabularyFilter($request);

    if ($response->updateVocabularyFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
