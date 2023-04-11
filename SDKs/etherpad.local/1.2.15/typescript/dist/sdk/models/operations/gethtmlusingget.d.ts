import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETHTMLUsingGETRequest extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETHTMLUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETHTMLUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETHTMLUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETHTMLUsingGet200ApplicationJSONData extends SpeakeasyBase {
    html?: string;
}
/**
 * ok (code 0)
 */
export declare class GETHTMLUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GETHTMLUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class GETHTMLUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getHTMLUsingGET200ApplicationJSONObject?: GETHTMLUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getHTMLUsingGET400ApplicationJSONObject?: GETHTMLUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getHTMLUsingGET401ApplicationJSONObject?: GETHTMLUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getHTMLUsingGET500ApplicationJSONObject?: GETHTMLUsingGet500ApplicationJSON;
}
