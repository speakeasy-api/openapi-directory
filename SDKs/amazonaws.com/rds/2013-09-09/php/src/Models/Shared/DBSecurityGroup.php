<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DBSecurityGroup
{
	
    public ?string $dbSecurityGroupDescription = null;
    
	
    public ?string $dbSecurityGroupName = null;
    
    /**
     * $ec2SecurityGroups
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Ec2SecurityGroupList> $ec2SecurityGroups
     */
	
    public ?array $ec2SecurityGroups = null;
    
    /**
     * $ipRanges
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\IPRangeList> $ipRanges
     */
	
    public ?array $ipRanges = null;
    
	
    public ?string $ownerId = null;
    
	
    public ?string $vpcId = null;
    
	public function __construct()
	{
		$this->dbSecurityGroupDescription = null;
		$this->dbSecurityGroupName = null;
		$this->ec2SecurityGroups = null;
		$this->ipRanges = null;
		$this->ownerId = null;
		$this->vpcId = null;
	}
}
