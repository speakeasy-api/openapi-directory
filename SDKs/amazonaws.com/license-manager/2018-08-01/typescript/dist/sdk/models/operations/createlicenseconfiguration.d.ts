import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLicenseConfigurationXAmzTargetEnum {
    AWSLicenseManagerCreateLicenseConfiguration = "AWSLicenseManager.CreateLicenseConfiguration"
}
export declare class CreateLicenseConfigurationRequest extends SpeakeasyBase {
    createLicenseConfigurationRequest: shared.CreateLicenseConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLicenseConfigurationXAmzTargetEnum;
}
export declare class CreateLicenseConfigurationResponse extends SpeakeasyBase {
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
    createLicenseConfigurationResponse?: shared.CreateLicenseConfigurationResponse;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
}
