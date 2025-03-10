<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class DatabaseCreateDocumentRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?DatabaseCreateDocumentRequestBody $requestBody = null;
    
    /**
     * Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).
     * 
     * @var string $collectionId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=collectionId')]
    public string $collectionId;
    
	public function __construct()
	{
		$this->requestBody = null;
		$this->collectionId = "";
	}
}
