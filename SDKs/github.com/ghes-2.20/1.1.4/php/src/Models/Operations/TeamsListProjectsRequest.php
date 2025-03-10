<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class TeamsListProjectsRequest
{
    /**
     * This API is under preview and subject to change.
     * 
     * @var string $accept
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=accept')]
    public string $accept;
    
    /**
     * Page number of the results to fetch.
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * Results per page (max 100)
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=team_id')]
    public int $teamId;
    
	public function __construct()
	{
		$this->accept = "";
		$this->page = null;
		$this->perPage = null;
		$this->teamId = 0;
	}
}
