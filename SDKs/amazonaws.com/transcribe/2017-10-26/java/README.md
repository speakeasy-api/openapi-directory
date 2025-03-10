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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCallAnalyticsCategoryRequest req = new CreateCallAnalyticsCategoryRequest(                new CreateCallAnalyticsCategoryRequest("provident",                 new org.openapis.openapi.models.shared.Rule[]{{
                                                add(new Rule() {{
                                                    interruptionFilter = new InterruptionFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 844266L;
                                                            first = 602763L;
                                                            last = 857946L;
                                                            startTime = 544883L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 423655L;
                                                            first = 623564L;
                                                            last = 645894L;
                                                            startPercentage = 384382L;
                                                        }};
                                                        threshold = 437587L;
                                                    }};
                                                    nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 297534L;
                                                            first = 891773L;
                                                            last = 56713L;
                                                            startTime = 963663L;
                                                        }};
                                                        negate = false;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 272656L;
                                                            first = 383441L;
                                                            last = 477665L;
                                                            startPercentage = 791725L;
                                                        }};
                                                        threshold = 812169L;
                                                    }};
                                                    sentimentFilter = new SentimentFilter(                new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                                        add(SentimentValueEnum.MIXED),
                                                                        add(SentimentValueEnum.POSITIVE),
                                                                        add(SentimentValueEnum.MIXED),
                                                                        add(SentimentValueEnum.MIXED),
                                                                    }}) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 528895L;
                                                            first = 479977L;
                                                            last = 568045L;
                                                            startTime = 392785L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 836079L;
                                                            first = 71036L;
                                                            last = 337396L;
                                                            startPercentage = 87129L;
                                                        }};
                                                        sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                            add(SentimentValueEnum.POSITIVE),
                                                            add(SentimentValueEnum.NEGATIVE),
                                                            add(SentimentValueEnum.MIXED),
                                                        }};
                                                    }};
                                                    transcriptFilter = new TranscriptFilter(                new String[]{{
                                                                        add("hic"),
                                                                        add("optio"),
                                                                        add("totam"),
                                                                    }}, TranscriptFilterTypeEnum.EXACT) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 978619L;
                                                            first = 473608L;
                                                            last = 799159L;
                                                            startTime = 800911L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 520478L;
                                                            first = 780529L;
                                                            last = 678880L;
                                                            startPercentage = 118274L;
                                                        }};
                                                        targets = new String[]{{
                                                            add("officia"),
                                                            add("occaecati"),
                                                            add("fugit"),
                                                        }};
                                                        transcriptFilterType = TranscriptFilterTypeEnum.EXACT;
                                                    }};
                                                }}),
                                                add(new Rule() {{
                                                    interruptionFilter = new InterruptionFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 105907L;
                                                            first = 414662L;
                                                            last = 473600L;
                                                            startTime = 264555L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 774234L;
                                                            first = 736918L;
                                                            last = 456150L;
                                                            startPercentage = 216550L;
                                                        }};
                                                        threshold = 568434L;
                                                    }};
                                                    nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 135218L;
                                                            first = 18789L;
                                                            last = 324141L;
                                                            startTime = 617636L;
                                                        }};
                                                        negate = false;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 149675L;
                                                            first = 612096L;
                                                            last = 222321L;
                                                            startPercentage = 616934L;
                                                        }};
                                                        threshold = 386489L;
                                                    }};
                                                    sentimentFilter = new SentimentFilter(                new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                        add(SentimentValueEnum.POSITIVE),
                                                                    }}) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 943749L;
                                                            first = 902599L;
                                                            last = 681820L;
                                                            startTime = 449950L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 613064L;
                                                            first = 437032L;
                                                            last = 902349L;
                                                            startPercentage = 697631L;
                                                        }};
                                                        sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                            add(SentimentValueEnum.POSITIVE),
                                                        }};
                                                    }};
                                                    transcriptFilter = new TranscriptFilter(                new String[]{{
                                                                        add("doloribus"),
                                                                        add("sapiente"),
                                                                        add("architecto"),
                                                                    }}, TranscriptFilterTypeEnum.EXACT) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 210382L;
                                                            first = 358152L;
                                                            last = 128926L;
                                                            startTime = 750686L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 607831L;
                                                            first = 363711L;
                                                            last = 325047L;
                                                            startPercentage = 570197L;
                                                        }};
                                                        targets = new String[]{{
                                                            add("iure"),
                                                        }};
                                                        transcriptFilterType = TranscriptFilterTypeEnum.EXACT;
                                                    }};
                                                }}),
                                                add(new Rule() {{
                                                    interruptionFilter = new InterruptionFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 652790L;
                                                            first = 208876L;
                                                            last = 635059L;
                                                            startTime = 161309L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 653108L;
                                                            first = 581850L;
                                                            last = 253291L;
                                                            startPercentage = 414369L;
                                                        }};
                                                        threshold = 466311L;
                                                    }};
                                                    nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 474697L;
                                                            first = 244425L;
                                                            last = 623510L;
                                                            startTime = 158969L;
                                                        }};
                                                        negate = false;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 338007L;
                                                            first = 110375L;
                                                            last = 674752L;
                                                            startPercentage = 656330L;
                                                        }};
                                                        threshold = 317202L;
                                                    }};
                                                    sentimentFilter = new SentimentFilter(                new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                                        add(SentimentValueEnum.MIXED),
                                                                        add(SentimentValueEnum.MIXED),
                                                                        add(SentimentValueEnum.NEGATIVE),
                                                                        add(SentimentValueEnum.NEUTRAL),
                                                                    }}) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 138183L;
                                                            first = 778346L;
                                                            last = 196582L;
                                                            startTime = 949572L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.AGENT;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 662527L;
                                                            first = 820994L;
                                                            last = 13571L;
                                                            startPercentage = 97101L;
                                                        }};
                                                        sentiments = new org.openapis.openapi.models.shared.SentimentValueEnum[]{{
                                                            add(SentimentValueEnum.MIXED),
                                                            add(SentimentValueEnum.NEUTRAL),
                                                            add(SentimentValueEnum.POSITIVE),
                                                        }};
                                                    }};
                                                    transcriptFilter = new TranscriptFilter(                new String[]{{
                                                                        add("harum"),
                                                                    }}, TranscriptFilterTypeEnum.EXACT) {{
                                                        absoluteTimeRange = new AbsoluteTimeRange() {{
                                                            endTime = 976762L;
                                                            first = 55714L;
                                                            last = 604846L;
                                                            startTime = 451159L;
                                                        }};
                                                        negate = false;
                                                        participantRole = ParticipantRoleEnum.CUSTOMER;
                                                        relativeTimeRange = new RelativeTimeRange() {{
                                                            endPercentage = 19987L;
                                                            first = 39187L;
                                                            last = 441711L;
                                                            startPercentage = 282807L;
                                                        }};
                                                        targets = new String[]{{
                                                            add("dicta"),
                                                            add("corporis"),
                                                            add("dolore"),
                                                            add("iusto"),
                                                        }};
                                                        transcriptFilterType = TranscriptFilterTypeEnum.EXACT;
                                                    }};
                                                }}),
                                            }}) {{
                                inputType = InputTypeEnum.REAL_TIME;
                            }};, CreateCallAnalyticsCategoryXAmzTargetEnum.TRANSCRIBE_CREATE_CALL_ANALYTICS_CATEGORY) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            CreateCallAnalyticsCategoryResponse res = sdk.createCallAnalyticsCategory(req);

            if (res.createCallAnalyticsCategoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createCallAnalyticsCategory](docs/sdk/README.md#createcallanalyticscategory) - <p>Creates a new Call Analytics category.</p> <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively.</p> <p>When creating a new category, you can use the <code>InputType</code> parameter to label the category as a <code>POST_CALL</code> or a <code>REAL_TIME</code> category. <code>POST_CALL</code> categories can only be applied to post-call transcriptions and <code>REAL_TIME</code> categories can only be applied to real-time transcriptions. If you do not include <code>InputType</code>, your category is created as a <code>POST_CALL</code> category by default.</p> <p>Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and .</p> <p>To update an existing category, see .</p> <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p>
* [createLanguageModel](docs/sdk/README.md#createlanguagemodel) - <p>Creates a new custom language model.</p> <p>When creating a new custom language model, you must specify:</p> <ul> <li> <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model</p> </li> <li> <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p> </li> <li> <p>The language of your model</p> </li> <li> <p>A unique name for your model</p> </li> </ul>
* [createMedicalVocabulary](docs/sdk/README.md#createmedicalvocabulary) - <p>Creates a new custom medical vocabulary.</p> <p>Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the <code>Phrases</code> flag; <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code> flag and only accepts vocabularies in table format.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* [createVocabulary](docs/sdk/README.md#createvocabulary) - <p>Creates a new custom vocabulary.</p> <p>When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the <code>Phrases</code> flag.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
* [createVocabularyFilter](docs/sdk/README.md#createvocabularyfilter) - <p>Creates a new custom vocabulary filter.</p> <p>You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary filtering</a>.</p>
* [deleteCallAnalyticsCategory](docs/sdk/README.md#deletecallanalyticscategory) - Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using <code>CategoryName</code>. Category names are case sensitive.
* [deleteCallAnalyticsJob](docs/sdk/README.md#deletecallanalyticsjob) - Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using <code>CallAnalyticsJobName</code>. Job names are case sensitive.
* [deleteLanguageModel](docs/sdk/README.md#deletelanguagemodel) - Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using <code>ModelName</code>. custom language model names are case sensitive.
* [deleteMedicalTranscriptionJob](docs/sdk/README.md#deletemedicaltranscriptionjob) - Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are case sensitive.
* [deleteMedicalVocabulary](docs/sdk/README.md#deletemedicalvocabulary) - Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* [deleteTranscriptionJob](docs/sdk/README.md#deletetranscriptionjob) - Deletes a transcription job. To use this operation, specify the name of the job you want to delete using <code>TranscriptionJobName</code>. Job names are case sensitive.
* [deleteVocabulary](docs/sdk/README.md#deletevocabulary) - Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
* [deleteVocabularyFilter](docs/sdk/README.md#deletevocabularyfilter) - Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>. Custom vocabulary filter names are case sensitive.
* [describeLanguageModel](docs/sdk/README.md#describelanguagemodel) - <p>Provides information about the specified custom language model.</p> <p>This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.</p> <p>If you tried to create a new custom language model and the request wasn't successful, you can use <code>DescribeLanguageModel</code> to help identify the reason for this failure.</p>
* [getCallAnalyticsCategory](docs/sdk/README.md#getcallanalyticscategory) - <p>Provides information about the specified Call Analytics category.</p> <p>To get a list of your Call Analytics categories, use the operation.</p>
* [getCallAnalyticsJob](docs/sdk/README.md#getcallanalyticsjob) - <p>Provides information about the specified Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in <code>RedactedMediaFileUri</code>.</p> <p>To get a list of your Call Analytics jobs, use the operation.</p>
* [getMedicalTranscriptionJob](docs/sdk/README.md#getmedicaltranscriptionjob) - <p>Provides information about the specified medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>To get a list of your medical transcription jobs, use the operation.</p>
* [getMedicalVocabulary](docs/sdk/README.md#getmedicalvocabulary) - <p>Provides information about the specified custom medical vocabulary.</p> <p>To view the status of the specified custom medical vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary failed.</p> <p>To get a list of your custom medical vocabularies, use the operation.</p>
* [getTranscriptionJob](docs/sdk/README.md#gettranscriptionjob) - <p>Provides information about the specified transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>To get a list of your transcription jobs, use the operation.</p>
* [getVocabulary](docs/sdk/README.md#getvocabulary) - <p>Provides information about the specified custom vocabulary.</p> <p>To view the status of the specified custom vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your custom vocabulary failed.</p> <p>To get a list of your custom vocabularies, use the operation.</p>
* [getVocabularyFilter](docs/sdk/README.md#getvocabularyfilter) - <p>Provides information about the specified custom vocabulary filter.</p> <p>To get a list of your custom vocabulary filters, use the operation.</p>
* [listCallAnalyticsCategories](docs/sdk/README.md#listcallanalyticscategories) - <p>Provides a list of Call Analytics categories, including all rules that make up each category.</p> <p>To get detailed information about a specific Call Analytics category, use the operation.</p>
* [listCallAnalyticsJobs](docs/sdk/README.md#listcallanalyticsjobs) - <p>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned.</p> <p>To get detailed information about a specific Call Analytics job, use the operation.</p>
* [listLanguageModels](docs/sdk/README.md#listlanguagemodels) - <p>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned.</p> <p>To get detailed information about a specific custom language model, use the operation.</p>
* [listMedicalTranscriptionJobs](docs/sdk/README.md#listmedicaltranscriptionjobs) - <p>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned.</p> <p>To get detailed information about a specific medical transcription job, use the operation.</p>
* [listMedicalVocabularies](docs/sdk/README.md#listmedicalvocabularies) - <p>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned.</p> <p>To get detailed information about a specific custom medical vocabulary, use the operation.</p>
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - <p>Lists all tags associated with the specified transcription job, vocabulary, model, or resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* [listTranscriptionJobs](docs/sdk/README.md#listtranscriptionjobs) - <p>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned.</p> <p>To get detailed information about a specific transcription job, use the operation.</p>
* [listVocabularies](docs/sdk/README.md#listvocabularies) - <p>Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary, use the operation.</p>
* [listVocabularyFilters](docs/sdk/README.md#listvocabularyfilters) - <p>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary filter, use the operation.</p>
* [startCallAnalyticsJob](docs/sdk/README.md#startcallanalyticsjob) - <p>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> <p>If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>Note that job queuing is enabled by default for Call Analytics jobs.</p> <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>CallAnalyticsJobName</code>: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.</p> </li> <li> <p> <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code> or <code>RedactedMediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> </ul> <note> <p>With Call Analytics, you can redact the audio contained in your media file by including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> </note>
* [startMedicalTranscriptionJob](docs/sdk/README.md#startmedicaltranscriptionjob) - <p>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical works</a>.</p> <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartMedicalTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>MedicalTranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p> <code>LanguageCode</code>: This must be <code>en-US</code>.</p> </li> <li> <p> <code>OutputBucketName</code>: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include <code>OutputKey</code>.</p> </li> <li> <p> <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p> </li> <li> <p> <code>Type</code>: Choose whether your audio is a conversation or a dictation.</p> </li> </ul>
* [startTranscriptionJob](docs/sdk/README.md#starttranscriptionjob) - <p>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request.</p> <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>TranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code>: If you know the language of your media file, specify it using the <code>LanguageCode</code> parameter; you can find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. If you don't know the languages spoken in your media, use either <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify the languages for you.</p> </li> </ul>
* [tagResource](docs/sdk/README.md#tagresource) - <p>Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
* [untagResource](docs/sdk/README.md#untagresource) - <p>Removes the specified tags from the specified Amazon Transcribe resource.</p> <p>If you include <code>UntagResource</code> in your request, you must also include <code>ResourceArn</code> and <code>TagKeys</code>.</p>
* [updateCallAnalyticsCategory](docs/sdk/README.md#updatecallanalyticscategory) - <p>Updates the specified Call Analytics category with new rules. Note that the <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.</p> <p>To create a new category, see .</p>
* [updateMedicalVocabulary](docs/sdk/README.md#updatemedicalvocabulary) - Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* [updateVocabulary](docs/sdk/README.md#updatevocabulary) - Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
* [updateVocabularyFilter](docs/sdk/README.md#updatevocabularyfilter) - Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
