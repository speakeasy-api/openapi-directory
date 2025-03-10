<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoalRelationshipRequestSupportedGoalInput - A generic Asana Resource, containing a globally unique identifier.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoalRelationshipRequestSupportedGoalInput
{
    /**
     * The name of the goal.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('owner')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoalRelationshipRequestSupportedGoalOwnerInput')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoalRelationshipRequestSupportedGoalOwnerInput $owner = null;
    
	public function __construct()
	{
		$this->name = null;
		$this->owner = null;
	}
}
