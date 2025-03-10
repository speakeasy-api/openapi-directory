<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CreateQueryUsingPOSTRequest
{
    /**
     * query
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\ManageQuery $manageQuery
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\ManageQuery $manageQuery;
    
    /**
     * apiKey
     * 
     * @var string $apiKey
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=apiKey')]
    public string $apiKey;
    
	public function __construct()
	{
		$this->manageQuery = new \OpenAPI\OpenAPI\Models\Shared\ManageQuery();
		$this->apiKey = "";
	}
}
