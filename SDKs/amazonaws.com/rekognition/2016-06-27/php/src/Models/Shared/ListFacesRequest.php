<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ListFacesRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('CollectionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $collectionId;
    
	#[\JMS\Serializer\Annotation\SerializedName('MaxResults')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $maxResults = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->collectionId = "";
		$this->maxResults = null;
		$this->nextToken = null;
	}
}
