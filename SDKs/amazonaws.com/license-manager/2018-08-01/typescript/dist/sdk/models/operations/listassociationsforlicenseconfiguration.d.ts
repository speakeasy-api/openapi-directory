import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAssociationsForLicenseConfigurationXAmzTargetEnum {
    AWSLicenseManagerListAssociationsForLicenseConfiguration = "AWSLicenseManager.ListAssociationsForLicenseConfiguration"
}
export declare class ListAssociationsForLicenseConfigurationRequest extends SpeakeasyBase {
    listAssociationsForLicenseConfigurationRequest: shared.ListAssociationsForLicenseConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssociationsForLicenseConfigurationXAmzTargetEnum;
}
export declare class ListAssociationsForLicenseConfigurationResponse extends SpeakeasyBase {
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
    listAssociationsForLicenseConfigurationResponse?: shared.ListAssociationsForLicenseConfigurationResponse;
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
