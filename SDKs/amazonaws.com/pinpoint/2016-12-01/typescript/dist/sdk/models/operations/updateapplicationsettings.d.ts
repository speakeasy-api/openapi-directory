import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the default settings for an application.
 */
export declare class UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest extends SpeakeasyBase {
    campaignHook?: shared.CampaignHook;
    cloudWatchMetricsEnabled?: boolean;
    eventTaggingEnabled?: boolean;
    limits?: shared.CampaignLimits;
    quietTime?: shared.QuietTime;
}
export declare class UpdateApplicationSettingsRequestBody extends SpeakeasyBase {
    /**
     * Specifies the default settings for an application.
     */
    writeApplicationSettingsRequest: UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest;
}
export declare class UpdateApplicationSettingsRequest extends SpeakeasyBase {
    requestBody: UpdateApplicationSettingsRequestBody;
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
export declare class UpdateApplicationSettingsResponse extends SpeakeasyBase {
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
    updateApplicationSettingsResponse?: shared.UpdateApplicationSettingsResponse;
}
