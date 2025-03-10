<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PersonRelationshipsAvatar - The avatar or head shot of the person. Details can be retrieved using the `/images` endpoint.
 * 
 * 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PersonRelationshipsAvatar
{
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ResourceIdentifier')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ResourceIdentifier $data = null;
    
	public function __construct()
	{
		$this->data = null;
	}
}
