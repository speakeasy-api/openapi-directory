<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class SectionTaskInsertRequest
{
    /**
     * An existing task within this section after which the added task should be inserted. Cannot be provided together with insert_before.
     * 
     * @var ?string $insertAfter
     */
	#[\JMS\Serializer\Annotation\SerializedName('insert_after')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $insertAfter = null;
    
    /**
     * An existing task within this section before which the added task should be inserted. Cannot be provided together with insert_after.
     * 
     * @var ?string $insertBefore
     */
	#[\JMS\Serializer\Annotation\SerializedName('insert_before')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $insertBefore = null;
    
    /**
     * The task to add to this section.
     * 
     * @var string $task
     */
	#[\JMS\Serializer\Annotation\SerializedName('task')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $task;
    
	public function __construct()
	{
		$this->insertAfter = null;
		$this->insertBefore = null;
		$this->task = "";
	}
}
