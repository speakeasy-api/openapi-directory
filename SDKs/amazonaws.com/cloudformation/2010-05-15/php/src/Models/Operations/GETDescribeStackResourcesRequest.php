<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GETDescribeStackResourcesRequest
{
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Action')]
    public GETDescribeStackResourcesActionEnum $action;
    
    /**
     * <p>The logical name of the resource as specified in the template.</p> <p>Default: There is no default value.</p>
     * 
     * @var ?string $logicalResourceId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=LogicalResourceId')]
    public ?string $logicalResourceId = null;
    
    /**
     * <p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.</p> <p>For example, for an Amazon Elastic Compute Cloud (EC2) instance, <code>PhysicalResourceId</code> corresponds to the <code>InstanceId</code>. You can pass the EC2 <code>InstanceId</code> to <code>DescribeStackResources</code> to find which stack the instance belongs to and what other resources are part of the stack.</p> <p>Required: Conditional. If you don't specify <code>PhysicalResourceId</code>, you must specify <code>StackName</code>.</p> <p>Default: There is no default value.</p>
     * 
     * @var ?string $physicalResourceId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=PhysicalResourceId')]
    public ?string $physicalResourceId = null;
    
    /**
     * <p>The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p> <p>Required: Conditional. If you don't specify <code>StackName</code>, you must specify <code>PhysicalResourceId</code>.</p>
     * 
     * @var ?string $stackName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=StackName')]
    public ?string $stackName = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Version')]
    public GETDescribeStackResourcesVersionEnum $version;
    
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
		$this->action = \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackResourcesActionEnum::DESCRIBE_STACK_RESOURCES;
		$this->logicalResourceId = null;
		$this->physicalResourceId = null;
		$this->stackName = null;
		$this->version = \OpenAPI\OpenAPI\Models\Operations\GETDescribeStackResourcesVersionEnum::TWO_THOUSAND_AND_TEN0515;
		$this->xAmzAlgorithm = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
