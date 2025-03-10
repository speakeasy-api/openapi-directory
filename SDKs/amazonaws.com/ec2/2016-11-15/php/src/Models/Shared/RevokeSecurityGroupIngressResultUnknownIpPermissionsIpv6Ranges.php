<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * RevokeSecurityGroupIngressResultUnknownIpPermissionsIpv6Ranges - [EC2-VPC only] Describes an IPv6 range.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class RevokeSecurityGroupIngressResultUnknownIpPermissionsIpv6Ranges
{
	
    public ?string $cidrIpv6 = null;
    
	
    public ?string $description = null;
    
	public function __construct()
	{
		$this->cidrIpv6 = null;
		$this->description = null;
	}
}
