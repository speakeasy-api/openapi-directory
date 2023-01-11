import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Access {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * accessAdd - Adds/Overwrites the user entry in the access control database.
     *
     * Adds/Overwrites the user entry in the access control database.
    **/
    accessAdd(req: operations.AccessAddRequest, config?: AxiosRequestConfig): Promise<operations.AccessAddResponse>;
    /**
     * accessDel - Clears a users entry from access control database.
     *
     * Using '*' for user clears all the users.
    **/
    accessDel(req: operations.AccessDelRequest, config?: AxiosRequestConfig): Promise<operations.AccessDelResponse>;
    /**
     * accessGetAcldb - Returns the current access control database in use.
     *
     * If nothing is specified then this returns "".
    **/
    accessGetAcldb(config?: AxiosRequestConfig): Promise<operations.AccessGetAcldbResponse>;
    /**
     * accessGetAdmindir - Returns the current admin directory.
     *
     * If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )
    **/
    accessGetAdmindir(config?: AxiosRequestConfig): Promise<operations.AccessGetAdmindirResponse>;
    /**
     * accessGetAdminuser - Returns the current administrator.
     *
     * If nothing is specified in admin/settings.cfg then returns "".
    **/
    accessGetAdminuser(config?: AxiosRequestConfig): Promise<operations.AccessGetAdminuserResponse>;
    /**
     * accessGetEnabled - Returns the state of access control checking.
     *
     * 0 indicates that it is disabled, 1 indicates it is enabled.
    **/
    accessGetEnabled(config?: AxiosRequestConfig): Promise<operations.AccessGetEnabledResponse>;
    /**
     * accessList - Returns an array of entries.
     *
     * Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).
    **/
    accessList(config?: AxiosRequestConfig): Promise<operations.AccessListResponse>;
    /**
     * accessLoad - Loads the specified file for access control data.
     *
     * If filename is not specified then the currently set 'acldb' parameter is used.
    **/
    accessLoad(req: operations.AccessLoadRequest, config?: AxiosRequestConfig): Promise<operations.AccessLoadResponse>;
    /**
     * accessSave - Saves current access control data in specified file.
     *
     * If filename is not specified then the currently set 'acldb' parameter is used.
    **/
    accessSave(req: operations.AccessSaveRequest, config?: AxiosRequestConfig): Promise<operations.AccessSaveResponse>;
    /**
     * accessSetAcldb - Allows setting the name of the current access control database.
     *
     * This will be used for subsequent load and save operations.
    **/
    accessSetAcldb(req: operations.AccessSetAcldbRequest, config?: AxiosRequestConfig): Promise<operations.AccessSetAcldbResponse>;
    /**
     * accessSetEnabled - Allows the user to enable/disable the access control check.
     *
     * 0 indicates disabled, 1 indicates enabled.
    **/
    accessSetEnabled(req: operations.AccessSetEnabledRequest, config?: AxiosRequestConfig): Promise<operations.AccessSetEnabledResponse>;
}
