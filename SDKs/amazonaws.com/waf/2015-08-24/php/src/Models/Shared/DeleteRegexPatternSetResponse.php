<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DeleteRegexPatternSetResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DeleteRegexPatternSetResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('ChangeToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $changeToken = null;
    
	public function __construct()
	{
		$this->changeToken = null;
	}
}
