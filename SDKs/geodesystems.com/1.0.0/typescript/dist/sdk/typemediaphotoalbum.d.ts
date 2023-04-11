import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Photo Album' entry type
 */
export declare class TypeMediaPhotoalbum {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Photo Album' entry type
     *
     * @remarks
     * API to search for entries of type Photo Album
     */
    searchMediaPhotoalbum(req: operations.SearchMediaPhotoalbumRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaPhotoalbumResponse>;
}
