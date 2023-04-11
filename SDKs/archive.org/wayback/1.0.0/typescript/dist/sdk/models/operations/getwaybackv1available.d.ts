import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWaybackV1AvailableRequest extends SpeakeasyBase {
    /**
     * Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.
     *
     * @remarks
     *
     */
    callback?: string;
    /**
     * The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.
     *
     * @remarks
     *
     */
    closest?: shared.ClosestEnum;
    /**
     * HTTP status codes to filter by. Only results with these codes will be returned
     *
     * @remarks
     *
     */
    statusCode?: shared.StatusCodeEnum;
    /**
     * The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.
     *
     * @remarks
     *
     */
    tag?: string;
    /**
     * Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.
     *
     * @remarks
     *
     */
    timeout?: number;
    /**
     * Timestamp requested in ISO 8601 format. The following formats are acceptable:
     *
     * @remarks
     *  - YYYY
     *  - YYYY-MM
     *  - YYYY-MM-DD
     *  - YYYY-MM-DDTHH:mm:SSz
     *  - YYYY-MM-DD:HH:mm+00:00
     *
     */
    timestamp?: string;
    /**
     * A single URL to query.
     */
    url: string;
}
export declare class GetWaybackV1AvailableResponse extends SpeakeasyBase {
    /**
     * Nominal Availability results
     */
    availabilityResults?: shared.AvailabilityResults;
    body?: Uint8Array;
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
