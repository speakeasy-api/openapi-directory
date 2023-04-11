import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListAuthorsOfPadUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class ListAuthorsOfPadUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListAuthorsOfPadUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListAuthorsOfPadUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAuthorsOfPadUsingGet200ApplicationJSONData extends SpeakeasyBase {
    authorIDs?: string[];
}
/**
 * ok (code 0)
 */
export declare class ListAuthorsOfPadUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListAuthorsOfPadUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class ListAuthorsOfPadUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listAuthorsOfPadUsingGET200ApplicationJSONObject?: ListAuthorsOfPadUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listAuthorsOfPadUsingGET400ApplicationJSONObject?: ListAuthorsOfPadUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listAuthorsOfPadUsingGET401ApplicationJSONObject?: ListAuthorsOfPadUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listAuthorsOfPadUsingGET500ApplicationJSONObject?: ListAuthorsOfPadUsingGet500ApplicationJSON;
}
