import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV4LayersAsPlantedActivityIdContentsSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class GetV4LayersAsPlantedActivityIdContentsRequest extends SpeakeasyBase {
    /**
     * Must be either \* /* or application/octet-stream,application/json
     */
    accept: string;
    /**
     * Byte range `bytes=start-end` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1). e.g. bytes=0-1048576. Currently only single range value is supported. Both start and end need to be specified, end value should be greater than start and end - start should not be greater than 5MiB.
     */
    range: string;
    /**
     * Unique identifier of the Planting Activity.
     */
    activityId: string;
}
export declare class GetV4LayersAsPlantedActivityIdContentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Not Modified
     */
    empty?: Record<string, any>;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
