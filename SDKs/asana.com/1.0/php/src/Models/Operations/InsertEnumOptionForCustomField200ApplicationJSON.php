<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * InsertEnumOptionForCustomField200ApplicationJSON - Custom field enum option successfully reordered.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class InsertEnumOptionForCustomField200ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\EnumOption')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\EnumOption $data = null;
    
	public function __construct()
	{
		$this->data = null;
	}
}
