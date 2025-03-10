<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListAccountPermissionsRequestBody
{
    /**
     * The maximum number of results to return in the response.
     * 
     * @var ?int $maxResults
     */
	#[\JMS\Serializer\Annotation\SerializedName('maxResults')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $maxResults = null;
    
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
     * 
     * @var ?string $nextToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
    /**
     * The service scan type to check permissions for.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ListAccountPermissionsRequestBodyServiceEnum $service
     */
	#[\JMS\Serializer\Annotation\SerializedName('service')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ListAccountPermissionsRequestBodyServiceEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ListAccountPermissionsRequestBodyServiceEnum $service = null;
    
	public function __construct()
	{
		$this->maxResults = null;
		$this->nextToken = null;
		$this->service = null;
	}
}
