import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the configuration and other settings for a campaign.
 */
export declare class CreateCampaignRequestBodyWriteCampaignRequest extends SpeakeasyBase {
    additionalTreatments?: shared.WriteTreatmentResource[];
    customDeliveryConfiguration?: shared.CustomDeliveryConfiguration;
    description?: string;
    holdoutPercent?: number;
    hook?: shared.CampaignHook;
    isPaused?: boolean;
    limits?: shared.CampaignLimits;
    messageConfiguration?: shared.MessageConfiguration;
    name?: string;
    priority?: number;
    schedule?: shared.Schedule;
    segmentId?: string;
    segmentVersion?: number;
    templateConfiguration?: shared.TemplateConfiguration;
    treatmentDescription?: string;
    treatmentName?: string;
    tags?: Record<string, string>;
}
export declare class CreateCampaignRequestBody extends SpeakeasyBase {
    /**
     * Specifies the configuration and other settings for a campaign.
     */
    writeCampaignRequest: CreateCampaignRequestBodyWriteCampaignRequest;
}
export declare class CreateCampaignRequest extends SpeakeasyBase {
    requestBody: CreateCampaignRequestBody;
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
export declare class CreateCampaignResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createCampaignResponse?: shared.CreateCampaignResponse;
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
}
