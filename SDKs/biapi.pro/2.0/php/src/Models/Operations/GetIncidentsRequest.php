<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetIncidentsRequest
{
    /**
     * filter last_update date <= start_date. YYYY-MM-DD format.
     * 
     * @var ?string $endDate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=end_date')]
    public ?string $endDate = null;
    
    /**
     * give only the current state of the particular incidents.
     * 
     * @var ?int $id
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=id')]
    public ?int $id = null;
    
    /**
     * pagination option. Default to 1.
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * pagination option. Default to 30.
     * 
     * @var ?int $size
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=size')]
    public ?int $size = null;
    
    /**
     * filter last_update date >= start_date. YYYY-MM-DD format.
     * 
     * @var ?string $startDate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=start_date')]
    public ?string $startDate = null;
    
    /**
     * comma separated list, filter incidents in the given states.
     * 
     * @var ?string $state
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=state')]
    public ?string $state = null;
    
    /**
     * comma_separated list, filter the incidents of the given weboob_id
     * 
     * @var ?string $weboobId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=weboob_id')]
    public ?string $weboobId = null;
    
	public function __construct()
	{
		$this->endDate = null;
		$this->id = null;
		$this->page = null;
		$this->size = null;
		$this->startDate = null;
		$this->state = null;
		$this->weboobId = null;
	}
}
