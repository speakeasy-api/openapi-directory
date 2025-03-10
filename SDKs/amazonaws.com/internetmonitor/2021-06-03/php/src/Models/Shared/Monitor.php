<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Monitor - The description of and information about a monitor in Amazon CloudWatch Internet Monitor. 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Monitor
{
	#[\JMS\Serializer\Annotation\SerializedName('MonitorArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $monitorArn;
    
	#[\JMS\Serializer\Annotation\SerializedName('MonitorName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $monitorName;
    
	#[\JMS\Serializer\Annotation\SerializedName('ProcessingStatus')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\MonitorProcessingStatusCodeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?MonitorProcessingStatusCodeEnum $processingStatus = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\MonitorConfigStateEnum>')]
    public MonitorConfigStateEnum $status;
    
	public function __construct()
	{
		$this->monitorArn = "";
		$this->monitorName = "";
		$this->processingStatus = null;
		$this->status = \OpenAPI\OpenAPI\Models\Shared\MonitorConfigStateEnum::PENDING;
	}
}
