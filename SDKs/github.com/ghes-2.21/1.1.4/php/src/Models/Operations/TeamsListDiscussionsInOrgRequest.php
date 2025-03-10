<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class TeamsListDiscussionsInOrgRequest
{
    /**
     * One of `asc` (ascending) or `desc` (descending).
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DirectionEnum $direction
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=direction')]
    public ?\OpenAPI\OpenAPI\Models\Shared\DirectionEnum $direction = null;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=org')]
    public string $org;
    
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
    
    /**
     * Pinned discussions only filter
     * 
     * @var ?string $pinned
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=pinned')]
    public ?string $pinned = null;
    
    /**
     * team_slug parameter
     * 
     * @var string $teamSlug
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=team_slug')]
    public string $teamSlug;
    
	public function __construct()
	{
		$this->direction = null;
		$this->org = "";
		$this->page = null;
		$this->perPage = null;
		$this->pinned = null;
		$this->teamSlug = "";
	}
}
