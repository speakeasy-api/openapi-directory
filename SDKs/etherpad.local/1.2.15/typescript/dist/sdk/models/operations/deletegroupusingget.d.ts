import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteGroupUsingGETRequest extends SpeakeasyBase {
    groupID?: string;
}
/**
 * internal api error (code 2)
 */
export declare class DeleteGroupUsingGet500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class DeleteGroupUsingGet401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class DeleteGroupUsingGet400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class DeleteGroupUsingGet200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class DeleteGroupUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    deleteGroupUsingGET200ApplicationJSONObject?: DeleteGroupUsingGet200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    deleteGroupUsingGET400ApplicationJSONObject?: DeleteGroupUsingGet400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    deleteGroupUsingGET401ApplicationJSONObject?: DeleteGroupUsingGet401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    deleteGroupUsingGET500ApplicationJSONObject?: DeleteGroupUsingGet500ApplicationJSON;
}
