<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetTag200ApplicationJSON - Successfully retrieved the specified tag.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetTag200ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TagResponse')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\TagResponse $data = null;
    
	public function __construct()
	{
		$this->data = null;
	}
}
