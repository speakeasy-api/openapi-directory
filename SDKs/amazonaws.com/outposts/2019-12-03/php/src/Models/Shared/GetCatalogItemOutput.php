<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetCatalogItemOutput - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetCatalogItemOutput
{
	#[\JMS\Serializer\Annotation\SerializedName('CatalogItem')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CatalogItem')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CatalogItem $catalogItem = null;
    
	public function __construct()
	{
		$this->catalogItem = null;
	}
}
