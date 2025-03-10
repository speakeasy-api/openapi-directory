<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DescribeDeviceRequestBody
{
    /**
     * A unique identifier for a registered user's device.
     * 
     * @var string $deviceId
     */
	#[\JMS\Serializer\Annotation\SerializedName('DeviceId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $deviceId;
    
    /**
     * The ARN of the fleet.
     * 
     * @var string $fleetArn
     */
	#[\JMS\Serializer\Annotation\SerializedName('FleetArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $fleetArn;
    
	public function __construct()
	{
		$this->deviceId = "";
		$this->fleetArn = "";
	}
}
