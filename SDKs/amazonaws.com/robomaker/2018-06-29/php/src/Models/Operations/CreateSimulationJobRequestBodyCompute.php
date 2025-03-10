<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * CreateSimulationJobRequestBodyCompute - Compute information for the simulation job.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class CreateSimulationJobRequestBodyCompute
{
	#[\JMS\Serializer\Annotation\SerializedName('computeType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ComputeTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\ComputeTypeEnum $computeType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('gpuUnitLimit')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $gpuUnitLimit = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('simulationUnitLimit')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $simulationUnitLimit = null;
    
	public function __construct()
	{
		$this->computeType = null;
		$this->gpuUnitLimit = null;
		$this->simulationUnitLimit = null;
	}
}
