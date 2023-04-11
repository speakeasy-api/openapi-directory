import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Include Connector properties to create here
 */
export declare class PostConnectorsRequestBody extends SpeakeasyBase {
    chargestation?: string;
    format?: string;
    power?: number;
    powerType?: string;
    rate?: string;
    type?: string;
}
/**
 * Returns the new connector object
 */
export declare class PostConnectors200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PostConnectorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the new connector object
     */
    postConnectors200ApplicationJSONObject?: PostConnectors200ApplicationJSON;
}
