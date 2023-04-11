import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListUsageForLicenseConfigurationXAmzTargetEnum {
    AWSLicenseManagerListUsageForLicenseConfiguration = "AWSLicenseManager.ListUsageForLicenseConfiguration"
}
export declare class ListUsageForLicenseConfigurationRequest extends SpeakeasyBase {
    listUsageForLicenseConfigurationRequest: shared.ListUsageForLicenseConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUsageForLicenseConfigurationXAmzTargetEnum;
}
export declare class ListUsageForLicenseConfigurationResponse extends SpeakeasyBase {
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
     * FilterLimitExceededException
     */
    filterLimitExceededException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    listUsageForLicenseConfigurationResponse?: shared.ListUsageForLicenseConfigurationResponse;
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
