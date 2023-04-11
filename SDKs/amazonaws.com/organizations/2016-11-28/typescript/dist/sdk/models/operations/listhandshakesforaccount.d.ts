import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHandshakesForAccountXAmzTargetEnum {
    AWSOrganizationsV20161128ListHandshakesForAccount = "AWSOrganizationsV20161128.ListHandshakesForAccount"
}
export declare class ListHandshakesForAccountRequest extends SpeakeasyBase {
    listHandshakesForAccountRequest: shared.ListHandshakesForAccountRequest;
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
    xAmzTarget: ListHandshakesForAccountXAmzTargetEnum;
}
export declare class ListHandshakesForAccountResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listHandshakesForAccountResponse?: shared.ListHandshakesForAccountResponse;
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
