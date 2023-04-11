import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserDefinedFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list of company's User Defined Fields. Supports OData querying protocol.
     * Filtering is allowed by "categoryTypeId" field.
     * Ordering is allowed by "id" and "orderIndex" fields.
     */
    userDefinedFieldsGet(config?: AxiosRequestConfig): Promise<operations.UserDefinedFieldsGetResponse>;
}
