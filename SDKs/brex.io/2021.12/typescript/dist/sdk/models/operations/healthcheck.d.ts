import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Detailed information about the error
 */
export declare class HealthCheckDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class HealthCheck200ApplicationJSON extends SpeakeasyBase {
    name?: string;
    status?: string;
}
export declare class HealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of the commercial registers and their health data
     */
    healthCheck200ApplicationJSONObjects?: HealthCheck200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    healthCheckDefaultApplicationJSONObject?: HealthCheckDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
