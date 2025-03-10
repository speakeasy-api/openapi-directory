<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * InferenceExecutionConfig - Specifies details about how containers in a multi-container endpoint are run.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class InferenceExecutionConfig
{
	#[\JMS\Serializer\Annotation\SerializedName('Mode')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\InferenceExecutionModeEnum>')]
    public InferenceExecutionModeEnum $mode;
    
	public function __construct()
	{
		$this->mode = \OpenAPI\OpenAPI\Models\Shared\InferenceExecutionModeEnum::SERIAL;
	}
}
