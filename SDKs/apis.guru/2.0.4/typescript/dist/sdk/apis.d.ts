import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Actions relating to APIs in the collection
 */
export declare class APIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get basic metrics
     *
     * @remarks
     * Some basic metrics for the entire directory.
     * Just stunning numbers to put on a front page and are intended purely for WoW effect :)
     *
     */
    getMetrics(config?: AxiosRequestConfig): Promise<operations.GetMetricsResponse>;
    /**
     * List all APIs
     *
     * @remarks
     * List all APIs in the directory.
     * Returns links to OpenAPI specification for each API in the directory.
     * If API exist in multiple versions `preferred` one is explicitly marked.
     *
     * Some basic info from OpenAPI spec is cached inside each object.
     * This allows to generate some simple views without need to fetch OpenAPI spec for each API.
     *
     */
    listAPIs(config?: AxiosRequestConfig): Promise<operations.ListAPIsResponse>;
}
