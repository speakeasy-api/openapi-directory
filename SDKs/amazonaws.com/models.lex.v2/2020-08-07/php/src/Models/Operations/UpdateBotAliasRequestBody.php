<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateBotAliasRequestBody
{
    /**
     * The new Lambda functions to use in each locale for the bot alias.
     * 
     * @var ?array<string, \OpenAPI\OpenAPI\Models\Shared\BotAliasLocaleSettings> $botAliasLocaleSettings
     */
	#[\JMS\Serializer\Annotation\SerializedName('botAliasLocaleSettings')]
    #[\JMS\Serializer\Annotation\Type('array<string, OpenAPI\OpenAPI\Models\Shared\BotAliasLocaleSettings>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $botAliasLocaleSettings = null;
    
    /**
     * The new name to assign to the bot alias.
     * 
     * @var string $botAliasName
     */
	#[\JMS\Serializer\Annotation\SerializedName('botAliasName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $botAliasName;
    
    /**
     * The new bot version to assign to the bot alias.
     * 
     * @var ?string $botVersion
     */
	#[\JMS\Serializer\Annotation\SerializedName('botVersion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $botVersion = null;
    
    /**
     * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\UpdateBotAliasRequestBodyConversationLogSettings $conversationLogSettings
     */
	#[\JMS\Serializer\Annotation\SerializedName('conversationLogSettings')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\UpdateBotAliasRequestBodyConversationLogSettings')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UpdateBotAliasRequestBodyConversationLogSettings $conversationLogSettings = null;
    
    /**
     * The new description to assign to the bot alias.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\UpdateBotAliasRequestBodySentimentAnalysisSettings $sentimentAnalysisSettings
     */
	#[\JMS\Serializer\Annotation\SerializedName('sentimentAnalysisSettings')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\UpdateBotAliasRequestBodySentimentAnalysisSettings')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UpdateBotAliasRequestBodySentimentAnalysisSettings $sentimentAnalysisSettings = null;
    
	public function __construct()
	{
		$this->botAliasLocaleSettings = null;
		$this->botAliasName = "";
		$this->botVersion = null;
		$this->conversationLogSettings = null;
		$this->description = null;
		$this->sentimentAnalysisSettings = null;
	}
}
