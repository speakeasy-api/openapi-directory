<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class InvokeWithResponseStreamRequest
{
    /**
     * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
     * 
     * @var string $functionName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=FunctionName')]
    public string $functionName;
    
    /**
     * The alias name.
     * 
     * @var ?string $qualifier
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=Qualifier')]
    public ?string $qualifier = null;
    
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public InvokeWithResponseStreamRequestBody $requestBody;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Algorithm')]
    public ?string $xAmzAlgorithm = null;
    
    /**
     * Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context object.
     * 
     * @var ?string $xAmzClientContext
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Client-Context')]
    public ?string $xAmzClientContext = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Content-Sha256')]
    public ?string $xAmzContentSha256 = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Credential')]
    public ?string $xAmzCredential = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Date')]
    public ?string $xAmzDate = null;
    
    /**
     * <p>Use one of the following options:</p> <ul> <li> <p> <code>RequestResponse</code> (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API operation response includes the function response and additional data.</p> </li> <li> <p> <code>DryRun</code> – Validate parameter values and verify that the IAM user or role has permission to invoke the function.</p> </li> </ul>
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\InvokeWithResponseStreamXAmzInvocationTypeEnum $xAmzInvocationType
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Invocation-Type')]
    public ?InvokeWithResponseStreamXAmzInvocationTypeEnum $xAmzInvocationType = null;
    
    /**
     * Set to <code>Tail</code> to include the execution log in the response. Applies to synchronously invoked functions only.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\InvokeWithResponseStreamXAmzLogTypeEnum $xAmzLogType
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Log-Type')]
    public ?InvokeWithResponseStreamXAmzLogTypeEnum $xAmzLogType = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Security-Token')]
    public ?string $xAmzSecurityToken = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-Signature')]
    public ?string $xAmzSignature = null;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-Amz-SignedHeaders')]
    public ?string $xAmzSignedHeaders = null;
    
	public function __construct()
	{
		$this->functionName = "";
		$this->qualifier = null;
		$this->requestBody = new \OpenAPI\OpenAPI\Models\Operations\InvokeWithResponseStreamRequestBody();
		$this->xAmzAlgorithm = null;
		$this->xAmzClientContext = null;
		$this->xAmzContentSha256 = null;
		$this->xAmzCredential = null;
		$this->xAmzDate = null;
		$this->xAmzInvocationType = null;
		$this->xAmzLogType = null;
		$this->xAmzSecurityToken = null;
		$this->xAmzSignature = null;
		$this->xAmzSignedHeaders = null;
	}
}
