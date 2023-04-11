import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The registry maintains information about an organisation's contact details for administrative purposes.
 *
 * @remarks
 *
 *   Including:
 *   - an address for the service of documents
 *   - a principal place of business address
 *
 */
export declare class OrganisationsAddresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an address
     *
     * @remarks
     * Delete an address
     *
     */
    deleteOrganisationsPartyIdAddressesAddressId(req: operations.DeleteOrganisationsPartyIdAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganisationsPartyIdAddressesAddressIdResponse>;
    /**
     * Retrieve a list of addresses
     */
    getOrganisationsPartyIdAddresses(req: operations.GetOrganisationsPartyIdAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsPartyIdAddressesResponse>;
    /**
     * Retrieve an address
     *
     * @remarks
     * Retrieve an address
     *
     */
    getOrganisationsPartyIdAddressesAddressId(req: operations.GetOrganisationsPartyIdAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsPartyIdAddressesAddressIdResponse>;
    /**
     * Create an address
     *
     * @remarks
     * Create an address
     *
     */
    postOrganisationsPartyIdAddresses(req: operations.PostOrganisationsPartyIdAddressesRequest, config?: AxiosRequestConfig): Promise<operations.PostOrganisationsPartyIdAddressesResponse>;
    /**
     * Update an address
     *
     * @remarks
     * Update an address
     *
     */
    putOrganisationsPartyIdAddressesAddressId(req: operations.PutOrganisationsPartyIdAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.PutOrganisationsPartyIdAddressesAddressIdResponse>;
}
