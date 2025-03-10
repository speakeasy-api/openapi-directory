<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * UpdateExperimentTemplateStopConditionInput - Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class UpdateExperimentTemplateStopConditionInput
{
	#[\JMS\Serializer\Annotation\SerializedName('source')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $source;
    
	#[\JMS\Serializer\Annotation\SerializedName('value')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $value = null;
    
	public function __construct()
	{
		$this->source = "";
		$this->value = null;
	}
}
