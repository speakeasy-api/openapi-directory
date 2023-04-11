import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the status and settings of the voice channel for an application.
 */
export declare class UpdateVoiceChannelRequestBodyVoiceChannelRequest extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class UpdateVoiceChannelRequestBody extends SpeakeasyBase {
    /**
     * Specifies the status and settings of the voice channel for an application.
     */
    voiceChannelRequest: UpdateVoiceChannelRequestBodyVoiceChannelRequest;
}
export declare class UpdateVoiceChannelRequest extends SpeakeasyBase {
    requestBody: UpdateVoiceChannelRequestBody;
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
export declare class UpdateVoiceChannelResponse extends SpeakeasyBase {
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
    updateVoiceChannelResponse?: shared.UpdateVoiceChannelResponse;
}
