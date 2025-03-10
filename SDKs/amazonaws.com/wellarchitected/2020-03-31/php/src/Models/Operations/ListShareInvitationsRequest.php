<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ListShareInvitationsRequest
{
    /**
     * An optional string added to the beginning of each lens name returned in the results.
     * 
     * @var ?string $lensNamePrefix
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=LensNamePrefix')]
    public ?string $lensNamePrefix = null;
    
    /**
     * The maximum number of results to return for this request.
     * 
     * @var ?int $maxResults
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=MaxResults')]
    public ?int $maxResults = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=NextToken')]
    public ?string $nextToken = null;
    
    /**
     * The type of share invitations to be returned.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ListShareInvitationsShareResourceTypeEnum $shareResourceType
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=ShareResourceType')]
    public ?ListShareInvitationsShareResourceTypeEnum $shareResourceType = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=WorkloadNamePrefix')]
    public ?string $workloadNamePrefix = null;
    
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
		$this->lensNamePrefix = null;
		$this->maxResults = null;
		$this->nextToken = null;
		$this->shareResourceType = null;
		$this->workloadNamePrefix = null;
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
