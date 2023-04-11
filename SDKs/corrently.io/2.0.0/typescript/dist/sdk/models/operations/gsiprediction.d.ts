import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GsiPredictionRequest extends SpeakeasyBase {
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
 * Standarized location info sourced for prediction
 */
export declare class GsiPrediction200ApplicationJSONLocation extends SpeakeasyBase {
    /**
     * Pretty Print city name
     */
    city?: string;
    /**
     * Zipcode (Postleitzahl)
     */
    zip?: string;
}
/**
 * Indicates number of hours a device should run
 */
export declare class GsiPrediction200ApplicationJSONMatrixH0 extends SpeakeasyBase {
    /**
     * device should run in 1 hour
     */
    avg1?: string;
    /**
     * device should run in 2 hours
     */
    avg2?: string;
    /**
     * device should run in 3 hour
     */
    avg3?: string;
}
/**
 * Device switching recommendation.
 */
export declare class GsiPrediction200ApplicationJSONMatrix extends SpeakeasyBase {
    /**
     * Indicates number of hours a device should run
     */
    h0?: GsiPrediction200ApplicationJSONMatrixH0;
}
/**
 * Success
 */
export declare class GsiPrediction200ApplicationJSON extends SpeakeasyBase {
    /**
     * Prediction for the upcomming hours
     */
    forecast?: shared.ForecastItem[];
    /**
     * Standarized location info sourced for prediction
     */
    location?: GsiPrediction200ApplicationJSONLocation;
    /**
     * Device switching recommendation.
     */
    matrix?: GsiPrediction200ApplicationJSONMatrix;
}
export declare class GsiPredictionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    gsiPrediction200ApplicationJSONObject?: GsiPrediction200ApplicationJSON;
}
