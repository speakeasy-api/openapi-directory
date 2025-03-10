<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DeleteCollectionRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('CollectionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $collectionId;
    
	public function __construct()
	{
		$this->collectionId = "";
	}
}
