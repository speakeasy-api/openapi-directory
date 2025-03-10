<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateDomainRequest - Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateDomainRequest
{
	
    public string $domainName;
    
	public function __construct()
	{
		$this->domainName = "";
	}
}
