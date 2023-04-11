import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLicenseVersionsXAmzTargetEnum {
    AWSLicenseManagerListLicenseVersions = "AWSLicenseManager.ListLicenseVersions"
}
export declare class ListLicenseVersionsRequest extends SpeakeasyBase {
    listLicenseVersionsRequest: shared.ListLicenseVersionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLicenseVersionsXAmzTargetEnum;
}
export declare class ListLicenseVersionsResponse extends SpeakeasyBase {
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
    listLicenseVersionsResponse?: shared.ListLicenseVersionsResponse;
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
