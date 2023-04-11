import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Access {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds/Overwrites the user entry in the access control database.
     *
     * @remarks
     * Adds/Overwrites the user entry in the access control database.
     */
    accessAdd(req: operations.AccessAddRequest, config?: AxiosRequestConfig): Promise<operations.AccessAddResponse>;
    /**
     * Clears a users entry from access control database.
     *
     * @remarks
     * Using '*' for user clears all the users.
     */
    accessDel(req: operations.AccessDelRequest, config?: AxiosRequestConfig): Promise<operations.AccessDelResponse>;
    /**
     * Returns the current access control database in use.
     *
     * @remarks
     * If nothing is specified then this returns "".
     */
    accessGetAcldb(config?: AxiosRequestConfig): Promise<operations.AccessGetAcldbResponse>;
    /**
     * Returns the current admin directory.
     *
     * @remarks
     * If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )
     */
    accessGetAdmindir(config?: AxiosRequestConfig): Promise<operations.AccessGetAdmindirResponse>;
    /**
     * Returns the current administrator.
     *
     * @remarks
     * If nothing is specified in admin/settings.cfg then returns "".
     */
    accessGetAdminuser(config?: AxiosRequestConfig): Promise<operations.AccessGetAdminuserResponse>;
    /**
     * Returns the state of access control checking.
     *
     * @remarks
     * 0 indicates that it is disabled, 1 indicates it is enabled.
     */
    accessGetEnabled(config?: AxiosRequestConfig): Promise<operations.AccessGetEnabledResponse>;
    /**
     * Returns an array of entries.
     *
     * @remarks
     * Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).
     */
    accessList(config?: AxiosRequestConfig): Promise<operations.AccessListResponse>;
    /**
     * Loads the specified file for access control data.
     *
     * @remarks
     * If filename is not specified then the currently set 'acldb' parameter is used.
     */
    accessLoad(req: operations.AccessLoadRequest, config?: AxiosRequestConfig): Promise<operations.AccessLoadResponse>;
    /**
     * Saves current access control data in specified file.
     *
     * @remarks
     * If filename is not specified then the currently set 'acldb' parameter is used.
     */
    accessSave(req: operations.AccessSaveRequest, config?: AxiosRequestConfig): Promise<operations.AccessSaveResponse>;
    /**
     * Allows setting the name of the current access control database.
     *
     * @remarks
     * This will be used for subsequent load and save operations.
     */
    accessSetAcldb(req: operations.AccessSetAcldbRequest, config?: AxiosRequestConfig): Promise<operations.AccessSetAcldbResponse>;
    /**
     * Allows the user to enable/disable the access control check.
     *
     * @remarks
     * 0 indicates disabled, 1 indicates enabled.
     */
    accessSetEnabled(req: operations.AccessSetEnabledRequest, config?: AxiosRequestConfig): Promise<operations.AccessSetEnabledResponse>;
}
