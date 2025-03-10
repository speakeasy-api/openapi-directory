<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * WorkforceVpcConfigRequest - The VPC object you use to create or update a workforce.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class WorkforceVpcConfigRequest
{
    /**
     * $securityGroupIds
     * 
     * @var ?array<string> $securityGroupIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('SecurityGroupIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $securityGroupIds = null;
    
    /**
     * $subnets
     * 
     * @var ?array<string> $subnets
     */
	#[\JMS\Serializer\Annotation\SerializedName('Subnets')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $subnets = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VpcId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $vpcId = null;
    
	public function __construct()
	{
		$this->securityGroupIds = null;
		$this->subnets = null;
		$this->vpcId = null;
	}
}
