import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetServiceSettingsXAmzTargetEnum {
    AWSLicenseManagerGetServiceSettings = "AWSLicenseManager.GetServiceSettings"
}
export declare class GetServiceSettingsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceSettingsXAmzTargetEnum;
}
export declare class GetServiceSettingsResponse extends SpeakeasyBase {
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
     * Success
     */
    getServiceSettingsResponse?: shared.GetServiceSettingsResponse;
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
}
