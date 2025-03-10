<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PagerDutyConfiguration - Details about the PagerDuty configuration for a response plan.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PagerDutyConfiguration
{
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('pagerDutyIncidentConfiguration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PagerDutyIncidentConfiguration')]
    public PagerDutyIncidentConfiguration $pagerDutyIncidentConfiguration;
    
	#[\JMS\Serializer\Annotation\SerializedName('secretId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $secretId;
    
	public function __construct()
	{
		$this->name = "";
		$this->pagerDutyIncidentConfiguration = new \OpenAPI\OpenAPI\Models\Shared\PagerDutyIncidentConfiguration();
		$this->secretId = "";
	}
}
