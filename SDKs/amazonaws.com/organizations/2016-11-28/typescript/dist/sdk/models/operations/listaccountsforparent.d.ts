import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAccountsForParentXAmzTargetEnum {
    AWSOrganizationsV20161128ListAccountsForParent = "AWSOrganizationsV20161128.ListAccountsForParent"
}
export declare class ListAccountsForParentRequest extends SpeakeasyBase {
    listAccountsForParentRequest: shared.ListAccountsForParentRequest;
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
    xAmzTarget: ListAccountsForParentXAmzTargetEnum;
}
export declare class ListAccountsForParentResponse extends SpeakeasyBase {
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
    listAccountsForParentResponse?: shared.ListAccountsForParentResponse;
    /**
     * ParentNotFoundException
     */
    parentNotFoundException?: any;
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
}
