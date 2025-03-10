<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetTeamPPARequest
{
    /**
     * Conference filter
     * 
     * @var ?string $conference
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=conference')]
    public ?string $conference = null;
    
    /**
     * Filter to remove garbage time plays from calculations
     * 
     * @var ?bool $excludeGarbageTime
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=excludeGarbageTime')]
    public ?bool $excludeGarbageTime = null;
    
    /**
     * Team filter (required if year not specified)
     * 
     * @var ?string $team
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=team')]
    public ?string $team = null;
    
    /**
     * Year filter (required if team not specified)
     * 
     * @var ?int $year
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=year')]
    public ?int $year = null;
    
	public function __construct()
	{
		$this->conference = null;
		$this->excludeGarbageTime = null;
		$this->team = null;
		$this->year = null;
	}
}
