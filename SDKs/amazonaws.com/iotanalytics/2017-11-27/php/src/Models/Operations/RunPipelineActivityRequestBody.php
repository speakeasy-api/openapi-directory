<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class RunPipelineActivityRequestBody
{
    /**
     * The sample message payloads on which the pipeline activity is run.
     * 
     * @var array<string> $payloads
     */
	#[\JMS\Serializer\Annotation\SerializedName('payloads')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $payloads;
    
    /**
     * An activity that performs a transformation on a message.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\RunPipelineActivityRequestBodyPipelineActivity $pipelineActivity
     */
	#[\JMS\Serializer\Annotation\SerializedName('pipelineActivity')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\RunPipelineActivityRequestBodyPipelineActivity')]
    public RunPipelineActivityRequestBodyPipelineActivity $pipelineActivity;
    
	public function __construct()
	{
		$this->payloads = [];
		$this->pipelineActivity = new \OpenAPI\OpenAPI\Models\Operations\RunPipelineActivityRequestBodyPipelineActivity();
	}
}
