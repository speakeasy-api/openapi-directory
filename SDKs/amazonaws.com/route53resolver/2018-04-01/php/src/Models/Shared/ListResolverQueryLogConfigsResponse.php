<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListResolverQueryLogConfigsResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListResolverQueryLogConfigsResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
    /**
     * $resolverQueryLogConfigs
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ResolverQueryLogConfig> $resolverQueryLogConfigs
     */
	#[\JMS\Serializer\Annotation\SerializedName('ResolverQueryLogConfigs')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ResolverQueryLogConfig>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $resolverQueryLogConfigs = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TotalCount')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $totalCount = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TotalFilteredCount')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $totalFilteredCount = null;
    
	public function __construct()
	{
		$this->nextToken = null;
		$this->resolverQueryLogConfigs = null;
		$this->totalCount = null;
		$this->totalFilteredCount = null;
	}
}
