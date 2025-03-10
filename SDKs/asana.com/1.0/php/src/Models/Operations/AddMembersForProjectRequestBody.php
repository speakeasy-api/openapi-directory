<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * AddMembersForProjectRequestBody - Information about the members being added.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class AddMembersForProjectRequestBody
{
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\AddMembersRequest')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\AddMembersRequest $data = null;
    
	public function __construct()
	{
		$this->data = null;
	}
}
