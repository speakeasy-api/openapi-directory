<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * RecoveryInstanceDisk - An object representing a block storage device on the Recovery Instance.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class RecoveryInstanceDisk
{
	#[\JMS\Serializer\Annotation\SerializedName('bytes')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $bytes = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ebsVolumeID')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ebsVolumeID = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('internalDeviceName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $internalDeviceName = null;
    
	public function __construct()
	{
		$this->bytes = null;
		$this->ebsVolumeID = null;
		$this->internalDeviceName = null;
	}
}
