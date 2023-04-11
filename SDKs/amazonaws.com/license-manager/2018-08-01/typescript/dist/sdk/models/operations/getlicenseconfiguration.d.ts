import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLicenseConfigurationXAmzTargetEnum {
    AWSLicenseManagerGetLicenseConfiguration = "AWSLicenseManager.GetLicenseConfiguration"
}
export declare class GetLicenseConfigurationRequest extends SpeakeasyBase {
    getLicenseConfigurationRequest: shared.GetLicenseConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLicenseConfigurationXAmzTargetEnum;
}
export declare class GetLicenseConfigurationResponse extends SpeakeasyBase {
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
    getLicenseConfigurationResponse?: shared.GetLicenseConfigurationResponse;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
}
