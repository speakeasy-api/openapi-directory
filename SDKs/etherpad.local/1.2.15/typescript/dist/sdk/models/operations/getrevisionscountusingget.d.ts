import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETRevisionsCountUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETRevisionsCountUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETRevisionsCountUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETRevisionsCountUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETRevisionsCountUsingGet200ApplicationJSONData extends SpeakeasyBase {
    revisions?: number;
}
/**
 * ok (code 0)
 */
export declare class GETRevisionsCountUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GETRevisionsCountUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class GETRevisionsCountUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getRevisionsCountUsingGET200ApplicationJSONObject?: GETRevisionsCountUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getRevisionsCountUsingGET400ApplicationJSONObject?: GETRevisionsCountUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getRevisionsCountUsingGET401ApplicationJSONObject?: GETRevisionsCountUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getRevisionsCountUsingGET500ApplicationJSONObject?: GETRevisionsCountUsingGet500ApplicationJSON;
}
