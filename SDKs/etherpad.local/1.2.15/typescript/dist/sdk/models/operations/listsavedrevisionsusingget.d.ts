import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSavedRevisionsUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListSavedRevisionsUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListSavedRevisionsUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListSavedRevisionsUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class ListSavedRevisionsUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListSavedRevisionsUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listSavedRevisionsUsingGET200ApplicationJSONObject?: ListSavedRevisionsUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listSavedRevisionsUsingGET400ApplicationJSONObject?: ListSavedRevisionsUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listSavedRevisionsUsingGET401ApplicationJSONObject?: ListSavedRevisionsUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listSavedRevisionsUsingGET500ApplicationJSONObject?: ListSavedRevisionsUsingGet500ApplicationJSON;
}
