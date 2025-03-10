<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * NetworkFirewallMissingFirewallViolation - Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC. 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class NetworkFirewallMissingFirewallViolation
{
	#[\JMS\Serializer\Annotation\SerializedName('AvailabilityZone')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $availabilityZone = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TargetViolationReason')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $targetViolationReason = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VPC')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $vpc = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ViolationTarget')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $violationTarget = null;
    
	public function __construct()
	{
		$this->availabilityZone = null;
		$this->targetViolationReason = null;
		$this->vpc = null;
		$this->violationTarget = null;
	}
}
