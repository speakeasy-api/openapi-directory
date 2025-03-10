<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class IssuesGetRequest
{
    /**
     * issue_number parameter
     * 
     * @var int $issueNumber
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=issue_number')]
    public int $issueNumber;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=owner')]
    public string $owner;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repo')]
    public string $repo;
    
	public function __construct()
	{
		$this->issueNumber = 0;
		$this->owner = "";
		$this->repo = "";
	}
}
