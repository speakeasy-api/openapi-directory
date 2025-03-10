<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ActivityTask - Unit of work sent to an activity worker.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ActivityTask
{
	#[\JMS\Serializer\Annotation\SerializedName('activityId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $activityId;
    
	#[\JMS\Serializer\Annotation\SerializedName('activityType')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ActivityType')]
    public ActivityType $activityType;
    
	#[\JMS\Serializer\Annotation\SerializedName('input')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $input = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('startedEventId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $startedEventId;
    
	#[\JMS\Serializer\Annotation\SerializedName('taskToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $taskToken;
    
	#[\JMS\Serializer\Annotation\SerializedName('workflowExecution')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\WorkflowExecution')]
    public WorkflowExecution $workflowExecution;
    
	public function __construct()
	{
		$this->activityId = "";
		$this->activityType = new \OpenAPI\OpenAPI\Models\Shared\ActivityType();
		$this->input = null;
		$this->startedEventId = 0;
		$this->taskToken = "";
		$this->workflowExecution = new \OpenAPI\OpenAPI\Models\Shared\WorkflowExecution();
	}
}
