<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CreateSubnetCidrReservationRequest
{
	
    public string $cidr;
    
	
    public ?string $description = null;
    
	
    public ?bool $dryRun = null;
    
	
    public SubnetCidrReservationTypeEnum $reservationType;
    
	
    public string $subnetId;
    
    /**
     * $tagSpecifications
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CreateSubnetCidrReservationRequestTagSpecifications> $tagSpecifications
     */
	
    public ?array $tagSpecifications = null;
    
	public function __construct()
	{
		$this->cidr = "";
		$this->description = null;
		$this->dryRun = null;
		$this->reservationType = \OpenAPI\OpenAPI\Models\Shared\SubnetCidrReservationTypeEnum::PREFIX;
		$this->subnetId = "";
		$this->tagSpecifications = null;
	}
}
