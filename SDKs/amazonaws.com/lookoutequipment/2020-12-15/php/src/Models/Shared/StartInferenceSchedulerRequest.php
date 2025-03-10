<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class StartInferenceSchedulerRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('InferenceSchedulerName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $inferenceSchedulerName;
    
	public function __construct()
	{
		$this->inferenceSchedulerName = "";
	}
}
