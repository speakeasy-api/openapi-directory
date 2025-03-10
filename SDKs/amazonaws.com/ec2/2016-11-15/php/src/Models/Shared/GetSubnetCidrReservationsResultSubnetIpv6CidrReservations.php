<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetSubnetCidrReservationsResultSubnetIpv6CidrReservations - Describes a subnet CIDR reservation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetSubnetCidrReservationsResultSubnetIpv6CidrReservations
{
	
    public ?string $cidr = null;
    
	
    public ?string $description = null;
    
	
    public ?string $ownerId = null;
    
	
    public ?GetSubnetCidrReservationsResultSubnetIpv6CidrReservationsReservationTypeEnum $reservationType = null;
    
	
    public ?string $subnetCidrReservationId = null;
    
	
    public ?string $subnetId = null;
    
    /**
     * $tags
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GetSubnetCidrReservationsResultSubnetIpv6CidrReservationsTags> $tags
     */
	
    public ?array $tags = null;
    
	public function __construct()
	{
		$this->cidr = null;
		$this->description = null;
		$this->ownerId = null;
		$this->reservationType = null;
		$this->subnetCidrReservationId = null;
		$this->subnetId = null;
		$this->tags = null;
	}
}
