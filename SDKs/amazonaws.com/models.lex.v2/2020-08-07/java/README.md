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
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemRequest;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemRequestBody;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemResponse;
import org.openapis.openapi.models.shared.NewCustomVocabularyItem;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCreateCustomVocabularyItemRequest req = new BatchCreateCustomVocabularyItemRequest(                new BatchCreateCustomVocabularyItemRequestBody(                new org.openapis.openapi.models.shared.NewCustomVocabularyItem[]{{
                                                add(new NewCustomVocabularyItem("nulla") {{
                                                    displayAs = "distinctio";
                                                    phrase = "quibusdam";
                                                    weight = 602763L;
                                                }}),
                                                add(new NewCustomVocabularyItem("error") {{
                                                    displayAs = "corrupti";
                                                    phrase = "illum";
                                                    weight = 423655L;
                                                }}),
                                                add(new NewCustomVocabularyItem("magnam") {{
                                                    displayAs = "deserunt";
                                                    phrase = "suscipit";
                                                    weight = 437587L;
                                                }}),
                                            }});, "debitis", "ipsa", "delectus") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            BatchCreateCustomVocabularyItemResponse res = sdk.batchCreateCustomVocabularyItem(req);

            if (res.batchCreateCustomVocabularyItemResponse != null) {
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

* [batchCreateCustomVocabularyItem](docs/sdk/README.md#batchcreatecustomvocabularyitem) - Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.
* [batchDeleteCustomVocabularyItem](docs/sdk/README.md#batchdeletecustomvocabularyitem) - Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.
* [batchUpdateCustomVocabularyItem](docs/sdk/README.md#batchupdatecustomvocabularyitem) - Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.
* [buildBotLocale](docs/sdk/README.md#buildbotlocale) - Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.
* [createBot](docs/sdk/README.md#createbot) - Creates an Amazon Lex conversational bot. 
* [createBotAlias](docs/sdk/README.md#createbotalias) - <p>Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot.</p> <p>For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot. </p>
* [createBotLocale](docs/sdk/README.md#createbotlocale) - Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.
* [createBotVersion](docs/sdk/README.md#createbotversion) - <p>Creates a new version of the bot based on the <code>DRAFT</code> version. If the <code>DRAFT</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version.</p> <p>When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.</p>
* [createExport](docs/sdk/README.md#createexport) - <p>Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot.</p> <p>You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale.</p> <p>For more information about exporting bots, and about the structure of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and exporting bots </a> </p>
* [createIntent](docs/sdk/README.md#createintent) - <p>Creates an intent.</p> <p>To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an <code>OrderPizza</code> intent.</p> <p>When you create an intent, you must provide a name. You can optionally provide the following:</p> <ul> <li> <p>Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents.</p> </li> <li> <p>Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application.</p> </li> <li> <p>How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available.</p> </li> <li> <p>A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"</p> </li> </ul>
* [createResourcePolicy](docs/sdk/README.md#createresourcepolicy) - Creates a new resource policy with the specified policy statements.
* [createResourcePolicyStatement](docs/sdk/README.md#createresourcepolicystatement) - <p>Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created.</p> <p>You can't create a resource policy statement that allows cross-account access.</p>
* [createSlot](docs/sdk/README.md#createslot) - Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an <code>OrderPizza</code> intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user. 
* [createSlotType](docs/sdk/README.md#createslottype) - <p>Creates a custom slot type</p> <p> To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume. </p>
* [createUploadUrl](docs/sdk/README.md#createuploadurl) - Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale. 
* [deleteBot](docs/sdk/README.md#deletebot) - <p>Deletes all versions of a bot, including the <code>Draft</code> version. To delete a specific version, use the <code>DeleteBotVersion</code> operation.</p> <p>When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot.</p> <p>If a bot has an alias, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception. If you want to delete the bot and the alias, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
* [deleteBotAlias](docs/sdk/README.md#deletebotalias) - Deletes the specified bot alias.
* [deleteBotLocale](docs/sdk/README.md#deletebotlocale) - <p>Removes a locale from a bot.</p> <p>When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.</p>
* [deleteBotVersion](docs/sdk/README.md#deletebotversion) - Deletes a specific version of a bot. To delete all versions of a bot, use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBot.html">DeleteBot</a> operation.
* [deleteCustomVocabulary](docs/sdk/README.md#deletecustomvocabulary) - Removes a custom vocabulary from the specified locale in the specified bot.
* [deleteExport](docs/sdk/README.md#deleteexport) - Removes a previous export and the associated files stored in an S3 bucket.
* [deleteImport](docs/sdk/README.md#deleteimport) - Removes a previous import and the associated file stored in an S3 bucket.
* [deleteIntent](docs/sdk/README.md#deleteintent) - <p>Removes the specified intent.</p> <p>Deleting an intent also deletes the slots associated with the intent.</p>
* [deleteResourcePolicy](docs/sdk/README.md#deleteresourcepolicy) - Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.
* [deleteResourcePolicyStatement](docs/sdk/README.md#deleteresourcepolicystatement) - Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception.
* [deleteSlot](docs/sdk/README.md#deleteslot) - Deletes the specified slot from an intent.
* [deleteSlotType](docs/sdk/README.md#deleteslottype) - <p>Deletes a slot type from a bot locale.</p> <p>If a slot is using the slot type, Amazon Lex throws a <code>ResourceInUseException</code> exception. To avoid the exception, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
* [deleteUtterances](docs/sdk/README.md#deleteutterances) - <p>Deletes stored utterances.</p> <p>Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html">ListAggregatedUtterances</a> operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input..</p> <p>Use the <code>DeleteUtterances</code> operation to manually delete utterances for a specific session. When you use the <code>DeleteUtterances</code> operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the <code>ListAggregatedUtterances</code> operation are deleted after 15 days.</p>
* [describeBot](docs/sdk/README.md#describebot) - Provides metadata information about a bot. 
* [describeBotAlias](docs/sdk/README.md#describebotalias) - Get information about a specific bot alias.
* [describeBotLocale](docs/sdk/README.md#describebotlocale) - Describes the settings that a bot has for a specific locale. 
* [describeBotRecommendation](docs/sdk/README.md#describebotrecommendation) - Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation.
* [describeBotVersion](docs/sdk/README.md#describebotversion) - Provides metadata about a version of a bot.
* [describeCustomVocabularyMetadata](docs/sdk/README.md#describecustomvocabularymetadata) - Provides metadata information about a custom vocabulary.
* [describeExport](docs/sdk/README.md#describeexport) - Gets information about a specific export.
* [describeImport](docs/sdk/README.md#describeimport) - Gets information about a specific import.
* [describeIntent](docs/sdk/README.md#describeintent) - Returns metadata about an intent.
* [describeResourcePolicy](docs/sdk/README.md#describeresourcepolicy) - Gets the resource policy and policy revision for a bot or bot alias.
* [describeSlot](docs/sdk/README.md#describeslot) - Gets metadata information about a slot.
* [describeSlotType](docs/sdk/README.md#describeslottype) - Gets metadata information about a slot type.
* [listAggregatedUtterances](docs/sdk/README.md#listaggregatedutterances) - <p>Provides a list of utterances that users have sent to the bot.</p> <p>Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response.</p> <p>You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn't activate an intent.</p> <p>Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time.</p> <p>Utterances statistics are not generated under the following conditions:</p> <ul> <li> <p>The <code>childDirected</code> field was set to true when the bot was created.</p> </li> <li> <p>You are using slot obfuscation with one or more slots.</p> </li> <li> <p>You opted out of participating in improving Amazon Lex.</p> </li> </ul>
* [listBotAliases](docs/sdk/README.md#listbotaliases) - Gets a list of aliases for the specified bot.
* [listBotLocales](docs/sdk/README.md#listbotlocales) - Gets a list of locales for the specified bot.
* [listBotRecommendations](docs/sdk/README.md#listbotrecommendations) - Get a list of bot recommendations that meet the specified criteria.
* [listBotVersions](docs/sdk/README.md#listbotversions) - <p>Gets information about all of the versions of a bot.</p> <p>The <code>ListBotVersions</code> operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the <code>ListBotVersions</code> operation returns for summaries, one for each numbered version and one for the <code>DRAFT</code> version.</p> <p>The <code>ListBotVersions</code> operation always returns at least one version, the <code>DRAFT</code> version.</p>
* [listBots](docs/sdk/README.md#listbots) - Gets a list of available bots.
* [listBuiltInIntents](docs/sdk/README.md#listbuiltinintents) - <p>Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. </p> <p>To use a built-in intent as a the base for your own intent, include the built-in intent signature in the <code>parentIntentSignature</code> parameter when you call the <code>CreateIntent</code> operation. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateIntent.html">CreateIntent</a>.</p>
* [listBuiltInSlotTypes](docs/sdk/README.md#listbuiltinslottypes) - Gets a list of built-in slot types that meet the specified criteria.
* [listCustomVocabularyItems](docs/sdk/README.md#listcustomvocabularyitems) - Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.
* [listExports](docs/sdk/README.md#listexports) - Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.
* [listImports](docs/sdk/README.md#listimports) - Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.
* [listIntents](docs/sdk/README.md#listintents) - Get a list of intents that meet the specified criteria.
* [listRecommendedIntents](docs/sdk/README.md#listrecommendedintents) - Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents in the response are ordered by relevance.
* [listSlotTypes](docs/sdk/README.md#listslottypes) - Gets a list of slot types that match the specified criteria.
* [listSlots](docs/sdk/README.md#listslots) - Gets a list of slots that match the specified criteria.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.
* [searchAssociatedTranscripts](docs/sdk/README.md#searchassociatedtranscripts) - Search for associated transcripts that meet the specified criteria.
* [startBotRecommendation](docs/sdk/README.md#startbotrecommendation) - Use this to provide your transcript data, and to start the bot recommendation process.
* [startImport](docs/sdk/README.md#startimport) - Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket.
* [stopBotRecommendation](docs/sdk/README.md#stopbotrecommendation) - Stop an already running Bot Recommendation request.
* [tagResource](docs/sdk/README.md#tagresource) - Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from a bot, bot alias, or bot channel.
* [updateBot](docs/sdk/README.md#updatebot) - Updates the configuration of an existing bot. 
* [updateBotAlias](docs/sdk/README.md#updatebotalias) - Updates the configuration of an existing bot alias.
* [updateBotLocale](docs/sdk/README.md#updatebotlocale) - Updates the settings that a bot has for a specific locale.
* [updateBotRecommendation](docs/sdk/README.md#updatebotrecommendation) - Updates an existing bot recommendation request.
* [updateExport](docs/sdk/README.md#updateexport) - <p>Updates the password used to protect an export zip archive.</p> <p>The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html">DescribeExport</a> operation.</p>
* [updateIntent](docs/sdk/README.md#updateintent) - Updates the settings for an intent.
* [updateResourcePolicy](docs/sdk/README.md#updateresourcepolicy) - Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.
* [updateSlot](docs/sdk/README.md#updateslot) - Updates the settings for a slot.
* [updateSlotType](docs/sdk/README.md#updateslottype) - Updates the configuration of an existing slot type.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
