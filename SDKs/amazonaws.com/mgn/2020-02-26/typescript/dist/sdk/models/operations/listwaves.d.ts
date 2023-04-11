import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Waves list filters.
 */
export declare class ListWavesRequestBodyFilters extends SpeakeasyBase {
    isArchived?: boolean;
    waveIDs?: string[];
}
export declare class ListWavesRequestBody extends SpeakeasyBase {
    /**
     * Waves list filters.
     */
    filters?: ListWavesRequestBodyFilters;
    /**
     * Maximum results to return when listing waves.
     */
    maxResults?: number;
    /**
     * Request next token.
     */
    nextToken?: string;
}
export declare class ListWavesRequest extends SpeakeasyBase {
    requestBody: ListWavesRequestBody;
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
}
export declare class ListWavesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listWavesResponse?: shared.ListWavesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
