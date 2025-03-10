<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class SslcrRequestBodyCertificateParameters
{
    /**
     * Date of birth in DD-MM-YYYY format
     * 
     * @var string $dob
     */
	#[\JMS\Serializer\Annotation\SerializedName('DOB')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $dob;
    
    /**
     * Full name
     * 
     * @var string $fullName
     */
	#[\JMS\Serializer\Annotation\SerializedName('FullName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $fullName;
    
    /**
     * Aadhaar number
     * 
     * @var string $uid
     */
	#[\JMS\Serializer\Annotation\SerializedName('UID')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $uid;
    
    /**
     * Register Number
     * 
     * @var string $regno
     */
	#[\JMS\Serializer\Annotation\SerializedName('regno')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $regno;
    
    /**
     * Year
     * 
     * @var string $year
     */
	#[\JMS\Serializer\Annotation\SerializedName('year')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $year;
    
	public function __construct()
	{
		$this->dob = "";
		$this->fullName = "";
		$this->uid = "";
		$this->regno = "";
		$this->year = "";
	}
}
