import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FareValueRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Car's make
     */
    make?: string;
    /**
     * miles vehicle has driven in total
     */
    miles?: number;
    /**
     * Car's model
     */
    model?: string;
    /**
     * Postal code of the car
     */
    postalCode?: string;
    /**
     * Radius around postal code
     */
    radius?: number;
    /**
     * Car's variant
     */
    variant?: string;
    /**
     * Predict price for a VRM
     */
    vrm?: string;
    /**
     * Car manufacturing year
     */
    year?: number;
}
export declare class FareValueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Predict fare value of car for UK based on YMMT & miles
     */
    fareValue?: shared.FareValue;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
