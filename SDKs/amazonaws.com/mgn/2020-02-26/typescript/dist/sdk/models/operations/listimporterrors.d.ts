import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListImportErrorsRequestBody extends SpeakeasyBase {
    /**
     * List import errors request import id.
     */
    importID: string;
    /**
     * List import errors request max results.
     */
    maxResults?: number;
    /**
     * List import errors request next token.
     */
    nextToken?: string;
}
export declare class ListImportErrorsRequest extends SpeakeasyBase {
    requestBody: ListImportErrorsRequestBody;
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
export declare class ListImportErrorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listImportErrorsResponse?: shared.ListImportErrorsResponse;
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
