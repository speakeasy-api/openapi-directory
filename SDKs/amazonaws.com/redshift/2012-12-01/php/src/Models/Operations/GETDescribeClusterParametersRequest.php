<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GETDescribeClusterParametersRequest
{
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Action')]
    public GETDescribeClusterParametersActionEnum $action;
    
    /**
     * An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeClusterParameters</a> request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. 
     * 
     * @var ?string $marker
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Marker')]
    public ?string $marker = null;
    
    /**
     * <p>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. </p> <p>Default: <code>100</code> </p> <p>Constraints: minimum 20, maximum 100.</p>
     * 
     * @var ?int $maxRecords
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=MaxRecords')]
    public ?int $maxRecords = null;
    
    /**
     * The name of a cluster parameter group for which to return details.
     * 
     * @var string $parameterGroupName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=ParameterGroupName')]
    public string $parameterGroupName;
    
    /**
     * <p>The parameter types to return. Specify <code>user</code> to show parameters that are different form the default. Similarly, specify <code>engine-default</code> to show parameters that are the same as the default parameter group. </p> <p>Default: All parameter types returned.</p> <p>Valid Values: <code>user</code> | <code>engine-default</code> </p>
     * 
     * @var ?string $source
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Source')]
    public ?string $source = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Version')]
    public GETDescribeClusterParametersVersionEnum $version;
    
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
		$this->action = \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterParametersActionEnum::DESCRIBE_CLUSTER_PARAMETERS;
		$this->marker = null;
		$this->maxRecords = null;
		$this->parameterGroupName = "";
		$this->source = null;
		$this->version = \OpenAPI\OpenAPI\Models\Operations\GETDescribeClusterParametersVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
