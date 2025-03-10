<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CompanySearchNumberSecurity
{
	#[SpeakeasyMetadata('security:scheme=true,type=apiKey,subtype=header,name=user_key')]
    public string $userKey;
    
	public function __construct()
	{
		$this->userKey = "";
	}
}
