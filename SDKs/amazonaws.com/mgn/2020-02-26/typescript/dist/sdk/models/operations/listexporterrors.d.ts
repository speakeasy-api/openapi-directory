import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListExportErrorsRequestBody extends SpeakeasyBase {
    /**
     * List export errors request export id.
     */
    exportID: string;
    /**
     * List export errors request max results.
     */
    maxResults?: number;
    /**
     * List export errors request next token.
     */
    nextToken?: string;
}
export declare class ListExportErrorsRequest extends SpeakeasyBase {
    requestBody: ListExportErrorsRequestBody;
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
export declare class ListExportErrorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listExportErrorsResponse?: shared.ListExportErrorsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
