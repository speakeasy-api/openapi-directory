<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BestObjectiveNotImproving - A structure that keeps track of which training jobs launched by your hyperparameter tuning job are not improving model performance as evaluated against an objective function.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BestObjectiveNotImproving
{
	#[\JMS\Serializer\Annotation\SerializedName('MaxNumberOfTrainingJobsNotImproving')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $maxNumberOfTrainingJobsNotImproving = null;
    
	public function __construct()
	{
		$this->maxNumberOfTrainingJobsNotImproving = null;
	}
}
