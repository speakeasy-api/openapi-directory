import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GsiDispatchRequest extends SpeakeasyBase {
    /**
     * Any valid Stromkonto account (address).
     */
    key?: string;
    /**
     * Zipcode (Postleitzahl) of a city in Germany.
     */
    zip?: string;
}
/**
 * Evaluated timeframe for this request
 */
export declare class GsiDispatch200ApplicationJSONTimeframe extends SpeakeasyBase {
    /**
     * Ending time of window evaluated for this request/dispatches.
     */
    end?: number;
    /**
     * Starting time of window evaluated in order to get dispatches
     */
    start?: number;
}
/**
 * Success
 */
export declare class GsiDispatch200ApplicationJSON extends SpeakeasyBase {
    /**
     * Averaged geospatial distance in kilometers between energy generation and usage at requested location.
     */
    avgDistanceKm?: number;
    /**
     * List of current sources of green energy (into requested location)
     */
    dispatchFrom?: shared.DispatchLocation[];
    /**
     * List of current targets of green energy (out of requested location)
     */
    dispatchTarget?: shared.DispatchLocation[];
    /**
     * Green Energy Mix after dispatch of given city
     */
    postmix?: Record<string, any>;
    /**
     * Green Energy Mix prior to dispatch of given city
     */
    premix?: Record<string, any>;
    /**
     * Evaluated timeframe for this request
     */
    timeframe?: GsiDispatch200ApplicationJSONTimeframe;
}
export declare class GsiDispatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    gsiDispatch200ApplicationJSONObject?: GsiDispatch200ApplicationJSON;
}
