import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
 */
export declare class UpdateAPNSVoipSandboxChannelRequestBodyAPNSVoipSandboxChannelRequest extends SpeakeasyBase {
    bundleId?: string;
    certificate?: string;
    defaultAuthenticationMethod?: string;
    enabled?: boolean;
    privateKey?: string;
    teamId?: string;
    tokenKey?: string;
    tokenKeyId?: string;
}
export declare class UpdateApnsVoipSandboxChannelRequestBody extends SpeakeasyBase {
    /**
     * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
     */
    apnsVoipSandboxChannelRequest: UpdateAPNSVoipSandboxChannelRequestBodyAPNSVoipSandboxChannelRequest;
}
export declare class UpdateApnsVoipSandboxChannelRequest extends SpeakeasyBase {
    requestBody: UpdateApnsVoipSandboxChannelRequestBody;
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
export declare class UpdateApnsVoipSandboxChannelResponse extends SpeakeasyBase {
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
    updateApnsVoipSandboxChannelResponse?: shared.UpdateApnsVoipSandboxChannelResponse;
}
