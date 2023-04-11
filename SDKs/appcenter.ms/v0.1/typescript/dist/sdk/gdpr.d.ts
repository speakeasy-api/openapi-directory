import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Gdpr {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    dataSubjectRightCancelDeleteRequest(req: operations.DataSubjectRightCancelDeleteRequestRequest, security: operations.DataSubjectRightCancelDeleteRequestSecurity, config?: AxiosRequestConfig): Promise<operations.DataSubjectRightCancelDeleteRequestResponse>;
    dataSubjectRightCancelExportRequest(req: operations.DataSubjectRightCancelExportRequestRequest, security: operations.DataSubjectRightCancelExportRequestSecurity, config?: AxiosRequestConfig): Promise<operations.DataSubjectRightCancelExportRequestResponse>;
    dataSubjectRightDeleteRequest(config?: AxiosRequestConfig): Promise<operations.DataSubjectRightDeleteRequestResponse>;
    dataSubjectRightDeleteStatusRequest(req: operations.DataSubjectRightDeleteStatusRequestRequest, security: operations.DataSubjectRightDeleteStatusRequestSecurity, config?: AxiosRequestConfig): Promise<operations.DataSubjectRightDeleteStatusRequestResponse>;
    dataSubjectRightExportRequest(config?: AxiosRequestConfig): Promise<operations.DataSubjectRightExportRequestResponse>;
    dataSubjectRightExportStatusRequest(req: operations.DataSubjectRightExportStatusRequestRequest, security: operations.DataSubjectRightExportStatusRequestSecurity, config?: AxiosRequestConfig): Promise<operations.DataSubjectRightExportStatusRequestResponse>;
}
