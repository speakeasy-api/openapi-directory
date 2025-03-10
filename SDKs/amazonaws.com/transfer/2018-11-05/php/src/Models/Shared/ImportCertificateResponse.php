<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ImportCertificateResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ImportCertificateResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('CertificateId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $certificateId;
    
	public function __construct()
	{
		$this->certificateId = "";
	}
}
