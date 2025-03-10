<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PublicLovIndexLinks
{
    /**
     * List of lov link. The key is the list name.
     * 
     * @var ?array<string, \OpenAPI\OpenAPI\Models\Shared\LinksGetPublicListOfValuesLink> $lists
     */
	#[\JMS\Serializer\Annotation\SerializedName('lists')]
    #[\JMS\Serializer\Annotation\Type('array<string, OpenAPI\OpenAPI\Models\Shared\LinksGetPublicListOfValuesLink>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $lists = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('self')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LinksGetPublicLovIndexLink')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LinksGetPublicLovIndexLink $self = null;
    
	public function __construct()
	{
		$this->lists = null;
		$this->self = null;
	}
}
