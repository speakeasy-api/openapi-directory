<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class SetSystemRescueKeyPairRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\UserKeyPairContainer $userKeyPairContainer;
    
    /**
     * Authentication token
     * 
     * @var ?string $xSdsAuthToken
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Sds-Auth-Token')]
    public ?string $xSdsAuthToken = null;
    
	public function __construct()
	{
		$this->userKeyPairContainer = new \OpenAPI\OpenAPI\Models\Shared\UserKeyPairContainer();
		$this->xSdsAuthToken = null;
	}
}
