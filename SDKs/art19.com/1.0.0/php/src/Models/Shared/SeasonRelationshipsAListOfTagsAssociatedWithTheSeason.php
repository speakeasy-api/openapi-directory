<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class SeasonRelationshipsAListOfTagsAssociatedWithTheSeason
{
    /**
     * $data
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ResourceIdentifier> $data
     */
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ResourceIdentifier>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $data = null;
    
	public function __construct()
	{
		$this->data = null;
	}
}
