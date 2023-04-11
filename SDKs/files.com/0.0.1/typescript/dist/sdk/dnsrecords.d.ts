import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about dns_records
 */
export declare class DnsRecords {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show site DNS configuration.
     *
     * @remarks
     * Show site DNS configuration.
     */
    getDnsRecords(req: operations.GetDnsRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetDnsRecordsResponse>;
}
