<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DeleteFacesRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('CollectionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $collectionId;
    
    /**
     * $faceIds
     * 
     * @var array<string> $faceIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('FaceIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $faceIds;
    
	public function __construct()
	{
		$this->collectionId = "";
		$this->faceIds = [];
	}
}
