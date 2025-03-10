<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GETUpdateServiceSpecificCredentialRequest
{
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Action')]
    public GETUpdateServiceSpecificCredentialActionEnum $action;
    
    /**
     * <p>The unique identifier of the service-specific credential.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
     * 
     * @var string $serviceSpecificCredentialId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=ServiceSpecificCredentialId')]
    public string $serviceSpecificCredentialId;
    
    /**
     * The status to be assigned to the service-specific credential.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\GETUpdateServiceSpecificCredentialStatusEnum $status
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Status')]
    public GETUpdateServiceSpecificCredentialStatusEnum $status;
    
    /**
     * <p>The name of the IAM user associated with the service-specific credential. If you do not specify this value, then the operation assumes the user whose credentials are used to call the operation.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     * 
     * @var ?string $userName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=UserName')]
    public ?string $userName = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Version')]
    public GETUpdateServiceSpecificCredentialVersionEnum $version;
    
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
		$this->action = \OpenAPI\OpenAPI\Models\Operations\GETUpdateServiceSpecificCredentialActionEnum::UPDATE_SERVICE_SPECIFIC_CREDENTIAL;
		$this->serviceSpecificCredentialId = "";
		$this->status = \OpenAPI\OpenAPI\Models\Operations\GETUpdateServiceSpecificCredentialStatusEnum::ACTIVE;
		$this->userName = null;
		$this->version = \OpenAPI\OpenAPI\Models\Operations\GETUpdateServiceSpecificCredentialVersionEnum::TWO_THOUSAND_AND_TEN0508;
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
