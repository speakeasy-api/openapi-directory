<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails -  Provides details on one or more IPv4 prefixes for a network interface. 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails
{
	#[\JMS\Serializer\Annotation\SerializedName('Ipv4Prefix')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ipv4Prefix = null;
    
	public function __construct()
	{
		$this->ipv4Prefix = null;
	}
}
