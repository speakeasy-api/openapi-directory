<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ModifyTransitGatewayPrefixListReferenceRequest
{
	
    public ?bool $blackhole = null;
    
	
    public ?bool $dryRun = null;
    
	
    public string $prefixListId;
    
	
    public ?string $transitGatewayAttachmentId = null;
    
	
    public string $transitGatewayRouteTableId;
    
	public function __construct()
	{
		$this->blackhole = null;
		$this->dryRun = null;
		$this->prefixListId = "";
		$this->transitGatewayAttachmentId = null;
		$this->transitGatewayRouteTableId = "";
	}
}
