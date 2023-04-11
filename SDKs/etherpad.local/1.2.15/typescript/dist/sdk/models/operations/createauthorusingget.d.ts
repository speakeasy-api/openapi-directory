import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateAuthorUsingGETRequest extends SpeakeasyBase {
    name?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateAuthorUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateAuthorUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateAuthorUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorUsingGet200ApplicationJSONData extends SpeakeasyBase {
    authorID?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateAuthorUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class CreateAuthorUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createAuthorUsingGET200ApplicationJSONObject?: CreateAuthorUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createAuthorUsingGET400ApplicationJSONObject?: CreateAuthorUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createAuthorUsingGET401ApplicationJSONObject?: CreateAuthorUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createAuthorUsingGET500ApplicationJSONObject?: CreateAuthorUsingGet500ApplicationJSON;
}
