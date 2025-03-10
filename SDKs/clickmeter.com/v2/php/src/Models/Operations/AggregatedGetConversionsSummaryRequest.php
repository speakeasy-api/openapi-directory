<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class AggregatedGetConversionsSummaryRequest
{
    /**
     * If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)
     * 
     * @var ?string $fromDay
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=fromDay')]
    public ?string $fromDay = null;
    
    /**
     * Limit results to this number
     * 
     * @var ?int $limit
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=limit')]
    public ?int $limit = null;
    
    /**
     * Offset where to start from
     * 
     * @var ?int $offset
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=offset')]
    public ?int $offset = null;
    
    /**
     * Field to sort by
     * 
     * @var ?string $sortBy
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sortBy')]
    public ?string $sortBy = null;
    
    /**
     * Direction of sort "asc" or "desc"
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\AggregatedGetConversionsSummarySortDirectionEnum $sortDirection
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sortDirection')]
    public ?AggregatedGetConversionsSummarySortDirectionEnum $sortDirection = null;
    
    /**
     * Status of conversion ("deleted"/"active")
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\AggregatedGetConversionsSummaryStatusEnum $status
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=status')]
    public ?AggregatedGetConversionsSummaryStatusEnum $status = null;
    
    /**
     * Filter fields by this pattern
     * 
     * @var ?string $textSearch
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=textSearch')]
    public ?string $textSearch = null;
    
    /**
     * Timeframe of the request. See list at $timeframeList
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\AggregatedGetConversionsSummaryTimeFrameEnum $timeFrame
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=timeFrame')]
    public AggregatedGetConversionsSummaryTimeFrameEnum $timeFrame;
    
    /**
     * If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)
     * 
     * @var ?string $toDay
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=toDay')]
    public ?string $toDay = null;
    
	public function __construct()
	{
		$this->fromDay = null;
		$this->limit = null;
		$this->offset = null;
		$this->sortBy = null;
		$this->sortDirection = null;
		$this->status = null;
		$this->textSearch = null;
		$this->timeFrame = \OpenAPI\OpenAPI\Models\Operations\AggregatedGetConversionsSummaryTimeFrameEnum::TODAY;
		$this->toDay = null;
	}
}
