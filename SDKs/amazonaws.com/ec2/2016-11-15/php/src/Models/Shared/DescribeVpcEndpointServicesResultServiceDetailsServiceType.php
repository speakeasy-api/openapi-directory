<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeVpcEndpointServicesResultServiceDetailsServiceType - Describes the type of service for a VPC endpoint.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeVpcEndpointServicesResultServiceDetailsServiceType
{
	
    public ?DescribeVpcEndpointServicesResultServiceDetailsServiceTypeServiceTypeEnum $serviceType = null;
    
	public function __construct()
	{
		$this->serviceType = null;
	}
}
