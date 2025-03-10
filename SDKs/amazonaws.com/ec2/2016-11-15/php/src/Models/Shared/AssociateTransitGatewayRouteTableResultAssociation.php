<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AssociateTransitGatewayRouteTableResultAssociation - The ID of the association.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AssociateTransitGatewayRouteTableResultAssociation
{
	
    public ?string $resourceId = null;
    
	
    public ?AssociateTransitGatewayRouteTableResultAssociationResourceTypeEnum $resourceType = null;
    
	
    public ?AssociateTransitGatewayRouteTableResultAssociationStateEnum $state = null;
    
	
    public ?string $transitGatewayAttachmentId = null;
    
	
    public ?string $transitGatewayRouteTableId = null;
    
	public function __construct()
	{
		$this->resourceId = null;
		$this->resourceType = null;
		$this->state = null;
		$this->transitGatewayAttachmentId = null;
		$this->transitGatewayRouteTableId = null;
	}
}
