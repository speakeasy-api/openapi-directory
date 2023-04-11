import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A role defines the characteristics of a relationship between parties.
 *
 * @remarks
 * An Organisation can participate in a relationship with other organisations and indiviuals.
 *
 * For example:
 *
 * | Party                           | Role     | Relationship | Role         | Party             |
 * | ------------------------------- | -------- | -------------| ------------ | ----------------- |
 * | Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Homer Simpson     |
 * | Springfield Nuclear Power Plant | Company  | Directorship | Director     | Mr Burns          |
 * | Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Mr Burns          |
 * | Springfield Nuclear Power Plant | Sponsor  | Sponsorship  | Organisation | The Stonecutters  |
 *
 * You can use the API's **metadata services** to retrieve information about the classifcation schemes and
 * values used by the Registry.
 *
 */
export declare class OrganisationsRoles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a role
     *
     * @remarks
     * Delete a role
     *
     */
    deleteOrganisationsPartyIdRolesRoleId(req: operations.DeleteOrganisationsPartyIdRolesRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganisationsPartyIdRolesRoleIdResponse>;
    /**
     * Retrieve a list of roles
     */
    getOrganisationsPartyIdRoles(req: operations.GetOrganisationsPartyIdRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsPartyIdRolesResponse>;
    /**
     * Retrieve a role
     *
     * @remarks
     * Retrieve a role
     *
     */
    getOrganisationsPartyIdRolesRoleId(req: operations.GetOrganisationsPartyIdRolesRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsPartyIdRolesRoleIdResponse>;
    /**
     * Create a role
     *
     * @remarks
     * Create a role
     *
     */
    postOrganisationsPartyIdRoles(req: operations.PostOrganisationsPartyIdRolesRequest, config?: AxiosRequestConfig): Promise<operations.PostOrganisationsPartyIdRolesResponse>;
    /**
     * Update a role
     *
     * @remarks
     * Update a role
     *
     */
    putOrganisationsPartyIdRolesRoleId(req: operations.PutOrganisationsPartyIdRolesRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.PutOrganisationsPartyIdRolesRoleIdResponse>;
}
