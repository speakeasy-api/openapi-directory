import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AdReportMetadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getReportMetadata - This call retrieves information that details the fields used in each of the Promoted Listings reports. Use the returned information to configure the different types of Promoted Listings reports. The request for this method does not use a payload or any URI parameters.
    **/
    getReportMetadata(req: operations.GetReportMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetReportMetadataResponse>;
    /**
     * getReportMetadataForReportType - This call retrieves metadata that details the fields used by a specific Promoted Listings report type. Use the report_type path parameter to indicate metadata to retrieve. This method does not use a request payload.
    **/
    getReportMetadataForReportType(req: operations.GetReportMetadataForReportTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetReportMetadataForReportTypeResponse>;
}
