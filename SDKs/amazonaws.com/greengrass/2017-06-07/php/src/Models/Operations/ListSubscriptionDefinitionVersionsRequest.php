<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ListSubscriptionDefinitionVersionsRequest
{
    /**
     * The maximum number of results to be returned per request.
     * 
     * @var ?string $maxResults
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=MaxResults')]
    public ?string $maxResults = null;
    
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     * 
     * @var ?string $nextToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=NextToken')]
    public ?string $nextToken = null;
    
    /**
     * The ID of the subscription definition.
     * 
     * @var string $subscriptionDefinitionId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=SubscriptionDefinitionId')]
    public string $subscriptionDefinitionId;
    
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
		$this->maxResults = null;
		$this->nextToken = null;
		$this->subscriptionDefinitionId = "";
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
