import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETSavedRevisionsCountUsingGETRequest extends SpeakeasyBase {
    padID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GETSavedRevisionsCountUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GETSavedRevisionsCountUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GETSavedRevisionsCountUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class GETSavedRevisionsCountUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GETSavedRevisionsCountUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getSavedRevisionsCountUsingGET200ApplicationJSONObject?: GETSavedRevisionsCountUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getSavedRevisionsCountUsingGET400ApplicationJSONObject?: GETSavedRevisionsCountUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getSavedRevisionsCountUsingGET401ApplicationJSONObject?: GETSavedRevisionsCountUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getSavedRevisionsCountUsingGET500ApplicationJSONObject?: GETSavedRevisionsCountUsingGet500ApplicationJSON;
}
