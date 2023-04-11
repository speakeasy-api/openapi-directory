import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://edge.sagemaker.{region}.amazonaws.com", "https://edge.sagemaker.{region}.amazonaws.com", "http://edge.sagemaker.{region}.amazonaws.com.cn", "https://edge.sagemaker.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * SageMaker Edge Manager dataplane service for communicating with active agents.
 *
 * @see {@link https://docs.aws.amazon.com/sagemaker/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Use to get the active deployments from a device.
     */
    getDeployments(req: operations.GetDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentsResponse>;
    /**
     * Use to check if a device is registered with SageMaker Edge Manager.
     */
    getDeviceRegistration(req: operations.GetDeviceRegistrationRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceRegistrationResponse>;
    /**
     * Use to get the current status of devices registered on SageMaker Edge Manager.
     */
    sendHeartbeat(req: operations.SendHeartbeatRequest, config?: AxiosRequestConfig): Promise<operations.SendHeartbeatResponse>;
}
