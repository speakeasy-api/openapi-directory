<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Ipv6CidrBlockAssociation - An IPV6 CIDR block association.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Ipv6CidrBlockAssociation
{
	#[\JMS\Serializer\Annotation\SerializedName('AssociationId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $associationId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('CidrBlockState')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $cidrBlockState = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Ipv6CidrBlock')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ipv6CidrBlock = null;
    
	public function __construct()
	{
		$this->associationId = null;
		$this->cidrBlockState = null;
		$this->ipv6CidrBlock = null;
	}
}
