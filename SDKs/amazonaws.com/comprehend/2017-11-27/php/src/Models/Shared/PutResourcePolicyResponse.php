<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PutResourcePolicyResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PutResourcePolicyResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('PolicyRevisionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $policyRevisionId = null;
    
	public function __construct()
	{
		$this->policyRevisionId = null;
	}
}
