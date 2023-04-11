import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Flat Groups
 */
export declare class Group {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get group information
     */
    getGroupDetails(req: operations.GetGroupDetailsRequest, security: operations.GetGroupDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetGroupDetailsResponse>;
    /**
     * List group's scores
     *
     * @remarks
     * Get the list of scores shared with a group.
     *
     */
    getGroupScores(req: operations.GetGroupScoresRequest, security: operations.GetGroupScoresSecurity, config?: AxiosRequestConfig): Promise<operations.GetGroupScoresResponse>;
    /**
     * List group's users
     */
    listGroupUsers(req: operations.ListGroupUsersRequest, security: operations.ListGroupUsersSecurity, config?: AxiosRequestConfig): Promise<operations.ListGroupUsersResponse>;
}
