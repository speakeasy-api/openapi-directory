import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListWorkspacesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Optional filter for workspace alias. Only the workspaces with aliases that begin with this value will be returned.
     */
    alias?: string;
    /**
     * Maximum results to return in response (default=100, maximum=1000).
     */
    maxResults?: number;
    /**
     * Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListWorkspaces request.
     */
    nextToken?: string;
}
export declare class ListWorkspacesResponse extends SpeakeasyBase {
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
    listWorkspacesResponse?: shared.ListWorkspacesResponse;
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
