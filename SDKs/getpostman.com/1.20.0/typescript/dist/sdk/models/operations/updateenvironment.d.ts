import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateEnvironmentRequestBodyEnvironmentValues extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class UpdateEnvironmentRequestBodyEnvironment extends SpeakeasyBase {
    name?: string;
    values?: UpdateEnvironmentRequestBodyEnvironmentValues[];
}
export declare class UpdateEnvironmentRequestBody extends SpeakeasyBase {
    environment?: UpdateEnvironmentRequestBodyEnvironment;
}
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    requestBody?: UpdateEnvironmentRequestBody;
    environmentUid: string;
}
export declare class UpdateEnvironment400ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Failure Response
 */
export declare class UpdateEnvironment400ApplicationJSON extends SpeakeasyBase {
    error?: UpdateEnvironment400ApplicationJSONError;
}
export declare class UpdateEnvironment200ApplicationJSONEnvironment extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
/**
 * Successful Response
 */
export declare class UpdateEnvironment200ApplicationJSON extends SpeakeasyBase {
    environment?: UpdateEnvironment200ApplicationJSONEnvironment;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    updateEnvironment200ApplicationJSONObject?: UpdateEnvironment200ApplicationJSON;
    /**
     * Failure Response
     */
    updateEnvironment400ApplicationJSONObject?: UpdateEnvironment400ApplicationJSON;
}
