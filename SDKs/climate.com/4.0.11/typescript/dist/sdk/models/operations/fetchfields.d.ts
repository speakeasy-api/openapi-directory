import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchFieldsSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class FetchFieldsRequest extends SpeakeasyBase {
    /**
     * Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.
     */
    xLimit?: number;
    /**
     * Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.
     */
    xNextToken?: string;
    /**
     * Optional prefix filter for field name. Must be at least 3 characters.
     */
    fieldName?: string;
}
export declare class FetchFieldsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Modified
     */
    empty?: Record<string, any>;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    /**
     * OK
     */
    fields?: shared.Fields;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
