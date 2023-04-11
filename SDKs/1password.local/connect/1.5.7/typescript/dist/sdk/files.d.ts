import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the content of a File
     */
    downloadFileByID(req: operations.DownloadFileByIDRequest, security: operations.DownloadFileByIDSecurity, config?: AxiosRequestConfig): Promise<operations.DownloadFileByIDResponse>;
    /**
     * Get the details of a File
     */
    getDetailsOfFileById(req: operations.GetDetailsOfFileByIdRequest, security: operations.GetDetailsOfFileByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetDetailsOfFileByIdResponse>;
    /**
     * Get all the files inside an Item
     */
    getItemFiles(req: operations.GetItemFilesRequest, security: operations.GetItemFilesSecurity, config?: AxiosRequestConfig): Promise<operations.GetItemFilesResponse>;
}
