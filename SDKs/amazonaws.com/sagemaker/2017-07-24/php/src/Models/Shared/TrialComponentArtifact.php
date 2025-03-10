<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * TrialComponentArtifact - <p>Represents an input or output artifact of a trial component. You specify <code>TrialComponentArtifact</code> as part of the <code>InputArtifacts</code> and <code>OutputArtifacts</code> parameters in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrialComponent.html">CreateTrialComponent</a> request.</p> <p>Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p>
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class TrialComponentArtifact
{
	#[\JMS\Serializer\Annotation\SerializedName('MediaType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $mediaType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Value')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $value;
    
	public function __construct()
	{
		$this->mediaType = null;
		$this->value = "";
	}
}
