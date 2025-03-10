<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetProjectAnalyses200ApplicationJSON - Successful operation
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetProjectAnalyses200ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('count')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $count = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('next')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $next = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('page')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $page = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('previous')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $previous = null;
    
    /**
     * $results
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Analysis> $results
     */
	#[\JMS\Serializer\Annotation\SerializedName('results')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Analysis>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $results = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('size')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $size = null;
    
	public function __construct()
	{
		$this->count = null;
		$this->next = null;
		$this->page = null;
		$this->previous = null;
		$this->results = null;
		$this->size = null;
	}
}
