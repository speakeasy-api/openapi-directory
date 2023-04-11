import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLicenseConversionTasksXAmzTargetEnum {
    AWSLicenseManagerListLicenseConversionTasks = "AWSLicenseManager.ListLicenseConversionTasks"
}
export declare class ListLicenseConversionTasksRequest extends SpeakeasyBase {
    listLicenseConversionTasksRequest: shared.ListLicenseConversionTasksRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLicenseConversionTasksXAmzTargetEnum;
}
export declare class ListLicenseConversionTasksResponse extends SpeakeasyBase {
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
    listLicenseConversionTasksResponse?: shared.ListLicenseConversionTasksResponse;
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
