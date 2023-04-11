import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV4LayersAsHarvestedSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class GetV4LayersAsHarvestedRequest extends SpeakeasyBase {
    /**
     * Must be either \* /* or application/octet-stream,application/json
     */
    accept: string;
    /**
     * Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.
     */
    xLimit?: number;
    /**
     * Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.
     */
    xNextToken?: string;
    /**
     * Optional start time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with an end time at or after (inclusive) the specified time will match this filter. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.
     */
    occurredAfter?: Date;
    /**
     * Optional end time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a start time at or before (inclusive) the specified time. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.
     */
    occurredBefore?: Date;
    /**
     * Optional unique identifier of the resource owner.  If resourceOwnerId is not specified, it defaults to the x-authenticated-user-uuid.
     */
    resourceOwnerId?: string;
    /**
     * Optional updated time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a modification time at or after (inclusive) the specified time.
     */
    updatedAfter?: Date;
}
export declare class GetV4LayersAsHarvestedResponse extends SpeakeasyBase {
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
    harvestActivities?: shared.HarvestActivities;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
