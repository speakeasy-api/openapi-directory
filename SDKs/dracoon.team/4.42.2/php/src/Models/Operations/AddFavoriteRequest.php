<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class AddFavoriteRequest
{
    /**
     * Authentication token
     * 
     * @var ?string $xSdsAuthToken
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Sds-Auth-Token')]
    public ?string $xSdsAuthToken = null;
    
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\AddFavoriteXSdsDateFormatEnum $xSdsDateFormat
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Sds-Date-Format')]
    public ?AddFavoriteXSdsDateFormatEnum $xSdsDateFormat = null;
    
    /**
     * Node ID
     * 
     * @var int $nodeId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=node_id')]
    public int $nodeId;
    
	public function __construct()
	{
		$this->xSdsAuthToken = null;
		$this->xSdsDateFormat = null;
		$this->nodeId = 0;
	}
}
