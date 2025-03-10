<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class Address
{
    /**
     * Name of city.
     * 
     * @var ?string $city
     */
	#[\JMS\Serializer\Annotation\SerializedName('city')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $city = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('contact_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contactName = null;
    
    /**
     * country code according to ISO 3166-1 alpha-2.
     * 
     * @var ?string $country
     */
	#[\JMS\Serializer\Annotation\SerializedName('country')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $country = null;
    
    /**
     * Address field that holds a sublocality, such as a county
     * 
     * @var ?string $county
     */
	#[\JMS\Serializer\Annotation\SerializedName('county')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $county = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('email')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $email = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('fax')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $fax = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('latitude')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $latitude = null;
    
    /**
     * Line 1 of the address e.g. number, street, suite, apt #, etc.
     * 
     * @var ?string $line1
     */
	#[\JMS\Serializer\Annotation\SerializedName('line1')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $line1 = null;
    
    /**
     * Line 2 of the address
     * 
     * @var ?string $line2
     */
	#[\JMS\Serializer\Annotation\SerializedName('line2')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $line2 = null;
    
    /**
     * Line 3 of the address
     * 
     * @var ?string $line3
     */
	#[\JMS\Serializer\Annotation\SerializedName('line3')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $line3 = null;
    
    /**
     * Line 4 of the address
     * 
     * @var ?string $line4
     */
	#[\JMS\Serializer\Annotation\SerializedName('line4')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $line4 = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('longitude')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $longitude = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('phone_number')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $phoneNumber = null;
    
    /**
     * Zip code or equivalent.
     * 
     * @var ?string $postalCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('postal_code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $postalCode = null;
    
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     * 
     * @var ?string $rowVersion
     */
	#[\JMS\Serializer\Annotation\SerializedName('row_version')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $rowVersion = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('salutation')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $salutation = null;
    
    /**
     * Name of state
     * 
     * @var ?string $state
     */
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $state = null;
    
    /**
     * Street number
     * 
     * @var ?string $streetNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('street_number')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $streetNumber = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('string')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $string = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AddressTypeEnum $type = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('website')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $website = null;
    
	public function __construct()
	{
		$this->city = null;
		$this->contactName = null;
		$this->country = null;
		$this->county = null;
		$this->email = null;
		$this->fax = null;
		$this->id = null;
		$this->latitude = null;
		$this->line1 = null;
		$this->line2 = null;
		$this->line3 = null;
		$this->line4 = null;
		$this->longitude = null;
		$this->name = null;
		$this->phoneNumber = null;
		$this->postalCode = null;
		$this->rowVersion = null;
		$this->salutation = null;
		$this->state = null;
		$this->streetNumber = null;
		$this->string = null;
		$this->type = null;
		$this->website = null;
	}
}
