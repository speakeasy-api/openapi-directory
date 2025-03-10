<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class Destiny2GetLinkedProfilesRequest
{
    /**
     * (optional) if set to 'true', all memberships regardless of whether they're obscured by overrides will be returned. Normal privacy restrictions on account linking will still apply no matter what.
     * 
     * @var ?bool $getAllMemberships
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=getAllMemberships')]
    public ?bool $getAllMemberships = null;
    
    /**
     * The ID of the membership whose linked Destiny accounts you want returned. Make sure your membership ID matches its Membership Type: don't pass us a PSN membership ID and the XBox membership type, it's not going to work!
     * 
     * @var int $membershipId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=membershipId')]
    public int $membershipId;
    
    /**
     * The type for the membership whose linked Destiny accounts you want returned.
     * 
     * @var int $membershipType
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=membershipType')]
    public int $membershipType;
    
	public function __construct()
	{
		$this->getAllMemberships = null;
		$this->membershipId = 0;
		$this->membershipType = 0;
	}
}
