# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateCallAnalyticsCategoryRequest(
    headers=operations.CreateCallAnalyticsCategoryHeaders(
        x_amz_algorithm="dolorem",
        x_amz_content_sha256="quos",
        x_amz_credential="deleniti",
        x_amz_date="commodi",
        x_amz_security_token="nobis",
        x_amz_signature="ea",
        x_amz_signed_headers="aspernatur",
        x_amz_target="Transcribe.CreateCallAnalyticsCategory",
    ),
    request=shared.CreateCallAnalyticsCategoryRequest(
        category_name="et",
        rules=[
            shared.Rule(
                interruption_filter=shared.InterruptionFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=6415833391072357588,
                        first=3572998533988533354,
                        last=186115592639377320,
                        start_time=8371597839286912540,
                    ),
                    negate=True,
                    participant_role="AGENT",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=1737084578504854227,
                        first=4072567731903858704,
                        last=4237085410032209086,
                        start_percentage=3111927870552615307,
                    ),
                    threshold=5810679218075794205,
                ),
                non_talk_time_filter=shared.NonTalkTimeFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=4375415044152406675,
                        first=6065226614949015610,
                        last=5255522860651016346,
                        start_time=4904486519077315581,
                    ),
                    negate=False,
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=8950864482110226516,
                        first=635778494545269976,
                        last=732909964824197774,
                        start_percentage=3574948044123775516,
                    ),
                    threshold=8837983961987368305,
                ),
                sentiment_filter=shared.SentimentFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=5910514474348776200,
                        first=6822908827298521697,
                        last=6724775564262686261,
                        start_time=448293307772452745,
                    ),
                    negate=False,
                    participant_role="AGENT",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=5824651986652714030,
                        first=6131616903038811778,
                        last=4594817126626365342,
                        start_percentage=5909463814165818777,
                    ),
                    sentiments=[
                        "MIXED",
                    ],
                ),
                transcript_filter=shared.TranscriptFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=4757942231363494366,
                        first=6398098165847865044,
                        last=8555143277468378870,
                        start_time=2953219465361743600,
                    ),
                    negate=True,
                    participant_role="AGENT",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=9094254215425192755,
                        first=8700678006278600136,
                        last=4987874047483574799,
                        start_percentage=1867551380647168719,
                    ),
                    targets=[
                        "voluptas",
                    ],
                    transcript_filter_type="EXACT",
                ),
            ),
            shared.Rule(
                interruption_filter=shared.InterruptionFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=1354945883733857766,
                        first=2429851522834465117,
                        last=4014337987995578881,
                        start_time=2407209082118264778,
                    ),
                    negate=False,
                    participant_role="CUSTOMER",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=8059088005692139324,
                        first=1616693811299928439,
                        last=6166181411057100347,
                        start_percentage=7028536834256048015,
                    ),
                    threshold=1174564792239911455,
                ),
                non_talk_time_filter=shared.NonTalkTimeFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=2323166218679581466,
                        first=7469748512072958204,
                        last=7765873993746785792,
                        start_time=7182270801018086339,
                    ),
                    negate=False,
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=3252394919724459204,
                        first=4839093639110720179,
                        last=6513358929122907454,
                        start_percentage=7230693517838244503,
                    ),
                    threshold=6854478643425791986,
                ),
                sentiment_filter=shared.SentimentFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=4432917687975454065,
                        first=3838103805727716046,
                        last=5088282042390589507,
                        start_time=7067021397838106794,
                    ),
                    negate=False,
                    participant_role="AGENT",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=6950814023290779017,
                        first=2685439770505515950,
                        last=301785877603363027,
                        start_percentage=3728036883544637968,
                    ),
                    sentiments=[
                        "MIXED",
                    ],
                ),
                transcript_filter=shared.TranscriptFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=1058936719184805791,
                        first=9128763404757230253,
                        last=8358558923616582182,
                        start_time=6209843430664353487,
                    ),
                    negate=True,
                    participant_role="AGENT",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=777632575137638028,
                        first=1039248335667233226,
                        last=1768953860407738737,
                        start_percentage=2732151556483902484,
                    ),
                    targets=[
                        "alias",
                        "id",
                        "in",
                    ],
                    transcript_filter_type="EXACT",
                ),
            ),
            shared.Rule(
                interruption_filter=shared.InterruptionFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=8981508418491254011,
                        first=2670592554296272629,
                        last=4609291726380021962,
                        start_time=2838559931627351935,
                    ),
                    negate=False,
                    participant_role="CUSTOMER",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=3011457315831140961,
                        first=7813841376088152101,
                        last=5646368466189309592,
                        start_percentage=7279099440217309754,
                    ),
                    threshold=8291728496659502847,
                ),
                non_talk_time_filter=shared.NonTalkTimeFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=3616220076055127616,
                        first=1889402167586546675,
                        last=6631662835676981989,
                        start_time=2489959074308973683,
                    ),
                    negate=True,
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=3935710304177491303,
                        first=3594503320079042333,
                        last=5067957230603510300,
                        start_percentage=4613481507084047686,
                    ),
                    threshold=8645490517459002672,
                ),
                sentiment_filter=shared.SentimentFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=6183506943487606482,
                        first=7653920585589605553,
                        last=6151577229671946683,
                        start_time=26606651514557410,
                    ),
                    negate=False,
                    participant_role="AGENT",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=3166852158880406779,
                        first=927782600915074395,
                        last=2541103059884869503,
                        start_percentage=9089901266438170756,
                    ),
                    sentiments=[
                        "POSITIVE",
                        "NEGATIVE",
                    ],
                ),
                transcript_filter=shared.TranscriptFilter(
                    absolute_time_range=shared.AbsoluteTimeRange(
                        end_time=6741667782486366789,
                        first=2142001216773853386,
                        last=58572451421529771,
                        start_time=8036607006448114164,
                    ),
                    negate=True,
                    participant_role="AGENT",
                    relative_time_range=shared.RelativeTimeRange(
                        end_percentage=3450701776215534863,
                        first=5317553351886277283,
                        last=3848007284071124204,
                        start_percentage=8598532481109664405,
                    ),
                    targets=[
                        "non",
                        "rerum",
                        "repellat",
                    ],
                    transcript_filter_type="EXACT",
                ),
            ),
        ],
    ),
)
    
