import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLicenseConfigurationsXAmzTargetEnum {
    AWSLicenseManagerListLicenseConfigurations = "AWSLicenseManager.ListLicenseConfigurations"
}
export declare class ListLicenseConfigurationsRequest extends SpeakeasyBase {
    listLicenseConfigurationsRequest: shared.ListLicenseConfigurationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLicenseConfigurationsXAmzTargetEnum;
}
export declare class ListLicenseConfigurationsResponse extends SpeakeasyBase {
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
    listLicenseConfigurationsResponse?: shared.ListLicenseConfigurationsResponse;
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
