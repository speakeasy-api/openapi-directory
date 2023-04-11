import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchV1OrganicRequest extends SpeakeasyBase {
    /**
     * Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.
     */
    callback?: string;
    /**
     * Metadata field
     */
    field?: string;
    /**
     * Lucene-type search query
     */
    q?: string;
    /**
     * Number of query results to return
     */
    size?: number;
    /**
     * Request total only; do not return hits
     */
    totalOnly?: boolean;
}
export declare class GetSearchV1OrganicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    /**
     * Organic Search API. Returns results in descending relevance order
     */
    organicResult?: shared.OrganicResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
