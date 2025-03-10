<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class AppsCreateForOrgRequest
{
    /**
     * The data for the app
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\AppsCreateForOrgRequestBody $requestBody
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public AppsCreateForOrgRequestBody $requestBody;
    
    /**
     * The organization's name
     * 
     * @var string $orgName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=org_name')]
    public string $orgName;
    
	public function __construct()
	{
		$this->requestBody = new \OpenAPI\OpenAPI\Models\Operations\AppsCreateForOrgRequestBody();
		$this->orgName = "";
	}
}
