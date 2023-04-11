import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum {
    AWSLicenseManagerListFailuresForLicenseConfigurationOperations = "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations"
}
export declare class ListFailuresForLicenseConfigurationOperationsRequest extends SpeakeasyBase {
    listFailuresForLicenseConfigurationOperationsRequest: shared.ListFailuresForLicenseConfigurationOperationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum;
}
export declare class ListFailuresForLicenseConfigurationOperationsResponse extends SpeakeasyBase {
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
     * Success
     */
    listFailuresForLicenseConfigurationOperationsResponse?: shared.ListFailuresForLicenseConfigurationOperationsResponse;
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
