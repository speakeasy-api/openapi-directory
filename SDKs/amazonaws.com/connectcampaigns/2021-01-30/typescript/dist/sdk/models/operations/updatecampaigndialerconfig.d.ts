import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The possible types of dialer config parameters
 */
export declare class UpdateCampaignDialerConfigRequestBodyDialerConfig extends SpeakeasyBase {
    /**
     * Predictive Dialer config
     */
    predictiveDialerConfig?: shared.PredictiveDialerConfig;
    /**
     * Progressive Dialer config
     */
    progressiveDialerConfig?: shared.ProgressiveDialerConfig;
}
export declare class UpdateCampaignDialerConfigRequestBody extends SpeakeasyBase {
    /**
     * The possible types of dialer config parameters
     */
    dialerConfig: UpdateCampaignDialerConfigRequestBodyDialerConfig;
}
export declare class UpdateCampaignDialerConfigRequest extends SpeakeasyBase {
    requestBody: UpdateCampaignDialerConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    id: string;
}
export declare class UpdateCampaignDialerConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
