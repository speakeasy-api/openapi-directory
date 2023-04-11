import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateThingShadowRequestBody extends SpeakeasyBase {
    /**
     * The state information, in JSON format.
     */
    payload: string;
}
export declare class UpdateThingShadowRequest extends SpeakeasyBase {
    requestBody: UpdateThingShadowRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the shadow.
     */
    name?: string;
    /**
     * The name of the thing.
     */
    thingName: string;
}
export declare class UpdateThingShadowResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * MethodNotAllowedException
     */
    methodNotAllowedException?: any;
    /**
     * RequestEntityTooLargeException
     */
    requestEntityTooLargeException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * UnsupportedDocumentEncodingException
     */
    unsupportedDocumentEncodingException?: any;
    /**
     * Success
     */
    updateThingShadowResponse?: shared.UpdateThingShadowResponse;
}
