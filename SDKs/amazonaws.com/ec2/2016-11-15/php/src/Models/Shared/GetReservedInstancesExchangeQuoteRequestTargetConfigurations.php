<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetReservedInstancesExchangeQuoteRequestTargetConfigurations - Details about the target configuration.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetReservedInstancesExchangeQuoteRequestTargetConfigurations
{
	
    public ?int $instanceCount = null;
    
	
    public string $offeringId;
    
	public function __construct()
	{
		$this->instanceCount = null;
		$this->offeringId = "";
	}
}
