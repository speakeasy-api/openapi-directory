import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListReceivedLicensesXAmzTargetEnum {
    AWSLicenseManagerListReceivedLicenses = "AWSLicenseManager.ListReceivedLicenses"
}
export declare class ListReceivedLicensesRequest extends SpeakeasyBase {
    listReceivedLicensesRequest: shared.ListReceivedLicensesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReceivedLicensesXAmzTargetEnum;
}
export declare class ListReceivedLicensesResponse extends SpeakeasyBase {
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
    listReceivedLicensesResponse?: shared.ListReceivedLicensesResponse;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
