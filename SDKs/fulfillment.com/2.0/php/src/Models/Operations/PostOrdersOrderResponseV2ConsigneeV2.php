<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PostOrdersOrderResponseV2ConsigneeV2
{
	#[\JMS\Serializer\Annotation\SerializedName('address1')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $address1;
    
	#[\JMS\Serializer\Annotation\SerializedName('address2')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $address2 = null;
    
    /**
     * City
     * 
     * @var string $addressLocality
     */
	#[\JMS\Serializer\Annotation\SerializedName('addressLocality')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $addressLocality;
    
    /**
     * Province / State
     * 
     * @var string $addressRegion
     */
	#[\JMS\Serializer\Annotation\SerializedName('addressRegion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $addressRegion;
    
	#[\JMS\Serializer\Annotation\SerializedName('companyName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $companyName = null;
    
    /**
     * Ideally provide the two character ISO code
     * 
     * @var string $country
     */
	#[\JMS\Serializer\Annotation\SerializedName('country')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $country;
    
	#[\JMS\Serializer\Annotation\SerializedName('email')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $email = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('firstName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $firstName;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $id;
    
	#[\JMS\Serializer\Annotation\SerializedName('iso')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2 $iso = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('lastName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $lastName;
    
	#[\JMS\Serializer\Annotation\SerializedName('phone')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $phone = null;
    
    /**
     * Postal Code / Zip
     * 
     * @var string $postalCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('postalCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $postalCode;
    
	#[\JMS\Serializer\Annotation\SerializedName('updatedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $updatedAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('updatedBy')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy $updatedBy = null;
    
	public function __construct()
	{
		$this->address1 = "";
		$this->address2 = null;
		$this->addressLocality = "";
		$this->addressRegion = "";
		$this->companyName = null;
		$this->country = "";
		$this->email = null;
		$this->firstName = "";
		$this->id = 0;
		$this->iso = null;
		$this->lastName = "";
		$this->phone = null;
		$this->postalCode = "";
		$this->updatedAt = null;
		$this->updatedBy = null;
	}
}
