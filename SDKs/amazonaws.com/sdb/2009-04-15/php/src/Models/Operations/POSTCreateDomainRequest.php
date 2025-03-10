<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class POSTCreateDomainRequest
{
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=AWSAccessKeyId')]
    public string $awsAccessKeyId;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Action')]
    public POSTCreateDomainActionEnum $action;
    
	#[SpeakeasyMetadata('request:mediaType=text/xml')]
    public ?string $requestBody = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Signature')]
    public string $signature;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=SignatureMethod')]
    public string $signatureMethod;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=SignatureVersion')]
    public string $signatureVersion;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Timestamp')]
    public string $timestamp;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Version')]
    public POSTCreateDomainVersionEnum $version;
    
	public function __construct()
	{
		$this->awsAccessKeyId = "";
		$this->action = \OpenAPI\OpenAPI\Models\Operations\POSTCreateDomainActionEnum::CREATE_DOMAIN;
		$this->requestBody = null;
		$this->signature = "";
		$this->signatureMethod = "";
		$this->signatureVersion = "";
		$this->timestamp = "";
		$this->version = \OpenAPI\OpenAPI\Models\Operations\POSTCreateDomainVersionEnum::TWO_THOUSAND_AND_NINE0415;
	}
}
