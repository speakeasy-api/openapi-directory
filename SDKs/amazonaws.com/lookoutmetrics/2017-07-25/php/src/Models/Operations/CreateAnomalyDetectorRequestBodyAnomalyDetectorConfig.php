<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig - Contains information about a detector's configuration.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig
{
	#[\JMS\Serializer\Annotation\SerializedName('AnomalyDetectorFrequency')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\FrequencyEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\FrequencyEnum $anomalyDetectorFrequency = null;
    
	public function __construct()
	{
		$this->anomalyDetectorFrequency = null;
	}
}
