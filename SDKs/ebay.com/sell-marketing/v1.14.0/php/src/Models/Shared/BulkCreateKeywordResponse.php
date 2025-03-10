<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BulkCreateKeywordResponse - A type that contains the response fields for the bulk request to create keywords.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BulkCreateKeywordResponse
{
    /**
     * A list of keywords that have been processed by the request.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\KeywordResponse> $responses
     */
	#[\JMS\Serializer\Annotation\SerializedName('responses')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\KeywordResponse>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $responses = null;
    
	public function __construct()
	{
		$this->responses = null;
	}
}
