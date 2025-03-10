<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * JobResponse - A *job* is an object representing a process that handles asynchronous work.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class JobResponse
{
    /**
     * Globally unique identifier of the resource, as a string.
     * 
     * @var ?string $gid
     */
	#[\JMS\Serializer\Annotation\SerializedName('gid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $gid = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('new_project')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ProjectCompact')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ProjectCompact $newProject = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('new_project_template')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ProjectTemplateCompact')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ProjectTemplateCompact $newProjectTemplate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('new_task')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TaskCompact')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TaskCompact $newTask = null;
    
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     * 
     * @var ?string $resourceSubtype
     */
	#[\JMS\Serializer\Annotation\SerializedName('resource_subtype')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $resourceSubtype = null;
    
    /**
     * The base type of this resource.
     * 
     * @var ?string $resourceType
     */
	#[\JMS\Serializer\Annotation\SerializedName('resource_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $resourceType = null;
    
    /**
     * The current status of this job. The value is one of: `not_started`, `in_progress`, `succeeded`, or `failed`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\JobResponseStatusEnum $status
     */
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\JobResponseStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?JobResponseStatusEnum $status = null;
    
	public function __construct()
	{
		$this->gid = null;
		$this->newProject = null;
		$this->newProjectTemplate = null;
		$this->newTask = null;
		$this->resourceSubtype = null;
		$this->resourceType = null;
		$this->status = null;
	}
}
