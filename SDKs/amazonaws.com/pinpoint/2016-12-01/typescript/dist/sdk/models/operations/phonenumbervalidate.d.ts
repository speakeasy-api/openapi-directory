import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies a phone number to validate and retrieve information about.
 */
export declare class PhoneNumberValidateRequestBodyNumberValidateRequest extends SpeakeasyBase {
    isoCountryCode?: string;
    phoneNumber?: string;
}
export declare class PhoneNumberValidateRequestBody extends SpeakeasyBase {
    /**
     * Specifies a phone number to validate and retrieve information about.
     */
    numberValidateRequest: PhoneNumberValidateRequestBodyNumberValidateRequest;
}
export declare class PhoneNumberValidateRequest extends SpeakeasyBase {
    requestBody: PhoneNumberValidateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PhoneNumberValidateResponse extends SpeakeasyBase {
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
    phoneNumberValidateResponse?: shared.PhoneNumberValidateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
