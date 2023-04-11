import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter which will return only memberships in the specified status.
 */
export declare enum ListMembershipsStatusEnum {
    Active = "ACTIVE",
    Removed = "REMOVED",
    CollaborationDeleted = "COLLABORATION_DELETED"
}
export declare class ListMembershipsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum size of the results that is returned per call.
     */
    maxResults?: number;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: string;
    /**
     * A filter which will return only memberships in the specified status.
     */
    status?: ListMembershipsStatusEnum;
}
export declare class ListMembershipsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listMembershipsOutput?: shared.ListMembershipsOutput;
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
