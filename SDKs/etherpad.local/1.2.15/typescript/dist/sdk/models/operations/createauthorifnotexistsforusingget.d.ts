import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateAuthorIfNotExistsForUsingGETRequest extends SpeakeasyBase {
    authorMapper?: string;
    name?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateAuthorIfNotExistsForUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateAuthorIfNotExistsForUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateAuthorIfNotExistsForUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGet200ApplicationJSONData extends SpeakeasyBase {
    authorID?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateAuthorIfNotExistsForUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: CreateAuthorIfNotExistsForUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class CreateAuthorIfNotExistsForUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createAuthorIfNotExistsForUsingGET200ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createAuthorIfNotExistsForUsingGET400ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createAuthorIfNotExistsForUsingGET401ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createAuthorIfNotExistsForUsingGET500ApplicationJSONObject?: CreateAuthorIfNotExistsForUsingGet500ApplicationJSON;
}
