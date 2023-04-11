import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Interactions with state related resources.
 */
export declare class State {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create or update the state for a connection.
     */
    createOrUpdateState(req: shared.ConnectionStateCreateOrUpdate, config?: AxiosRequestConfig): Promise<operations.CreateOrUpdateStateResponse>;
    /**
     * Fetch the current state for a connection.
     */
    getState(req: shared.ConnectionIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetStateResponse>;
}
