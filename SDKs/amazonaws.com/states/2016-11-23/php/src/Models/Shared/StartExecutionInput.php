<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class StartExecutionInput
{
	#[\JMS\Serializer\Annotation\SerializedName('input')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $input = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('stateMachineArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $stateMachineArn;
    
	#[\JMS\Serializer\Annotation\SerializedName('traceHeader')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $traceHeader = null;
    
	public function __construct()
	{
		$this->input = null;
		$this->name = null;
		$this->stateMachineArn = "";
		$this->traceHeader = null;
	}
}
