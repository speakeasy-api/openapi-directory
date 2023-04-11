import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * All official records and reports filed by or delivered to the FEC.
 *
 * @remarks
 *
 *  Note: because the filings data includes many records, counts for large result sets are approximate; you will want to page through the records until no records are returned.
 */
export declare class Filings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     *
     * All official records and reports filed by or delivered to the FEC.
     *
     * Note: because the filings data includes many records, counts for large
     * result sets are approximate; you will want to page through the records until no records are returned.
     *
     */
    getCandidateCandidateIdFilings(req: operations.GetCandidateCandidateIdFilingsRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidateCandidateIdFilingsResponse>;
    /**
     *
     * All official records and reports filed by or delivered to the FEC.
     *
     * Note: because the filings data includes many records, counts for large
     * result sets are approximate; you will want to page through the records until no records are returned.
     *
     */
    getCommitteeCommitteeIdFilings(req: operations.GetCommitteeCommitteeIdFilingsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdFilingsResponse>;
    /**
     *
     * All official records and reports filed by or delivered to the FEC.
     *
     * Note: because the filings data includes many records, counts for large
     * result sets are approximate; you will want to page through the records until no records are returned.
     *
     */
    getFilings(req: operations.GetFilingsRequest, config?: AxiosRequestConfig): Promise<operations.GetFilingsResponse>;
    /**
     *
     * The Operations log contains details of each report loaded into the database. It is primarily
     * used as status check to determine when all of the data processes, from initial entry through
     * review are complete.
     *
     */
    getOperationsLog(req: operations.GetOperationsLogRequest, config?: AxiosRequestConfig): Promise<operations.GetOperationsLogResponse>;
}
