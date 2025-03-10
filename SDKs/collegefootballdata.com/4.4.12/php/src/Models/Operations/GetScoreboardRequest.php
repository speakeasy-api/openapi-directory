<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetScoreboardRequest
{
    /**
     * Classification filter (fbs, fcs, ii, or iii). Defaults to fbs.
     * 
     * @var ?string $classification
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=classification')]
    public ?string $classification = null;
    
    /**
     * Conference abbreviation filter.
     * 
     * @var ?string $conference
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=conference')]
    public ?string $conference = null;
    
	public function __construct()
	{
		$this->classification = null;
		$this->conference = null;
	}
}
