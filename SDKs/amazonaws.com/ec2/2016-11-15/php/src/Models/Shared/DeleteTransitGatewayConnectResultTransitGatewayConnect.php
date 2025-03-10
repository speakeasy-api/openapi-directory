<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DeleteTransitGatewayConnectResultTransitGatewayConnect - Information about the deleted Connect attachment.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DeleteTransitGatewayConnectResultTransitGatewayConnect
{
	
    public ?\DateTime $creationTime = null;
    
	
    public ?DeleteTransitGatewayConnectResultTransitGatewayConnectOptions $options = null;
    
	
    public ?DeleteTransitGatewayConnectResultTransitGatewayConnectStateEnum $state = null;
    
    /**
     * $tags
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\DeleteTransitGatewayConnectResultTransitGatewayConnectTags> $tags
     */
	
    public ?array $tags = null;
    
	
    public ?string $transitGatewayAttachmentId = null;
    
	
    public ?string $transitGatewayId = null;
    
	
    public ?string $transportTransitGatewayAttachmentId = null;
    
	public function __construct()
	{
		$this->creationTime = null;
		$this->options = null;
		$this->state = null;
		$this->tags = null;
		$this->transitGatewayAttachmentId = null;
		$this->transitGatewayId = null;
		$this->transportTransitGatewayAttachmentId = null;
	}
}
