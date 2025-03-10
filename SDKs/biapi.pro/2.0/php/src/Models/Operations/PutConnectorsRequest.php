<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PutConnectorsRequest
{
	#[SpeakeasyMetadata('request:mediaType=multipart/form-data')]
    public ?PutConnectorsRequestBody $requestBody = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=expand')]
    public ?string $expand = null;
    
	public function __construct()
	{
		$this->requestBody = null;
		$this->expand = null;
	}
}
