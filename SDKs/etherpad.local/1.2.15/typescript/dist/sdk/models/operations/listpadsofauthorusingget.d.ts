import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPadsOfAuthorUsingGETRequest extends SpeakeasyBase {
    authorID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListPadsOfAuthorUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListPadsOfAuthorUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListPadsOfAuthorUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListPadsOfAuthorUsingGet200ApplicationJSONData extends SpeakeasyBase {
    padIDs?: string[];
}
/**
 * ok (code 0)
 */
export declare class ListPadsOfAuthorUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListPadsOfAuthorUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class ListPadsOfAuthorUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listPadsOfAuthorUsingGET200ApplicationJSONObject?: ListPadsOfAuthorUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listPadsOfAuthorUsingGET400ApplicationJSONObject?: ListPadsOfAuthorUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listPadsOfAuthorUsingGET401ApplicationJSONObject?: ListPadsOfAuthorUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listPadsOfAuthorUsingGET500ApplicationJSONObject?: ListPadsOfAuthorUsingGet500ApplicationJSON;
}
