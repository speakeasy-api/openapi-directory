<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * CreateSiteRequestBodyOperatingAddress -  Information about an address. 
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class CreateSiteRequestBodyOperatingAddress
{
	#[\JMS\Serializer\Annotation\SerializedName('AddressLine1')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $addressLine1 = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('AddressLine2')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $addressLine2 = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('AddressLine3')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $addressLine3 = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('City')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $city = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ContactName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contactName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ContactPhoneNumber')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contactPhoneNumber = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CountryCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $countryCode = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DistrictOrCounty')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $districtOrCounty = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Municipality')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $municipality = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PostalCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $postalCode = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('StateOrRegion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $stateOrRegion = null;
    
	public function __construct()
	{
		$this->addressLine1 = null;
		$this->addressLine2 = null;
		$this->addressLine3 = null;
		$this->city = null;
		$this->contactName = null;
		$this->contactPhoneNumber = null;
		$this->countryCode = null;
		$this->districtOrCounty = null;
		$this->municipality = null;
		$this->postalCode = null;
		$this->stateOrRegion = null;
	}
}
