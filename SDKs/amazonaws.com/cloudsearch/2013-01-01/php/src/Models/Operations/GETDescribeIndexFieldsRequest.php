<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GETDescribeIndexFieldsRequest
{
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Action')]
    public GETDescribeIndexFieldsActionEnum $action;
    
    /**
     * Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
     * 
     * @var ?bool $deployed
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Deployed')]
    public ?bool $deployed = null;
    
    /**
     * The name of the domain you want to describe.
     * 
     * @var string $domainName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=DomainName')]
    public string $domainName;
    
    /**
     * A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.
     * 
     * @var ?array<string> $fieldNames
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=FieldNames')]
    public ?array $fieldNames = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Version')]
    public GETDescribeIndexFieldsVersionEnum $version;
    
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
		$this->action = \OpenAPI\OpenAPI\Models\Operations\GETDescribeIndexFieldsActionEnum::DESCRIBE_INDEX_FIELDS;
		$this->deployed = null;
		$this->domainName = "";
		$this->fieldNames = null;
		$this->version = \OpenAPI\OpenAPI\Models\Operations\GETDescribeIndexFieldsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
