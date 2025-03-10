<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AppCookieStickinessPolicy - Information about a policy for application-controlled session stickiness.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AppCookieStickinessPolicy
{
	
    public ?string $cookieName = null;
    
	
    public ?string $policyName = null;
    
	public function __construct()
	{
		$this->cookieName = null;
		$this->policyName = null;
	}
}
