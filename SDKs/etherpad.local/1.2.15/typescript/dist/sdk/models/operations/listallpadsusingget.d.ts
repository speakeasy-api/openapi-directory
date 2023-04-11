import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * internal api error (code 2)
 */
export declare class ListAllPadsUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListAllPadsUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListAllPadsUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllPadsUsingGet200ApplicationJSONData extends SpeakeasyBase {
    padIDs?: string[];
}
/**
 * ok (code 0)
 */
export declare class ListAllPadsUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListAllPadsUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class ListAllPadsUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listAllPadsUsingGET200ApplicationJSONObject?: ListAllPadsUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listAllPadsUsingGET400ApplicationJSONObject?: ListAllPadsUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listAllPadsUsingGET401ApplicationJSONObject?: ListAllPadsUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listAllPadsUsingGET500ApplicationJSONObject?: ListAllPadsUsingGet500ApplicationJSON;
}
