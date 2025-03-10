<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class InlineResponse200Security
{
	#[\JMS\Serializer\Annotation\SerializedName('is_vpn')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isVpn = null;
    
	public function __construct()
	{
		$this->isVpn = null;
	}
}
