<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ErrorsGroupCountsPerDayRequest
{
    /**
     * The name of the application
     * 
     * @var string $appName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=app_name')]
    public string $appName;
    
    /**
     * Last date time in data in ISO 8601 date time format
     * 
     * @var ?\DateTime $end
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=end,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $end = null;
    
    /**
     * The id of the error group
     * 
     * @var string $errorGroupId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=errorGroupId')]
    public string $errorGroupId;
    
    /**
     * The name of the owner
     * 
     * @var string $ownerName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=owner_name')]
    public string $ownerName;
    
    /**
     * Start date time in data in ISO 8601 date time format
     * 
     * @var \DateTime $start
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=start,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public \DateTime $start;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=version')]
    public ?string $version = null;
    
	public function __construct()
	{
		$this->appName = "";
		$this->end = null;
		$this->errorGroupId = "";
		$this->ownerName = "";
		$this->start = new \DateTime();
		$this->version = null;
	}
}
