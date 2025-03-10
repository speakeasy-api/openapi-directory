<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * MetricDatapoint - Describes the metric data point.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class MetricDatapoint
{
	#[\JMS\Serializer\Annotation\SerializedName('average')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $average = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('maximum')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $maximum = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('minimum')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $minimum = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('sampleCount')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $sampleCount = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('sum')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $sum = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('timestamp')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $timestamp = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('unit')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\MetricUnitEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?MetricUnitEnum $unit = null;
    
	public function __construct()
	{
		$this->average = null;
		$this->maximum = null;
		$this->minimum = null;
		$this->sampleCount = null;
		$this->sum = null;
		$this->timestamp = null;
		$this->unit = null;
	}
}
