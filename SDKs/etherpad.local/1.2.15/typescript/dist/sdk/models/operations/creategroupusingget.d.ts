import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * internal api error (code 2)
 */
export declare class CreateGroupUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateGroupUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateGroupUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupUsingGet200ApplicationJSONData extends SpeakeasyBase {
    groupID?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateGroupUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class CreateGroupUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createGroupUsingGET200ApplicationJSONObject?: CreateGroupUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createGroupUsingGET400ApplicationJSONObject?: CreateGroupUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createGroupUsingGET401ApplicationJSONObject?: CreateGroupUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createGroupUsingGET500ApplicationJSONObject?: CreateGroupUsingGet500ApplicationJSON;
}
