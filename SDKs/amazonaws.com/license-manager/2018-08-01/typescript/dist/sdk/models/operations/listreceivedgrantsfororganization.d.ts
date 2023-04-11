import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListReceivedGrantsForOrganizationXAmzTargetEnum {
    AWSLicenseManagerListReceivedGrantsForOrganization = "AWSLicenseManager.ListReceivedGrantsForOrganization"
}
export declare class ListReceivedGrantsForOrganizationRequest extends SpeakeasyBase {
    listReceivedGrantsForOrganizationRequest: shared.ListReceivedGrantsForOrganizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReceivedGrantsForOrganizationXAmzTargetEnum;
}
export declare class ListReceivedGrantsForOrganizationResponse extends SpeakeasyBase {
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
    listReceivedGrantsForOrganizationResponse?: shared.ListReceivedGrantsForOrganizationResponse;
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
