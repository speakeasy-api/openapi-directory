<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CountPendingActivityTasksInput
{
	#[\JMS\Serializer\Annotation\SerializedName('domain')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $domain;
    
	#[\JMS\Serializer\Annotation\SerializedName('taskList')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TaskList')]
    public TaskList $taskList;
    
	public function __construct()
	{
		$this->domain = "";
		$this->taskList = new \OpenAPI\OpenAPI\Models\Shared\TaskList();
	}
}
