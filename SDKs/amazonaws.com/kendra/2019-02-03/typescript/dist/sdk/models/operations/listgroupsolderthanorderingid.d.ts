import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListGroupsOlderThanOrderingIdXAmzTargetEnum {
    AWSKendraFrontendServiceListGroupsOlderThanOrderingId = "AWSKendraFrontendService.ListGroupsOlderThanOrderingId"
}
export declare class ListGroupsOlderThanOrderingIdRequest extends SpeakeasyBase {
    listGroupsOlderThanOrderingIdRequest: shared.ListGroupsOlderThanOrderingIdRequest;
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
    xAmzTarget: ListGroupsOlderThanOrderingIdXAmzTargetEnum;
}
export declare class ListGroupsOlderThanOrderingIdResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listGroupsOlderThanOrderingIdResponse?: shared.ListGroupsOlderThanOrderingIdResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
