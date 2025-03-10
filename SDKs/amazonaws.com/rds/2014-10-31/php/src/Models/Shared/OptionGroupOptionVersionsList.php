<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * OptionGroupOptionVersionsList - The version for an option. Option group option versions are returned by the <code>DescribeOptionGroupOptions</code> action.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class OptionGroupOptionVersionsList
{
	
    public ?bool $isDefault = null;
    
	
    public ?string $version = null;
    
	public function __construct()
	{
		$this->isDefault = null;
		$this->version = null;
	}
}
