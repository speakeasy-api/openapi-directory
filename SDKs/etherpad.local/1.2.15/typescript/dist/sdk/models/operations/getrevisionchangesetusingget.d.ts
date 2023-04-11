import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETRevisionChangesetUsingGETRequest extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETRevisionChangesetUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETRevisionChangesetUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETRevisionChangesetUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class GETRevisionChangesetUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETRevisionChangesetUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getRevisionChangesetUsingGET200ApplicationJSONObject?: GETRevisionChangesetUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getRevisionChangesetUsingGET400ApplicationJSONObject?: GETRevisionChangesetUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getRevisionChangesetUsingGET401ApplicationJSONObject?: GETRevisionChangesetUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getRevisionChangesetUsingGET500ApplicationJSONObject?: GETRevisionChangesetUsingGet500ApplicationJSON;
}
