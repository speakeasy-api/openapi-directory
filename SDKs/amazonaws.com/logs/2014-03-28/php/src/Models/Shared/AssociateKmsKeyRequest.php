<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class AssociateKmsKeyRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('kmsKeyId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $kmsKeyId;
    
	#[\JMS\Serializer\Annotation\SerializedName('logGroupName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $logGroupName;
    
	public function __construct()
	{
		$this->kmsKeyId = "";
		$this->logGroupName = "";
	}
}
