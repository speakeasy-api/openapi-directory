<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DBParameterGroupNameMessage - Contains the result of a successful invocation of the <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> action.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DBParameterGroupNameMessage
{
	
    public ?string $dbParameterGroupName = null;
    
	public function __construct()
	{
		$this->dbParameterGroupName = null;
	}
}
