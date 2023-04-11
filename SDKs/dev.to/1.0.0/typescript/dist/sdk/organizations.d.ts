import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Organization's Articles
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of Articles belonging to the organization
     *
     * It supports pagination, each page will contain `30` users by default.
     */
    getOrgArticles(req: operations.GetOrgArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrgArticlesResponse>;
    /**
     * Organization's users
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of users belonging to the organization
     *
     * It supports pagination, each page will contain `30` users by default.
     */
    getOrgUsers(req: operations.GetOrgUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrgUsersResponse>;
    /**
     * An organization
     *
     * @remarks
     * This endpoint allows the client to retrieve a single organization by their username
     */
    getOrganization(req: operations.GetOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationResponse>;
}
