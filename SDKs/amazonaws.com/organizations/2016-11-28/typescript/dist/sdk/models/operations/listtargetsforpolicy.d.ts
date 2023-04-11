import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTargetsForPolicyXAmzTargetEnum {
    AWSOrganizationsV20161128ListTargetsForPolicy = "AWSOrganizationsV20161128.ListTargetsForPolicy"
}
export declare class ListTargetsForPolicyRequest extends SpeakeasyBase {
    listTargetsForPolicyRequest: shared.ListTargetsForPolicyRequest;
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
    xAmzTarget: ListTargetsForPolicyXAmzTargetEnum;
}
export declare class ListTargetsForPolicyResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listTargetsForPolicyResponse?: shared.ListTargetsForPolicyResponse;
    /**
     * PolicyNotFoundException
     */
    policyNotFoundException?: any;
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
