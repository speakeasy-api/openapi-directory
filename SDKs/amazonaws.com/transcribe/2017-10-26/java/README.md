# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryHeaders;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.operations.CreateCallAnalyticsCategoryResponse;
import org.openapis.openapi.models.shared.CreateCallAnalyticsCategoryRequest;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.TranscriptFilter;
import org.openapis.openapi.models.shared.TranscriptFilterTypeEnum;
import org.openapis.openapi.models.shared.RelativeTimeRange;
import org.openapis.openapi.models.shared.ParticipantRoleEnum;
import org.openapis.openapi.models.shared.AbsoluteTimeRange;
import org.openapis.openapi.models.shared.SentimentFilter;
import org.openapis.openapi.models.shared.SentimentValueEnum;
import org.openapis.openapi.models.shared.NonTalkTimeFilter;
import org.openapis.openapi.models.shared.InterruptionFilter;
import org.openapis.openapi.models.shared.InputTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateCallAnalyticsCategoryRequest req = new CreateCallAnalyticsCategoryRequest() {{
                headers = new CreateCallAnalyticsCategoryHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Transcribe.CreateCallAnalyticsCategory";
                }};
                request = new CreateCallAnalyticsCategoryRequest() {{
                    categoryName = "illum";
                    inputType = "REAL_TIME";
                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 645894;
                                    first = 384382;
                                    last = 437587;
                                    startTime = 297534;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 56713;
                                    first = 963663;
                                    last = 272656;
                                    startPercentage = 383441;
                                }};
                                threshold = 477665;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 791725;
                                    first = 812169;
                                    last = 528895;
                                    startTime = 479977;
                                }};
                                negate = false;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 568045;
                                    first = 392785;
                                    last = 925597;
                                    startPercentage = 836079;
                                }};
                                threshold = 71036;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 337396;
                                    first = 87129;
                                    last = 648172;
                                    startTime = 20218;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 832620;
                                    first = 957156;
                                    last = 778157;
                                    startPercentage = 140350;
                                }};
                                sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                    add("MIXED"),
                                    add("MIXED"),
                                    add("NEGATIVE"),
                                    add("MIXED"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 800911;
                                    first = 461479;
                                    last = 520478;
                                    startTime = 780529;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 118274;
                                    first = 720633;
                                    last = 639921;
                                    startPercentage = 582020;
                                }};
                                targets = new String[]{{
                                    add("deleniti"),
                                }};
                                transcriptFilterType = "EXACT";
                            }};
                        }}),
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 944669;
                                    first = 758616;
                                    last = 521848;
                                    startTime = 105907;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 473600;
                                    first = 264555;
                                    last = 186332;
                                    startPercentage = 774234;
                                }};
                                threshold = 736918;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 456150;
                                    first = 216550;
                                    last = 568434;
                                    startTime = 135218;
                                }};
                                negate = false;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 18789;
                                    first = 324141;
                                    last = 617636;
                                    startPercentage = 149675;
                                }};
                                threshold = 612096;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 222321;
                                    first = 616934;
                                    last = 386489;
                                    startTime = 943749;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 681820;
                                    first = 449950;
                                    last = 359508;
                                    startPercentage = 613064;
                                }};
                                sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                    add("MIXED"),
                                    add("NEUTRAL"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 99280;
                                    first = 60225;
                                    last = 969810;
                                    startTime = 666767;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 670638;
                                    first = 170909;
                                    last = 210382;
                                    startPercentage = 358152;
                                }};
                                targets = new String[]{{
                                    add("nobis"),
                                }};
                                transcriptFilterType = "EXACT";
                            }};
                        }}),
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 315428;
                                    first = 607831;
                                    last = 363711;
                                    startTime = 325047;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 38425;
                                    first = 438601;
                                    last = 634274;
                                    startPercentage = 988374;
                                }};
                                threshold = 958950;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 102044;
                                    first = 652790;
                                    last = 208876;
                                    startTime = 635059;
                                }};
                                negate = false;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 161309;
                                    first = 995300;
                                    last = 653108;
                                    startPercentage = 581850;
                                }};
                                threshold = 253291;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 414369;
                                    first = 466311;
                                    last = 474697;
                                    startTime = 244425;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 158969;
                                    first = 338007;
                                    last = 110375;
                                    startPercentage = 674752;
                                }};
                                sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                    add("NEGATIVE"),
                                    add("POSITIVE"),
                                    add("MIXED"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 196582;
                                    first = 949572;
                                    last = 368725;
                                    startTime = 662527;
                                }};
                                negate = false;
                                participantRole = "CUSTOMER";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 13571;
                                    first = 97101;
                                    last = 622846;
                                    startPercentage = 837945;
                                }};
                                targets = new String[]{{
                                    add("quasi"),
                                    add("reiciendis"),
                                    add("voluptatibus"),
                                }};
                                transcriptFilterType = "EXACT";
                            }};
                        }}),
                    }};
                }};
            }};            

            CreateCallAnalyticsCategoryResponse res = sdk.createCallAnalyticsCategory(req);

            if (res.createCallAnalyticsCategoryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createCallAnalyticsCategory` - <p>Creates a new Call Analytics category.</p> <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively.</p> <p>When creating a new category, you can use the <code>InputType</code> parameter to label the category as a <code>POST_CALL</code> or a <code>REAL_TIME</code> category. <code>POST_CALL</code> categories can only be applied to post-call transcriptions and <code>REAL_TIME</code> categories can only be applied to real-time transcriptions. If you do not include <code>InputType</code>, your category is created as a <code>POST_CALL</code> category by default.</p> <p>Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and .</p> <p>To update an existing category, see .</p> <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p>
* `createLanguageModel` - <p>Creates a new custom language model.</p> <p>When creating a new custom language model, you must specify:</p> <ul> <li> <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model</p> </li> <li> <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p> </li> <li> <p>The language of your model</p> </li> <li> <p>A unique name for your model</p> </li> </ul>
* `createMedicalVocabulary` - <p>Creates a new custom medical vocabulary.</p> <p>Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the <code>Phrases</code> flag; <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code> flag and only accepts vocabularies in table format.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* `createVocabulary` - <p>Creates a new custom vocabulary.</p> <p>When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the <code>Phrases</code> flag.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* `createVocabularyFilter` - <p>Creates a new custom vocabulary filter.</p> <p>You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary filtering</a>.</p>
* `deleteCallAnalyticsCategory` - Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using <code>CategoryName</code>. Category names are case sensitive.
* `deleteCallAnalyticsJob` - Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using <code>CallAnalyticsJobName</code>. Job names are case sensitive.
* `deleteLanguageModel` - Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using <code>ModelName</code>. custom language model names are case sensitive.
* `deleteMedicalTranscriptionJob` - Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are case sensitive.
* `deleteMedicalVocabulary` - Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* `deleteTranscriptionJob` - Deletes a transcription job. To use this operation, specify the name of the job you want to delete using <code>TranscriptionJobName</code>. Job names are case sensitive.
* `deleteVocabulary` - Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* `deleteVocabularyFilter` - Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>. Custom vocabulary filter names are case sensitive.
* `describeLanguageModel` - <p>Provides information about the specified custom language model.</p> <p>This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.</p> <p>If you tried to create a new custom language model and the request wasn't successful, you can use <code>DescribeLanguageModel</code> to help identify the reason for this failure.</p>
* `getCallAnalyticsCategory` - <p>Provides information about the specified Call Analytics category.</p> <p>To get a list of your Call Analytics categories, use the operation.</p>
* `getCallAnalyticsJob` - <p>Provides information about the specified Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in <code>RedactedMediaFileUri</code>.</p> <p>To get a list of your Call Analytics jobs, use the operation.</p>
* `getMedicalTranscriptionJob` - <p>Provides information about the specified medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>To get a list of your medical transcription jobs, use the operation.</p>
* `getMedicalVocabulary` - <p>Provides information about the specified custom medical vocabulary.</p> <p>To view the status of the specified custom medical vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary failed.</p> <p>To get a list of your custom medical vocabularies, use the operation.</p>
* `getTranscriptionJob` - <p>Provides information about the specified transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>To get a list of your transcription jobs, use the operation.</p>
* `getVocabulary` - <p>Provides information about the specified custom vocabulary.</p> <p>To view the status of the specified custom vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your custom vocabulary failed.</p> <p>To get a list of your custom vocabularies, use the operation.</p>
* `getVocabularyFilter` - <p>Provides information about the specified custom vocabulary filter.</p> <p>To get a list of your custom vocabulary filters, use the operation.</p>
* `listCallAnalyticsCategories` - <p>Provides a list of Call Analytics categories, including all rules that make up each category.</p> <p>To get detailed information about a specific Call Analytics category, use the operation.</p>
* `listCallAnalyticsJobs` - <p>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned.</p> <p>To get detailed information about a specific Call Analytics job, use the operation.</p>
* `listLanguageModels` - <p>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned.</p> <p>To get detailed information about a specific custom language model, use the operation.</p>
* `listMedicalTranscriptionJobs` - <p>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned.</p> <p>To get detailed information about a specific medical transcription job, use the operation.</p>
* `listMedicalVocabularies` - <p>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned.</p> <p>To get detailed information about a specific custom medical vocabulary, use the operation.</p>
* `listTagsForResource` - <p>Lists all tags associated with the specified transcription job, vocabulary, model, or resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* `listTranscriptionJobs` - <p>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned.</p> <p>To get detailed information about a specific transcription job, use the operation.</p>
* `listVocabularies` - <p>Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary, use the operation.</p>
* `listVocabularyFilters` - <p>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary filter, use the operation.</p>
* `startCallAnalyticsJob` - <p>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> <p>If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>Note that job queuing is enabled by default for Call Analytics jobs.</p> <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>CallAnalyticsJobName</code>: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.</p> </li> <li> <p> <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code> or <code>RedactedMediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> </ul> <note> <p>With Call Analytics, you can redact the audio contained in your media file by including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> </note>
* `startMedicalTranscriptionJob` - <p>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical works</a>.</p> <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartMedicalTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>MedicalTranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p> <code>LanguageCode</code>: This must be <code>en-US</code>.</p> </li> <li> <p> <code>OutputBucketName</code>: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include <code>OutputKey</code>.</p> </li> <li> <p> <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p> </li> <li> <p> <code>Type</code>: Choose whether your audio is a conversation or a dictation.</p> </li> </ul>
* `startTranscriptionJob` - <p>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request.</p> <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>TranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code>: If you know the language of your media file, specify it using the <code>LanguageCode</code> parameter; you can find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. If you don't know the languages spoken in your media, use either <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify the languages for you.</p> </li> </ul>
* `tagResource` - <p>Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* `untagResource` - <p>Removes the specified tags from the specified Amazon Transcribe resource.</p> <p>If you include <code>UntagResource</code> in your request, you must also include <code>ResourceArn</code> and <code>TagKeys</code>.</p>
* `updateCallAnalyticsCategory` - <p>Updates the specified Call Analytics category with new rules. Note that the <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.</p> <p>To create a new category, see .</p>
* `updateMedicalVocabulary` - Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* `updateVocabulary` - Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* `updateVocabularyFilter` - Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
