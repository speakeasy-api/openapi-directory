<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetIpamDiscoveredResourceCidrsResult - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetIpamDiscoveredResourceCidrsResult
{
    /**
     * $ipamDiscoveredResourceCidrs
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GetIpamDiscoveredResourceCidrsResultIpamDiscoveredResourceCidrs> $ipamDiscoveredResourceCidrs
     */
	
    public ?array $ipamDiscoveredResourceCidrs = null;
    
	
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->ipamDiscoveredResourceCidrs = null;
		$this->nextToken = null;
	}
}
