<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeWorkflowResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeWorkflowResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('Workflow')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DescribedWorkflow')]
    public DescribedWorkflow $workflow;
    
	public function __construct()
	{
		$this->workflow = new \OpenAPI\OpenAPI\Models\Shared\DescribedWorkflow();
	}
}
