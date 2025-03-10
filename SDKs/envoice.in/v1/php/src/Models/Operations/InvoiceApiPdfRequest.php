<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class InvoiceApiPdfRequest
{
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=id')]
    public int $id;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=signedVersion')]
    public ?bool $signedVersion = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=x-auth-key')]
    public string $xAuthKey;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=x-auth-secret')]
    public string $xAuthSecret;
    
	public function __construct()
	{
		$this->id = 0;
		$this->signedVersion = null;
		$this->xAuthKey = "";
		$this->xAuthSecret = "";
	}
}
