<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DescribeMaintenanceWindowExecutionsRequest
{
    /**
     * $filters
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowFilter> $filters
     */
	#[\JMS\Serializer\Annotation\SerializedName('Filters')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowFilter>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $filters = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('MaxResults')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $maxResults = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('WindowId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $windowId;
    
	public function __construct()
	{
		$this->filters = null;
		$this->maxResults = null;
		$this->nextToken = null;
		$this->windowId = "";
	}
}
