import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDelegatedServicesForAccountXAmzTargetEnum {
    AWSOrganizationsV20161128ListDelegatedServicesForAccount = "AWSOrganizationsV20161128.ListDelegatedServicesForAccount"
}
export declare class ListDelegatedServicesForAccountRequest extends SpeakeasyBase {
    listDelegatedServicesForAccountRequest: shared.ListDelegatedServicesForAccountRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDelegatedServicesForAccountXAmzTargetEnum;
}
export declare class ListDelegatedServicesForAccountResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    /**
     * AccountNotRegisteredException
     */
    accountNotRegisteredException?: any;
    /**
     * ConstraintViolationException
     */
    constraintViolationException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listDelegatedServicesForAccountResponse?: shared.ListDelegatedServicesForAccountResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedAPIEndpointException
     */
    unsupportedAPIEndpointException?: any;
}
