<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GETAddUserToGroupRequest
{
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Action')]
    public GETAddUserToGroupActionEnum $action;
    
    /**
     * <p>The name of the group to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     * 
     * @var string $groupName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=GroupName')]
    public string $groupName;
    
    /**
     * <p>The name of the user to add.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     * 
     * @var string $userName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=UserName')]
    public string $userName;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Version')]
    public GETAddUserToGroupVersionEnum $version;
    
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
		$this->action = \OpenAPI\OpenAPI\Models\Operations\GETAddUserToGroupActionEnum::ADD_USER_TO_GROUP;
		$this->groupName = "";
		$this->userName = "";
		$this->version = \OpenAPI\OpenAPI\Models\Operations\GETAddUserToGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
