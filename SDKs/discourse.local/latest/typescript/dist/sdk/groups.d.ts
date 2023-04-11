import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add group members
     */
    addGroupMembers(req: operations.AddGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.AddGroupMembersResponse>;
    /**
     * Create a group
     */
    createGroup(req: operations.CreateGroupRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * Delete a group
     */
    deleteGroup(req: operations.DeleteGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupResponse>;
    /**
     * Get a group
     */
    getGroup(req: operations.GetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupResponse>;
    /**
     * List group members
     */
    listGroupMembers(req: operations.ListGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupMembersResponse>;
    /**
     * List groups
     */
    listGroups(config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
    /**
     * Remove group members
     */
    removeGroupMembers(req: operations.RemoveGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.RemoveGroupMembersResponse>;
    /**
     * Update a group
     */
    updateGroup(req: operations.UpdateGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupResponse>;
}
