<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment - Information about the transit gateway attachment.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
{
	
    public ?string $resourceId = null;
    
	
    public ?DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachmentResourceTypeEnum $resourceType = null;
    
	
    public ?string $transitGatewayAttachmentId = null;
    
	public function __construct()
	{
		$this->resourceId = null;
		$this->resourceType = null;
		$this->transitGatewayAttachmentId = null;
	}
}
