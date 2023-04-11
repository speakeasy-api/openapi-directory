import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateServiceSettingsXAmzTargetEnum {
    AWSLicenseManagerUpdateServiceSettings = "AWSLicenseManager.UpdateServiceSettings"
}
export declare class UpdateServiceSettingsRequest extends SpeakeasyBase {
    updateServiceSettingsRequest: shared.UpdateServiceSettingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceSettingsXAmzTargetEnum;
}
export declare class UpdateServiceSettingsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AuthorizationException
     */
    authorizationException?: any;
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateServiceSettingsResponse?: Record<string, any>;
}
