import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminDeletePreReceiveEnvironmentRequest extends SpeakeasyBase {
    preReceiveEnvironmentId: number;
}
export declare class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
    resource?: string;
}
/**
 * Client Errors
 */
export declare class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON extends SpeakeasyBase {
    errors?: EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONErrors[];
    message?: string;
}
export declare class EnterpriseAdminDeletePreReceiveEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Client Errors
     */
    enterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONObject?: EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON;
}
