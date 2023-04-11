import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListLogSourcesRequestBody extends SpeakeasyBase {
    /**
     * Lists the log sources in input order, namely Region, source type, and member account.
     */
    inputOrder?: shared.DimensionEnum[];
    /**
     * List the view of log sources for enabled Amazon Security Lake accounts for specific Amazon Web Services sources from specific accounts and specific Regions.
     */
    listAllDimensions?: Record<string, Record<string, string[]>>;
    /**
     * List the view of log sources for enabled Security Lake accounts for all Amazon Web Services sources from specific accounts or specific Regions.
     */
    listSingleDimension?: string[];
    /**
     * Lists the view of log sources for enabled Security Lake accounts for specific Amazon Web Services sources from specific accounts or specific Regions.
     */
    listTwoDimensions?: Record<string, string[]>;
    /**
     * The maximum number of accounts for which the log sources are displayed.
     */
    maxResults?: number;
    /**
     * If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page.
     */
    nextToken?: string;
}
export declare class ListLogSourcesRequest extends SpeakeasyBase {
    requestBody: ListLogSourcesRequestBody;
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
export declare class ListLogSourcesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listLogSourcesResponse?: shared.ListLogSourcesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
