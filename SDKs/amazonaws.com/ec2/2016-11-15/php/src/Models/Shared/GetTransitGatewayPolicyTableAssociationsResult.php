<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetTransitGatewayPolicyTableAssociationsResult - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetTransitGatewayPolicyTableAssociationsResult
{
    /**
     * $associations
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GetTransitGatewayPolicyTableAssociationsResultAssociations> $associations
     */
	
    public ?array $associations = null;
    
	
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->associations = null;
		$this->nextToken = null;
	}
}
