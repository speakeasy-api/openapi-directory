<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetPrivateKeysRequest
{
    /**
     * SHA2 hash of device firmware
     * 
     * @var string $firmwareHash
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=firmware_hash')]
    public string $firmwareHash;
    
	public function __construct()
	{
		$this->firmwareHash = "";
	}
}
