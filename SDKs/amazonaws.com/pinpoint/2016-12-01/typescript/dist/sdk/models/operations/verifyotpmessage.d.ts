import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Verify OTP message request.
 */
export declare class VerifyOTPMessageRequestBodyVerifyOTPMessageRequestParameters extends SpeakeasyBase {
    destinationIdentity?: string;
    otp?: string;
    referenceId?: string;
}
export declare class VerifyOTPMessageRequestBody extends SpeakeasyBase {
    /**
     * Verify OTP message request.
     */
    verifyOTPMessageRequestParameters: VerifyOTPMessageRequestBodyVerifyOTPMessageRequestParameters;
}
export declare class VerifyOTPMessageRequest extends SpeakeasyBase {
    requestBody: VerifyOTPMessageRequestBody;
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
export declare class VerifyOTPMessageResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    verifyOTPMessageResponse?: shared.VerifyOTPMessageResponse;
}
