<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ListLanguagesRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('DisplayLanguageCode')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DisplayLanguageCodeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DisplayLanguageCodeEnum $displayLanguageCode = null;
    
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
		$this->displayLanguageCode = null;
		$this->maxResults = null;
		$this->nextToken = null;
	}
}
