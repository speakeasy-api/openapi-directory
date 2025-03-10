<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PutParameterResult - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PutParameterResult
{
	#[\JMS\Serializer\Annotation\SerializedName('Tier')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ParameterTierEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ParameterTierEnum $tier = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Version')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $version = null;
    
	public function __construct()
	{
		$this->tier = null;
		$this->version = null;
	}
}
