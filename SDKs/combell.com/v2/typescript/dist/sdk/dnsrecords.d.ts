import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage the dns records for a domain name.<p>The interface allows you to manage following records: A, CNAME, MX, SRV, ALIAS and TXT.
 */
export declare class DNSRecords {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a record
     */
    deleteDnsDomainNameRecordsRecordId(req: operations.DeleteDnsDomainNameRecordsRecordIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDnsDomainNameRecordsRecordIdResponse>;
    /**
     * Get records
     */
    getDnsDomainNameRecords(req: operations.GetDnsDomainNameRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetDnsDomainNameRecordsResponse>;
    /**
     * Get specific record
     */
    getDnsDomainNameRecordsRecordId(req: operations.GetDnsDomainNameRecordsRecordIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDnsDomainNameRecordsRecordIdResponse>;
    /**
     * Create a record
     */
    postDnsDomainNameRecords(req: operations.PostDnsDomainNameRecordsRequest, config?: AxiosRequestConfig): Promise<operations.PostDnsDomainNameRecordsResponse>;
    /**
     * Edit a record
     */
    putDnsDomainNameRecordsRecordId(req: operations.PutDnsDomainNameRecordsRecordIdRequest, config?: AxiosRequestConfig): Promise<operations.PutDnsDomainNameRecordsRecordIdResponse>;
}
