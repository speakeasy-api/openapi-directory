<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateThingShadowRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public UpdateThingShadowRequestBody $requestBody;
    
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
     * The name of the shadow.
     * 
     * @var ?string $name
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=name')]
    public ?string $name = null;
    
    /**
     * The name of the thing.
     * 
     * @var string $thingName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=thingName')]
    public string $thingName;
    
	public function __construct()
	{
		$this->requestBody = new \OpenAPI\OpenAPI\Models\Operations\UpdateThingShadowRequestBody();
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
		$this->name = null;
		$this->thingName = "";
	}
}
