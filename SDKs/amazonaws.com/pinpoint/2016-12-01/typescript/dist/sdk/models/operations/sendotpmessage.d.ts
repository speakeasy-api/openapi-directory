import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Send OTP message request parameters.
 */
export declare class SendOTPMessageRequestBodySendOTPMessageRequestParameters extends SpeakeasyBase {
    allowedAttempts?: number;
    brandName?: string;
    channel?: string;
    codeLength?: number;
    destinationIdentity?: string;
    entityId?: string;
    language?: string;
    originationIdentity?: string;
    referenceId?: string;
    templateId?: string;
    validityPeriod?: number;
}
export declare class SendOTPMessageRequestBody extends SpeakeasyBase {
    /**
     * Send OTP message request parameters.
     */
    sendOTPMessageRequestParameters: SendOTPMessageRequestBodySendOTPMessageRequestParameters;
}
export declare class SendOTPMessageRequest extends SpeakeasyBase {
    requestBody: SendOTPMessageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    applicationId: string;
}
export declare class SendOTPMessageResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * MethodNotAllowedException
     */
    methodNotAllowedException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * PayloadTooLargeException
     */
    payloadTooLargeException?: any;
    /**
     * Success
     */
    sendOTPMessageResponse?: shared.SendOTPMessageResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
