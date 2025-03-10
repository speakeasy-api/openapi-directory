<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class IssuesCreateMilestoneRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public IssuesCreateMilestoneRequestBody $requestBody;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=owner')]
    public string $owner;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repo')]
    public string $repo;
    
	public function __construct()
	{
		$this->requestBody = new \OpenAPI\OpenAPI\Models\Operations\IssuesCreateMilestoneRequestBody();
		$this->owner = "";
		$this->repo = "";
	}
}
