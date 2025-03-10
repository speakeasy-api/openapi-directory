<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class GetAutoScalingGroupRecommendationsRequest
{
    /**
     * $accountIds
     * 
     * @var ?array<string> $accountIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('accountIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $accountIds = null;
    
    /**
     * $autoScalingGroupArns
     * 
     * @var ?array<string> $autoScalingGroupArns
     */
	#[\JMS\Serializer\Annotation\SerializedName('autoScalingGroupArns')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $autoScalingGroupArns = null;
    
    /**
     * $filters
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Filter> $filters
     */
	#[\JMS\Serializer\Annotation\SerializedName('filters')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Filter>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $filters = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('maxResults')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $maxResults = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('nextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('recommendationPreferences')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\RecommendationPreferences')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?RecommendationPreferences $recommendationPreferences = null;
    
	public function __construct()
	{
		$this->accountIds = null;
		$this->autoScalingGroupArns = null;
		$this->filters = null;
		$this->maxResults = null;
		$this->nextToken = null;
		$this->recommendationPreferences = null;
	}
}
