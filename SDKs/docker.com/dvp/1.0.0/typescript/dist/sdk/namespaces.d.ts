import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Namespaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get namespace data for timespan
     *
     * @remarks
     * Gets a list of URLs that can be used to download the pull data for the given namespace and timespan
     */
    getNamespaceDataByTimespan(req: operations.GetNamespaceDataByTimespanRequest, config?: AxiosRequestConfig): Promise<operations.GetNamespaceDataByTimespanResponse>;
    /**
     * Get namespace metadata for timespan
     *
     * @remarks
     * Gets info about data for the given namespace and timespan
     */
    getNamespaceTimespanMetadata(req: operations.GetNamespaceTimespanMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetNamespaceTimespanMetadataResponse>;
    /**
     * Get timespans with data
     *
     * @remarks
     * Gets a list of timespans of the given type that have data for the given namespace and year
     */
    getNamespaceTimespans(req: operations.GetNamespaceTimespansRequest, config?: AxiosRequestConfig): Promise<operations.GetNamespaceTimespansResponse>;
    /**
     * Get years with data
     *
     * @remarks
     * Gets a list of years that have data for the given namespace
     */
    getNamespaceYears(req: operations.GetNamespaceYearsRequest, config?: AxiosRequestConfig): Promise<operations.GetNamespaceYearsResponse>;
}
