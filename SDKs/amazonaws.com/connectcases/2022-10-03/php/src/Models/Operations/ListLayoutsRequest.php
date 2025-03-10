<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ListLayoutsRequest
{
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
    
    /**
     * The unique identifier of the Cases domain. 
     * 
     * @var string $domainId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=domainId')]
    public string $domainId;
    
    /**
     * The maximum number of results to return per page.
     * 
     * @var ?int $maxResults
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=maxResults')]
    public ?int $maxResults = null;
    
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     * 
     * @var ?string $nextToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=nextToken')]
    public ?string $nextToken = null;
    
	public function __construct()
	{
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
		$this->domainId = "";
		$this->maxResults = null;
		$this->nextToken = null;
	}
}
