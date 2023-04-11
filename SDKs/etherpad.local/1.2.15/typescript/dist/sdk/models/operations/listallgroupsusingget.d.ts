import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * internal api error (code 2)
 */
export declare class ListAllGroupsUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class ListAllGroupsUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class ListAllGroupsUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class ListAllGroupsUsingGet200ApplicationJSONData extends SpeakeasyBase {
    groupIDs?: string[];
}
/**
 * ok (code 0)
 */
export declare class ListAllGroupsUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: ListAllGroupsUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class ListAllGroupsUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    listAllGroupsUsingGET200ApplicationJSONObject?: ListAllGroupsUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    listAllGroupsUsingGET400ApplicationJSONObject?: ListAllGroupsUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    listAllGroupsUsingGET401ApplicationJSONObject?: ListAllGroupsUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    listAllGroupsUsingGET500ApplicationJSONObject?: ListAllGroupsUsingGet500ApplicationJSON;
}
