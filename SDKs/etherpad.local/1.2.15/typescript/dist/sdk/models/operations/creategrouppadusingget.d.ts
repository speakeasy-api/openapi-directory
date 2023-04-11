import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateGroupPadUsingGETRequest extends SpeakeasyBase {
    groupID?: string;
    padName?: string;
    text?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateGroupPadUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateGroupPadUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateGroupPadUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateGroupPadUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateGroupPadUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createGroupPadUsingGET200ApplicationJSONObject?: CreateGroupPadUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createGroupPadUsingGET400ApplicationJSONObject?: CreateGroupPadUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createGroupPadUsingGET401ApplicationJSONObject?: CreateGroupPadUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createGroupPadUsingGET500ApplicationJSONObject?: CreateGroupPadUsingGet500ApplicationJSON;
}
