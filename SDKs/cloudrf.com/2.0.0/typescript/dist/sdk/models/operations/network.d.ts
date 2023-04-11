import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NetworkSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class NetworkRequest extends SpeakeasyBase {
    /**
     * Height above ground level in metres
     */
    alt: number;
    /**
     * Latitude in decimal degrees
     */
    lat: number;
    /**
     * Longitude in decimal degrees
     */
    lon: number;
    /**
     * Super layer name
     */
    nam: string;
    /**
     * Network name
     */
    net: string;
    /**
     * Receiver gain in dBi
     */
    rxg?: number;
}
export declare class NetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
