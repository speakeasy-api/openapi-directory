<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Job - Represents a device.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Job
{
	#[\JMS\Serializer\Annotation\SerializedName('arn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $arn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('counters')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Counters')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Counters $counters = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('created')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $created = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('device')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Device')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Device $device = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('deviceMinutes')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DeviceMinutes')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DeviceMinutes $deviceMinutes = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('instanceArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $instanceArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $message = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('result')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ExecutionResultEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ExecutionResultEnum $result = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('started')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $started = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ExecutionStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ExecutionStatusEnum $status = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('stopped')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $stopped = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\TestTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TestTypeEnum $type = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('videoCapture')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $videoCapture = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('videoEndpoint')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $videoEndpoint = null;
    
	public function __construct()
	{
		$this->arn = null;
		$this->counters = null;
		$this->created = null;
		$this->device = null;
		$this->deviceMinutes = null;
		$this->instanceArn = null;
		$this->message = null;
		$this->name = null;
		$this->result = null;
		$this->started = null;
		$this->status = null;
		$this->stopped = null;
		$this->type = null;
		$this->videoCapture = null;
		$this->videoEndpoint = null;
	}
}
