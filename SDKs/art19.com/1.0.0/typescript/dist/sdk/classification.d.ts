import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Classification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of classifications
     */
    getClassifications(req: operations.GetClassificationsRequest, security: operations.GetClassificationsSecurity, config?: AxiosRequestConfig): Promise<operations.GetClassificationsResponse>;
    /**
     * Get a specific classification
     */
    getClassificationsId(req: operations.GetClassificationsIdRequest, security: operations.GetClassificationsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetClassificationsIdResponse>;
}
