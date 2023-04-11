import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DecodeViaNeoVINRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Decode VIN on the fly instead of cached response
     */
    forceDecode?: boolean;
    /**
     * Boolean variable to indicate wheather to include generic data as well in response
     */
    includeGeneric?: boolean;
    /**
     * The VIN to identify the car. Must be a valid 17 char VIN
     */
    vin: string;
}
export declare class DecodeViaNeoVINResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Basic sepcifications details about the car
     */
    neoVIN?: shared.NeoVIN;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
