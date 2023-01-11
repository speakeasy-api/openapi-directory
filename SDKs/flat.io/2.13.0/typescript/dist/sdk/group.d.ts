import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Group {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGroupDetails - Get group information
    **/
    getGroupDetails(req: operations.GetGroupDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupDetailsResponse>;
    /**
     * getGroupScores - List group's scores
     *
     * Get the list of scores shared with a group.
     *
    **/
    getGroupScores(req: operations.GetGroupScoresRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupScoresResponse>;
    /**
     * listGroupUsers - List group's users
    **/
    listGroupUsers(req: operations.ListGroupUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupUsersResponse>;
}
