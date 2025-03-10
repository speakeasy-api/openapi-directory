<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ExpiredCertPublicKey
{
	#[\JMS\Serializer\Annotation\SerializedName('algorithm')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $algorithm = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('bits')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $bits = null;
    
	public function __construct()
	{
		$this->algorithm = null;
		$this->bits = null;
	}
}
