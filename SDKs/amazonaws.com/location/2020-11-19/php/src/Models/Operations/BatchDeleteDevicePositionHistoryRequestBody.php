<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class BatchDeleteDevicePositionHistoryRequestBody
{
    /**
     * <p>Devices whose position history you want to delete.</p> <ul> <li> <p>For example, for two devices: <code>“DeviceIds” : [DeviceId1,DeviceId2]</code> </p> </li> </ul>
     * 
     * @var array<string> $deviceIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('DeviceIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $deviceIds;
    
	public function __construct()
	{
		$this->deviceIds = [];
	}
}
