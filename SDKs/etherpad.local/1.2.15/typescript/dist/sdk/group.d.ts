import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Group {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * this functions helps you to map your application group ids to Etherpad group ids
     */
    createGroupIfNotExistsForUsingGET(req: operations.CreateGroupIfNotExistsForUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupIfNotExistsForUsingGETResponse>;
    /**
     * this functions helps you to map your application group ids to Etherpad group ids
     */
    createGroupIfNotExistsForUsingPOST(req: operations.CreateGroupIfNotExistsForUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupIfNotExistsForUsingPOSTResponse>;
    /**
     * creates a new pad in this group
     */
    createGroupPadUsingGET(req: operations.CreateGroupPadUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupPadUsingGETResponse>;
    /**
     * creates a new pad in this group
     */
    createGroupPadUsingPOST(req: operations.CreateGroupPadUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupPadUsingPOSTResponse>;
    /**
     * creates a new group
     */
    createGroupUsingGET(config?: AxiosRequestConfig): Promise<operations.CreateGroupUsingGETResponse>;
    /**
     * creates a new group
     */
    createGroupUsingPOST(config?: AxiosRequestConfig): Promise<operations.CreateGroupUsingPOSTResponse>;
    /**
     * deletes a group
     */
    deleteGroupUsingGET(req: operations.DeleteGroupUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupUsingGETResponse>;
    /**
     * deletes a group
     */
    deleteGroupUsingPOST(req: operations.DeleteGroupUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupUsingPOSTResponse>;
    listAllGroupsUsingGET(config?: AxiosRequestConfig): Promise<operations.ListAllGroupsUsingGETResponse>;
    listAllGroupsUsingPOST(config?: AxiosRequestConfig): Promise<operations.ListAllGroupsUsingPOSTResponse>;
    /**
     * returns all pads of this group
     */
    listPadsUsingGET(req: operations.ListPadsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsUsingGETResponse>;
    /**
     * returns all pads of this group
     */
    listPadsUsingPOST(req: operations.ListPadsUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.ListPadsUsingPOSTResponse>;
    listSessionsOfGroupUsingGET(req: operations.ListSessionsOfGroupUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfGroupUsingGETResponse>;
    listSessionsOfGroupUsingPOST(req: operations.ListSessionsOfGroupUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.ListSessionsOfGroupUsingPOSTResponse>;
}
