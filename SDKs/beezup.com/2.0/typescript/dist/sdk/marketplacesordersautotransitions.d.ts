import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarketplacesOrdersAutoTransitions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * configureAutomaticTransitions - Configure new or existing automatic Order status transition
    **/
    configureAutomaticTransitions(req: operations.ConfigureAutomaticTransitionsRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureAutomaticTransitionsResponse>;
    /**
     * getAutomaticTransitions - Get list of configured automatic Order status transitions
    **/
    getAutomaticTransitions(req: operations.GetAutomaticTransitionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomaticTransitionsResponse>;
}
