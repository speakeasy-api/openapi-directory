<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptions - The load balancer details if creating the Amazon Web Services Verified Access endpoint as <code>load-balancer</code>type.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptions
{
	
    public ?string $loadBalancerArn = null;
    
	
    public ?int $port = null;
    
	
    public ?DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptionsProtocolEnum $protocol = null;
    
    /**
     * $subnetIds
     * 
     * @var ?array<string> $subnetIds
     */
	
    public ?array $subnetIds = null;
    
	public function __construct()
	{
		$this->loadBalancerArn = null;
		$this->port = null;
		$this->protocol = null;
		$this->subnetIds = null;
	}
}
