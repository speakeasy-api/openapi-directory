<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetSchedulesScheduleAByEmployerRequest
{
    /**
     * 
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     * 
     * 
     * @var string $apiKey
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=api_key')]
    public string $apiKey;
    
    /**
     * 
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     * 
     * 
     * @var ?array<string> $committeeId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=committee_id')]
    public ?array $committeeId = null;
    
    /**
     * 
     * Filter records to only those that were applicable to a given
     * two-year period.The cycle begins with an odd year and is named
     * for its ending, even year.
     * 
     * 
     * @var ?array<int> $cycle
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=cycle')]
    public ?array $cycle = null;
    
    /**
     * Employer of contributor as reported on the committee's filing
     * 
     * @var ?array<string> $employer
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=employer')]
    public ?array $employer = null;
    
    /**
     * For paginating through results, starting at page 1
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * The number of results returned per page. Defaults to 20.
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
    /**
     * Provide a field to sort by. Use `-` for descending order.
     * 
     * 
     * 
     * @var ?string $sort
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort')]
    public ?string $sort = null;
    
    /**
     * Hide null values on sorted column(s).
     * 
     * @var ?bool $sortHideNull
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort_hide_null')]
    public ?bool $sortHideNull = null;
    
    /**
     * Toggle that filters out all rows having sort column that is non-null
     * 
     * @var ?bool $sortNullOnly
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort_null_only')]
    public ?bool $sortNullOnly = null;
    
    /**
     * Toggle that sorts null values last
     * 
     * @var ?bool $sortNullsLast
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort_nulls_last')]
    public ?bool $sortNullsLast = null;
    
	public function __construct()
	{
		$this->apiKey = "";
		$this->committeeId = null;
		$this->cycle = null;
		$this->employer = null;
		$this->page = null;
		$this->perPage = null;
		$this->sort = null;
		$this->sortHideNull = null;
		$this->sortNullOnly = null;
		$this->sortNullsLast = null;
	}
}
