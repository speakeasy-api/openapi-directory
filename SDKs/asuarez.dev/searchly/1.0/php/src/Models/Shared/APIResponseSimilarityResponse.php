<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * APIResponseSimilarityResponse - Contains the response data if the request was successful.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class APIResponseSimilarityResponse
{
    /**
     * Contains all the similarity items representing songs.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\APIResponseSimilarityResponseSimilarityList> $similarityList
     */
	#[\JMS\Serializer\Annotation\SerializedName('similarity_list')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\APIResponseSimilarityResponseSimilarityList>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $similarityList = null;
    
	public function __construct()
	{
		$this->similarityList = null;
	}
}
