<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GETDeleteVpcEndpointsRequest
{
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Action')]
    public GETDeleteVpcEndpointsActionEnum $action;
    
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     * 
     * @var ?bool $dryRun
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=DryRun')]
    public ?bool $dryRun = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Version')]
    public GETDeleteVpcEndpointsVersionEnum $version;
    
    /**
     * The IDs of the VPC endpoints.
     * 
     * @var array<string> $vpcEndpointId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=VpcEndpointId')]
    public array $vpcEndpointId;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Algorithm')]
    public ?string $xAmzAlgorithm = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Content-Sha256')]
    public ?string $xAmzContentSha256 = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Credential')]
    public ?string $xAmzCredential = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Date')]
    public ?string $xAmzDate = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Security-Token')]
    public ?string $xAmzSecurityToken = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Signature')]
    public ?string $xAmzSignature = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-SignedHeaders')]
    public ?string $xAmzSignedHeaders = null;
    
	public function __construct()
	{
		$this->action = \OpenAPI\OpenAPI\Models\Operations\GETDeleteVpcEndpointsActionEnum::DELETE_VPC_ENDPOINTS;
		$this->dryRun = null;
		$this->version = \OpenAPI\OpenAPI\Models\Operations\GETDeleteVpcEndpointsVersionEnum::TWO_THOUSAND_AND_SIXTEEN1115;
		$this->vpcEndpointId = [];
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
