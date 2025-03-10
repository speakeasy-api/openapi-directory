<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ScheduledTriggerProperties - Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ScheduledTriggerProperties
{
	#[\JMS\Serializer\Annotation\SerializedName('DataPullMode')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DataPullModeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DataPullModeEnum $dataPullMode = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('FirstExecutionFrom')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $firstExecutionFrom = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ScheduleEndTime')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $scheduleEndTime = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ScheduleExpression')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $scheduleExpression;
    
	#[\JMS\Serializer\Annotation\SerializedName('ScheduleOffset')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $scheduleOffset = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ScheduleStartTime')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $scheduleStartTime = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Timezone')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $timezone = null;
    
	public function __construct()
	{
		$this->dataPullMode = null;
		$this->firstExecutionFrom = null;
		$this->scheduleEndTime = null;
		$this->scheduleExpression = "";
		$this->scheduleOffset = null;
		$this->scheduleStartTime = null;
		$this->timezone = null;
	}
}
