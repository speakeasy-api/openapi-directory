<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * TerminateJobFlowsInput -  Input to the <a>TerminateJobFlows</a> operation. 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class TerminateJobFlowsInput
{
    /**
     * $jobFlowIds
     * 
     * @var array<string> $jobFlowIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('JobFlowIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $jobFlowIds;
    
	public function __construct()
	{
		$this->jobFlowIds = [];
	}
}
