import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETLastEditedUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETLastEditedUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETLastEditedUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETLastEditedUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETLastEditedUsingGet200ApplicationJSONData extends SpeakeasyBase {
    lastEdited?: number;
}
/**
 * ok (code 0)
 */
export declare class GETLastEditedUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GETLastEditedUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class GETLastEditedUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getLastEditedUsingGET200ApplicationJSONObject?: GETLastEditedUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getLastEditedUsingGET400ApplicationJSONObject?: GETLastEditedUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getLastEditedUsingGET401ApplicationJSONObject?: GETLastEditedUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getLastEditedUsingGET500ApplicationJSONObject?: GETLastEditedUsingGet500ApplicationJSON;
}
