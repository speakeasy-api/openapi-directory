import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListStreamingSessionsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Filters the request to streaming sessions created by the given user.
     */
    createdBy?: string;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    nextToken?: string;
    /**
     * Filters the request to streaming session owned by the given user
     */
    ownedBy?: string;
    /**
     * Filters the request to only the provided session IDs.
     */
    sessionIds?: string;
    /**
     * The studio ID.
     */
    studioId: string;
}
export declare class ListStreamingSessionsResponse extends SpeakeasyBase {
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
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * Success
     */
    listStreamingSessionsResponse?: shared.ListStreamingSessionsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
