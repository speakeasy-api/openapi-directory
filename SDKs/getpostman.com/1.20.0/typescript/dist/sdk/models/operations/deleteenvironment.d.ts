import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteEnvironmentRequest extends SpeakeasyBase {
    environmentUid: string;
}
export declare class DeleteEnvironment404ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Environment Not Found
 */
export declare class DeleteEnvironment404ApplicationJSON extends SpeakeasyBase {
    error?: DeleteEnvironment404ApplicationJSONError;
}
export declare class DeleteEnvironment200ApplicationJSONEnvironment extends SpeakeasyBase {
    id?: string;
    uid?: string;
}
/**
 * Environment Deleted
 */
export declare class DeleteEnvironment200ApplicationJSON extends SpeakeasyBase {
    environment?: DeleteEnvironment200ApplicationJSONEnvironment;
}
export declare class DeleteEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Environment Deleted
     */
    deleteEnvironment200ApplicationJSONObject?: DeleteEnvironment200ApplicationJSON;
    /**
     * Environment Not Found
     */
    deleteEnvironment404ApplicationJSONObject?: DeleteEnvironment404ApplicationJSON;
}
