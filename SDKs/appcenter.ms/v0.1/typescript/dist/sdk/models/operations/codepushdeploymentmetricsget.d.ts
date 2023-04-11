import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodePushDeploymentMetricsGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CodePushDeploymentMetricsGetRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * deployment name
     */
    deploymentName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Error
 */
export declare class CodePushDeploymentMetricsGetDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class CodePushDeploymentMetricsGet200ApplicationJSON extends SpeakeasyBase {
    active: number;
    downloaded?: number;
    failed?: number;
    installed?: number;
    label: string;
}
export declare class CodePushDeploymentMetricsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    codePushDeploymentMetricsGet200ApplicationJSONObjects?: CodePushDeploymentMetricsGet200ApplicationJSON[];
    /**
     * Error
     */
    codePushDeploymentMetricsGetDefaultApplicationJSONObject?: CodePushDeploymentMetricsGetDefaultApplicationJSON;
}
