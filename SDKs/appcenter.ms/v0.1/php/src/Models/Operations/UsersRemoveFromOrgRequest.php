<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UsersRemoveFromOrgRequest
{
    /**
     * The organization's name
     * 
     * @var string $orgName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=org_name')]
    public string $orgName;
    
    /**
     * The slug name of the user
     * 
     * @var string $userName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=user_name')]
    public string $userName;
    
	public function __construct()
	{
		$this->orgName = "";
		$this->userName = "";
	}
}
