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
     * createGroupIfNotExistsForUsingGet - this functions helps you to map your application group ids to Etherpad group ids
    **/
    createGroupIfNotExistsForUsingGet(req: operations.CreateGroupIfNotExistsForUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupIfNotExistsForUsingGetResponse>;
    /**
     * createGroupIfNotExistsForUsingPost - this functions helps you to map your application group ids to Etherpad group ids
    **/
    createGroupIfNotExistsForUsingPost(req: operations.CreateGroupIfNotExistsForUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupIfNotExistsForUsingPostResponse>;
    /**
     * createGroupPadUsingGet - creates a new pad in this group
    **/
    createGroupPadUsingGet(req: operations.CreateGroupPadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupPadUsingGetResponse>;
    /**
     * createGroupPadUsingPost - creates a new pad in this group
    **/
    createGroupPadUsingPost(req: operations.CreateGroupPadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupPadUsingPostResponse>;
    /**
     * createGroupUsingGet - creates a new group
    **/
    createGroupUsingGet(config?: AxiosRequestConfig): Promise<operations.CreateGroupUsingGetResponse>;
    /**
     * createGroupUsingPost - creates a new group
    **/
    createGroupUsingPost(config?: AxiosRequestConfig): Promise<operations.CreateGroupUsingPostResponse>;
    /**
     * deleteGroupUsingGet - deletes a group
    **/
    deleteGroupUsingGet(req: operations.DeleteGroupUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupUsingGetResponse>;
    /**
     * deleteGroupUsingPost - deletes a group
    **/
    deleteGroupUsingPost(req: operations.DeleteGroupUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupUsingPostResponse>;
    listAllGroupsUsingGet(config?: AxiosRequestConfig): Promise<operations.ListAllGroupsUsingGetResponse>;
    listAllGroupsUsingPost(config?: AxiosRequestConfig): Promise<operations.ListAllGroupsUsingPostResponse>;
    /**
     * listPadsUsingGet - returns all pads of this group
    **/
    listPadsUsingGet(req: operations.ListPadsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsUsingGetResponse>;
    /**
     * listPadsUsingPost - returns all pads of this group
    **/
    listPadsUsingPost(req: operations.ListPadsUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsUsingPostResponse>;
    listSessionsOfGroupUsingGet(req: operations.ListSessionsOfGroupUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfGroupUsingGetResponse>;
    listSessionsOfGroupUsingPost(req: operations.ListSessionsOfGroupUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfGroupUsingPostResponse>;
}
