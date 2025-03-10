<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Trigger - Information about a specific trigger.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Trigger
{
    /**
     * $actions
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Action> $actions
     */
	#[\JMS\Serializer\Annotation\SerializedName('Actions')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Action>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $actions = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EventBatchingCondition')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\EventBatchingCondition')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EventBatchingCondition $eventBatchingCondition = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Predicate')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Predicate')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Predicate $predicate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Schedule')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $schedule = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('State')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\TriggerStateEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TriggerStateEnum $state = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TriggerTypeEnum $type = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('WorkflowName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $workflowName = null;
    
	public function __construct()
	{
		$this->actions = null;
		$this->description = null;
		$this->eventBatchingCondition = null;
		$this->id = null;
		$this->name = null;
		$this->predicate = null;
		$this->schedule = null;
		$this->state = null;
		$this->type = null;
		$this->workflowName = null;
	}
}
