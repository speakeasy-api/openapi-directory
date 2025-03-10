<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListObjectParentsRequestBody
{
    /**
     * The maximum number of items to be retrieved in a single call. This is an approximate number.
     * 
     * @var ?int $maxResults
     */
	#[\JMS\Serializer\Annotation\SerializedName('MaxResults')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $maxResults = null;
    
    /**
     * The pagination token.
     * 
     * @var ?string $nextToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
    /**
     * The reference that identifies an object.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\ListObjectParentsRequestBodyObjectReference $objectReference
     */
	#[\JMS\Serializer\Annotation\SerializedName('ObjectReference')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\ListObjectParentsRequestBodyObjectReference')]
    public ListObjectParentsRequestBodyObjectReference $objectReference;
    
	public function __construct()
	{
		$this->maxResults = null;
		$this->nextToken = null;
		$this->objectReference = new \OpenAPI\OpenAPI\Models\Operations\ListObjectParentsRequestBodyObjectReference();
	}
}
