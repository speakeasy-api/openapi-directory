<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DeleteEvaluationInput
{
	#[\JMS\Serializer\Annotation\SerializedName('EvaluationId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $evaluationId;
    
	public function __construct()
	{
		$this->evaluationId = "";
	}
}
