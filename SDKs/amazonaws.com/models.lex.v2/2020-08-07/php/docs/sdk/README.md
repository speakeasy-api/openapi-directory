# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/models-v2-lex/>
### Available Operations

* [batchCreateCustomVocabularyItem](#batchcreatecustomvocabularyitem) - Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.
* [batchDeleteCustomVocabularyItem](#batchdeletecustomvocabularyitem) - Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.
* [batchUpdateCustomVocabularyItem](#batchupdatecustomvocabularyitem) - Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.
* [buildBotLocale](#buildbotlocale) - Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.
* [createBot](#createbot) - Creates an Amazon Lex conversational bot. 
* [createBotAlias](#createbotalias) - <p>Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot.</p> <p>For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot. </p>
* [createBotLocale](#createbotlocale) - Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.
* [createBotVersion](#createbotversion) - <p>Creates a new version of the bot based on the <code>DRAFT</code> version. If the <code>DRAFT</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version.</p> <p>When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.</p>
* [createExport](#createexport) - <p>Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot.</p> <p>You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale.</p> <p>For more information about exporting bots, and about the structure of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and exporting bots </a> </p>
* [createIntent](#createintent) - <p>Creates an intent.</p> <p>To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an <code>OrderPizza</code> intent.</p> <p>When you create an intent, you must provide a name. You can optionally provide the following:</p> <ul> <li> <p>Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents.</p> </li> <li> <p>Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application.</p> </li> <li> <p>How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available.</p> </li> <li> <p>A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"</p> </li> </ul>
* [createResourcePolicy](#createresourcepolicy) - Creates a new resource policy with the specified policy statements.
* [createResourcePolicyStatement](#createresourcepolicystatement) - <p>Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created.</p> <p>You can't create a resource policy statement that allows cross-account access.</p>
* [createSlot](#createslot) - Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an <code>OrderPizza</code> intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user. 
* [createSlotType](#createslottype) - <p>Creates a custom slot type</p> <p> To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume. </p>
* [createUploadUrl](#createuploadurl) - Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale. 
* [deleteBot](#deletebot) - <p>Deletes all versions of a bot, including the <code>Draft</code> version. To delete a specific version, use the <code>DeleteBotVersion</code> operation.</p> <p>When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot.</p> <p>If a bot has an alias, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception. If you want to delete the bot and the alias, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
* [deleteBotAlias](#deletebotalias) - Deletes the specified bot alias.
* [deleteBotLocale](#deletebotlocale) - <p>Removes a locale from a bot.</p> <p>When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.</p>
* [deleteBotVersion](#deletebotversion) - Deletes a specific version of a bot. To delete all versions of a bot, use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBot.html">DeleteBot</a> operation.
* [deleteCustomVocabulary](#deletecustomvocabulary) - Removes a custom vocabulary from the specified locale in the specified bot.
* [deleteExport](#deleteexport) - Removes a previous export and the associated files stored in an S3 bucket.
* [deleteImport](#deleteimport) - Removes a previous import and the associated file stored in an S3 bucket.
* [deleteIntent](#deleteintent) - <p>Removes the specified intent.</p> <p>Deleting an intent also deletes the slots associated with the intent.</p>
* [deleteResourcePolicy](#deleteresourcepolicy) - Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.
* [deleteResourcePolicyStatement](#deleteresourcepolicystatement) - Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception.
* [deleteSlot](#deleteslot) - Deletes the specified slot from an intent.
* [deleteSlotType](#deleteslottype) - <p>Deletes a slot type from a bot locale.</p> <p>If a slot is using the slot type, Amazon Lex throws a <code>ResourceInUseException</code> exception. To avoid the exception, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>
* [deleteUtterances](#deleteutterances) - <p>Deletes stored utterances.</p> <p>Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html">ListAggregatedUtterances</a> operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input..</p> <p>Use the <code>DeleteUtterances</code> operation to manually delete utterances for a specific session. When you use the <code>DeleteUtterances</code> operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the <code>ListAggregatedUtterances</code> operation are deleted after 15 days.</p>
* [describeBot](#describebot) - Provides metadata information about a bot. 
* [describeBotAlias](#describebotalias) - Get information about a specific bot alias.
* [describeBotLocale](#describebotlocale) - Describes the settings that a bot has for a specific locale. 
* [describeBotRecommendation](#describebotrecommendation) - Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation.
* [describeBotVersion](#describebotversion) - Provides metadata about a version of a bot.
* [describeCustomVocabularyMetadata](#describecustomvocabularymetadata) - Provides metadata information about a custom vocabulary.
* [describeExport](#describeexport) - Gets information about a specific export.
* [describeImport](#describeimport) - Gets information about a specific import.
* [describeIntent](#describeintent) - Returns metadata about an intent.
* [describeResourcePolicy](#describeresourcepolicy) - Gets the resource policy and policy revision for a bot or bot alias.
* [describeSlot](#describeslot) - Gets metadata information about a slot.
* [describeSlotType](#describeslottype) - Gets metadata information about a slot type.
* [listAggregatedUtterances](#listaggregatedutterances) - <p>Provides a list of utterances that users have sent to the bot.</p> <p>Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response.</p> <p>You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn't activate an intent.</p> <p>Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time.</p> <p>Utterances statistics are not generated under the following conditions:</p> <ul> <li> <p>The <code>childDirected</code> field was set to true when the bot was created.</p> </li> <li> <p>You are using slot obfuscation with one or more slots.</p> </li> <li> <p>You opted out of participating in improving Amazon Lex.</p> </li> </ul>
* [listBotAliases](#listbotaliases) - Gets a list of aliases for the specified bot.
* [listBotLocales](#listbotlocales) - Gets a list of locales for the specified bot.
* [listBotRecommendations](#listbotrecommendations) - Get a list of bot recommendations that meet the specified criteria.
* [listBotVersions](#listbotversions) - <p>Gets information about all of the versions of a bot.</p> <p>The <code>ListBotVersions</code> operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the <code>ListBotVersions</code> operation returns for summaries, one for each numbered version and one for the <code>DRAFT</code> version.</p> <p>The <code>ListBotVersions</code> operation always returns at least one version, the <code>DRAFT</code> version.</p>
* [listBots](#listbots) - Gets a list of available bots.
* [listBuiltInIntents](#listbuiltinintents) - <p>Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. </p> <p>To use a built-in intent as a the base for your own intent, include the built-in intent signature in the <code>parentIntentSignature</code> parameter when you call the <code>CreateIntent</code> operation. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateIntent.html">CreateIntent</a>.</p>
* [listBuiltInSlotTypes](#listbuiltinslottypes) - Gets a list of built-in slot types that meet the specified criteria.
* [listCustomVocabularyItems](#listcustomvocabularyitems) - Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.
* [listExports](#listexports) - Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.
* [listImports](#listimports) - Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.
* [listIntents](#listintents) - Get a list of intents that meet the specified criteria.
* [listRecommendedIntents](#listrecommendedintents) - Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents in the response are ordered by relevance.
* [listSlotTypes](#listslottypes) - Gets a list of slot types that match the specified criteria.
* [listSlots](#listslots) - Gets a list of slots that match the specified criteria.
* [listTagsForResource](#listtagsforresource) - Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.
* [searchAssociatedTranscripts](#searchassociatedtranscripts) - Search for associated transcripts that meet the specified criteria.
* [startBotRecommendation](#startbotrecommendation) - Use this to provide your transcript data, and to start the bot recommendation process.
* [startImport](#startimport) - Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket.
* [stopBotRecommendation](#stopbotrecommendation) - Stop an already running Bot Recommendation request.
* [tagResource](#tagresource) - Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.
* [untagResource](#untagresource) - Removes tags from a bot, bot alias, or bot channel.
* [updateBot](#updatebot) - Updates the configuration of an existing bot. 
* [updateBotAlias](#updatebotalias) - Updates the configuration of an existing bot alias.
* [updateBotLocale](#updatebotlocale) - Updates the settings that a bot has for a specific locale.
* [updateBotRecommendation](#updatebotrecommendation) - Updates an existing bot recommendation request.
* [updateExport](#updateexport) - <p>Updates the password used to protect an export zip archive.</p> <p>The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html">DescribeExport</a> operation.</p>
* [updateIntent](#updateintent) - Updates the settings for an intent.
* [updateResourcePolicy](#updateresourcepolicy) - Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.
* [updateSlot](#updateslot) - Updates the settings for a slot.
* [updateSlotType](#updateslottype) - Updates the configuration of an existing slot type.

## batchCreateCustomVocabularyItem

Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreateCustomVocabularyItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreateCustomVocabularyItemRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\NewCustomVocabularyItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchCreateCustomVocabularyItemRequest();
    $request->requestBody = new BatchCreateCustomVocabularyItemRequestBody();
    $request->requestBody->customVocabularyItemList = [
        new NewCustomVocabularyItem(),
        new NewCustomVocabularyItem(),
    ];
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->botId = 'molestiae';
    $request->botVersion = 'minus';
    $request->localeId = 'placeat';

    $response = $sdk->sdk->batchCreateCustomVocabularyItem($request);

    if ($response->batchCreateCustomVocabularyItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteCustomVocabularyItem

Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteCustomVocabularyItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteCustomVocabularyItemRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CustomVocabularyEntryId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteCustomVocabularyItemRequest();
    $request->requestBody = new BatchDeleteCustomVocabularyItemRequestBody();
    $request->requestBody->customVocabularyItemList = [
        new CustomVocabularyEntryId(),
        new CustomVocabularyEntryId(),
        new CustomVocabularyEntryId(),
    ];
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->botId = 'veritatis';
    $request->botVersion = 'deserunt';
    $request->localeId = 'perferendis';

    $response = $sdk->sdk->batchDeleteCustomVocabularyItem($request);

    if ($response->batchDeleteCustomVocabularyItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchUpdateCustomVocabularyItem

Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateCustomVocabularyItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateCustomVocabularyItemRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CustomVocabularyItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpdateCustomVocabularyItemRequest();
    $request->requestBody = new BatchUpdateCustomVocabularyItemRequestBody();
    $request->requestBody->customVocabularyItemList = [
        new CustomVocabularyItem(),
        new CustomVocabularyItem(),
    ];
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->botId = 'molestiae';
    $request->botVersion = 'quod';
    $request->localeId = 'quod';

    $response = $sdk->sdk->batchUpdateCustomVocabularyItem($request);

    if ($response->batchUpdateCustomVocabularyItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildBotLocale

Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BuildBotLocaleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildBotLocaleRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->botId = 'occaecati';
    $request->botVersion = 'fugit';
    $request->localeId = 'deleniti';

    $response = $sdk->sdk->buildBotLocale($request);

    if ($response->buildBotLocaleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBot

Creates an Amazon Lex conversational bot. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BotMember;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotRequestBodyBotTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotRequestBodyDataPrivacy;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBotRequest();
    $request->requestBody = new CreateBotRequestBody();
    $request->requestBody->botMembers = [
        new BotMember(),
        new BotMember(),
        new BotMember(),
        new BotMember(),
    ];
    $request->requestBody->botName = 'optio';
    $request->requestBody->botTags = [
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->requestBody->botType = CreateBotRequestBodyBotTypeEnum::BOT_NETWORK;
    $request->requestBody->dataPrivacy = new CreateBotRequestBodyDataPrivacy();
    $request->requestBody->dataPrivacy->childDirected = false;
    $request->requestBody->description = 'esse';
    $request->requestBody->idleSessionTTLInSeconds = 216550;
    $request->requestBody->roleArn = 'excepturi';
    $request->requestBody->testBotAliasTags = [
        'perferendis' => 'ad',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->createBot($request);

    if ($response->createBotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBotAlias

<p>Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot.</p> <p>For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotAliasRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BotAliasLocaleSettings;
use \OpenAPI\OpenAPI\Models\Shared\CodeHookSpecification;
use \OpenAPI\OpenAPI\Models\Shared\LambdaCodeHook;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotAliasRequestBodyConversationLogSettings;
use \OpenAPI\OpenAPI\Models\Shared\AudioLogSetting;
use \OpenAPI\OpenAPI\Models\Shared\AudioLogDestination;
use \OpenAPI\OpenAPI\Models\Shared\S3BucketLogDestination;
use \OpenAPI\OpenAPI\Models\Shared\TextLogSetting;
use \OpenAPI\OpenAPI\Models\Shared\TextLogDestination;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogGroupLogDestination;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotAliasRequestBodySentimentAnalysisSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBotAliasRequest();
    $request->requestBody = new CreateBotAliasRequestBody();
    $request->requestBody->botAliasLocaleSettings = [
        'fuga' => new BotAliasLocaleSettings(),
        'in' => new BotAliasLocaleSettings(),
        'corporis' => new BotAliasLocaleSettings(),
        'iste' => new BotAliasLocaleSettings(),
    ];
    $request->requestBody->botAliasName = 'iure';
    $request->requestBody->botVersion = 'saepe';
    $request->requestBody->conversationLogSettings = new CreateBotAliasRequestBodyConversationLogSettings();
    $request->requestBody->conversationLogSettings->audioLogSettings = [
        new AudioLogSetting(),
        new AudioLogSetting(),
        new AudioLogSetting(),
    ];
    $request->requestBody->conversationLogSettings->textLogSettings = [
        new TextLogSetting(),
    ];
    $request->requestBody->description = 'ipsa';
    $request->requestBody->sentimentAnalysisSettings = new CreateBotAliasRequestBodySentimentAnalysisSettings();
    $request->requestBody->sentimentAnalysisSettings->detectSentiment = false;
    $request->requestBody->tags = [
        'est' => 'mollitia',
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->botId = 'culpa';

    $response = $sdk->sdk->createBotAlias($request);

    if ($response->createBotAliasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBotLocale

Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotLocaleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotLocaleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotLocaleRequestBodyVoiceSettings;
use \OpenAPI\OpenAPI\Models\Shared\VoiceEngineEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBotLocaleRequest();
    $request->requestBody = new CreateBotLocaleRequestBody();
    $request->requestBody->description = 'doloribus';
    $request->requestBody->localeId = 'sapiente';
    $request->requestBody->nluIntentConfidenceThreshold = 1020.44;
    $request->requestBody->voiceSettings = new CreateBotLocaleRequestBodyVoiceSettings();
    $request->requestBody->voiceSettings->engine = VoiceEngineEnum::NEURAL;
    $request->requestBody->voiceSettings->voiceId = 'dolorem';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->botId = 'quam';
    $request->botVersion = 'molestiae';

    $response = $sdk->sdk->createBotLocale($request);

    if ($response->createBotLocaleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBotVersion

<p>Creates a new version of the bot based on the <code>DRAFT</code> version. If the <code>DRAFT</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version.</p> <p>When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBotVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BotVersionLocaleDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBotVersionRequest();
    $request->requestBody = new CreateBotVersionRequestBody();
    $request->requestBody->botVersionLocaleSpecification = [
        'error' => new BotVersionLocaleDetails(),
    ];
    $request->requestBody->description = 'quia';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->botId = 'sequi';

    $response = $sdk->sdk->createBotVersion($request);

    if ($response->createBotVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExport

<p>Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot.</p> <p>You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale.</p> <p>For more information about exporting bots, and about the structure of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and exporting bots </a> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportRequestBodyFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportRequestBodyResourceSpecification;
use \OpenAPI\OpenAPI\Models\Shared\BotExportSpecification;
use \OpenAPI\OpenAPI\Models\Shared\BotLocaleExportSpecification;
use \OpenAPI\OpenAPI\Models\Shared\CustomVocabularyExportSpecification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExportRequest();
    $request->requestBody = new CreateExportRequestBody();
    $request->requestBody->fileFormat = CreateExportRequestBodyFileFormatEnum::TSV;
    $request->requestBody->filePassword = 'ipsam';
    $request->requestBody->resourceSpecification = new CreateExportRequestBodyResourceSpecification();
    $request->requestBody->resourceSpecification->botExportSpecification = new BotExportSpecification();
    $request->requestBody->resourceSpecification->botExportSpecification->botId = 'id';
    $request->requestBody->resourceSpecification->botExportSpecification->botVersion = 'possimus';
    $request->requestBody->resourceSpecification->botLocaleExportSpecification = new BotLocaleExportSpecification();
    $request->requestBody->resourceSpecification->botLocaleExportSpecification->botId = 'aut';
    $request->requestBody->resourceSpecification->botLocaleExportSpecification->botVersion = 'quasi';
    $request->requestBody->resourceSpecification->botLocaleExportSpecification->localeId = 'error';
    $request->requestBody->resourceSpecification->customVocabularyExportSpecification = new CustomVocabularyExportSpecification();
    $request->requestBody->resourceSpecification->customVocabularyExportSpecification->botId = 'temporibus';
    $request->requestBody->resourceSpecification->customVocabularyExportSpecification->botVersion = 'laborum';
    $request->requestBody->resourceSpecification->customVocabularyExportSpecification->localeId = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->createExport($request);

    if ($response->createExportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIntent

<p>Creates an intent.</p> <p>To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an <code>OrderPizza</code> intent.</p> <p>When you create an intent, you must provide a name. You can optionally provide the following:</p> <ul> <li> <p>Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents.</p> </li> <li> <p>Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application.</p> </li> <li> <p>How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available.</p> </li> <li> <p>A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntentRequestBodyDialogCodeHook;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntentRequestBodyFulfillmentCodeHook;
use \OpenAPI\OpenAPI\Models\Shared\FulfillmentUpdatesSpecification;
use \OpenAPI\OpenAPI\Models\Shared\FulfillmentStartResponseSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MessageGroup;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\CustomPayload;
use \OpenAPI\OpenAPI\Models\Shared\ImageResponseCard;
use \OpenAPI\OpenAPI\Models\Shared\Button;
use \OpenAPI\OpenAPI\Models\Shared\PlainTextMessage;
use \OpenAPI\OpenAPI\Models\Shared\SSMLMessage;
use \OpenAPI\OpenAPI\Models\Shared\FulfillmentUpdateResponseSpecification;
use \OpenAPI\OpenAPI\Models\Shared\PostFulfillmentStatusSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalBranch;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\DialogState;
use \OpenAPI\OpenAPI\Models\Shared\DialogAction;
use \OpenAPI\OpenAPI\Models\Shared\DialogActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntentOverride;
use \OpenAPI\OpenAPI\Models\Shared\SlotValueOverride;
use \OpenAPI\OpenAPI\Models\Shared\SlotValue;
use \OpenAPI\OpenAPI\Models\Shared\ResponseSpecification;
use \OpenAPI\OpenAPI\Models\Shared\DefaultConditionalBranch;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntentRequestBodyInitialResponseSetting;
use \OpenAPI\OpenAPI\Models\Shared\DialogCodeHookInvocationSetting;
use \OpenAPI\OpenAPI\Models\Shared\PostDialogCodeHookInvocationSpecification;
use \OpenAPI\OpenAPI\Models\Shared\InputContext;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntentRequestBodyIntentClosingSetting;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntentRequestBodyIntentConfirmationSetting;
use \OpenAPI\OpenAPI\Models\Shared\ElicitationCodeHookInvocationSetting;
use \OpenAPI\OpenAPI\Models\Shared\PromptSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MessageSelectionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PromptAttemptSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AllowedInputTypes;
use \OpenAPI\OpenAPI\Models\Shared\AudioAndDTMFInputSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AudioSpecification;
use \OpenAPI\OpenAPI\Models\Shared\DTMFSpecification;
use \OpenAPI\OpenAPI\Models\Shared\TextInputSpecification;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntentRequestBodyKendraConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OutputContext;
use \OpenAPI\OpenAPI\Models\Shared\SampleUtterance;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIntentRequest();
    $request->requestBody = new CreateIntentRequestBody();
    $request->requestBody->description = 'omnis';
    $request->requestBody->dialogCodeHook = new CreateIntentRequestBodyDialogCodeHook();
    $request->requestBody->dialogCodeHook->enabled = false;
    $request->requestBody->fulfillmentCodeHook = new CreateIntentRequestBodyFulfillmentCodeHook();
    $request->requestBody->fulfillmentCodeHook->active = false;
    $request->requestBody->fulfillmentCodeHook->enabled = false;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification = new FulfillmentUpdatesSpecification();
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->active = false;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->startResponse = new FulfillmentStartResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->startResponse->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->startResponse->delayInSeconds = 451159;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->startResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->timeoutInSeconds = 19987;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->updateResponse = new FulfillmentUpdateResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->updateResponse->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->updateResponse->frequencyInSeconds = 39187;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->updateResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification = new PostFulfillmentStatusSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional = new ConditionalSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->active = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'maiores';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::START_INTENT;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->intent->name = 'Miss Valerie Kshlerin';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->intent->slots = [
        'commodi' => new SlotValueOverride(),
        'repudiandae' => new SlotValueOverride(),
        'quae' => new SlotValueOverride(),
        'ipsum' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'molestias' => 'excepturi',
        'pariatur' => 'modi',
        'praesentium' => 'rem',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->dialogAction->slotToElicit = 'quasi';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->dialogAction->type = DialogActionTypeEnum::END_CONVERSATION;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->intent->name = 'Patrick Ward';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->intent->slots = [
        'est' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->sessionAttributes = [
        'explicabo' => 'deserunt',
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureResponse = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureResponse->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional = new ConditionalSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->active = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'perferendis';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::START_INTENT;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->intent->name = 'Vernon Abshire';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->intent->slots = [
        'tempora' => new SlotValueOverride(),
        'facilis' => new SlotValueOverride(),
        'tempore' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->sessionAttributes = [
        'delectus' => 'eum',
        'non' => 'eligendi',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->dialogAction->slotToElicit = 'aliquid';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->dialogAction->type = DialogActionTypeEnum::CONFIRM_INTENT;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->intent->name = 'Perry Nikolaus';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->intent->slots = [
        'dolorum' => new SlotValueOverride(),
        'in' => new SlotValueOverride(),
        'in' => new SlotValueOverride(),
        'illum' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->sessionAttributes = [
        'rerum' => 'dicta',
        'magnam' => 'cumque',
        'facere' => 'ea',
        'aliquid' => 'laborum',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successResponse = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successResponse->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional = new ConditionalSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->active = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->conditionalBranches = [
        new ConditionalBranch(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'occaecati';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_SLOT;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->intent->name = 'Toby Pouros';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->intent->slots = [
        'blanditiis' => new SlotValueOverride(),
        'deleniti' => new SlotValueOverride(),
        'sapiente' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->sessionAttributes = [
        'deserunt' => 'nisi',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->dialogAction->slotToElicit = 'natus';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->dialogAction->type = DialogActionTypeEnum::CONFIRM_INTENT;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->intent->name = 'Dorothy Kovacek';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->intent->slots = [
        'labore' => new SlotValueOverride(),
        'labore' => new SlotValueOverride(),
        'suscipit' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->sessionAttributes = [
        'nobis' => 'eum',
        'vero' => 'aspernatur',
        'architecto' => 'magnam',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutResponse = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutResponse->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting = new CreateIntentRequestBodyInitialResponseSetting();
    $request->requestBody->initialResponseSetting->codeHook = new DialogCodeHookInvocationSetting();
    $request->requestBody->initialResponseSetting->codeHook->active = false;
    $request->requestBody->initialResponseSetting->codeHook->enableCodeHookInvocation = false;
    $request->requestBody->initialResponseSetting->codeHook->invocationLabel = 'excepturi';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification = new PostDialogCodeHookInvocationSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional = new ConditionalSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->active = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'provident';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::INVOKE_DIALOG_CODE_HOOK;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->name = 'Kenneth O'Hara';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->slots = [
        'eum' => new SlotValueOverride(),
        'dolor' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'odit' => 'nemo',
        'quasi' => 'iure',
        'doloribus' => 'debitis',
        'eius' => 'maxime',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->slotToElicit = 'facilis';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->type = DialogActionTypeEnum::INVOKE_DIALOG_CODE_HOOK;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->name = 'Diane VonRueden';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->slots = [
        'repellat' => new SlotValueOverride(),
        'quibusdam' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->sessionAttributes = [
        'saepe' => 'pariatur',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureResponse = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureResponse->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional = new ConditionalSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->active = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->conditionalBranches = [
        new ConditionalBranch(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'praesentium';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::CONFIRM_INTENT;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->name = 'Joan Satterfield';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->slots = [
        'ea' => new SlotValueOverride(),
        'excepturi' => new SlotValueOverride(),
        'odit' => new SlotValueOverride(),
        'ea' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->sessionAttributes = [
        'ab' => 'maiores',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->slotToElicit = 'ipsam';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->type = DialogActionTypeEnum::INVOKE_DIALOG_CODE_HOOK;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->intent->name = 'Candice Beatty';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->intent->slots = [
        'perferendis' => new SlotValueOverride(),
        'fugiat' => new SlotValueOverride(),
        'amet' => new SlotValueOverride(),
        'aut' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->sessionAttributes = [
        'corporis' => 'hic',
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successResponse = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successResponse->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional = new ConditionalSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->active = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'nesciunt';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::START_INTENT;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->name = 'Jacqueline Schimmel';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->slots = [
        'nostrum' => new SlotValueOverride(),
        'hic' => new SlotValueOverride(),
        'recusandae' => new SlotValueOverride(),
        'omnis' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->sessionAttributes = [
        'perspiciatis' => 'voluptatem',
        'porro' => 'consequuntur',
        'blanditiis' => 'error',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->slotToElicit = 'occaecati';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->type = DialogActionTypeEnum::FULFILL_INTENT;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->name = 'Ollie Watsica';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->slots = [
        'deleniti' => new SlotValueOverride(),
        'pariatur' => new SlotValueOverride(),
        'provident' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->sessionAttributes = [
        'libero' => 'delectus',
        'quaerat' => 'quos',
        'aliquid' => 'dolorem',
        'dolorem' => 'dolor',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutResponse = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutResponse->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->conditional = new ConditionalSpecification();
    $request->requestBody->initialResponseSetting->conditional->active = false;
    $request->requestBody->initialResponseSetting->conditional->conditionalBranches = [
        new ConditionalBranch(),
    ];
    $request->requestBody->initialResponseSetting->conditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'hic';
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::CONFIRM_INTENT;
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->intent->name = 'Adrian Kuhn';
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->intent->slots = [
        'numquam' => new SlotValueOverride(),
        'veritatis' => new SlotValueOverride(),
        'ipsa' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->sessionAttributes = [
        'iure' => 'odio',
    ];
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->initialResponse = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->initialResponse->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->initialResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->nextStep = new DialogState();
    $request->requestBody->initialResponseSetting->nextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->nextStep->dialogAction->slotToElicit = 'quidem';
    $request->requestBody->initialResponseSetting->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->nextStep->dialogAction->type = DialogActionTypeEnum::END_CONVERSATION;
    $request->requestBody->initialResponseSetting->nextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->nextStep->intent->name = 'Faye Daugherty PhD';
    $request->requestBody->initialResponseSetting->nextStep->intent->slots = [
        'soluta' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->nextStep->sessionAttributes = [
        'iusto' => 'voluptate',
        'dolorum' => 'deleniti',
        'omnis' => 'necessitatibus',
    ];
    $request->requestBody->inputContexts = [
        new InputContext(),
        new InputContext(),
        new InputContext(),
    ];
    $request->requestBody->intentClosingSetting = new CreateIntentRequestBodyIntentClosingSetting();
    $request->requestBody->intentClosingSetting->active = false;
    $request->requestBody->intentClosingSetting->closingResponse = new ResponseSpecification();
    $request->requestBody->intentClosingSetting->closingResponse->allowInterrupt = false;
    $request->requestBody->intentClosingSetting->closingResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentClosingSetting->conditional = new ConditionalSpecification();
    $request->requestBody->intentClosingSetting->conditional->active = false;
    $request->requestBody->intentClosingSetting->conditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentClosingSetting->conditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'ipsum';
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::INVOKE_DIALOG_CODE_HOOK;
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->intent->name = 'Elbert Gislason I';
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->intent->slots = [
        'accusamus' => new SlotValueOverride(),
        'ad' => new SlotValueOverride(),
        'saepe' => new SlotValueOverride(),
        'suscipit' => new SlotValueOverride(),
    ];
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->sessionAttributes = [
        'provident' => 'minima',
        'repellendus' => 'totam',
        'similique' => 'alias',
    ];
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentClosingSetting->nextStep = new DialogState();
    $request->requestBody->intentClosingSetting->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentClosingSetting->nextStep->dialogAction->slotToElicit = 'quaerat';
    $request->requestBody->intentClosingSetting->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentClosingSetting->nextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_SLOT;
    $request->requestBody->intentClosingSetting->nextStep->intent = new IntentOverride();
    $request->requestBody->intentClosingSetting->nextStep->intent->name = 'Bernadette Torp';
    $request->requestBody->intentClosingSetting->nextStep->intent->slots = [
        'esse' => new SlotValueOverride(),
        'harum' => new SlotValueOverride(),
        'iusto' => new SlotValueOverride(),
        'ipsum' => new SlotValueOverride(),
    ];
    $request->requestBody->intentClosingSetting->nextStep->sessionAttributes = [
        'tenetur' => 'amet',
        'tempore' => 'accusamus',
        'numquam' => 'enim',
        'dolorem' => 'sapiente',
    ];
    $request->requestBody->intentConfirmationSetting = new CreateIntentRequestBodyIntentConfirmationSetting();
    $request->requestBody->intentConfirmationSetting->active = false;
    $request->requestBody->intentConfirmationSetting->codeHook = new DialogCodeHookInvocationSetting();
    $request->requestBody->intentConfirmationSetting->codeHook->active = false;
    $request->requestBody->intentConfirmationSetting->codeHook->enableCodeHookInvocation = false;
    $request->requestBody->intentConfirmationSetting->codeHook->invocationLabel = 'totam';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification = new PostDialogCodeHookInvocationSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->active = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'sit';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::FULFILL_INTENT;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->name = 'Jane Kassulke';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->slots = [
        'quam' => new SlotValueOverride(),
        'ipsum' => new SlotValueOverride(),
        'incidunt' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'cupiditate' => 'maxime',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->slotToElicit = 'soluta';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->type = DialogActionTypeEnum::START_INTENT;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->name = 'Felix Gorczany';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->slots = [
        'facilis' => new SlotValueOverride(),
        'aliquid' => new SlotValueOverride(),
        'quam' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->sessionAttributes = [
        'temporibus' => 'qui',
        'neque' => 'fugit',
        'magni' => 'odio',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->active = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'nam';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::END_CONVERSATION;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->name = 'Erma Rogahn PhD';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->slots = [
        'veritatis' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->sessionAttributes = [
        'quos' => 'tempore',
        'cupiditate' => 'aperiam',
        'delectus' => 'dolorem',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->slotToElicit = 'labore';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_SLOT;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->intent->name = 'Ms. Joe Berge';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->intent->slots = [
        'est' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->sessionAttributes = [
        'porro' => 'doloribus',
        'ut' => 'facilis',
        'cupiditate' => 'qui',
        'quae' => 'laudantium',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->active = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'voluptatibus';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::CLOSE_INTENT;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->name = 'Arturo Hauck';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->slots = [
        'consectetur' => new SlotValueOverride(),
        'vero' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->sessionAttributes = [
        'dignissimos' => 'hic',
        'distinctio' => 'quod',
        'odio' => 'similique',
        'facilis' => 'vero',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->slotToElicit = 'dolore';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->type = DialogActionTypeEnum::CLOSE_INTENT;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->name = 'Earl Mosciski DVM';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->slots = [
        'nulla' => new SlotValueOverride(),
        'fugit' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->sessionAttributes = [
        'maiores' => 'doloribus',
        'iusto' => 'eligendi',
        'ducimus' => 'alias',
        'officia' => 'tempora',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->confirmationConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->active = false;
    $request->requestBody->intentConfirmationSetting->confirmationConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'aspernatur';
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::EVALUATE_CONDITIONAL;
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->intent->name = 'Clifford Dickens';
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->intent->slots = [
        'dolor' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->sessionAttributes = [
        'quasi' => 'ex',
        'nulla' => 'excepturi',
        'voluptatibus' => 'nostrum',
        'sapiente' => 'quisquam',
    ];
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->confirmationNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->dialogAction->slotToElicit = 'ea';
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->dialogAction->type = DialogActionTypeEnum::FULFILL_INTENT;
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->intent->name = 'Mrs. Sally Jacobi';
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->intent->slots = [
        'consectetur' => new SlotValueOverride(),
        'recusandae' => new SlotValueOverride(),
        'aspernatur' => new SlotValueOverride(),
        'minima' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->sessionAttributes = [
        'a' => 'libero',
    ];
    $request->requestBody->intentConfirmationSetting->confirmationResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->confirmationResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->confirmationResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->declinationConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->declinationConditional->active = false;
    $request->requestBody->intentConfirmationSetting->declinationConditional->conditionalBranches = [
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'deleniti';
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::FULFILL_INTENT;
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->intent->name = 'Mrs. Denise Tillman MD';
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->intent->slots = [
        'placeat' => new SlotValueOverride(),
        'velit' => new SlotValueOverride(),
        'eum' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->sessionAttributes = [
        'nobis' => 'quas',
        'assumenda' => 'nulla',
    ];
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->declinationNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->declinationNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->declinationNextStep->dialogAction->slotToElicit = 'libero';
    $request->requestBody->intentConfirmationSetting->declinationNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->declinationNextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_INTENT;
    $request->requestBody->intentConfirmationSetting->declinationNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->declinationNextStep->intent->name = 'Carrie Cole IV';
    $request->requestBody->intentConfirmationSetting->declinationNextStep->intent->slots = [
        'odio' => new SlotValueOverride(),
        'eius' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->declinationNextStep->sessionAttributes = [
        'esse' => 'rem',
        'fuga' => 'reprehenderit',
    ];
    $request->requestBody->intentConfirmationSetting->declinationResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->declinationResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->declinationResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->elicitationCodeHook = new ElicitationCodeHookInvocationSetting();
    $request->requestBody->intentConfirmationSetting->elicitationCodeHook->enableCodeHookInvocation = false;
    $request->requestBody->intentConfirmationSetting->elicitationCodeHook->invocationLabel = 'fugiat';
    $request->requestBody->intentConfirmationSetting->failureConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->failureConditional->active = false;
    $request->requestBody->intentConfirmationSetting->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'eum';
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::EVALUATE_CONDITIONAL;
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->intent->name = 'Alan Lang Jr.';
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->intent->slots = [
        'quidem' => new SlotValueOverride(),
        'neque' => new SlotValueOverride(),
        'quo' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'quo' => 'fuga',
        'eius' => 'eos',
        'voluptas' => 'ab',
        'cupiditate' => 'consequatur',
    ];
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->failureNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->failureNextStep->dialogAction->slotToElicit = 'debitis';
    $request->requestBody->intentConfirmationSetting->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->failureNextStep->dialogAction->type = DialogActionTypeEnum::EVALUATE_CONDITIONAL;
    $request->requestBody->intentConfirmationSetting->failureNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->failureNextStep->intent->name = 'Emily Satterfield';
    $request->requestBody->intentConfirmationSetting->failureNextStep->intent->slots = [
        'distinctio' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->failureNextStep->sessionAttributes = [
        'dignissimos' => 'inventore',
        'nihil' => 'totam',
        'accusamus' => 'aliquam',
        'odio' => 'occaecati',
    ];
    $request->requestBody->intentConfirmationSetting->failureResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->failureResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->failureResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->promptSpecification = new PromptSpecification();
    $request->requestBody->intentConfirmationSetting->promptSpecification->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->promptSpecification->maxRetries = 959434;
    $request->requestBody->intentConfirmationSetting->promptSpecification->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->promptSpecification->messageSelectionStrategy = MessageSelectionStrategyEnum::ORDERED;
    $request->requestBody->intentConfirmationSetting->promptSpecification->promptAttemptsSpecification = [
        'accusantium' => new PromptAttemptSpecification(),
        'porro' => new PromptAttemptSpecification(),
    ];
    $request->requestBody->intentName = 'eum';
    $request->requestBody->kendraConfiguration = new CreateIntentRequestBodyKendraConfiguration();
    $request->requestBody->kendraConfiguration->kendraIndex = 'quas';
    $request->requestBody->kendraConfiguration->queryFilterString = 'praesentium';
    $request->requestBody->kendraConfiguration->queryFilterStringEnabled = false;
    $request->requestBody->outputContexts = [
        new OutputContext(),
    ];
    $request->requestBody->parentIntentSignature = 'deleniti';
    $request->requestBody->sampleUtterances = [
        new SampleUtterance(),
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'nisi';
    $request->botId = 'fugit';
    $request->botVersion = 'sapiente';
    $request->localeId = 'consequuntur';

    $response = $sdk->sdk->createIntent($request);

    if ($response->createIntentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResourcePolicy

Creates a new resource policy with the specified policy statements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourcePolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResourcePolicyRequest();
    $request->requestBody = new CreateResourcePolicyRequestBody();
    $request->requestBody->policy = 'ratione';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->resourceArn = 'accusamus';

    $response = $sdk->sdk->createResourcePolicy($request);

    if ($response->createResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResourcePolicyStatement

<p>Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created.</p> <p>You can't create a resource policy statement that allows cross-account access.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourcePolicyStatementRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourcePolicyStatementRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourcePolicyStatementRequestBodyEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\Principal;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResourcePolicyStatementRequest();
    $request->requestBody = new CreateResourcePolicyStatementRequestBody();
    $request->requestBody->action = [
        'esse',
    ];
    $request->requestBody->condition = [
        'nam' => [
            'aliquid' => 'quasi',
            'saepe' => 'vel',
            'harum' => 'molestiae',
            'rerum' => 'occaecati',
        ],
        'minima' => [
            'eligendi' => 'sit',
            'culpa' => 'tempore',
            'adipisci' => 'cumque',
        ],
        'consequuntur' => [
            'minus' => 'quaerat',
        ],
        'sapiente' => [
            'esse' => 'blanditiis',
        ],
    ];
    $request->requestBody->effect = CreateResourcePolicyStatementRequestBodyEffectEnum::DENY;
    $request->requestBody->principal = [
        new Principal(),
        new Principal(),
        new Principal(),
        new Principal(),
    ];
    $request->requestBody->statementId = 'nulla';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->expectedRevisionId = 'possimus';
    $request->resourceArn = 'quia';

    $response = $sdk->sdk->createResourcePolicyStatement($request);

    if ($response->createResourcePolicyStatementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSlot

Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an <code>OrderPizza</code> intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlotRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlotRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlotRequestBodyMultipleValuesSetting;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlotRequestBodyObfuscationSetting;
use \OpenAPI\OpenAPI\Models\Shared\ObfuscationSettingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlotRequestBodySubSlotSetting;
use \OpenAPI\OpenAPI\Models\Shared\Specifications;
use \OpenAPI\OpenAPI\Models\Shared\SubSlotValueElicitationSetting;
use \OpenAPI\OpenAPI\Models\Shared\SlotDefaultValueSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SlotDefaultValue;
use \OpenAPI\OpenAPI\Models\Shared\PromptSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MessageGroup;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\CustomPayload;
use \OpenAPI\OpenAPI\Models\Shared\ImageResponseCard;
use \OpenAPI\OpenAPI\Models\Shared\Button;
use \OpenAPI\OpenAPI\Models\Shared\PlainTextMessage;
use \OpenAPI\OpenAPI\Models\Shared\SSMLMessage;
use \OpenAPI\OpenAPI\Models\Shared\MessageSelectionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PromptAttemptSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AllowedInputTypes;
use \OpenAPI\OpenAPI\Models\Shared\AudioAndDTMFInputSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AudioSpecification;
use \OpenAPI\OpenAPI\Models\Shared\DTMFSpecification;
use \OpenAPI\OpenAPI\Models\Shared\TextInputSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SampleUtterance;
use \OpenAPI\OpenAPI\Models\Shared\WaitAndContinueSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ResponseSpecification;
use \OpenAPI\OpenAPI\Models\Shared\StillWaitingResponseSpecification;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlotRequestBodyValueElicitationSetting;
use \OpenAPI\OpenAPI\Models\Shared\SlotCaptureSetting;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalBranch;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\DialogState;
use \OpenAPI\OpenAPI\Models\Shared\DialogAction;
use \OpenAPI\OpenAPI\Models\Shared\DialogActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntentOverride;
use \OpenAPI\OpenAPI\Models\Shared\SlotValueOverride;
use \OpenAPI\OpenAPI\Models\Shared\SlotValue;
use \OpenAPI\OpenAPI\Models\Shared\DefaultConditionalBranch;
use \OpenAPI\OpenAPI\Models\Shared\DialogCodeHookInvocationSetting;
use \OpenAPI\OpenAPI\Models\Shared\PostDialogCodeHookInvocationSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ElicitationCodeHookInvocationSetting;
use \OpenAPI\OpenAPI\Models\Shared\SlotConstraintEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSlotRequest();
    $request->requestBody = new CreateSlotRequestBody();
    $request->requestBody->description = 'eveniet';
    $request->requestBody->multipleValuesSetting = new CreateSlotRequestBodyMultipleValuesSetting();
    $request->requestBody->multipleValuesSetting->allowMultipleValues = false;
    $request->requestBody->obfuscationSetting = new CreateSlotRequestBodyObfuscationSetting();
    $request->requestBody->obfuscationSetting->obfuscationSettingType = ObfuscationSettingTypeEnum::DEFAULT_OBFUSCATION;
    $request->requestBody->slotName = 'facere';
    $request->requestBody->slotTypeId = 'veritatis';
    $request->requestBody->subSlotSetting = new CreateSlotRequestBodySubSlotSetting();
    $request->requestBody->subSlotSetting->expression = 'consequuntur';
    $request->requestBody->subSlotSetting->slotSpecifications = [
        'similique' => new Specifications(),
    ];
    $request->requestBody->valueElicitationSetting = new CreateSlotRequestBodyValueElicitationSetting();
    $request->requestBody->valueElicitationSetting->defaultValueSpecification = new SlotDefaultValueSpecification();
    $request->requestBody->valueElicitationSetting->defaultValueSpecification->defaultValueList = [
        new SlotDefaultValue(),
        new SlotDefaultValue(),
        new SlotDefaultValue(),
    ];
    $request->requestBody->valueElicitationSetting->promptSpecification = new PromptSpecification();
    $request->requestBody->valueElicitationSetting->promptSpecification->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->promptSpecification->maxRetries = 398434;
    $request->requestBody->valueElicitationSetting->promptSpecification->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->promptSpecification->messageSelectionStrategy = MessageSelectionStrategyEnum::RANDOM;
    $request->requestBody->valueElicitationSetting->promptSpecification->promptAttemptsSpecification = [
        'vel' => new PromptAttemptSpecification(),
        'in' => new PromptAttemptSpecification(),
        'eius' => new PromptAttemptSpecification(),
        'libero' => new PromptAttemptSpecification(),
    ];
    $request->requestBody->valueElicitationSetting->sampleUtterances = [
        new SampleUtterance(),
        new SampleUtterance(),
        new SampleUtterance(),
        new SampleUtterance(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting = new SlotCaptureSetting();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional = new ConditionalSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'accusantium';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_SLOT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->intent->name = 'Samuel Hermiston';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->intent->slots = [
        'aut' => new SlotValueOverride(),
        'voluptatum' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->sessionAttributes = [
        'quibusdam' => 'ex',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->dialogAction->slotToElicit = 'itaque';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->dialogAction->type = DialogActionTypeEnum::FULFILL_INTENT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->intent->name = 'Dr. Belinda West III';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->intent->slots = [
        'minima' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->sessionAttributes = [
        'consectetur' => 'adipisci',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook = new DialogCodeHookInvocationSetting();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->enableCodeHookInvocation = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->invocationLabel = 'temporibus';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification = new PostDialogCodeHookInvocationSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional = new ConditionalSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'rem';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_INTENT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->name = 'Ms. Duane O'Conner';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->slots = [
        'dolor' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'numquam' => 'impedit',
        'explicabo' => 'voluptas',
        'aut' => 'dignissimos',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->slotToElicit = 'maiores';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->type = DialogActionTypeEnum::CONFIRM_INTENT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->name = 'Camille Hirthe III';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->slots = [
        'consequuntur' => new SlotValueOverride(),
        'repellendus' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->sessionAttributes = [
        'maxime' => 'dignissimos',
        'officia' => 'asperiores',
        'nemo' => 'quae',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional = new ConditionalSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'quod';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_SLOT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->name = 'Josephine Paucek';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->slots = [
        'culpa' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->sessionAttributes = [
        'recusandae' => 'totam',
        'fugiat' => 'vel',
        'ducimus' => 'quos',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->slotToElicit = 'labore';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->type = DialogActionTypeEnum::CLOSE_INTENT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->intent->name = 'Felipe Johns';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->intent->slots = [
        'assumenda' => new SlotValueOverride(),
        'nemo' => new SlotValueOverride(),
        'recusandae' => new SlotValueOverride(),
        'aliquid' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->sessionAttributes = [
        'cum' => 'consectetur',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional = new ConditionalSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'earum';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::CLOSE_INTENT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->name = 'Melba Homenick';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->slots = [
        'necessitatibus' => new SlotValueOverride(),
        'dolore' => new SlotValueOverride(),
        'sunt' => new SlotValueOverride(),
        'asperiores' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->sessionAttributes = [
        'non' => 'amet',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->slotToElicit = 'dignissimos';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->type = DialogActionTypeEnum::END_CONVERSATION;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->name = 'Glenn Herzog';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->slots = [
        'voluptates' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->sessionAttributes = [
        'vitae' => 'accusamus',
        'similique' => 'tempora',
        'aspernatur' => 'voluptas',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->elicitationCodeHook = new ElicitationCodeHookInvocationSetting();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->elicitationCodeHook->enableCodeHookInvocation = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->elicitationCodeHook->invocationLabel = 'voluptas';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional = new ConditionalSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'nobis';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::FULFILL_INTENT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->intent->name = 'Bethany D'Amore';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->intent->slots = [
        'aliquam' => new SlotValueOverride(),
        'officiis' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'ullam' => 'adipisci',
        'cum' => 'blanditiis',
        'quas' => 'hic',
        'nesciunt' => 'culpa',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->dialogAction->slotToElicit = 'pariatur';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->dialogAction->type = DialogActionTypeEnum::INVOKE_DIALOG_CODE_HOOK;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->intent->name = 'Miss Jorge Rolfson';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->intent->slots = [
        'explicabo' => new SlotValueOverride(),
        'asperiores' => new SlotValueOverride(),
        'facilis' => new SlotValueOverride(),
        'voluptate' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->sessionAttributes = [
        'ab' => 'iste',
        'dolore' => 'laborum',
        'sed' => 'in',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotConstraint = SlotConstraintEnum::OPTIONAL;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification = new WaitAndContinueSpecification();
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->active = false;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->continueResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->continueResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->continueResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->stillWaitingResponse = new StillWaitingResponseSpecification();
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->stillWaitingResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->stillWaitingResponse->frequencyInSeconds = 378326;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->stillWaitingResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->stillWaitingResponse->timeoutInSeconds = 100032;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->waitingResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->waitingResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->waitingResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'illo';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'maiores';
    $request->botId = 'incidunt';
    $request->botVersion = 'sed';
    $request->intentId = 'provident';
    $request->localeId = 'eius';

    $response = $sdk->sdk->createSlot($request);

    if ($response->createSlotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSlotType

<p>Creates a custom slot type</p> <p> To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlotTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlotTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlotTypeRequestBodyCompositeSlotTypeSetting;
use \OpenAPI\OpenAPI\Models\Shared\SubSlotTypeComposition;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlotTypeRequestBodyExternalSourceSetting;
use \OpenAPI\OpenAPI\Models\Shared\GrammarSlotTypeSetting;
use \OpenAPI\OpenAPI\Models\Shared\GrammarSlotTypeSource;
use \OpenAPI\OpenAPI\Models\Shared\SlotTypeValue;
use \OpenAPI\OpenAPI\Models\Shared\SampleValue;
use \OpenAPI\OpenAPI\Models\Operations\CreateSlotTypeRequestBodyValueSelectionSetting;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedRecognitionSetting;
use \OpenAPI\OpenAPI\Models\Shared\AudioRecognitionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlotValueRegexFilter;
use \OpenAPI\OpenAPI\Models\Shared\SlotValueResolutionStrategyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSlotTypeRequest();
    $request->requestBody = new CreateSlotTypeRequestBody();
    $request->requestBody->compositeSlotTypeSetting = new CreateSlotTypeRequestBodyCompositeSlotTypeSetting();
    $request->requestBody->compositeSlotTypeSetting->subSlots = [
        new SubSlotTypeComposition(),
        new SubSlotTypeComposition(),
        new SubSlotTypeComposition(),
        new SubSlotTypeComposition(),
    ];
    $request->requestBody->description = 'ipsum';
    $request->requestBody->externalSourceSetting = new CreateSlotTypeRequestBodyExternalSourceSetting();
    $request->requestBody->externalSourceSetting->grammarSlotTypeSetting = new GrammarSlotTypeSetting();
    $request->requestBody->externalSourceSetting->grammarSlotTypeSetting->source = new GrammarSlotTypeSource();
    $request->requestBody->externalSourceSetting->grammarSlotTypeSetting->source->kmsKeyArn = 'ea';
    $request->requestBody->externalSourceSetting->grammarSlotTypeSetting->source->s3BucketName = 'occaecati';
    $request->requestBody->externalSourceSetting->grammarSlotTypeSetting->source->s3ObjectKey = 'quos';
    $request->requestBody->parentSlotTypeSignature = 'voluptatibus';
    $request->requestBody->slotTypeName = 'tempora';
    $request->requestBody->slotTypeValues = [
        new SlotTypeValue(),
        new SlotTypeValue(),
    ];
    $request->requestBody->valueSelectionSetting = new CreateSlotTypeRequestBodyValueSelectionSetting();
    $request->requestBody->valueSelectionSetting->advancedRecognitionSetting = new AdvancedRecognitionSetting();
    $request->requestBody->valueSelectionSetting->advancedRecognitionSetting->audioRecognitionStrategy = AudioRecognitionStrategyEnum::USE_SLOT_VALUES_AS_CUSTOM_VOCABULARY;
    $request->requestBody->valueSelectionSetting->regexFilter = new SlotValueRegexFilter();
    $request->requestBody->valueSelectionSetting->regexFilter->pattern = 'voluptate';
    $request->requestBody->valueSelectionSetting->resolutionStrategy = SlotValueResolutionStrategyEnum::CONCATENATION;
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->botId = 'incidunt';
    $request->botVersion = 'ipsam';
    $request->localeId = 'debitis';

    $response = $sdk->sdk->createSlotType($request);

    if ($response->createSlotTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUploadUrl

Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUploadUrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUploadUrlRequest();
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->createUploadUrl($request);

    if ($response->createUploadUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBot

<p>Deletes all versions of a bot, including the <code>Draft</code> version. To delete a specific version, use the <code>DeleteBotVersion</code> operation.</p> <p>When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot.</p> <p>If a bot has an alias, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception. If you want to delete the bot and the alias, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBotRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'veniam';
    $request->botId = 'in';
    $request->skipResourceInUseCheck = false;

    $response = $sdk->sdk->deleteBot($request);

    if ($response->deleteBotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBotAlias

Deletes the specified bot alias.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBotAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBotAliasRequest();
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->botAliasId = 'dolorum';
    $request->botId = 'voluptatum';
    $request->skipResourceInUseCheck = false;

    $response = $sdk->sdk->deleteBotAlias($request);

    if ($response->deleteBotAliasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBotLocale

<p>Removes a locale from a bot.</p> <p>When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBotLocaleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBotLocaleRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->botId = 'officia';
    $request->botVersion = 'dolorum';
    $request->localeId = 'corrupti';

    $response = $sdk->sdk->deleteBotLocale($request);

    if ($response->deleteBotLocaleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBotVersion

Deletes a specific version of a bot. To delete all versions of a bot, use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBot.html">DeleteBot</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBotVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBotVersionRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->botId = 'culpa';
    $request->botVersion = 'expedita';
    $request->skipResourceInUseCheck = false;

    $response = $sdk->sdk->deleteBotVersion($request);

    if ($response->deleteBotVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomVocabulary

Removes a custom vocabulary from the specified locale in the specified bot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomVocabularyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomVocabularyRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'quas';
    $request->botId = 'repudiandae';
    $request->botVersion = 'corporis';
    $request->localeId = 'et';

    $response = $sdk->sdk->deleteCustomVocabulary($request);

    if ($response->deleteCustomVocabularyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteExport

Removes a previous export and the associated files stored in an S3 bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteExportRequest();
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'saepe';
    $request->exportId = 'error';

    $response = $sdk->sdk->deleteExport($request);

    if ($response->deleteExportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImport

Removes a previous import and the associated file stored in an S3 bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImportRequest();
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'architecto';
    $request->importId = 'occaecati';

    $response = $sdk->sdk->deleteImport($request);

    if ($response->deleteImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIntent

<p>Removes the specified intent.</p> <p>Deleting an intent also deletes the slots associated with the intent.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIntentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIntentRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->botId = 'alias';
    $request->botVersion = 'amet';
    $request->intentId = 'deserunt';
    $request->localeId = 'voluptate';

    $response = $sdk->sdk->deleteIntent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->expectedRevisionId = 'est';
    $request->resourceArn = 'quidem';

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicyStatement

Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyStatementRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyStatementRequest();
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->expectedRevisionId = 'quisquam';
    $request->resourceArn = 'repudiandae';
    $request->statementId = 'quasi';

    $response = $sdk->sdk->deleteResourcePolicyStatement($request);

    if ($response->deleteResourcePolicyStatementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSlot

Deletes the specified slot from an intent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSlotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSlotRequest();
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'maxime';
    $request->botId = 'et';
    $request->botVersion = 'esse';
    $request->intentId = 'amet';
    $request->localeId = 'assumenda';
    $request->slotId = 'ea';

    $response = $sdk->sdk->deleteSlot($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSlotType

<p>Deletes a slot type from a bot locale.</p> <p>If a slot is using the slot type, Amazon Lex throws a <code>ResourceInUseException</code> exception. To avoid the exception, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSlotTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSlotTypeRequest();
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'minima';
    $request->botId = 'aspernatur';
    $request->botVersion = 'ex';
    $request->localeId = 'maiores';
    $request->skipResourceInUseCheck = false;
    $request->slotTypeId = 'corrupti';

    $response = $sdk->sdk->deleteSlotType($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUtterances

<p>Deletes stored utterances.</p> <p>Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html">ListAggregatedUtterances</a> operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input..</p> <p>Use the <code>DeleteUtterances</code> operation to manually delete utterances for a specific session. When you use the <code>DeleteUtterances</code> operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the <code>ListAggregatedUtterances</code> operation are deleted after 15 days.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUtterancesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUtterancesRequest();
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'atque';
    $request->botId = 'sunt';
    $request->localeId = 'recusandae';
    $request->sessionId = 'dolorum';

    $response = $sdk->sdk->deleteUtterances($request);

    if ($response->deleteUtterancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBot

Provides metadata information about a bot. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBotRequest();
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->botId = 'beatae';

    $response = $sdk->sdk->describeBot($request);

    if ($response->describeBotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBotAlias

Get information about a specific bot alias.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBotAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBotAliasRequest();
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'magnam';
    $request->botAliasId = 'saepe';
    $request->botId = 'consequuntur';

    $response = $sdk->sdk->describeBotAlias($request);

    if ($response->describeBotAliasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBotLocale

Describes the settings that a bot has for a specific locale. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBotLocaleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBotLocaleRequest();
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->botId = 'consequuntur';
    $request->botVersion = 'fugit';
    $request->localeId = 'id';

    $response = $sdk->sdk->describeBotLocale($request);

    if ($response->describeBotLocaleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBotRecommendation

Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBotRecommendationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBotRecommendationRequest();
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'illo';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->botId = 'non';
    $request->botRecommendationId = 'vero';
    $request->botVersion = 'doloremque';
    $request->localeId = 'iure';

    $response = $sdk->sdk->describeBotRecommendation($request);

    if ($response->describeBotRecommendationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBotVersion

Provides metadata about a version of a bot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBotVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBotVersionRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cum';
    $request->botId = 'iure';
    $request->botVersion = 'necessitatibus';

    $response = $sdk->sdk->describeBotVersion($request);

    if ($response->describeBotVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCustomVocabularyMetadata

Provides metadata information about a custom vocabulary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomVocabularyMetadataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCustomVocabularyMetadataRequest();
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'ad';
    $request->botId = 'repellat';
    $request->botVersion = 'alias';
    $request->localeId = 'corporis';

    $response = $sdk->sdk->describeCustomVocabularyMetadata($request);

    if ($response->describeCustomVocabularyMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeExport

Gets information about a specific export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExportRequest();
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->exportId = 'dolores';

    $response = $sdk->sdk->describeExport($request);

    if ($response->describeExportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImport

Gets information about a specific import.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImportRequest();
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->importId = 'omnis';

    $response = $sdk->sdk->describeImport($request);

    if ($response->describeImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIntent

Returns metadata about an intent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIntentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIntentRequest();
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'debitis';
    $request->botId = 'laudantium';
    $request->botVersion = 'eum';
    $request->intentId = 'nemo';
    $request->localeId = 'recusandae';

    $response = $sdk->sdk->describeIntent($request);

    if ($response->describeIntentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeResourcePolicy

Gets the resource policy and policy revision for a bot or bot alias.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourcePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeResourcePolicyRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->resourceArn = 'ullam';

    $response = $sdk->sdk->describeResourcePolicy($request);

    if ($response->describeResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSlot

Gets metadata information about a slot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSlotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSlotRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'animi';
    $request->botId = 'ex';
    $request->botVersion = 'aliquid';
    $request->intentId = 'accusantium';
    $request->localeId = 'repellat';
    $request->slotId = 'doloribus';

    $response = $sdk->sdk->describeSlot($request);

    if ($response->describeSlotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSlotType

Gets metadata information about a slot type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSlotTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSlotTypeRequest();
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'placeat';
    $request->botId = 'modi';
    $request->botVersion = 'voluptatibus';
    $request->localeId = 'molestias';
    $request->slotTypeId = 'officiis';

    $response = $sdk->sdk->describeSlotType($request);

    if ($response->describeSlotTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAggregatedUtterances

<p>Provides a list of utterances that users have sent to the bot.</p> <p>Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response.</p> <p>You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn't activate an intent.</p> <p>Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time.</p> <p>Utterances statistics are not generated under the following conditions:</p> <ul> <li> <p>The <code>childDirected</code> field was set to true when the bot was created.</p> </li> <li> <p>You are using slot obfuscation with one or more slots.</p> </li> <li> <p>You opted out of participating in improving Amazon Lex.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAggregatedUtterancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAggregatedUtterancesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListAggregatedUtterancesRequestBodyAggregationDuration;
use \OpenAPI\OpenAPI\Models\Shared\RelativeAggregationDuration;
use \OpenAPI\OpenAPI\Models\Shared\TimeDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregatedUtterancesFilter;
use \OpenAPI\OpenAPI\Models\Shared\AggregatedUtterancesFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregatedUtterancesFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAggregatedUtterancesRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\AggregatedUtterancesSortAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAggregatedUtterancesRequest();
    $request->requestBody = new ListAggregatedUtterancesRequestBody();
    $request->requestBody->aggregationDuration = new ListAggregatedUtterancesRequestBodyAggregationDuration();
    $request->requestBody->aggregationDuration->relativeAggregationDuration = new RelativeAggregationDuration();
    $request->requestBody->aggregationDuration->relativeAggregationDuration->timeDimension = TimeDimensionEnum::WEEKS;
    $request->requestBody->aggregationDuration->relativeAggregationDuration->timeValue = 764562;
    $request->requestBody->botAliasId = 'vitae';
    $request->requestBody->botVersion = 'rerum';
    $request->requestBody->filters = [
        new AggregatedUtterancesFilter(),
        new AggregatedUtterancesFilter(),
    ];
    $request->requestBody->localeId = 'quis';
    $request->requestBody->maxResults = 82057;
    $request->requestBody->nextToken = 'fugit';
    $request->requestBody->sortBy = new ListAggregatedUtterancesRequestBodySortBy();
    $request->requestBody->sortBy->attribute = AggregatedUtterancesSortAttributeEnum::MISSED_COUNT;
    $request->requestBody->sortBy->order = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'at';
    $request->botId = 'impedit';
    $request->maxResults = 'eos';
    $request->nextToken = 'sapiente';

    $response = $sdk->sdk->listAggregatedUtterances($request);

    if ($response->listAggregatedUtterancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBotAliases

Gets a list of aliases for the specified bot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBotAliasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBotAliasesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBotAliasesRequest();
    $request->requestBody = new ListBotAliasesRequestBody();
    $request->requestBody->maxResults = 433279;
    $request->requestBody->nextToken = 'dicta';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'hic';
    $request->botId = 'illum';
    $request->maxResults = 'eaque';
    $request->nextToken = 'earum';

    $response = $sdk->sdk->listBotAliases($request);

    if ($response->listBotAliasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBotLocales

Gets a list of locales for the specified bot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBotLocalesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBotLocalesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BotLocaleFilter;
use \OpenAPI\OpenAPI\Models\Shared\BotLocaleFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\BotLocaleFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBotLocalesRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\BotLocaleSortAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBotLocalesRequest();
    $request->requestBody = new ListBotLocalesRequestBody();
    $request->requestBody->filters = [
        new BotLocaleFilter(),
        new BotLocaleFilter(),
        new BotLocaleFilter(),
    ];
    $request->requestBody->maxResults = 983427;
    $request->requestBody->nextToken = 'debitis';
    $request->requestBody->sortBy = new ListBotLocalesRequestBodySortBy();
    $request->requestBody->sortBy->attribute = BotLocaleSortAttributeEnum::BOT_LOCALE_NAME;
    $request->requestBody->sortBy->order = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'ratione';
    $request->botId = 'animi';
    $request->botVersion = 'necessitatibus';
    $request->maxResults = 'nulla';
    $request->nextToken = 'consequatur';

    $response = $sdk->sdk->listBotLocales($request);

    if ($response->listBotLocalesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBotRecommendations

Get a list of bot recommendations that meet the specified criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBotRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBotRecommendationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBotRecommendationsRequest();
    $request->requestBody = new ListBotRecommendationsRequestBody();
    $request->requestBody->maxResults = 97258;
    $request->requestBody->nextToken = 'et';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'magni';
    $request->botId = 'doloribus';
    $request->botVersion = 'nulla';
    $request->localeId = 'necessitatibus';
    $request->maxResults = 'ipsa';
    $request->nextToken = 'tempora';

    $response = $sdk->sdk->listBotRecommendations($request);

    if ($response->listBotRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBotVersions

<p>Gets information about all of the versions of a bot.</p> <p>The <code>ListBotVersions</code> operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the <code>ListBotVersions</code> operation returns for summaries, one for each numbered version and one for the <code>DRAFT</code> version.</p> <p>The <code>ListBotVersions</code> operation always returns at least one version, the <code>DRAFT</code> version.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBotVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBotVersionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListBotVersionsRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\BotVersionSortAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBotVersionsRequest();
    $request->requestBody = new ListBotVersionsRequestBody();
    $request->requestBody->maxResults = 470621;
    $request->requestBody->nextToken = 'molestiae';
    $request->requestBody->sortBy = new ListBotVersionsRequestBodySortBy();
    $request->requestBody->sortBy->attribute = BotVersionSortAttributeEnum::BOT_VERSION;
    $request->requestBody->sortBy->order = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'architecto';
    $request->botId = 'fugiat';
    $request->maxResults = 'doloremque';
    $request->nextToken = 'dicta';

    $response = $sdk->sdk->listBotVersions($request);

    if ($response->listBotVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBots

Gets a list of available bots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBotsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BotFilter;
use \OpenAPI\OpenAPI\Models\Shared\BotFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\BotFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBotsRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\BotSortAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBotsRequest();
    $request->requestBody = new ListBotsRequestBody();
    $request->requestBody->filters = [
        new BotFilter(),
        new BotFilter(),
    ];
    $request->requestBody->maxResults = 271252;
    $request->requestBody->nextToken = 'esse';
    $request->requestBody->sortBy = new ListBotsRequestBodySortBy();
    $request->requestBody->sortBy->attribute = BotSortAttributeEnum::BOT_NAME;
    $request->requestBody->sortBy->order = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->maxResults = 'expedita';
    $request->nextToken = 'aliquid';

    $response = $sdk->sdk->listBots($request);

    if ($response->listBotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBuiltInIntents

<p>Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. </p> <p>To use a built-in intent as a the base for your own intent, include the built-in intent signature in the <code>parentIntentSignature</code> parameter when you call the <code>CreateIntent</code> operation. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateIntent.html">CreateIntent</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBuiltInIntentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBuiltInIntentsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListBuiltInIntentsRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\BuiltInIntentSortAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBuiltInIntentsRequest();
    $request->requestBody = new ListBuiltInIntentsRequestBody();
    $request->requestBody->maxResults = 639187;
    $request->requestBody->nextToken = 'suscipit';
    $request->requestBody->sortBy = new ListBuiltInIntentsRequestBodySortBy();
    $request->requestBody->sortBy->attribute = BuiltInIntentSortAttributeEnum::INTENT_SIGNATURE;
    $request->requestBody->sortBy->order = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'error';
    $request->localeId = 'possimus';
    $request->maxResults = 'voluptates';
    $request->nextToken = 'mollitia';

    $response = $sdk->sdk->listBuiltInIntents($request);

    if ($response->listBuiltInIntentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBuiltInSlotTypes

Gets a list of built-in slot types that meet the specified criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBuiltInSlotTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBuiltInSlotTypesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListBuiltInSlotTypesRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\BuiltInSlotTypeSortAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBuiltInSlotTypesRequest();
    $request->requestBody = new ListBuiltInSlotTypesRequestBody();
    $request->requestBody->maxResults = 671794;
    $request->requestBody->nextToken = 'libero';
    $request->requestBody->sortBy = new ListBuiltInSlotTypesRequestBodySortBy();
    $request->requestBody->sortBy->attribute = BuiltInSlotTypeSortAttributeEnum::SLOT_TYPE_SIGNATURE;
    $request->requestBody->sortBy->order = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'ex';
    $request->localeId = 'ut';
    $request->maxResults = 'ad';
    $request->nextToken = 'expedita';

    $response = $sdk->sdk->listBuiltInSlotTypes($request);

    if ($response->listBuiltInSlotTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomVocabularyItems

Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomVocabularyItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomVocabularyItemsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomVocabularyItemsRequest();
    $request->requestBody = new ListCustomVocabularyItemsRequestBody();
    $request->requestBody->maxResults = 29950;
    $request->requestBody->nextToken = 'molestias';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'rerum';
    $request->botId = 'est';
    $request->botVersion = 'culpa';
    $request->localeId = 'voluptatem';
    $request->maxResults = 'sapiente';
    $request->nextToken = 'officiis';

    $response = $sdk->sdk->listCustomVocabularyItems($request);

    if ($response->listCustomVocabularyItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExports

Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExportsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ExportFilter;
use \OpenAPI\OpenAPI\Models\Shared\ExportFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListExportsRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\ExportSortAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExportsRequest();
    $request->requestBody = new ListExportsRequestBody();
    $request->requestBody->botId = 'architecto';
    $request->requestBody->botVersion = 'fuga';
    $request->requestBody->filters = [
        new ExportFilter(),
        new ExportFilter(),
        new ExportFilter(),
        new ExportFilter(),
    ];
    $request->requestBody->localeId = 'debitis';
    $request->requestBody->maxResults = 29190;
    $request->requestBody->nextToken = 'alias';
    $request->requestBody->sortBy = new ListExportsRequestBodySortBy();
    $request->requestBody->sortBy->attribute = ExportSortAttributeEnum::LAST_UPDATED_DATE_TIME;
    $request->requestBody->sortBy->order = SortOrderEnum::DESCENDING;
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->maxResults = 'ratione';
    $request->nextToken = 'ullam';

    $response = $sdk->sdk->listExports($request);

    if ($response->listExportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImports

Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListImportsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ImportFilter;
use \OpenAPI\OpenAPI\Models\Shared\ImportFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListImportsRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\ImportSortAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImportsRequest();
    $request->requestBody = new ListImportsRequestBody();
    $request->requestBody->botId = 'perferendis';
    $request->requestBody->botVersion = 'illum';
    $request->requestBody->filters = [
        new ImportFilter(),
        new ImportFilter(),
        new ImportFilter(),
    ];
    $request->requestBody->localeId = 'impedit';
    $request->requestBody->maxResults = 842777;
    $request->requestBody->nextToken = 'nam';
    $request->requestBody->sortBy = new ListImportsRequestBodySortBy();
    $request->requestBody->sortBy->attribute = ImportSortAttributeEnum::LAST_UPDATED_DATE_TIME;
    $request->requestBody->sortBy->order = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'tempora';
    $request->maxResults = 'dolor';
    $request->nextToken = 'consequatur';

    $response = $sdk->sdk->listImports($request);

    if ($response->listImportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIntents

Get a list of intents that meet the specified criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIntentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIntentsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\IntentFilter;
use \OpenAPI\OpenAPI\Models\Shared\IntentFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntentFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListIntentsRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\IntentSortAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIntentsRequest();
    $request->requestBody = new ListIntentsRequestBody();
    $request->requestBody->filters = [
        new IntentFilter(),
    ];
    $request->requestBody->maxResults = 24944;
    $request->requestBody->nextToken = 'modi';
    $request->requestBody->sortBy = new ListIntentsRequestBodySortBy();
    $request->requestBody->sortBy->attribute = IntentSortAttributeEnum::INTENT_NAME;
    $request->requestBody->sortBy->order = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->botId = 'quas';
    $request->botVersion = 'eveniet';
    $request->localeId = 'impedit';
    $request->maxResults = 'officiis';
    $request->nextToken = 'esse';

    $response = $sdk->sdk->listIntents($request);

    if ($response->listIntentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecommendedIntents

Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents in the response are ordered by relevance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendedIntentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendedIntentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecommendedIntentsRequest();
    $request->requestBody = new ListRecommendedIntentsRequestBody();
    $request->requestBody->maxResults = 897277;
    $request->requestBody->nextToken = 'sed';
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'magnam';
    $request->botId = 'exercitationem';
    $request->botRecommendationId = 'ab';
    $request->botVersion = 'porro';
    $request->localeId = 'autem';
    $request->maxResults = 'nobis';
    $request->nextToken = 'laboriosam';

    $response = $sdk->sdk->listRecommendedIntents($request);

    if ($response->listRecommendedIntentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSlotTypes

Gets a list of slot types that match the specified criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSlotTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSlotTypesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SlotTypeFilter;
use \OpenAPI\OpenAPI\Models\Shared\SlotTypeFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlotTypeFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSlotTypesRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\SlotTypeSortAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSlotTypesRequest();
    $request->requestBody = new ListSlotTypesRequestBody();
    $request->requestBody->filters = [
        new SlotTypeFilter(),
        new SlotTypeFilter(),
        new SlotTypeFilter(),
        new SlotTypeFilter(),
    ];
    $request->requestBody->maxResults = 160393;
    $request->requestBody->nextToken = 'voluptatem';
    $request->requestBody->sortBy = new ListSlotTypesRequestBodySortBy();
    $request->requestBody->sortBy->attribute = SlotTypeSortAttributeEnum::SLOT_TYPE_NAME;
    $request->requestBody->sortBy->order = SortOrderEnum::DESCENDING;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'sequi';
    $request->botId = 'doloribus';
    $request->botVersion = 'repudiandae';
    $request->localeId = 'optio';
    $request->maxResults = 'occaecati';
    $request->nextToken = 'nemo';

    $response = $sdk->sdk->listSlotTypes($request);

    if ($response->listSlotTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSlots

Gets a list of slots that match the specified criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSlotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSlotsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SlotFilter;
use \OpenAPI\OpenAPI\Models\Shared\SlotFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlotFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSlotsRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\SlotSortAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSlotsRequest();
    $request->requestBody = new ListSlotsRequestBody();
    $request->requestBody->filters = [
        new SlotFilter(),
        new SlotFilter(),
    ];
    $request->requestBody->maxResults = 501063;
    $request->requestBody->nextToken = 'officia';
    $request->requestBody->sortBy = new ListSlotsRequestBodySortBy();
    $request->requestBody->sortBy->attribute = SlotSortAttributeEnum::SLOT_NAME;
    $request->requestBody->sortBy->order = SortOrderEnum::ASCENDING;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'fuga';
    $request->botId = 'laudantium';
    $request->botVersion = 'incidunt';
    $request->intentId = 'quasi';
    $request->localeId = 'rem';
    $request->maxResults = 'fugiat';
    $request->nextToken = 'dicta';

    $response = $sdk->sdk->listSlots($request);

    if ($response->listSlotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'soluta';
    $request->resourceARN = 'alias';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchAssociatedTranscripts

Search for associated transcripts that meet the specified criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchAssociatedTranscriptsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchAssociatedTranscriptsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AssociatedTranscriptFilter;
use \OpenAPI\OpenAPI\Models\Shared\AssociatedTranscriptFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchAssociatedTranscriptsRequestBodySearchOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchAssociatedTranscriptsRequest();
    $request->requestBody = new SearchAssociatedTranscriptsRequestBody();
    $request->requestBody->filters = [
        new AssociatedTranscriptFilter(),
        new AssociatedTranscriptFilter(),
        new AssociatedTranscriptFilter(),
    ];
    $request->requestBody->maxResults = 178580;
    $request->requestBody->nextIndex = 579011;
    $request->requestBody->searchOrder = SearchAssociatedTranscriptsRequestBodySearchOrderEnum::DESCENDING;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'omnis';
    $request->botId = 'delectus';
    $request->botRecommendationId = 'minima';
    $request->botVersion = 'praesentium';
    $request->localeId = 'maxime';

    $response = $sdk->sdk->searchAssociatedTranscripts($request);

    if ($response->searchAssociatedTranscriptsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startBotRecommendation

Use this to provide your transcript data, and to start the bot recommendation process.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartBotRecommendationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartBotRecommendationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartBotRecommendationRequestBodyEncryptionSetting;
use \OpenAPI\OpenAPI\Models\Operations\StartBotRecommendationRequestBodyTranscriptSourceSetting;
use \OpenAPI\OpenAPI\Models\Shared\S3BucketTranscriptSource;
use \OpenAPI\OpenAPI\Models\Shared\PathFormat;
use \OpenAPI\OpenAPI\Models\Shared\TranscriptFilter;
use \OpenAPI\OpenAPI\Models\Shared\LexTranscriptFilter;
use \OpenAPI\OpenAPI\Models\Shared\DateRangeFilter;
use \OpenAPI\OpenAPI\Models\Shared\TranscriptFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartBotRecommendationRequest();
    $request->requestBody = new StartBotRecommendationRequestBody();
    $request->requestBody->encryptionSetting = new StartBotRecommendationRequestBodyEncryptionSetting();
    $request->requestBody->encryptionSetting->associatedTranscriptsPassword = 'magnam';
    $request->requestBody->encryptionSetting->botLocaleExportPassword = 'temporibus';
    $request->requestBody->encryptionSetting->kmsKeyArn = 'quos';
    $request->requestBody->transcriptSourceSetting = new StartBotRecommendationRequestBodyTranscriptSourceSetting();
    $request->requestBody->transcriptSourceSetting->s3BucketTranscriptSource = new S3BucketTranscriptSource();
    $request->requestBody->transcriptSourceSetting->s3BucketTranscriptSource->kmsKeyArn = 'commodi';
    $request->requestBody->transcriptSourceSetting->s3BucketTranscriptSource->pathFormat = new PathFormat();
    $request->requestBody->transcriptSourceSetting->s3BucketTranscriptSource->pathFormat->objectPrefixes = [
        'commodi',
        'totam',
        'earum',
        'modi',
    ];
    $request->requestBody->transcriptSourceSetting->s3BucketTranscriptSource->s3BucketName = 'nam';
    $request->requestBody->transcriptSourceSetting->s3BucketTranscriptSource->transcriptFilter = new TranscriptFilter();
    $request->requestBody->transcriptSourceSetting->s3BucketTranscriptSource->transcriptFilter->lexTranscriptFilter = new LexTranscriptFilter();
    $request->requestBody->transcriptSourceSetting->s3BucketTranscriptSource->transcriptFilter->lexTranscriptFilter->dateRangeFilter = new DateRangeFilter();
    $request->requestBody->transcriptSourceSetting->s3BucketTranscriptSource->transcriptFilter->lexTranscriptFilter->dateRangeFilter->endDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T23:21:09.307Z');
    $request->requestBody->transcriptSourceSetting->s3BucketTranscriptSource->transcriptFilter->lexTranscriptFilter->dateRangeFilter->startDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T12:42:47.911Z');
    $request->requestBody->transcriptSourceSetting->s3BucketTranscriptSource->transcriptFormat = TranscriptFormatEnum::LEX;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'nulla';
    $request->botId = 'deserunt';
    $request->botVersion = 'esse';
    $request->localeId = 'nemo';

    $response = $sdk->sdk->startBotRecommendation($request);

    if ($response->startBotRecommendationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startImport

Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartImportRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartImportRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartImportRequestBodyMergeStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartImportRequestBodyResourceSpecification;
use \OpenAPI\OpenAPI\Models\Shared\BotImportSpecification;
use \OpenAPI\OpenAPI\Models\Shared\DataPrivacy;
use \OpenAPI\OpenAPI\Models\Shared\BotLocaleImportSpecification;
use \OpenAPI\OpenAPI\Models\Shared\VoiceSettings;
use \OpenAPI\OpenAPI\Models\Shared\VoiceEngineEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomVocabularyImportSpecification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartImportRequest();
    $request->requestBody = new StartImportRequestBody();
    $request->requestBody->filePassword = 'reprehenderit';
    $request->requestBody->importId = 'est';
    $request->requestBody->mergeStrategy = StartImportRequestBodyMergeStrategyEnum::FAIL_ON_CONFLICT;
    $request->requestBody->resourceSpecification = new StartImportRequestBodyResourceSpecification();
    $request->requestBody->resourceSpecification->botImportSpecification = new BotImportSpecification();
    $request->requestBody->resourceSpecification->botImportSpecification->botName = 'sint';
    $request->requestBody->resourceSpecification->botImportSpecification->botTags = [
        'impedit' => 'hic',
        'necessitatibus' => 'asperiores',
        'ex' => 'voluptas',
        'debitis' => 'delectus',
    ];
    $request->requestBody->resourceSpecification->botImportSpecification->dataPrivacy = new DataPrivacy();
    $request->requestBody->resourceSpecification->botImportSpecification->dataPrivacy->childDirected = false;
    $request->requestBody->resourceSpecification->botImportSpecification->idleSessionTTLInSeconds = 65082;
    $request->requestBody->resourceSpecification->botImportSpecification->roleArn = 'minus';
    $request->requestBody->resourceSpecification->botImportSpecification->testBotAliasTags = [
        'laborum' => 'consectetur',
        'velit' => 'atque',
        'ipsum' => 'impedit',
    ];
    $request->requestBody->resourceSpecification->botLocaleImportSpecification = new BotLocaleImportSpecification();
    $request->requestBody->resourceSpecification->botLocaleImportSpecification->botId = 'magni';
    $request->requestBody->resourceSpecification->botLocaleImportSpecification->botVersion = 'soluta';
    $request->requestBody->resourceSpecification->botLocaleImportSpecification->localeId = 'repudiandae';
    $request->requestBody->resourceSpecification->botLocaleImportSpecification->nluIntentConfidenceThreshold = 7214.3;
    $request->requestBody->resourceSpecification->botLocaleImportSpecification->voiceSettings = new VoiceSettings();
    $request->requestBody->resourceSpecification->botLocaleImportSpecification->voiceSettings->engine = VoiceEngineEnum::STANDARD;
    $request->requestBody->resourceSpecification->botLocaleImportSpecification->voiceSettings->voiceId = 'iusto';
    $request->requestBody->resourceSpecification->customVocabularyImportSpecification = new CustomVocabularyImportSpecification();
    $request->requestBody->resourceSpecification->customVocabularyImportSpecification->botId = 'voluptate';
    $request->requestBody->resourceSpecification->customVocabularyImportSpecification->botVersion = 'sequi';
    $request->requestBody->resourceSpecification->customVocabularyImportSpecification->localeId = 'dignissimos';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->startImport($request);

    if ($response->startImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopBotRecommendation

Stop an already running Bot Recommendation request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopBotRecommendationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopBotRecommendationRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'architecto';
    $request->botId = 'voluptatibus';
    $request->botRecommendationId = 'quia';
    $request->botVersion = 'porro';
    $request->localeId = 'aliquam';

    $response = $sdk->sdk->stopBotRecommendation($request);

    if ($response->stopBotRecommendationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'illo' => 'accusantium',
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'velit';
    $request->resourceARN = 'ut';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from a bot, bot alias, or bot channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'itaque';
    $request->resourceARN = 'alias';
    $request->tagKeys = [
        'itaque',
        'velit',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBot

Updates the configuration of an existing bot. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BotMember;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotRequestBodyBotTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotRequestBodyDataPrivacy;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBotRequest();
    $request->requestBody = new UpdateBotRequestBody();
    $request->requestBody->botMembers = [
        new BotMember(),
        new BotMember(),
        new BotMember(),
    ];
    $request->requestBody->botName = 'non';
    $request->requestBody->botType = UpdateBotRequestBodyBotTypeEnum::BOT;
    $request->requestBody->dataPrivacy = new UpdateBotRequestBodyDataPrivacy();
    $request->requestBody->dataPrivacy->childDirected = false;
    $request->requestBody->description = 'iusto';
    $request->requestBody->idleSessionTTLInSeconds = 24753;
    $request->requestBody->roleArn = 'doloremque';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'facilis';
    $request->botId = 'placeat';

    $response = $sdk->sdk->updateBot($request);

    if ($response->updateBotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBotAlias

Updates the configuration of an existing bot alias.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotAliasRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BotAliasLocaleSettings;
use \OpenAPI\OpenAPI\Models\Shared\CodeHookSpecification;
use \OpenAPI\OpenAPI\Models\Shared\LambdaCodeHook;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotAliasRequestBodyConversationLogSettings;
use \OpenAPI\OpenAPI\Models\Shared\AudioLogSetting;
use \OpenAPI\OpenAPI\Models\Shared\AudioLogDestination;
use \OpenAPI\OpenAPI\Models\Shared\S3BucketLogDestination;
use \OpenAPI\OpenAPI\Models\Shared\TextLogSetting;
use \OpenAPI\OpenAPI\Models\Shared\TextLogDestination;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogGroupLogDestination;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotAliasRequestBodySentimentAnalysisSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBotAliasRequest();
    $request->requestBody = new UpdateBotAliasRequestBody();
    $request->requestBody->botAliasLocaleSettings = [
        'expedita' => new BotAliasLocaleSettings(),
        'deleniti' => new BotAliasLocaleSettings(),
        'a' => new BotAliasLocaleSettings(),
    ];
    $request->requestBody->botAliasName = 'voluptate';
    $request->requestBody->botVersion = 'ullam';
    $request->requestBody->conversationLogSettings = new UpdateBotAliasRequestBodyConversationLogSettings();
    $request->requestBody->conversationLogSettings->audioLogSettings = [
        new AudioLogSetting(),
        new AudioLogSetting(),
        new AudioLogSetting(),
    ];
    $request->requestBody->conversationLogSettings->textLogSettings = [
        new TextLogSetting(),
        new TextLogSetting(),
        new TextLogSetting(),
        new TextLogSetting(),
    ];
    $request->requestBody->description = 'animi';
    $request->requestBody->sentimentAnalysisSettings = new UpdateBotAliasRequestBodySentimentAnalysisSettings();
    $request->requestBody->sentimentAnalysisSettings->detectSentiment = false;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'labore';
    $request->botAliasId = 'veritatis';
    $request->botId = 'vero';

    $response = $sdk->sdk->updateBotAlias($request);

    if ($response->updateBotAliasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBotLocale

Updates the settings that a bot has for a specific locale.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotLocaleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotLocaleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotLocaleRequestBodyVoiceSettings;
use \OpenAPI\OpenAPI\Models\Shared\VoiceEngineEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBotLocaleRequest();
    $request->requestBody = new UpdateBotLocaleRequestBody();
    $request->requestBody->description = 'consectetur';
    $request->requestBody->nluIntentConfidenceThreshold = 1124.27;
    $request->requestBody->voiceSettings = new UpdateBotLocaleRequestBodyVoiceSettings();
    $request->requestBody->voiceSettings->engine = VoiceEngineEnum::STANDARD;
    $request->requestBody->voiceSettings->voiceId = 'dolorem';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'libero';
    $request->botId = 'rem';
    $request->botVersion = 'dolorum';
    $request->localeId = 'odio';

    $response = $sdk->sdk->updateBotLocale($request);

    if ($response->updateBotLocaleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBotRecommendation

Updates an existing bot recommendation request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotRecommendationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotRecommendationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBotRecommendationRequestBodyEncryptionSetting;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBotRecommendationRequest();
    $request->requestBody = new UpdateBotRecommendationRequestBody();
    $request->requestBody->encryptionSetting = new UpdateBotRecommendationRequestBodyEncryptionSetting();
    $request->requestBody->encryptionSetting->associatedTranscriptsPassword = 'fugit';
    $request->requestBody->encryptionSetting->botLocaleExportPassword = 'alias';
    $request->requestBody->encryptionSetting->kmsKeyArn = 'magni';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'itaque';
    $request->botId = 'et';
    $request->botRecommendationId = 'ipsum';
    $request->botVersion = 'unde';
    $request->localeId = 'nulla';

    $response = $sdk->sdk->updateBotRecommendation($request);

    if ($response->updateBotRecommendationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateExport

<p>Updates the password used to protect an export zip archive.</p> <p>The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html">DescribeExport</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExportRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateExportRequest();
    $request->requestBody = new UpdateExportRequestBody();
    $request->requestBody->filePassword = 'distinctio';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'dicta';
    $request->exportId = 'id';

    $response = $sdk->sdk->updateExport($request);

    if ($response->updateExportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIntent

Updates the settings for an intent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntentRequestBodyDialogCodeHook;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntentRequestBodyFulfillmentCodeHook;
use \OpenAPI\OpenAPI\Models\Shared\FulfillmentUpdatesSpecification;
use \OpenAPI\OpenAPI\Models\Shared\FulfillmentStartResponseSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MessageGroup;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\CustomPayload;
use \OpenAPI\OpenAPI\Models\Shared\ImageResponseCard;
use \OpenAPI\OpenAPI\Models\Shared\Button;
use \OpenAPI\OpenAPI\Models\Shared\PlainTextMessage;
use \OpenAPI\OpenAPI\Models\Shared\SSMLMessage;
use \OpenAPI\OpenAPI\Models\Shared\FulfillmentUpdateResponseSpecification;
use \OpenAPI\OpenAPI\Models\Shared\PostFulfillmentStatusSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalBranch;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\DialogState;
use \OpenAPI\OpenAPI\Models\Shared\DialogAction;
use \OpenAPI\OpenAPI\Models\Shared\DialogActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntentOverride;
use \OpenAPI\OpenAPI\Models\Shared\SlotValueOverride;
use \OpenAPI\OpenAPI\Models\Shared\SlotValue;
use \OpenAPI\OpenAPI\Models\Shared\ResponseSpecification;
use \OpenAPI\OpenAPI\Models\Shared\DefaultConditionalBranch;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntentRequestBodyInitialResponseSetting;
use \OpenAPI\OpenAPI\Models\Shared\DialogCodeHookInvocationSetting;
use \OpenAPI\OpenAPI\Models\Shared\PostDialogCodeHookInvocationSpecification;
use \OpenAPI\OpenAPI\Models\Shared\InputContext;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntentRequestBodyIntentClosingSetting;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntentRequestBodyIntentConfirmationSetting;
use \OpenAPI\OpenAPI\Models\Shared\ElicitationCodeHookInvocationSetting;
use \OpenAPI\OpenAPI\Models\Shared\PromptSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MessageSelectionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PromptAttemptSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AllowedInputTypes;
use \OpenAPI\OpenAPI\Models\Shared\AudioAndDTMFInputSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AudioSpecification;
use \OpenAPI\OpenAPI\Models\Shared\DTMFSpecification;
use \OpenAPI\OpenAPI\Models\Shared\TextInputSpecification;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIntentRequestBodyKendraConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\OutputContext;
use \OpenAPI\OpenAPI\Models\Shared\SampleUtterance;
use \OpenAPI\OpenAPI\Models\Shared\SlotPriority;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIntentRequest();
    $request->requestBody = new UpdateIntentRequestBody();
    $request->requestBody->description = 'libero';
    $request->requestBody->dialogCodeHook = new UpdateIntentRequestBodyDialogCodeHook();
    $request->requestBody->dialogCodeHook->enabled = false;
    $request->requestBody->fulfillmentCodeHook = new UpdateIntentRequestBodyFulfillmentCodeHook();
    $request->requestBody->fulfillmentCodeHook->active = false;
    $request->requestBody->fulfillmentCodeHook->enabled = false;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification = new FulfillmentUpdatesSpecification();
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->active = false;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->startResponse = new FulfillmentStartResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->startResponse->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->startResponse->delayInSeconds = 854460;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->startResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->timeoutInSeconds = 554603;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->updateResponse = new FulfillmentUpdateResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->updateResponse->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->updateResponse->frequencyInSeconds = 811939;
    $request->requestBody->fulfillmentCodeHook->fulfillmentUpdatesSpecification->updateResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification = new PostFulfillmentStatusSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional = new ConditionalSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->active = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'ipsa';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::END_CONVERSATION;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->intent->name = 'Deborah Larson';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->intent->slots = [
        'voluptatem' => new SlotValueOverride(),
        'autem' => new SlotValueOverride(),
        'esse' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'assumenda' => 'beatae',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->dialogAction->slotToElicit = 'facere';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->dialogAction->type = DialogActionTypeEnum::INVOKE_DIALOG_CODE_HOOK;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->intent->name = 'Daisy Tillman';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->intent->slots = [
        'ea' => new SlotValueOverride(),
        'autem' => new SlotValueOverride(),
        'ipsam' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureNextStep->sessionAttributes = [
        'laudantium' => 'corporis',
        'officiis' => 'voluptatibus',
        'cum' => 'at',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureResponse = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureResponse->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->failureResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional = new ConditionalSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->active = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->conditionalBranches = [
        new ConditionalBranch(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'quidem';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::FULFILL_INTENT;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->intent->name = 'Steven Rath';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->intent->slots = [
        'odio' => new SlotValueOverride(),
        'praesentium' => new SlotValueOverride(),
        'odit' => new SlotValueOverride(),
        'explicabo' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->nextStep->sessionAttributes = [
        'error' => 'earum',
        'adipisci' => 'recusandae',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->dialogAction->slotToElicit = 'ut';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->dialogAction->type = DialogActionTypeEnum::FULFILL_INTENT;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->intent->name = 'Teresa Miller';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->intent->slots = [
        'fugit' => new SlotValueOverride(),
        'numquam' => new SlotValueOverride(),
        'numquam' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successNextStep->sessionAttributes = [
        'at' => 'officia',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successResponse = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successResponse->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->successResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional = new ConditionalSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->active = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'necessitatibus';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::EVALUATE_CONDITIONAL;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->intent->name = 'Kristy Lemke';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->intent->slots = [
        'enim' => new SlotValueOverride(),
        'neque' => new SlotValueOverride(),
        'in' => new SlotValueOverride(),
        'minus' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->nextStep->sessionAttributes = [
        'modi' => 'corporis',
        'magnam' => 'voluptates',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep = new DialogState();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->dialogAction = new DialogAction();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->dialogAction->slotToElicit = 'tempore';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_INTENT;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->intent = new IntentOverride();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->intent->name = 'Philip Greenfelder';
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->intent->slots = [
        'quo' => new SlotValueOverride(),
        'velit' => new SlotValueOverride(),
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutNextStep->sessionAttributes = [
        'fuga' => 'nostrum',
        'est' => 'impedit',
        'delectus' => 'tempore',
        'vero' => 'odit',
    ];
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutResponse = new ResponseSpecification();
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutResponse->allowInterrupt = false;
    $request->requestBody->fulfillmentCodeHook->postFulfillmentStatusSpecification->timeoutResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting = new UpdateIntentRequestBodyInitialResponseSetting();
    $request->requestBody->initialResponseSetting->codeHook = new DialogCodeHookInvocationSetting();
    $request->requestBody->initialResponseSetting->codeHook->active = false;
    $request->requestBody->initialResponseSetting->codeHook->enableCodeHookInvocation = false;
    $request->requestBody->initialResponseSetting->codeHook->invocationLabel = 'pariatur';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification = new PostDialogCodeHookInvocationSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional = new ConditionalSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->active = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'reprehenderit';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_INTENT;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->name = 'Cathy Kirlin';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->slots = [
        'error' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'ducimus' => 'voluptate',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->slotToElicit = 'itaque';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->type = DialogActionTypeEnum::CONFIRM_INTENT;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->name = 'Marc Hahn';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->slots = [
        'quidem' => new SlotValueOverride(),
        'exercitationem' => new SlotValueOverride(),
        'quam' => new SlotValueOverride(),
        'dolorem' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureNextStep->sessionAttributes = [
        'ipsa' => 'sint',
        'vero' => 'sequi',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureResponse = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureResponse->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->failureResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional = new ConditionalSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->active = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'dicta';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::END_CONVERSATION;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->name = 'Madeline Daniel Sr.';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->slots = [
        'nobis' => new SlotValueOverride(),
        'ipsa' => new SlotValueOverride(),
        'ducimus' => new SlotValueOverride(),
        'maiores' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->sessionAttributes = [
        'quasi' => 'laboriosam',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->slotToElicit = 'libero';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->type = DialogActionTypeEnum::CONFIRM_INTENT;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->intent->name = 'Maurice Haag';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->intent->slots = [
        'sint' => new SlotValueOverride(),
        'enim' => new SlotValueOverride(),
        'hic' => new SlotValueOverride(),
        'animi' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successNextStep->sessionAttributes = [
        'totam' => 'molestias',
        'odio' => 'eaque',
        'saepe' => 'architecto',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successResponse = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successResponse->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->successResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional = new ConditionalSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->active = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'assumenda';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::FULFILL_INTENT;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->name = 'Lee Batz';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->slots = [
        'ipsum' => new SlotValueOverride(),
        'adipisci' => new SlotValueOverride(),
        'saepe' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->sessionAttributes = [
        'doloremque' => 'quis',
        'veniam' => 'libero',
        'architecto' => 'cupiditate',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep = new DialogState();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->slotToElicit = 'eligendi';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->type = DialogActionTypeEnum::CLOSE_INTENT;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->name = 'Danielle Waters';
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->slots = [
        'consequuntur' => new SlotValueOverride(),
        'facere' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutNextStep->sessionAttributes = [
        'odit' => 'pariatur',
        'amet' => 'exercitationem',
        'ab' => 'velit',
    ];
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutResponse = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutResponse->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->codeHook->postCodeHookSpecification->timeoutResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->conditional = new ConditionalSpecification();
    $request->requestBody->initialResponseSetting->conditional->active = false;
    $request->requestBody->initialResponseSetting->conditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->initialResponseSetting->conditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'nisi';
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::END_CONVERSATION;
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->intent->name = 'Mattie Raynor';
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->intent->slots = [
        'libero' => new SlotValueOverride(),
        'minus' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->nextStep->sessionAttributes = [
        'facilis' => 'ipsum',
        'ad' => 'voluptatibus',
        'voluptatibus' => 'consequuntur',
        'debitis' => 'labore',
    ];
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->conditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->initialResponse = new ResponseSpecification();
    $request->requestBody->initialResponseSetting->initialResponse->allowInterrupt = false;
    $request->requestBody->initialResponseSetting->initialResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->initialResponseSetting->nextStep = new DialogState();
    $request->requestBody->initialResponseSetting->nextStep->dialogAction = new DialogAction();
    $request->requestBody->initialResponseSetting->nextStep->dialogAction->slotToElicit = 'reprehenderit';
    $request->requestBody->initialResponseSetting->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->initialResponseSetting->nextStep->dialogAction->type = DialogActionTypeEnum::EVALUATE_CONDITIONAL;
    $request->requestBody->initialResponseSetting->nextStep->intent = new IntentOverride();
    $request->requestBody->initialResponseSetting->nextStep->intent->name = 'Heidi O'Reilly';
    $request->requestBody->initialResponseSetting->nextStep->intent->slots = [
        'unde' => new SlotValueOverride(),
        'officiis' => new SlotValueOverride(),
        'ducimus' => new SlotValueOverride(),
        'dolor' => new SlotValueOverride(),
    ];
    $request->requestBody->initialResponseSetting->nextStep->sessionAttributes = [
        'error' => 'porro',
    ];
    $request->requestBody->inputContexts = [
        new InputContext(),
    ];
    $request->requestBody->intentClosingSetting = new UpdateIntentRequestBodyIntentClosingSetting();
    $request->requestBody->intentClosingSetting->active = false;
    $request->requestBody->intentClosingSetting->closingResponse = new ResponseSpecification();
    $request->requestBody->intentClosingSetting->closingResponse->allowInterrupt = false;
    $request->requestBody->intentClosingSetting->closingResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentClosingSetting->conditional = new ConditionalSpecification();
    $request->requestBody->intentClosingSetting->conditional->active = false;
    $request->requestBody->intentClosingSetting->conditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentClosingSetting->conditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'fugiat';
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_SLOT;
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->intent->name = 'Jill Wintheiser';
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->intent->slots = [
        'illo' => new SlotValueOverride(),
        'ab' => new SlotValueOverride(),
        'incidunt' => new SlotValueOverride(),
    ];
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->nextStep->sessionAttributes = [
        'saepe' => 'tempore',
        'veniam' => 'eos',
        'reiciendis' => 'earum',
        'reprehenderit' => 'praesentium',
    ];
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentClosingSetting->conditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentClosingSetting->nextStep = new DialogState();
    $request->requestBody->intentClosingSetting->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentClosingSetting->nextStep->dialogAction->slotToElicit = 'repellat';
    $request->requestBody->intentClosingSetting->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentClosingSetting->nextStep->dialogAction->type = DialogActionTypeEnum::CLOSE_INTENT;
    $request->requestBody->intentClosingSetting->nextStep->intent = new IntentOverride();
    $request->requestBody->intentClosingSetting->nextStep->intent->name = 'Mrs. Claudia Leuschke';
    $request->requestBody->intentClosingSetting->nextStep->intent->slots = [
        'quisquam' => new SlotValueOverride(),
        'provident' => new SlotValueOverride(),
    ];
    $request->requestBody->intentClosingSetting->nextStep->sessionAttributes = [
        'repudiandae' => 'consequatur',
        'maxime' => 'aspernatur',
        'nam' => 'expedita',
    ];
    $request->requestBody->intentConfirmationSetting = new UpdateIntentRequestBodyIntentConfirmationSetting();
    $request->requestBody->intentConfirmationSetting->active = false;
    $request->requestBody->intentConfirmationSetting->codeHook = new DialogCodeHookInvocationSetting();
    $request->requestBody->intentConfirmationSetting->codeHook->active = false;
    $request->requestBody->intentConfirmationSetting->codeHook->enableCodeHookInvocation = false;
    $request->requestBody->intentConfirmationSetting->codeHook->invocationLabel = 'quas';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification = new PostDialogCodeHookInvocationSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->active = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'repudiandae';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::FULFILL_INTENT;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->name = 'Ana Swift';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->slots = [
        'dolorem' => new SlotValueOverride(),
        'commodi' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'commodi' => 'aut',
        'voluptatem' => 'ad',
        'quae' => 'amet',
        'illum' => 'praesentium',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->slotToElicit = 'cum';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_SLOT;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->name = 'Dr. Mildred Larkin';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->slots = [
        'provident' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureNextStep->sessionAttributes = [
        'necessitatibus' => 'provident',
        'repudiandae' => 'consequatur',
        'nemo' => 'molestiae',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->failureResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->active = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'corrupti';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_INTENT;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->name = 'Caleb Daugherty Jr.';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->slots = [
        'dolor' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->sessionAttributes = [
        'a' => 'dolor',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->slotToElicit = 'atque';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_INTENT;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->intent->name = 'Leroy Schinner Jr.';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->intent->slots = [
        'ea' => new SlotValueOverride(),
        'aperiam' => new SlotValueOverride(),
        'dignissimos' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successNextStep->sessionAttributes = [
        'velit' => 'porro',
        'provident' => 'consectetur',
        'eligendi' => 'dignissimos',
        'consectetur' => 'soluta',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->successResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->active = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'officia';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_SLOT;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->name = 'Bruce Satterfield';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->slots = [
        'dignissimos' => new SlotValueOverride(),
        'vero' => new SlotValueOverride(),
        'qui' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->sessionAttributes = [
        'repellat' => 'explicabo',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->slotToElicit = 'exercitationem';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->type = DialogActionTypeEnum::INVOKE_DIALOG_CODE_HOOK;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->name = 'Virginia Bins';
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->slots = [
        'non' => new SlotValueOverride(),
        'distinctio' => new SlotValueOverride(),
        'in' => new SlotValueOverride(),
        'exercitationem' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutNextStep->sessionAttributes = [
        'numquam' => 'repudiandae',
        'modi' => 'in',
    ];
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->codeHook->postCodeHookSpecification->timeoutResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->confirmationConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->active = false;
    $request->requestBody->intentConfirmationSetting->confirmationConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'rem';
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_INTENT;
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->intent->name = 'Nina Halvorson';
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->intent->slots = [
        'libero' => new SlotValueOverride(),
        'magnam' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->nextStep->sessionAttributes = [
        'modi' => 'eum',
    ];
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->confirmationConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->confirmationNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->dialogAction->slotToElicit = 'mollitia';
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->dialogAction->type = DialogActionTypeEnum::INVOKE_DIALOG_CODE_HOOK;
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->intent->name = 'Dean Krajcik';
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->intent->slots = [
        'modi' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->confirmationNextStep->sessionAttributes = [
        'aut' => 'eveniet',
    ];
    $request->requestBody->intentConfirmationSetting->confirmationResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->confirmationResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->confirmationResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->declinationConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->declinationConditional->active = false;
    $request->requestBody->intentConfirmationSetting->declinationConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'numquam';
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::FULFILL_INTENT;
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->intent->name = 'Adrian Feest';
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->intent->slots = [
        'minus' => new SlotValueOverride(),
        'sunt' => new SlotValueOverride(),
        'distinctio' => new SlotValueOverride(),
        'iusto' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->nextStep->sessionAttributes = [
        'et' => 'facilis',
        'amet' => 'autem',
        'fuga' => 'alias',
    ];
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->declinationConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->declinationNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->declinationNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->declinationNextStep->dialogAction->slotToElicit = 'aut';
    $request->requestBody->intentConfirmationSetting->declinationNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->declinationNextStep->dialogAction->type = DialogActionTypeEnum::INVOKE_DIALOG_CODE_HOOK;
    $request->requestBody->intentConfirmationSetting->declinationNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->declinationNextStep->intent->name = 'Mr. Marcos Boehm';
    $request->requestBody->intentConfirmationSetting->declinationNextStep->intent->slots = [
        'mollitia' => new SlotValueOverride(),
        'nulla' => new SlotValueOverride(),
        'officia' => new SlotValueOverride(),
        'sed' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->declinationNextStep->sessionAttributes = [
        'alias' => 'eveniet',
    ];
    $request->requestBody->intentConfirmationSetting->declinationResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->declinationResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->declinationResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->elicitationCodeHook = new ElicitationCodeHookInvocationSetting();
    $request->requestBody->intentConfirmationSetting->elicitationCodeHook->enableCodeHookInvocation = false;
    $request->requestBody->intentConfirmationSetting->elicitationCodeHook->invocationLabel = 'voluptatem';
    $request->requestBody->intentConfirmationSetting->failureConditional = new ConditionalSpecification();
    $request->requestBody->intentConfirmationSetting->failureConditional->active = false;
    $request->requestBody->intentConfirmationSetting->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'qui';
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::START_INTENT;
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->intent->name = 'Mrs. Kerry Cassin';
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->intent->slots = [
        'voluptatibus' => new SlotValueOverride(),
        'molestias' => new SlotValueOverride(),
        'officia' => new SlotValueOverride(),
        'libero' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'sequi' => 'aliquid',
        'ea' => 'impedit',
        'ducimus' => 'odit',
    ];
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->failureNextStep = new DialogState();
    $request->requestBody->intentConfirmationSetting->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->intentConfirmationSetting->failureNextStep->dialogAction->slotToElicit = 'reiciendis';
    $request->requestBody->intentConfirmationSetting->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->intentConfirmationSetting->failureNextStep->dialogAction->type = DialogActionTypeEnum::END_CONVERSATION;
    $request->requestBody->intentConfirmationSetting->failureNextStep->intent = new IntentOverride();
    $request->requestBody->intentConfirmationSetting->failureNextStep->intent->name = 'Cameron Mosciski III';
    $request->requestBody->intentConfirmationSetting->failureNextStep->intent->slots = [
        'recusandae' => new SlotValueOverride(),
        'voluptates' => new SlotValueOverride(),
        'non' => new SlotValueOverride(),
    ];
    $request->requestBody->intentConfirmationSetting->failureNextStep->sessionAttributes = [
        'quia' => 'ullam',
        'quisquam' => 'dicta',
        'voluptatibus' => 'eligendi',
    ];
    $request->requestBody->intentConfirmationSetting->failureResponse = new ResponseSpecification();
    $request->requestBody->intentConfirmationSetting->failureResponse->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->failureResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->promptSpecification = new PromptSpecification();
    $request->requestBody->intentConfirmationSetting->promptSpecification->allowInterrupt = false;
    $request->requestBody->intentConfirmationSetting->promptSpecification->maxRetries = 885022;
    $request->requestBody->intentConfirmationSetting->promptSpecification->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->intentConfirmationSetting->promptSpecification->messageSelectionStrategy = MessageSelectionStrategyEnum::RANDOM;
    $request->requestBody->intentConfirmationSetting->promptSpecification->promptAttemptsSpecification = [
        'optio' => new PromptAttemptSpecification(),
        'rem' => new PromptAttemptSpecification(),
    ];
    $request->requestBody->intentName = 'perferendis';
    $request->requestBody->kendraConfiguration = new UpdateIntentRequestBodyKendraConfiguration();
    $request->requestBody->kendraConfiguration->kendraIndex = 'facilis';
    $request->requestBody->kendraConfiguration->queryFilterString = 'reiciendis';
    $request->requestBody->kendraConfiguration->queryFilterStringEnabled = false;
    $request->requestBody->outputContexts = [
        new OutputContext(),
        new OutputContext(),
        new OutputContext(),
        new OutputContext(),
    ];
    $request->requestBody->parentIntentSignature = 'iste';
    $request->requestBody->sampleUtterances = [
        new SampleUtterance(),
    ];
    $request->requestBody->slotPriorities = [
        new SlotPriority(),
        new SlotPriority(),
        new SlotPriority(),
    ];
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->botId = 'assumenda';
    $request->botVersion = 'vero';
    $request->intentId = 'doloribus';
    $request->localeId = 'impedit';

    $response = $sdk->sdk->updateIntent($request);

    if ($response->updateIntentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResourcePolicy

Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourcePolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResourcePolicyRequest();
    $request->requestBody = new UpdateResourcePolicyRequestBody();
    $request->requestBody->policy = 'porro';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'esse';
    $request->expectedRevisionId = 'iure';
    $request->resourceArn = 'odio';

    $response = $sdk->sdk->updateResourcePolicy($request);

    if ($response->updateResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSlot

Updates the settings for a slot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlotRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlotRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlotRequestBodyMultipleValuesSetting;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlotRequestBodyObfuscationSetting;
use \OpenAPI\OpenAPI\Models\Shared\ObfuscationSettingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlotRequestBodySubSlotSetting;
use \OpenAPI\OpenAPI\Models\Shared\Specifications;
use \OpenAPI\OpenAPI\Models\Shared\SubSlotValueElicitationSetting;
use \OpenAPI\OpenAPI\Models\Shared\SlotDefaultValueSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SlotDefaultValue;
use \OpenAPI\OpenAPI\Models\Shared\PromptSpecification;
use \OpenAPI\OpenAPI\Models\Shared\MessageGroup;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\CustomPayload;
use \OpenAPI\OpenAPI\Models\Shared\ImageResponseCard;
use \OpenAPI\OpenAPI\Models\Shared\Button;
use \OpenAPI\OpenAPI\Models\Shared\PlainTextMessage;
use \OpenAPI\OpenAPI\Models\Shared\SSMLMessage;
use \OpenAPI\OpenAPI\Models\Shared\MessageSelectionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PromptAttemptSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AllowedInputTypes;
use \OpenAPI\OpenAPI\Models\Shared\AudioAndDTMFInputSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AudioSpecification;
use \OpenAPI\OpenAPI\Models\Shared\DTMFSpecification;
use \OpenAPI\OpenAPI\Models\Shared\TextInputSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SampleUtterance;
use \OpenAPI\OpenAPI\Models\Shared\WaitAndContinueSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ResponseSpecification;
use \OpenAPI\OpenAPI\Models\Shared\StillWaitingResponseSpecification;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlotRequestBodyValueElicitationSetting;
use \OpenAPI\OpenAPI\Models\Shared\SlotCaptureSetting;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalBranch;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\DialogState;
use \OpenAPI\OpenAPI\Models\Shared\DialogAction;
use \OpenAPI\OpenAPI\Models\Shared\DialogActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntentOverride;
use \OpenAPI\OpenAPI\Models\Shared\SlotValueOverride;
use \OpenAPI\OpenAPI\Models\Shared\SlotValue;
use \OpenAPI\OpenAPI\Models\Shared\DefaultConditionalBranch;
use \OpenAPI\OpenAPI\Models\Shared\DialogCodeHookInvocationSetting;
use \OpenAPI\OpenAPI\Models\Shared\PostDialogCodeHookInvocationSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ElicitationCodeHookInvocationSetting;
use \OpenAPI\OpenAPI\Models\Shared\SlotConstraintEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSlotRequest();
    $request->requestBody = new UpdateSlotRequestBody();
    $request->requestBody->description = 'nesciunt';
    $request->requestBody->multipleValuesSetting = new UpdateSlotRequestBodyMultipleValuesSetting();
    $request->requestBody->multipleValuesSetting->allowMultipleValues = false;
    $request->requestBody->obfuscationSetting = new UpdateSlotRequestBodyObfuscationSetting();
    $request->requestBody->obfuscationSetting->obfuscationSettingType = ObfuscationSettingTypeEnum::DEFAULT_OBFUSCATION;
    $request->requestBody->slotName = 'vel';
    $request->requestBody->slotTypeId = 'neque';
    $request->requestBody->subSlotSetting = new UpdateSlotRequestBodySubSlotSetting();
    $request->requestBody->subSlotSetting->expression = 'corporis';
    $request->requestBody->subSlotSetting->slotSpecifications = [
        'consequuntur' => new Specifications(),
        'officia' => new Specifications(),
    ];
    $request->requestBody->valueElicitationSetting = new UpdateSlotRequestBodyValueElicitationSetting();
    $request->requestBody->valueElicitationSetting->defaultValueSpecification = new SlotDefaultValueSpecification();
    $request->requestBody->valueElicitationSetting->defaultValueSpecification->defaultValueList = [
        new SlotDefaultValue(),
        new SlotDefaultValue(),
    ];
    $request->requestBody->valueElicitationSetting->promptSpecification = new PromptSpecification();
    $request->requestBody->valueElicitationSetting->promptSpecification->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->promptSpecification->maxRetries = 716033;
    $request->requestBody->valueElicitationSetting->promptSpecification->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->promptSpecification->messageSelectionStrategy = MessageSelectionStrategyEnum::RANDOM;
    $request->requestBody->valueElicitationSetting->promptSpecification->promptAttemptsSpecification = [
        'maiores' => new PromptAttemptSpecification(),
        'accusantium' => new PromptAttemptSpecification(),
        'veniam' => new PromptAttemptSpecification(),
    ];
    $request->requestBody->valueElicitationSetting->sampleUtterances = [
        new SampleUtterance(),
        new SampleUtterance(),
        new SampleUtterance(),
        new SampleUtterance(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting = new SlotCaptureSetting();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional = new ConditionalSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->conditionalBranches = [
        new ConditionalBranch(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'facere';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_SLOT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->intent->name = 'Domingo Stark';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->intent->slots = [
        'vitae' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->nextStep->sessionAttributes = [
        'similique' => 'illo',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->dialogAction->slotToElicit = 'nemo';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->dialogAction->type = DialogActionTypeEnum::END_CONVERSATION;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->intent->name = 'Mrs. Stuart Gorczany';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->intent->slots = [
        'alias' => new SlotValueOverride(),
        'quidem' => new SlotValueOverride(),
        'nesciunt' => new SlotValueOverride(),
        'commodi' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureNextStep->sessionAttributes = [
        'consequuntur' => 'veniam',
        'debitis' => 'officia',
        'sint' => 'ut',
        'numquam' => 'tenetur',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->captureResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook = new DialogCodeHookInvocationSetting();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->enableCodeHookInvocation = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->invocationLabel = 'libero';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification = new PostDialogCodeHookInvocationSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional = new ConditionalSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'minima';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::EVALUATE_CONDITIONAL;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->name = 'Andrew Brekke';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->intent->slots = [
        'dolor' => new SlotValueOverride(),
        'ducimus' => new SlotValueOverride(),
        'fuga' => new SlotValueOverride(),
        'minima' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'qui' => 'aliquid',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->slotToElicit = 'incidunt';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->dialogAction->type = DialogActionTypeEnum::ELICIT_SLOT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->name = 'Rodney Heller';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->intent->slots = [
        'sit' => new SlotValueOverride(),
        'nemo' => new SlotValueOverride(),
        'culpa' => new SlotValueOverride(),
        'consequuntur' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureNextStep->sessionAttributes = [
        'deserunt' => 'modi',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->failureResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional = new ConditionalSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'itaque';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::END_CONVERSATION;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->name = 'Bill Yundt';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->intent->slots = [
        'alias' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->nextStep->sessionAttributes = [
        'ipsa' => 'nobis',
        'necessitatibus' => 'quia',
        'dicta' => 'vel',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->slotToElicit = 'debitis';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->dialogAction->type = DialogActionTypeEnum::EVALUATE_CONDITIONAL;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->intent->name = 'Ms. Donna Auer';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->intent->slots = [
        'quibusdam' => new SlotValueOverride(),
        'quod' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successNextStep->sessionAttributes = [
        'recusandae' => 'velit',
        'magnam' => 'dignissimos',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->successResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional = new ConditionalSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->conditionalBranches = [
        new ConditionalBranch(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'odio';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::CONFIRM_INTENT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->name = 'Felipe Wyman';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->intent->slots = [
        'laboriosam' => new SlotValueOverride(),
        'unde' => new SlotValueOverride(),
        'modi' => new SlotValueOverride(),
        'perspiciatis' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->nextStep->sessionAttributes = [
        'cum' => 'aspernatur',
        'libero' => 'nam',
        'incidunt' => 'recusandae',
        'quod' => 'id',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->slotToElicit = 'autem';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->dialogAction->type = DialogActionTypeEnum::CLOSE_INTENT;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->name = 'Desiree Hilll';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->intent->slots = [
        'mollitia' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutNextStep->sessionAttributes = [
        'recusandae' => 'distinctio',
        'pariatur' => 'ad',
        'facere' => 'laborum',
        'eveniet' => 'laborum',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->codeHook->postCodeHookSpecification->timeoutResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->elicitationCodeHook = new ElicitationCodeHookInvocationSetting();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->elicitationCodeHook->enableCodeHookInvocation = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->elicitationCodeHook->invocationLabel = 'maxime';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional = new ConditionalSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->active = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->conditionalBranches = [
        new ConditionalBranch(),
        new ConditionalBranch(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch = new DefaultConditionalBranch();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->dialogAction->slotToElicit = 'alias';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->dialogAction->type = DialogActionTypeEnum::EVALUATE_CONDITIONAL;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->intent->name = 'Daryl Pacocha';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->intent->slots = [
        'quo' => new SlotValueOverride(),
        'perferendis' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->nextStep->sessionAttributes = [
        'aliquid' => 'magnam',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->response = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->response->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureConditional->defaultBranch->response->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep = new DialogState();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->dialogAction = new DialogAction();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->dialogAction->slotToElicit = 'eligendi';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->dialogAction->suppressNextMessage = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->dialogAction->type = DialogActionTypeEnum::END_CONVERSATION;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->intent = new IntentOverride();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->intent->name = 'Cecelia Mitchell';
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->intent->slots = [
        'magnam' => new SlotValueOverride(),
        'nostrum' => new SlotValueOverride(),
        'esse' => new SlotValueOverride(),
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureNextStep->sessionAttributes = [
        'fuga' => 'facere',
        'impedit' => 'quasi',
        'deserunt' => 'quod',
    ];
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->slotCaptureSetting->failureResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->slotConstraint = SlotConstraintEnum::REQUIRED;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification = new WaitAndContinueSpecification();
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->active = false;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->continueResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->continueResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->continueResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->stillWaitingResponse = new StillWaitingResponseSpecification();
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->stillWaitingResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->stillWaitingResponse->frequencyInSeconds = 816421;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->stillWaitingResponse->messageGroups = [
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
        new MessageGroup(),
    ];
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->stillWaitingResponse->timeoutInSeconds = 807564;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->waitingResponse = new ResponseSpecification();
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->waitingResponse->allowInterrupt = false;
    $request->requestBody->valueElicitationSetting->waitAndContinueSpecification->waitingResponse->messageGroups = [
        new MessageGroup(),
    ];
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'magni';
    $request->botId = 'officiis';
    $request->botVersion = 'sed';
    $request->intentId = 'necessitatibus';
    $request->localeId = 'impedit';
    $request->slotId = 'ipsa';

    $response = $sdk->sdk->updateSlot($request);

    if ($response->updateSlotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSlotType

Updates the configuration of an existing slot type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlotTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlotTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlotTypeRequestBodyCompositeSlotTypeSetting;
use \OpenAPI\OpenAPI\Models\Shared\SubSlotTypeComposition;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlotTypeRequestBodyExternalSourceSetting;
use \OpenAPI\OpenAPI\Models\Shared\GrammarSlotTypeSetting;
use \OpenAPI\OpenAPI\Models\Shared\GrammarSlotTypeSource;
use \OpenAPI\OpenAPI\Models\Shared\SlotTypeValue;
use \OpenAPI\OpenAPI\Models\Shared\SampleValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlotTypeRequestBodyValueSelectionSetting;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedRecognitionSetting;
use \OpenAPI\OpenAPI\Models\Shared\AudioRecognitionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlotValueRegexFilter;
use \OpenAPI\OpenAPI\Models\Shared\SlotValueResolutionStrategyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSlotTypeRequest();
    $request->requestBody = new UpdateSlotTypeRequestBody();
    $request->requestBody->compositeSlotTypeSetting = new UpdateSlotTypeRequestBodyCompositeSlotTypeSetting();
    $request->requestBody->compositeSlotTypeSetting->subSlots = [
        new SubSlotTypeComposition(),
        new SubSlotTypeComposition(),
        new SubSlotTypeComposition(),
    ];
    $request->requestBody->description = 'a';
    $request->requestBody->externalSourceSetting = new UpdateSlotTypeRequestBodyExternalSourceSetting();
    $request->requestBody->externalSourceSetting->grammarSlotTypeSetting = new GrammarSlotTypeSetting();
    $request->requestBody->externalSourceSetting->grammarSlotTypeSetting->source = new GrammarSlotTypeSource();
    $request->requestBody->externalSourceSetting->grammarSlotTypeSetting->source->kmsKeyArn = 'maiores';
    $request->requestBody->externalSourceSetting->grammarSlotTypeSetting->source->s3BucketName = 'laudantium';
    $request->requestBody->externalSourceSetting->grammarSlotTypeSetting->source->s3ObjectKey = 'maiores';
    $request->requestBody->parentSlotTypeSignature = 'alias';
    $request->requestBody->slotTypeName = 'asperiores';
    $request->requestBody->slotTypeValues = [
        new SlotTypeValue(),
        new SlotTypeValue(),
        new SlotTypeValue(),
    ];
    $request->requestBody->valueSelectionSetting = new UpdateSlotTypeRequestBodyValueSelectionSetting();
    $request->requestBody->valueSelectionSetting->advancedRecognitionSetting = new AdvancedRecognitionSetting();
    $request->requestBody->valueSelectionSetting->advancedRecognitionSetting->audioRecognitionStrategy = AudioRecognitionStrategyEnum::USE_SLOT_VALUES_AS_CUSTOM_VOCABULARY;
    $request->requestBody->valueSelectionSetting->regexFilter = new SlotValueRegexFilter();
    $request->requestBody->valueSelectionSetting->regexFilter->pattern = 'dicta';
    $request->requestBody->valueSelectionSetting->resolutionStrategy = SlotValueResolutionStrategyEnum::TOP_RESOLUTION;
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->botId = 'quasi';
    $request->botVersion = 'neque';
    $request->localeId = 'vero';
    $request->slotTypeId = 'excepturi';

    $response = $sdk->sdk->updateSlotType($request);

    if ($response->updateSlotTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
