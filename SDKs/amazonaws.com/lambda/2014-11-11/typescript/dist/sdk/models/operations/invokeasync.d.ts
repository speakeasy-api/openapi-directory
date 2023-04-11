import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvokeAsyncRequestBody extends SpeakeasyBase {
    /**
     * JSON that you want to provide to your Lambda function as input.
     */
    invokeArgs: string;
}
export declare class InvokeAsyncRequest extends SpeakeasyBase {
    /**
     * The Lambda function name.
     */
    functionName: string;
    requestBody: InvokeAsyncRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class InvokeAsyncResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidRequestContentException
     */
    invalidRequestContentException?: shared.InvalidRequestContentException;
    /**
     * Success
     */
    invokeAsyncResponse?: shared.InvokeAsyncResponse;
    /**
     * ServiceException
     */
    serviceException?: shared.ServiceException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
}
