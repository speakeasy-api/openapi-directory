<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeVpcEndpointConnectionsResultVpcEndpointConnectionsDnsEntries - Describes a DNS entry.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeVpcEndpointConnectionsResultVpcEndpointConnectionsDnsEntries
{
	
    public ?string $dnsName = null;
    
	
    public ?string $hostedZoneId = null;
    
	public function __construct()
	{
		$this->dnsName = null;
		$this->hostedZoneId = null;
	}
}
