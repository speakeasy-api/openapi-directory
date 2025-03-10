<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeAgentVersionsResult - Contains the response to a <code>DescribeAgentVersions</code> request.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeAgentVersionsResult
{
    /**
     * $agentVersions
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AgentVersion> $agentVersions
     */
	#[\JMS\Serializer\Annotation\SerializedName('AgentVersions')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AgentVersion>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $agentVersions = null;
    
	public function __construct()
	{
		$this->agentVersions = null;
	}
}
