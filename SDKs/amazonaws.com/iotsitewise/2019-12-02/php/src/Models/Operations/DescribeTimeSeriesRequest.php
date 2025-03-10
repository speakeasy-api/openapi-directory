<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class DescribeTimeSeriesRequest
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
     * The alias that identifies the time series.
     * 
     * @var ?string $alias
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=alias')]
    public ?string $alias = null;
    
    /**
     * The ID of the asset in which the asset property was created.
     * 
     * @var ?string $assetId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=assetId')]
    public ?string $assetId = null;
    
    /**
     * The ID of the asset property.
     * 
     * @var ?string $propertyId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=propertyId')]
    public ?string $propertyId = null;
    
	public function __construct()
	{
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
		$this->alias = null;
		$this->assetId = null;
		$this->propertyId = null;
	}
}
