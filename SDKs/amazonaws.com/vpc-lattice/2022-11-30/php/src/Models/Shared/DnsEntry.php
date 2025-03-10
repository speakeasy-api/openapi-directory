<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DnsEntry - Describes the DNS information of a service.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DnsEntry
{
	#[\JMS\Serializer\Annotation\SerializedName('domainName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $domainName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('hostedZoneId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $hostedZoneId = null;
    
	public function __construct()
	{
		$this->domainName = null;
		$this->hostedZoneId = null;
	}
}
