<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ListPolicyPrincipalsRequest
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
     * Specifies the order for results. If true, the results are returned in ascending creation order.
     * 
     * @var ?bool $isAscendingOrder
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=isAscendingOrder')]
    public ?bool $isAscendingOrder = null;
    
    /**
     * The marker for the next set of results.
     * 
     * @var ?string $marker
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=marker')]
    public ?string $marker = null;
    
    /**
     * The result page size.
     * 
     * @var ?int $pageSize
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=pageSize')]
    public ?int $pageSize = null;
    
    /**
     * The policy name.
     * 
     * @var string $xAmznIotPolicy
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=x-amzn-iot-policy')]
    public string $xAmznIotPolicy;
    
	public function __construct()
	{
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
		$this->isAscendingOrder = null;
		$this->marker = null;
		$this->pageSize = null;
		$this->xAmznIotPolicy = "";
	}
}
