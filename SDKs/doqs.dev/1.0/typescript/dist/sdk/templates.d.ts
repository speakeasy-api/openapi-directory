import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Templates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create
     */
    create(req: shared.BodyCreate, config?: AxiosRequestConfig): Promise<operations.CreateResponse>;
    /**
     * Delete
     */
    deleteTemplatesIdDelete(req: operations.DeleteTemplatesIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTemplatesIdDeleteResponse>;
    /**
     * Fill
     */
    fill(req: operations.FillRequest, config?: AxiosRequestConfig): Promise<operations.FillResponse>;
    /**
     * Get Template
     */
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * Get File
     */
    getFileTemplatesIdFileGet(req: operations.GetFileTemplatesIdFileGetRequest, config?: AxiosRequestConfig): Promise<operations.GetFileTemplatesIdFileGetResponse>;
    /**
     * List
     */
    list(req: operations.ListRequest, config?: AxiosRequestConfig): Promise<operations.ListResponse>;
    /**
     * Update
     */
    update(req: operations.UpdateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResponse>;
}
