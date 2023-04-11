import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://apimatic.io/api/transform"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * Transform API Descriptions from/to various formats
 *
 * @see {@link https://apimatic.io/transformer} - API Transformer Website
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
     * Transform API Descriptions from/to various formats
     *
     * @remarks
     * Transform API Descriptions from/to various formats e.g., Swagger, API Blueprint, RAML, WADL, Google Discovery, I/O Docs.
     *
     * ### INPUTS
     * * API Blueprint
     * * Swagger 1.0 - 1.2
     * * Swagger 2.0 JSON
     * * Swagger 2.0 YAML
     * * WADL - W3C 2009
     * * Google Discovery
     * * RAML 0.8
     * * I/O Docs - Mashery
     * * HAR 1.2
     * * Postman Collection 1.0 - 2.0
     * * APIMATIC Format
     * * Mashape
     *
     * ### OUTPUTS
     * * API Blueprint
     * * Swagger 1.2
     * * Swagger 2.0 JSON
     * * Swagger 2.0 YAML
     * * WADL - W3C 2009
     * * RAML 0.8 - 1.0
     * * APIMATIC Format
     */
    convertAPI(req: operations.ConvertAPIRequest, config?: AxiosRequestConfig): Promise<operations.ConvertAPIResponse>;
}
