import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * remove a page
     *
     * @remarks
     * This endpoint allows the client to delete a single Page object, specified by ID.
     */
    deleteApiPagesId(req: operations.DeleteApiPagesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiPagesIdResponse>;
    /**
     * show details for all pages
     *
     * @remarks
     * This endpoint allows the client to retrieve details for all Page objects.
     */
    getApiPages(config?: AxiosRequestConfig): Promise<operations.GetApiPagesResponse>;
    /**
     * show details for a page
     *
     * @remarks
     * This endpoint allows the client to retrieve details for a single Page object, specified by ID.
     */
    getApiPagesId(req: operations.GetApiPagesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPagesIdResponse>;
    /**
     * pages
     *
     * @remarks
     * This endpoint allows the client to create a new page.
     */
    postApiPages(req: operations.PostApiPagesRequestBody, config?: AxiosRequestConfig): Promise<operations.PostApiPagesResponse>;
    /**
     * update details for a page
     *
     * @remarks
     * This endpoint allows the client to retrieve details for a single Page object, specified by ID.
     */
    putApiPagesId(req: operations.PutApiPagesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutApiPagesIdResponse>;
}
