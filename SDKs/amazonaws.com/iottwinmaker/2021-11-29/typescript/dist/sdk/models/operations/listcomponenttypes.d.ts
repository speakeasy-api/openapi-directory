import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListComponentTypesRequestBody extends SpeakeasyBase {
    /**
     * A list of objects that filter the request.
     */
    filters?: shared.ListComponentTypesFilter[];
    /**
     * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
     */
    maxResults?: number;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: string;
}
export declare class ListComponentTypesRequest extends SpeakeasyBase {
    requestBody: ListComponentTypesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    /**
     * The ID of the workspace.
     */
    workspaceId: string;
}
export declare class ListComponentTypesResponse extends SpeakeasyBase {
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
    listComponentTypesResponse?: shared.ListComponentTypesResponse;
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
