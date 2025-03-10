<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DBParameterGroupList - <p>Contains the details of an Amazon RDS DB parameter group.</p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action.</p>
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DBParameterGroupList
{
	
    public ?string $dbParameterGroupArn = null;
    
	
    public ?string $dbParameterGroupFamily = null;
    
	
    public ?string $dbParameterGroupName = null;
    
	
    public ?string $description = null;
    
	public function __construct()
	{
		$this->dbParameterGroupArn = null;
		$this->dbParameterGroupFamily = null;
		$this->dbParameterGroupName = null;
		$this->description = null;
	}
}
