<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PatchAs2StationsIdRequestBody
{
    /**
     * AS2 Name
     * 
     * @var ?string $name
     */
	#[SpeakeasyMetadata('multipartForm:name=name')]
    public ?string $name = null;
    
	#[SpeakeasyMetadata('multipartForm:name=private_key')]
    public ?string $privateKey = null;
    
	#[SpeakeasyMetadata('multipartForm:name=private_key_password')]
    public ?string $privateKeyPassword = null;
    
	#[SpeakeasyMetadata('multipartForm:name=public_certificate')]
    public ?string $publicCertificate = null;
    
	public function __construct()
	{
		$this->name = null;
		$this->privateKey = null;
		$this->privateKeyPassword = null;
		$this->publicCertificate = null;
	}
}
