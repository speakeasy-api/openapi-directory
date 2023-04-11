import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateGroupIfNotExistsForUsingGETRequest extends SpeakeasyBase {
    groupMapper?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateGroupIfNotExistsForUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateGroupIfNotExistsForUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateGroupIfNotExistsForUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingGet200ApplicationJSONData extends SpeakeasyBase {
    groupID?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateGroupIfNotExistsForUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: CreateGroupIfNotExistsForUsingGet200ApplicationJSONData;
    message?: string;
}
export declare class CreateGroupIfNotExistsForUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createGroupIfNotExistsForUsingGET200ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createGroupIfNotExistsForUsingGET400ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createGroupIfNotExistsForUsingGET401ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createGroupIfNotExistsForUsingGET500ApplicationJSONObject?: CreateGroupIfNotExistsForUsingGet500ApplicationJSON;
}
