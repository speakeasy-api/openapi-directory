import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAWSServiceAccessForOrganizationXAmzTargetEnum {
    AWSOrganizationsV20161128ListAWSServiceAccessForOrganization = "AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization"
}
export declare class ListAWSServiceAccessForOrganizationRequest extends SpeakeasyBase {
    listAWSServiceAccessForOrganizationRequest: shared.ListAWSServiceAccessForOrganizationRequest;
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
    xAmzTarget: ListAWSServiceAccessForOrganizationXAmzTargetEnum;
}
export declare class ListAWSServiceAccessForOrganizationResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    listAWSServiceAccessForOrganizationResponse?: shared.ListAWSServiceAccessForOrganizationResponse;
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
