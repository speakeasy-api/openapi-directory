<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class VehicleRegistrationSchemaCertificateDataVehicleRegistration
{
	
    public ?VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance $insurance = null;
    
	
    public ?VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle $vehicle = null;
    
	
    public string $financer;
    
	
    public string $normsDesc;
    
	
    public string $statusDate;
    
	public function __construct()
	{
		$this->insurance = null;
		$this->vehicle = null;
		$this->financer = "";
		$this->normsDesc = "";
		$this->statusDate = "";
	}
}
