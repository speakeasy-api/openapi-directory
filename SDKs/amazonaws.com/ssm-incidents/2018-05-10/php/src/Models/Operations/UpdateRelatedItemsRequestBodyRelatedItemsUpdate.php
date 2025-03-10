<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdateRelatedItemsRequestBodyRelatedItemsUpdate - Details about the related item you're adding.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdateRelatedItemsRequestBodyRelatedItemsUpdate
{
	#[\JMS\Serializer\Annotation\SerializedName('itemToAdd')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\RelatedItem')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\RelatedItem $itemToAdd = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('itemToRemove')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ItemIdentifier')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\ItemIdentifier $itemToRemove = null;
    
	public function __construct()
	{
		$this->itemToAdd = null;
		$this->itemToRemove = null;
	}
}
