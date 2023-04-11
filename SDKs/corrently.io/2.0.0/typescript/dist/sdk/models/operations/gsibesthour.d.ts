import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GsiBesthourRequest extends SpeakeasyBase {
    /**
     * How many hours in row do you need the device turned on?
     */
    hours?: number;
    /**
     * Any valid Stromkonto account (address).
     */
    key?: string;
    /**
     * Number of hours to check (default 24 hours from now).
     */
    timeframe?: number;
    /**
     * Zipcode (Postleitzahl) of a city in Germany.
     */
    zip?: string;
}
export declare class GsiBesthourResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    gsiBesthour200ApplicationJSONBoolean?: boolean;
}
