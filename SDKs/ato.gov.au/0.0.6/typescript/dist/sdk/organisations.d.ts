import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * An organisation usually consists of a number of individuals or groups bound by a common purpose about whom the
 *
 * @remarks
 * registry wishes to maintain information.
 *
 *   For example, the organisation's legal entity type (e.g., Incorporated Entity, Unincorporated Entity,
 *   Partnership or Joint Venture).
 *
 */
export declare class Organisations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an organisation
     *
     * @remarks
     * Delete an organisation with the specified identifier
     *
     */
    deleteOrganisationsPartyId(req: operations.DeleteOrganisationsPartyIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganisationsPartyIdResponse>;
    /**
     * Retrieve a list of organisations
     *
     * @remarks
     * Retrieve a list of organisations
     *
     */
    getOrganisations(req: operations.GetOrganisationsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsResponse>;
    /**
     * Retrieve an organisation
     *
     * @remarks
     * Retrieve an organisation with the specified identifier
     *
     */
    getOrganisationsPartyId(req: operations.GetOrganisationsPartyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsPartyIdResponse>;
    /**
     * Create an organisation
     *
     * @remarks
     * Create an organisation
     *
     */
    postOrganisations(req: operations.PostOrganisationsRequest, config?: AxiosRequestConfig): Promise<operations.PostOrganisationsResponse>;
    /**
     * Update an organisation
     *
     * @remarks
     * Update an organisation
     *
     */
    putOrganisationsPartyId(req: operations.PutOrganisationsPartyIdRequest, config?: AxiosRequestConfig): Promise<operations.PutOrganisationsPartyIdResponse>;
}
