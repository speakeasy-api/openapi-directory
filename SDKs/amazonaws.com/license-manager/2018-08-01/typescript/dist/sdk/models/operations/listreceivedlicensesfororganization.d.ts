import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListReceivedLicensesForOrganizationXAmzTargetEnum {
    AWSLicenseManagerListReceivedLicensesForOrganization = "AWSLicenseManager.ListReceivedLicensesForOrganization"
}
export declare class ListReceivedLicensesForOrganizationRequest extends SpeakeasyBase {
    listReceivedLicensesForOrganizationRequest: shared.ListReceivedLicensesForOrganizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReceivedLicensesForOrganizationXAmzTargetEnum;
}
export declare class ListReceivedLicensesForOrganizationResponse extends SpeakeasyBase {
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
    listReceivedLicensesForOrganizationResponse?: shared.ListReceivedLicensesForOrganizationResponse;
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
