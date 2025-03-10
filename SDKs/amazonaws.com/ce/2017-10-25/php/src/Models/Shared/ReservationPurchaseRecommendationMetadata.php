<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ReservationPurchaseRecommendationMetadata - Information about this specific recommendation, such as the timestamp for when Amazon Web Services made a specific recommendation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ReservationPurchaseRecommendationMetadata
{
	#[\JMS\Serializer\Annotation\SerializedName('GenerationTimestamp')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $generationTimestamp = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('RecommendationId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $recommendationId = null;
    
	public function __construct()
	{
		$this->generationTimestamp = null;
		$this->recommendationId = null;
	}
}
