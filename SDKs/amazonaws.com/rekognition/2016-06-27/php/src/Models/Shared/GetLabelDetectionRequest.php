<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class GetLabelDetectionRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('AggregateBy')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\LabelDetectionAggregateByEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LabelDetectionAggregateByEnum $aggregateBy = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('JobId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $jobId;
    
	#[\JMS\Serializer\Annotation\SerializedName('MaxResults')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $maxResults = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SortBy')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\LabelDetectionSortByEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LabelDetectionSortByEnum $sortBy = null;
    
	public function __construct()
	{
		$this->aggregateBy = null;
		$this->jobId = "";
		$this->maxResults = null;
		$this->nextToken = null;
		$this->sortBy = null;
	}
}
