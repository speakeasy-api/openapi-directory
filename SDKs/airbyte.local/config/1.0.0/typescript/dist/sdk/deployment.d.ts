import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Deployment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * exportArchive - Export Airbyte Configuration and Data Archive
    **/
    exportArchive(config?: AxiosRequestConfig): Promise<operations.ExportArchiveResponse>;
    /**
     * importArchive - Import Airbyte Configuration and Data Archive
    **/
    importArchive(req: operations.ImportArchiveRequest, config?: AxiosRequestConfig): Promise<operations.ImportArchiveResponse>;
}
