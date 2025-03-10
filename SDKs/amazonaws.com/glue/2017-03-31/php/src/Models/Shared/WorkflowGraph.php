<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * WorkflowGraph - A workflow graph represents the complete workflow containing all the Glue components present in the workflow and all the directed connections between them.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class WorkflowGraph
{
    /**
     * $edges
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Edge> $edges
     */
	#[\JMS\Serializer\Annotation\SerializedName('Edges')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Edge>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $edges = null;
    
    /**
     * $nodes
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Node> $nodes
     */
	#[\JMS\Serializer\Annotation\SerializedName('Nodes')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Node>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $nodes = null;
    
	public function __construct()
	{
		$this->edges = null;
		$this->nodes = null;
	}
}
