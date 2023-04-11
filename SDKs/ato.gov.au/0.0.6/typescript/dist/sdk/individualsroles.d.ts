import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A role defines the characteristics of a relationship between parties.
 *
 * @remarks
 * An Individual can participate in a relationship with other individuals and organisations.
 *
 * For example:
 *
 * | Party         | Role           | Relationship     | Role          | Party                           |
 * | ------------- | -------------- | ---------------- | ------------- | ------------------------------- |
 * | Homer Simpson | Husband        | Marriage         | Wife          | Marge Simpson                   |
 * | Homer Simpson | Employee       | Employment       | Employer      | Springfield Nuclear Power Plant |
 * | Homer Simpson | Safety Officer | Colleague        | Supervisor    | Carl Carlson                    |
 * | Homer Simpson | Director       | Directorship     | Company       | Compu Global Hyper Mega Net     |
 * | Homer Simpson | Employee       | Employment       | Employer      | Compu Global Hyper Mega Net     |
 * | Homer Simpson | Member         | Membership       | Organisation  | The Stonecutters                |
 * | Homer Simpson | Partner        | Partnership      | Partnership   | The Be Sharps                   |
 * | Homer Simpson | Trustee        | Trusteeship      | Trust         | The Simpson Family Trust        |
 * | Homer Simpson | Member         | Membership       | Association   | Mensa International             |
 *
 * You can use the API's **metadata services** to retrieve information about the classifcation schemes and
 * values used by the Registry.
 *
 */
export declare class IndividualsRoles {
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
    deleteIndividualsPartyIdRolesRoleId(req: operations.DeleteIndividualsPartyIdRolesRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIndividualsPartyIdRolesRoleIdResponse>;
    /**
     * Retrieve a list of roles
     */
    getIndividualsPartyIdRoles(req: operations.GetIndividualsPartyIdRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsPartyIdRolesResponse>;
    /**
     * Retrieve a role
     *
     * @remarks
     * Retrieve a role
     *
     */
    getIndividualsPartyIdRolesRoleId(req: operations.GetIndividualsPartyIdRolesRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsPartyIdRolesRoleIdResponse>;
    /**
     * Create a role
     *
     * @remarks
     * Create a role
     *
     */
    postIndividualsPartyIdRoles(req: operations.PostIndividualsPartyIdRolesRequest, config?: AxiosRequestConfig): Promise<operations.PostIndividualsPartyIdRolesResponse>;
    /**
     * Update a role
     *
     * @remarks
     * Update a role
     *
     */
    putIndividualsPartyIdRolesRoleId(req: operations.PutIndividualsPartyIdRolesRoleIdRequest, config?: AxiosRequestConfig): Promise<operations.PutIndividualsPartyIdRolesRoleIdResponse>;
}
