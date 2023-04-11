import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateEnvironmentRequestBodyEnvironmentValues extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class CreateEnvironmentRequestBodyEnvironment extends SpeakeasyBase {
    name?: string;
    values?: CreateEnvironmentRequestBodyEnvironmentValues[];
}
export declare class CreateEnvironmentRequestBody extends SpeakeasyBase {
    environment?: CreateEnvironmentRequestBodyEnvironment;
}
export declare class CreateEnvironment400ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Failure Response
 */
export declare class CreateEnvironment400ApplicationJSON extends SpeakeasyBase {
    error?: CreateEnvironment400ApplicationJSONError;
}
export declare class CreateEnvironment200ApplicationJSONEnvironment extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
/**
 * Successful Response
 */
export declare class CreateEnvironment200ApplicationJSON extends SpeakeasyBase {
    environment?: CreateEnvironment200ApplicationJSONEnvironment;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    createEnvironment200ApplicationJSONObject?: CreateEnvironment200ApplicationJSON;
    /**
     * Failure Response
     */
    createEnvironment400ApplicationJSONObject?: CreateEnvironment400ApplicationJSON;
}
