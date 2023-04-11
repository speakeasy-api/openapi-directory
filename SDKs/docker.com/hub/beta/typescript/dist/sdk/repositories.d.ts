import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The repository endpoints allow you to manage your repository's
 *
 * @remarks
 * configuration like description.
 *
 */
export declare class Repositories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List repository tags
     */
    getV2NamespacesNamespaceRepositoriesRepositoryTags(req: operations.GetV2NamespacesNamespaceRepositoriesRepositoryTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetV2NamespacesNamespaceRepositoriesRepositoryTagsResponse>;
    /**
     * Read repository tag
     */
    getV2NamespacesNamespaceRepositoriesRepositoryTagsTag(req: operations.GetV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest, config?: AxiosRequestConfig): Promise<operations.GetV2NamespacesNamespaceRepositoriesRepositoryTagsTagResponse>;
    /**
     * Check repository tags
     */
    headV2NamespacesNamespaceRepositoriesRepositoryTags(req: operations.HeadV2NamespacesNamespaceRepositoriesRepositoryTagsRequest, config?: AxiosRequestConfig): Promise<operations.HeadV2NamespacesNamespaceRepositoriesRepositoryTagsResponse>;
    /**
     * Check repository tag
     */
    headV2NamespacesNamespaceRepositoriesRepositoryTagsTag(req: operations.HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest, config?: AxiosRequestConfig): Promise<operations.HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagResponse>;
}
