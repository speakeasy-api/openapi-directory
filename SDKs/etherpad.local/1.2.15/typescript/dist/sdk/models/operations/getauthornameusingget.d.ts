import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETAuthorNameUsingGETRequest extends SpeakeasyBase {
    authorID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETAuthorNameUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETAuthorNameUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETAuthorNameUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETAuthorNameUsingGet200ApplicationJSONDataInfo extends SpeakeasyBase {
    colorId?: string;
    id?: string;
    name?: string;
    timestamp?: number;
}
export declare class GETAuthorNameUsingGet200ApplicationJSONData extends SpeakeasyBase {
    info?: GETAuthorNameUsingGet200ApplicationJSONDataInfo;
}
/**
 * ok (code 0)
 */
export declare class GETAuthorNameUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GETAuthorNameUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class GETAuthorNameUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getAuthorNameUsingGET200ApplicationJSONObject?: GETAuthorNameUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getAuthorNameUsingGET400ApplicationJSONObject?: GETAuthorNameUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getAuthorNameUsingGET401ApplicationJSONObject?: GETAuthorNameUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getAuthorNameUsingGET500ApplicationJSONObject?: GETAuthorNameUsingGet500ApplicationJSON;
}
