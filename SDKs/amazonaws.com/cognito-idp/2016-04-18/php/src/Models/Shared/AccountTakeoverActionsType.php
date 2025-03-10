<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AccountTakeoverActionsType - Account takeover actions type.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AccountTakeoverActionsType
{
	#[\JMS\Serializer\Annotation\SerializedName('HighAction')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\AccountTakeoverActionType')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AccountTakeoverActionType $highAction = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LowAction')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\AccountTakeoverActionType')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AccountTakeoverActionType $lowAction = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('MediumAction')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\AccountTakeoverActionType')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AccountTakeoverActionType $mediumAction = null;
    
	public function __construct()
	{
		$this->highAction = null;
		$this->lowAction = null;
		$this->mediumAction = null;
	}
}
