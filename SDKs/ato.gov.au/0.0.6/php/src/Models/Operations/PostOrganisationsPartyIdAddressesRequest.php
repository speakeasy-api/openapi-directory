<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PostOrganisationsPartyIdAddressesRequest
{
    /**
     * Address resource
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\AddressInput $addressInput
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\AddressInput $addressInput;
    
    /**
     * The API key.
     * 
     * @var string $apiKey
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=apiKey')]
    public string $apiKey;
    
    /**
     * The party identifier.
     * 
     * @var string $partyId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=partyId')]
    public string $partyId;
    
	public function __construct()
	{
		$this->addressInput = new \OpenAPI\OpenAPI\Models\Shared\AddressInput();
		$this->apiKey = "";
		$this->partyId = "";
	}
}
