<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DeleteBotAliasResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DeleteBotAliasResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('botAliasId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $botAliasId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('botAliasStatus')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\BotAliasStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?BotAliasStatusEnum $botAliasStatus = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('botId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $botId = null;
    
	public function __construct()
	{
		$this->botAliasId = null;
		$this->botAliasStatus = null;
		$this->botId = null;
	}
}
