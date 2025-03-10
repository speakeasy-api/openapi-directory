<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class FunctionsCreateExecutionRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?FunctionsCreateExecutionRequestBody $requestBody = null;
    
    /**
     * Function unique ID.
     * 
     * @var string $functionId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=functionId')]
    public string $functionId;
    
	public function __construct()
	{
		$this->requestBody = null;
		$this->functionId = "";
	}
}
