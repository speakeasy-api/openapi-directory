<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeScalingActivitiesResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeScalingActivitiesResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('NextToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextToken = null;
    
    /**
     * $scalingActivities
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ScalingActivity> $scalingActivities
     */
	#[\JMS\Serializer\Annotation\SerializedName('ScalingActivities')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ScalingActivity>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $scalingActivities = null;
    
	public function __construct()
	{
		$this->nextToken = null;
		$this->scalingActivities = null;
	}
}
