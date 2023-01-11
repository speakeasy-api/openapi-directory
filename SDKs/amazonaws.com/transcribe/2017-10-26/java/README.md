# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateCallAnalyticsCategoryRequest req = new CreateCallAnalyticsCategoryRequest() {{
                headers = new CreateCallAnalyticsCategoryHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "Transcribe.CreateCallAnalyticsCategory";
                }};
                request = new CreateCallAnalyticsCategoryRequest() {{
                    categoryName = "fugit";
                    rules = new openapisdk.models.shared.Rule[]() {{
                        add(new Rule() {{
                            interruptionFilter = new InterruptionFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 2661732831099943416;
                                    first = 8325060299420976708;
                                    last = 7837839688282259259;
                                    startTime = 2518412263346885298;
                                }};
                                negate = true;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 7144924247938981575;
                                    first = 161231572858529631;
                                    last = 7259475919510918339;
                                    startPercentage = 7373105480197164748;
                                }};
                                threshold = 3287288577352441706;
                            }};
                            nonTalkTimeFilter = new NonTalkTimeFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 3930927879439176946;
                                    first = 4706154865122290029;
                                    last = 2217592893536642650;
                                    startTime = 1929546706668609706;
                                }};
                                negate = true;
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 3706853784096366226;
                                    first = 2627038740284806767;
                                    last = 6303220950515014660;
                                    startPercentage = 4035568504096476779;
                                }};
                                threshold = 959367522974354090;
                            }};
                            sentimentFilter = new SentimentFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 2914295034816259174;
                                    first = 1395437218309923052;
                                    last = 6745438398739480977;
                                    startTime = 2897681629866238117;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 3317123977833389635;
                                    first = 5001958211167890979;
                                    last = 167566062957544642;
                                    startPercentage = 4778690082005258714;
                                }};
                                sentiments = new openapisdk.models.shared.SentimentValueEnum[]() {{
                                    add("POSITIVE"),
                                }};
                            }};
                            transcriptFilter = new TranscriptFilter() {{
                                absoluteTimeRange = new AbsoluteTimeRange() {{
                                    endTime = 5558237345453186302;
                                    first = 7845762441295307478;
                                    last = 771642788862502430;
                                    startTime = 8514850266767180993;
                                }};
                                negate = false;
                                participantRole = "AGENT";
                                relativeTimeRange = new RelativeTimeRange() {{
                                    endPercentage = 7699391924090763411;
                                    first = 388440063886460141;
                                    last = 7561811714888168464;
                                    startPercentage = 3959279844101328186;
                                }};
                                targets = new String[]() {{
                                    add("modi"),
                                    add("sint"),
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

* `createCallAnalyticsCategory` - Creates an analytics category. Amazon Transcribe applies the conditions specified by your analytics categories to your call analytics jobs. For each analytics category, you specify one or more rules. For example, you can specify a rule that the customer sentiment was neutral or negative within that category. If you start a call analytics job, Amazon Transcribe applies the category to the analytics job that you've specified.
* `createLanguageModel` - Creates a new custom language model. Use Amazon S3 prefixes to provide the location of your input files. The time it takes to create your model depends on the size of your training data.
* `createMedicalVocabulary` - Creates a new custom vocabulary that you can use to modify how Amazon Transcribe Medical transcribes your audio file.
* `createVocabulary` - Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file.
* `createVocabularyFilter` - Creates a new vocabulary filter that you can use to filter words, such as profane words, from the output of a transcription job.
* `deleteCallAnalyticsCategory` - Deletes a call analytics category using its name.
* `deleteCallAnalyticsJob` - Deletes a call analytics job using its name.
* `deleteLanguageModel` - Deletes a custom language model using its name.
* `deleteMedicalTranscriptionJob` - Deletes a transcription job generated by Amazon Transcribe Medical and any related information.
* `deleteMedicalVocabulary` - Deletes a vocabulary from Amazon Transcribe Medical.
* `deleteTranscriptionJob` - Deletes a previously submitted transcription job along with any other generated results such as the transcription, models, and so on.
* `deleteVocabulary` - Deletes a vocabulary from Amazon Transcribe. 
* `deleteVocabularyFilter` - Removes a vocabulary filter.
* `describeLanguageModel` - Gets information about a single custom language model. Use this information to see details about the language model in your Amazon Web Services account. You can also see whether the base language model used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If the language model wasn't created, you can use this operation to understand why Amazon Transcribe couldn't create it. 
* `getCallAnalyticsCategory` - Retrieves information about a call analytics category.
* `getCallAnalyticsJob` - Returns information about a call analytics job. To see the status of the job, check the <code>CallAnalyticsJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable personally identifiable information (PII) redaction, the redacted transcript appears in the <code>RedactedTranscriptFileUri</code> field.
* `getMedicalTranscriptionJob` - Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You find the results of the completed job in the <code>TranscriptFileUri</code> field.
* `getMedicalVocabulary` - Retrieves information about a medical vocabulary.
* `getTranscriptionJob` - Returns information about a transcription job. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted transcript appears in <code>RedactedTranscriptFileUri</code>.
* `getVocabulary` - Gets information about a vocabulary. 
* `getVocabularyFilter` - Returns information about a vocabulary filter.
* `listCallAnalyticsCategories` - Provides more information about the call analytics categories that you've created. You can use the information in this list to find a specific category. You can then use the operation to get more information about it.
* `listCallAnalyticsJobs` - List call analytics jobs with a specified status or substring that matches their names.
* `listLanguageModels` - Provides more information about the custom language models you've created. You can use the information in this list to find a specific custom language model. You can then use the operation to get more information about it.
* `listMedicalTranscriptionJobs` - Lists medical transcription jobs with a specified status or substring that matches their names.
* `listMedicalVocabularies` - Returns a list of vocabularies that match the specified criteria. If you don't enter a value in any of the request parameters, returns the entire list of vocabularies.
* `listTagsForResource` - Lists all tags associated with a given transcription job, vocabulary, or resource.
* `listTranscriptionJobs` - Lists transcription jobs with the specified status.
* `listVocabularies` - Returns a list of vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.
* `listVocabularyFilters` - Gets information about vocabulary filters.
* `startCallAnalyticsJob` - Starts an asynchronous analytics job that not only transcribes the audio recording of a caller and agent, but also returns additional insights. These insights include how quickly or loudly the caller or agent was speaking. To retrieve additional insights with your analytics jobs, create categories. A category is a way to classify analytics jobs based on attributes, such as a customer's sentiment or a particular phrase being used during the call. For more information, see the operation. 
* `startMedicalTranscriptionJob` - Starts a batch job to transcribe medical speech to text.
* `startTranscriptionJob` - Starts an asynchronous job to transcribe speech to text.
* `tagResource` - Tags a Amazon Transcribe resource with the given list of tags.
* `untagResource` - Removes specified tags from a specified Amazon Transcribe resource.
* `updateCallAnalyticsCategory` - Updates the call analytics category with new values. The <code>UpdateCallAnalyticsCategory</code> operation overwrites all of the existing information with the values that you provide in the request. 
* `updateMedicalVocabulary` - Updates a vocabulary with new values that you provide in a different text file from the one you used to create the vocabulary. The <code>UpdateMedicalVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request.
* `updateVocabulary` - Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request. 
* `updateVocabularyFilter` - Updates a vocabulary filter with a new list of filtered words.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
