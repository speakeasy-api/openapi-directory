<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateVerifiedAccessEndpointResultVerifiedAccessEndpointStatus - The endpoint status.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateVerifiedAccessEndpointResultVerifiedAccessEndpointStatus
{
	
    public ?CreateVerifiedAccessEndpointResultVerifiedAccessEndpointStatusCodeEnum $code = null;
    
	
    public ?string $message = null;
    
	public function __construct()
	{
		$this->code = null;
		$this->message = null;
	}
}
