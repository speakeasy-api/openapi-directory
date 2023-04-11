import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvokeRequestBody extends SpeakeasyBase {
    /**
     * <p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload '{ "key": "value" }'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p>
     */
    payload?: string;
}
/**
 * <p>Choose from the following options.</p> <ul> <li> <p> <code>RequestResponse</code> (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API response includes the function response and additional data.</p> </li> <li> <p> <code>Event</code> – Invoke the function asynchronously. Send events that fail multiple times to the function's dead-letter queue (if one is configured). The API response only includes a status code.</p> </li> <li> <p> <code>DryRun</code> – Validate parameter values and verify that the user or role has permission to invoke the function.</p> </li> </ul>
 */
export declare enum InvokeXAmzInvocationTypeEnum {
    Event = "Event",
    RequestResponse = "RequestResponse",
    DryRun = "DryRun"
}
/**
 * Set to <code>Tail</code> to include the execution log in the response. Applies to synchronously invoked functions only.
 */
export declare enum InvokeXAmzLogTypeEnum {
    None = "None",
    Tail = "Tail"
}
export declare class InvokeRequest extends SpeakeasyBase {
    /**
     * <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    functionName: string;
    /**
     * Specify a version or alias to invoke a published version of the function.
     */
    qualifier?: string;
    requestBody: InvokeRequestBody;
    xAmzAlgorithm?: string;
    /**
     * Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context object.
     */
    xAmzClientContext?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    /**
     * <p>Choose from the following options.</p> <ul> <li> <p> <code>RequestResponse</code> (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API response includes the function response and additional data.</p> </li> <li> <p> <code>Event</code> – Invoke the function asynchronously. Send events that fail multiple times to the function's dead-letter queue (if one is configured). The API response only includes a status code.</p> </li> <li> <p> <code>DryRun</code> – Validate parameter values and verify that the user or role has permission to invoke the function.</p> </li> </ul>
     */
    xAmzInvocationType?: InvokeXAmzInvocationTypeEnum;
    /**
     * Set to <code>Tail</code> to include the execution log in the response. Applies to synchronously invoked functions only.
     */
    xAmzLogType?: InvokeXAmzLogTypeEnum;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class InvokeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EC2AccessDeniedException
     */
    ec2AccessDeniedException?: any;
    /**
     * EC2ThrottledException
     */
    ec2ThrottledException?: any;
    /**
     * EC2UnexpectedException
     */
    ec2UnexpectedException?: any;
    /**
     * EFSIOException
     */
    efsioException?: any;
    /**
     * EFSMountConnectivityException
     */
    efsMountConnectivityException?: any;
    /**
     * EFSMountFailureException
     */
    efsMountFailureException?: any;
    /**
     * EFSMountTimeoutException
     */
    efsMountTimeoutException?: any;
    /**
     * ENILimitReachedException
     */
    eniLimitReachedException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * InvalidRequestContentException
     */
    invalidRequestContentException?: any;
    /**
     * InvalidRuntimeException
     */
    invalidRuntimeException?: any;
    /**
     * InvalidSecurityGroupIDException
     */
    invalidSecurityGroupIDException?: any;
    /**
     * InvalidSubnetIDException
     */
    invalidSubnetIDException?: any;
    /**
     * InvalidZipFileException
     */
    invalidZipFileException?: any;
    /**
     * Success
     */
    invocationResponse?: shared.InvocationResponse;
    /**
     * KMSAccessDeniedException
     */
    kmsAccessDeniedException?: any;
    /**
     * KMSDisabledException
     */
    kmsDisabledException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
    /**
     * KMSNotFoundException
     */
    kmsNotFoundException?: any;
    /**
     * RequestTooLargeException
     */
    requestTooLargeException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ResourceNotReadyException
     */
    resourceNotReadyException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SnapStartException
     */
    snapStartException?: any;
    /**
     * SnapStartNotReadyException
     */
    snapStartNotReadyException?: any;
    /**
     * SnapStartTimeoutException
     */
    snapStartTimeoutException?: any;
    /**
     * SubnetIPAddressLimitReachedException
     */
    subnetIPAddressLimitReachedException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedMediaTypeException
     */
    unsupportedMediaTypeException?: any;
}
