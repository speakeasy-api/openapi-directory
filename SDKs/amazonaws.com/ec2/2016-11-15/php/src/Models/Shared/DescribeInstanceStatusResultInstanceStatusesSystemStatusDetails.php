<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DescribeInstanceStatusResultInstanceStatusesSystemStatusDetails - Describes the instance status.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DescribeInstanceStatusResultInstanceStatusesSystemStatusDetails
{
	
    public ?\DateTime $impairedSince = null;
    
	
    public ?DescribeInstanceStatusResultInstanceStatusesSystemStatusDetailsNameEnum $name = null;
    
	
    public ?DescribeInstanceStatusResultInstanceStatusesSystemStatusDetailsStatusEnum $status = null;
    
	public function __construct()
	{
		$this->impairedSince = null;
		$this->name = null;
		$this->status = null;
	}
}
