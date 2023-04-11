import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
 */
export declare class UpdateADMChannelRequestBodyADMChannelRequest extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    enabled?: boolean;
}
export declare class UpdateAdmChannelRequestBody extends SpeakeasyBase {
    /**
     * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
     */
    admChannelRequest: UpdateADMChannelRequestBodyADMChannelRequest;
}
export declare class UpdateAdmChannelRequest extends SpeakeasyBase {
    requestBody: UpdateAdmChannelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
     */
    applicationId: string;
}
export declare class UpdateAdmChannelResponse extends SpeakeasyBase {
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
    updateAdmChannelResponse?: shared.UpdateAdmChannelResponse;
}
