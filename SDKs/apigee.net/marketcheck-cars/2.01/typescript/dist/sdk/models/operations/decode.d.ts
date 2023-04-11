import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DecodeRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * The VIN to identify the car. Must be a valid 17 char VIN
     */
    vin: string;
}
export declare class DecodeResponse extends SpeakeasyBase {
    /**
     * Basic sepcifications details about the car
     */
    build?: shared.Build;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
