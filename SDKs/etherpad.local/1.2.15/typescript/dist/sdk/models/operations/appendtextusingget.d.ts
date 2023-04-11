import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppendTextUsingGETRequest extends SpeakeasyBase {
    padID?: string;
    text?: string;
}
/**
 * internal api error (code 2)
 */
export declare class AppendTextUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class AppendTextUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class AppendTextUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class AppendTextUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class AppendTextUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    appendTextUsingGET200ApplicationJSONObject?: AppendTextUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    appendTextUsingGET400ApplicationJSONObject?: AppendTextUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    appendTextUsingGET401ApplicationJSONObject?: AppendTextUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    appendTextUsingGET500ApplicationJSONObject?: AppendTextUsingGet500ApplicationJSON;
}
