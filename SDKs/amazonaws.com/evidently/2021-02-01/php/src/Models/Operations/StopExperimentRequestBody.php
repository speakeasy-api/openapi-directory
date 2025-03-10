<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class StopExperimentRequestBody
{
    /**
     * Specify whether the experiment is to be considered <code>COMPLETED</code> or <code>CANCELLED</code> after it stops.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\StopExperimentRequestBodyDesiredStateEnum $desiredState
     */
	#[\JMS\Serializer\Annotation\SerializedName('desiredState')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\StopExperimentRequestBodyDesiredStateEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?StopExperimentRequestBodyDesiredStateEnum $desiredState = null;
    
    /**
     * A string that describes why you are stopping the experiment.
     * 
     * @var ?string $reason
     */
	#[\JMS\Serializer\Annotation\SerializedName('reason')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $reason = null;
    
	public function __construct()
	{
		$this->desiredState = null;
		$this->reason = null;
	}
}
