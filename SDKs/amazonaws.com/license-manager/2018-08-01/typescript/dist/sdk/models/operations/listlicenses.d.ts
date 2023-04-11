import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLicensesXAmzTargetEnum {
    AWSLicenseManagerListLicenses = "AWSLicenseManager.ListLicenses"
}
export declare class ListLicensesRequest extends SpeakeasyBase {
    listLicensesRequest: shared.ListLicensesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLicensesXAmzTargetEnum;
}
export declare class ListLicensesResponse extends SpeakeasyBase {
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
    listLicensesResponse?: shared.ListLicensesResponse;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