res = s.create_call_analytics_category(req)

if res.create_call_analytics_category_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_call_analytics_category` - Creates an analytics category. Amazon Transcribe applies the conditions specified by your analytics categories to your call analytics jobs. For each analytics category, you specify one or more rules. For example, you can specify a rule that the customer sentiment was neutral or negative within that category. If you start a call analytics job, Amazon Transcribe applies the category to the analytics job that you've specified.
* `create_language_model` - Creates a new custom language model. Use Amazon S3 prefixes to provide the location of your input files. The time it takes to create your model depends on the size of your training data.
* `create_medical_vocabulary` - Creates a new custom vocabulary that you can use to modify how Amazon Transcribe Medical transcribes your audio file.
* `create_vocabulary` - Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file.
* `create_vocabulary_filter` - Creates a new vocabulary filter that you can use to filter words, such as profane words, from the output of a transcription job.
* `delete_call_analytics_category` - Deletes a call analytics category using its name.
* `delete_call_analytics_job` - Deletes a call analytics job using its name.
* `delete_language_model` - Deletes a custom language model using its name.
* `delete_medical_transcription_job` - Deletes a transcription job generated by Amazon Transcribe Medical and any related information.
* `delete_medical_vocabulary` - Deletes a vocabulary from Amazon Transcribe Medical.
* `delete_transcription_job` - Deletes a previously submitted transcription job along with any other generated results such as the transcription, models, and so on.
* `delete_vocabulary` - Deletes a vocabulary from Amazon Transcribe. 
* `delete_vocabulary_filter` - Removes a vocabulary filter.
* `describe_language_model` - Gets information about a single custom language model. Use this information to see details about the language model in your Amazon Web Services account. You can also see whether the base language model used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If the language model wasn't created, you can use this operation to understand why Amazon Transcribe couldn't create it. 
* `get_call_analytics_category` - Retrieves information about a call analytics category.
* `get_call_analytics_job` - Returns information about a call analytics job. To see the status of the job, check the <code>CallAnalyticsJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable personally identifiable information (PII) redaction, the redacted transcript appears in the <code>RedactedTranscriptFileUri</code> field.
* `get_medical_transcription_job` - Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You find the results of the completed job in the <code>TranscriptFileUri</code> field.
* `get_medical_vocabulary` - Retrieves information about a medical vocabulary.
* `get_transcription_job` - Returns information about a transcription job. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted transcript appears in <code>RedactedTranscriptFileUri</code>.
* `get_vocabulary` - Gets information about a vocabulary. 
* `get_vocabulary_filter` - Returns information about a vocabulary filter.
* `list_call_analytics_categories` - Provides more information about the call analytics categories that you've created. You can use the information in this list to find a specific category. You can then use the operation to get more information about it.
* `list_call_analytics_jobs` - List call analytics jobs with a specified status or substring that matches their names.
* `list_language_models` - Provides more information about the custom language models you've created. You can use the information in this list to find a specific custom language model. You can then use the operation to get more information about it.
* `list_medical_transcription_jobs` - Lists medical transcription jobs with a specified status or substring that matches their names.
* `list_medical_vocabularies` - Returns a list of vocabularies that match the specified criteria. If you don't enter a value in any of the request parameters, returns the entire list of vocabularies.
* `list_tags_for_resource` - Lists all tags associated with a given transcription job, vocabulary, or resource.
* `list_transcription_jobs` - Lists transcription jobs with the specified status.
* `list_vocabularies` - Returns a list of vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.
* `list_vocabulary_filters` - Gets information about vocabulary filters.
* `start_call_analytics_job` - Starts an asynchronous analytics job that not only transcribes the audio recording of a caller and agent, but also returns additional insights. These insights include how quickly or loudly the caller or agent was speaking. To retrieve additional insights with your analytics jobs, create categories. A category is a way to classify analytics jobs based on attributes, such as a customer's sentiment or a particular phrase being used during the call. For more information, see the operation. 
* `start_medical_transcription_job` - Starts a batch job to transcribe medical speech to text.
* `start_transcription_job` - Starts an asynchronous job to transcribe speech to text.
* `tag_resource` - Tags a Amazon Transcribe resource with the given list of tags.
* `untag_resource` - Removes specified tags from a specified Amazon Transcribe resource.
* `update_call_analytics_category` - Updates the call analytics category with new values. The <code>UpdateCallAnalyticsCategory</code> operation overwrites all of the existing information with the values that you provide in the request. 
* `update_medical_vocabulary` - Updates a vocabulary with new values that you provide in a different text file from the one you used to create the vocabulary. The <code>UpdateMedicalVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request.
* `update_vocabulary` - Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request. 
* `update_vocabulary_filter` - Updates a vocabulary filter with a new list of filtered words.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
