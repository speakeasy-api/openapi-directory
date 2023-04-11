import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETSessionInfoUsingGETRequest extends SpeakeasyBase {
    sessionID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETSessionInfoUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETSessionInfoUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETSessionInfoUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETSessionInfoUsingGet200ApplicationJSONDataInfo extends SpeakeasyBase {
    authorID?: string;
    groupID?: string;
    id?: string;
    validUntil?: number;
}
export declare class GETSessionInfoUsingGet200ApplicationJSONData extends SpeakeasyBase {
    info?: GETSessionInfoUsingGet200ApplicationJSONDataInfo;
}
/**
 * ok (code 0)
 */
export declare class GETSessionInfoUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GETSessionInfoUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class GETSessionInfoUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getSessionInfoUsingGET200ApplicationJSONObject?: GETSessionInfoUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getSessionInfoUsingGET400ApplicationJSONObject?: GETSessionInfoUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getSessionInfoUsingGET401ApplicationJSONObject?: GETSessionInfoUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getSessionInfoUsingGET500ApplicationJSONObject?: GETSessionInfoUsingGet500ApplicationJSON;
}
