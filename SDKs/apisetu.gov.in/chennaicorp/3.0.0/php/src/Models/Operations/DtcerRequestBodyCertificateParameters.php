<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DtcerRequestBodyCertificateParameters
{
    /**
     * Date of Death
     * 
     * @var string $dateofdeath
     */
	#[\JMS\Serializer\Annotation\SerializedName('DATEOFDEATH')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $dateofdeath;
    
    /**
     * Registration Number
     * 
     * @var string $regno
     */
	#[\JMS\Serializer\Annotation\SerializedName('REGNO')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $regno;
    
	public function __construct()
	{
		$this->dateofdeath = "";
		$this->regno = "";
	}
}
