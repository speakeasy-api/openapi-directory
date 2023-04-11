import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRootsXAmzTargetEnum {
    AWSOrganizationsV20161128ListRoots = "AWSOrganizationsV20161128.ListRoots"
}
export declare class ListRootsRequest extends SpeakeasyBase {
    listRootsRequest: shared.ListRootsRequest;
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
    xAmzTarget: ListRootsXAmzTargetEnum;
}
export declare class ListRootsResponse extends SpeakeasyBase {
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
    listRootsResponse?: shared.ListRootsResponse;
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
