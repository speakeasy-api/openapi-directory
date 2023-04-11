import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
 */
export declare class PutFunctionEventInvokeConfigRequestBodyDestinationConfig extends SpeakeasyBase {
    onFailure?: shared.OnFailure;
    onSuccess?: shared.OnSuccess;
}
export declare class PutFunctionEventInvokeConfigRequestBody extends SpeakeasyBase {
    /**
     * A configuration object that specifies the destination of an event after Lambda processes it.
     */
    destinationConfig?: PutFunctionEventInvokeConfigRequestBodyDestinationConfig;
    /**
     * The maximum age of a request that Lambda sends to a function for processing.
     */
    maximumEventAgeInSeconds?: number;
    /**
     * The maximum number of times to retry when the function returns an error.
     */
    maximumRetryAttempts?: number;
}
export declare class PutFunctionEventInvokeConfigRequest extends SpeakeasyBase {
    /**
     * <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    functionName: string;
    /**
     * A version number or alias name.
     */
    qualifier?: string;
    requestBody: PutFunctionEventInvokeConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutFunctionEventInvokeConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    functionEventInvokeConfig?: shared.FunctionEventInvokeConfig;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
