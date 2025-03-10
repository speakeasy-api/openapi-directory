<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * VolumeSpecification - EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an EC2 instance in the cluster.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class VolumeSpecification
{
	#[\JMS\Serializer\Annotation\SerializedName('Iops')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $iops = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('SizeInGB')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $sizeInGB;
    
	#[\JMS\Serializer\Annotation\SerializedName('Throughput')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $throughput = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('VolumeType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $volumeType;
    
	public function __construct()
	{
		$this->iops = null;
		$this->sizeInGB = 0;
		$this->throughput = null;
		$this->volumeType = "";
	}
}
