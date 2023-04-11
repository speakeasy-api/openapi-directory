import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchV1ScrapeRequest extends SpeakeasyBase {
    /**
     * Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.
     */
    callback?: string;
    /**
     * Cursor for scrolling (used for subsequent calls)
     */
    cursor?: string;
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
     * sort collations
     */
    sort?: string;
    /**
     * Request total only; do not return hits
     */
    totalOnly?: boolean;
}
export declare class GetSearchV1ScrapeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    /**
     * Scaping API
     */
    scrapeResult?: shared.ScrapeResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
