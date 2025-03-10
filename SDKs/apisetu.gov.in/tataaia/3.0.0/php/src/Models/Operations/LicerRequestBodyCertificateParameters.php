<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class LicerRequestBodyCertificateParameters
{
    /**
     * Full name
     * 
     * @var string $fullName
     */
	#[\JMS\Serializer\Annotation\SerializedName('FullName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $fullName;
    
    /**
     * Policy Number
     * 
     * @var string $udf1
     */
	#[\JMS\Serializer\Annotation\SerializedName('UDF1')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $udf1;
    
    /**
     * Insured DOB
     * 
     * @var string $udf2
     */
	#[\JMS\Serializer\Annotation\SerializedName('UDF2')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $udf2;
    
	public function __construct()
	{
		$this->fullName = "";
		$this->udf1 = "";
		$this->udf2 = "";
	}
}
