<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetVehiclesVehicleidSmartchargingpolicyRequest
{
    /**
     * ID of the Vehicle
     * 
     * @var string $vehicleId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=vehicleId')]
    public string $vehicleId;
    
	public function __construct()
	{
		$this->vehicleId = "";
	}
}
