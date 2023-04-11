import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutFunctionCodeSigningConfigRequestBody extends SpeakeasyBase {
    /**
     * The The Amazon Resource Name (ARN) of the code signing configuration.
     */
    codeSigningConfigArn: string;
}
export declare class PutFunctionCodeSigningConfigRequest extends SpeakeasyBase {
    /**
     * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    functionName: string;
    requestBody: PutFunctionCodeSigningConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutFunctionCodeSigningConfigResponse extends SpeakeasyBase {
    /**
     * CodeSigningConfigNotFoundException
     */
    codeSigningConfigNotFoundException?: any;
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    putFunctionCodeSigningConfigResponse?: shared.PutFunctionCodeSigningConfigResponse;
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
