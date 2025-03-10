<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Volume - Describes an instance's Amazon EBS volume.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Volume
{
	#[\JMS\Serializer\Annotation\SerializedName('AvailabilityZone')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $availabilityZone = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Device')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $device = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Ec2VolumeId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ec2VolumeId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Encrypted')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $encrypted = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('InstanceId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $instanceId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Iops')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $iops = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('MountPoint')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $mountPoint = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('RaidArrayId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $raidArrayId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Region')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $region = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Size')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $size = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $status = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VolumeId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $volumeId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VolumeType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $volumeType = null;
    
	public function __construct()
	{
		$this->availabilityZone = null;
		$this->device = null;
		$this->ec2VolumeId = null;
		$this->encrypted = null;
		$this->instanceId = null;
		$this->iops = null;
		$this->mountPoint = null;
		$this->name = null;
		$this->raidArrayId = null;
		$this->region = null;
		$this->size = null;
		$this->status = null;
		$this->volumeId = null;
		$this->volumeType = null;
	}
}
