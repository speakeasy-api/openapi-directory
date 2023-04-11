import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLicenseConfigurationXAmzTargetEnum {
    AWSLicenseManagerUpdateLicenseConfiguration = "AWSLicenseManager.UpdateLicenseConfiguration"
}
export declare class UpdateLicenseConfigurationRequest extends SpeakeasyBase {
    updateLicenseConfigurationRequest: shared.UpdateLicenseConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLicenseConfigurationXAmzTargetEnum;
}
export declare class UpdateLicenseConfigurationResponse extends SpeakeasyBase {
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
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * Success
     */
    updateLicenseConfigurationResponse?: Record<string, any>;
}
