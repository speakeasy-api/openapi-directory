<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CompanyDeepsearchLEI200ApplicationJSONCompany
{
    /**
     * $address
     * 
     * @var ?array<string> $address
     */
	#[\JMS\Serializer\Annotation\SerializedName('address')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $address = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('country')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $country;
    
	#[\JMS\Serializer\Annotation\SerializedName('dateOfIncorporation')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $dateOfIncorporation = null;
    
    /**
     * $extraData
     * 
     * @var ?array<string, mixed> $extraData
     */
	#[\JMS\Serializer\Annotation\SerializedName('extraData')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $extraData = null;
    
    /**
     * $formattedAddress
     * 
     * @var ?array<string> $formattedAddress
     */
	#[\JMS\Serializer\Annotation\SerializedName('formattedAddress')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $formattedAddress = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $id;
    
	#[\JMS\Serializer\Annotation\SerializedName('legalForm')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $legalForm = null;
    
    /**
     * $managingDirectors
     * 
     * @var ?array<string> $managingDirectors
     */
	#[\JMS\Serializer\Annotation\SerializedName('managingDirectors')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $managingDirectors = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('registrationNumber')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $registrationNumber;
    
	#[\JMS\Serializer\Annotation\SerializedName('requestTime')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $requestTime = null;
    
    /**
     * $secretaries
     * 
     * @var ?array<string> $secretaries
     */
	#[\JMS\Serializer\Annotation\SerializedName('secretaries')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $secretaries = null;
    
    /**
     * $sicNaceCodes
     * 
     * @var ?array<string> $sicNaceCodes
     */
	#[\JMS\Serializer\Annotation\SerializedName('sicNaceCodes')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $sicNaceCodes = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $status = null;
    
	public function __construct()
	{
		$this->address = null;
		$this->country = "";
		$this->dateOfIncorporation = null;
		$this->extraData = null;
		$this->formattedAddress = null;
		$this->id = "";
		$this->legalForm = null;
		$this->managingDirectors = null;
		$this->name = "";
		$this->registrationNumber = "";
		$this->requestTime = null;
		$this->secretaries = null;
		$this->sicNaceCodes = null;
		$this->status = null;
	}
}
