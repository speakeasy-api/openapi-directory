import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * downloadFileById - Get the content of a File
    **/
    downloadFileById(req: operations.DownloadFileByIdRequest, config?: AxiosRequestConfig): Promise<operations.DownloadFileByIdResponse>;
    /**
     * getDetailsOfFileById - Get the details of a File
    **/
    getDetailsOfFileById(req: operations.GetDetailsOfFileByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDetailsOfFileByIdResponse>;
    /**
     * getItemFiles - Get all the files inside an Item
    **/
    getItemFiles(req: operations.GetItemFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetItemFilesResponse>;
}
