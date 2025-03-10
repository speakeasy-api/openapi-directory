<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DashboardOptions - An object containing additional settings for your VDM configuration as applicable to the Dashboard.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DashboardOptions
{
	#[\JMS\Serializer\Annotation\SerializedName('EngagementMetrics')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\FeatureStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?FeatureStatusEnum $engagementMetrics = null;
    
	public function __construct()
	{
		$this->engagementMetrics = null;
	}
}
