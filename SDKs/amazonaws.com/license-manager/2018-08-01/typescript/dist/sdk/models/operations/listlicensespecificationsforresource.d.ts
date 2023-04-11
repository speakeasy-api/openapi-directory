import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLicenseSpecificationsForResourceXAmzTargetEnum {
    AWSLicenseManagerListLicenseSpecificationsForResource = "AWSLicenseManager.ListLicenseSpecificationsForResource"
}
export declare class ListLicenseSpecificationsForResourceRequest extends SpeakeasyBase {
    listLicenseSpecificationsForResourceRequest: shared.ListLicenseSpecificationsForResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLicenseSpecificationsForResourceXAmzTargetEnum;
}
export declare class ListLicenseSpecificationsForResourceResponse extends SpeakeasyBase {
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
    listLicenseSpecificationsForResourceResponse?: shared.ListLicenseSpecificationsForResourceResponse;
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
