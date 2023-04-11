import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The registry maintains information about an organisation's contact details for administrative purposes.
 *
 * @remarks
 *
 *   Including:
 *   - an email address
 *   - a mobile number
 *
 */
export declare class OrganisationsElectronicAddresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an electronic address
     *
     * @remarks
     * Delete an electronic address
     *
     */
    deleteOrganisationsPartyIdElectronicAddressesAddressId(req: operations.DeleteOrganisationsPartyIdElectronicAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganisationsPartyIdElectronicAddressesAddressIdResponse>;
    /**
     * Retrieve a list of electronic addresses
     */
    getOrganisationsPartyIdElectronicAddresses(req: operations.GetOrganisationsPartyIdElectronicAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsPartyIdElectronicAddressesResponse>;
    /**
     * Retrieve an electronic address
     *
     * @remarks
     * Retrieve an electronic address
     *
     */
    getOrganisationsPartyIdElectronicAddressesAddressId(req: operations.GetOrganisationsPartyIdElectronicAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsPartyIdElectronicAddressesAddressIdResponse>;
    /**
     * Create an electronic address
     *
     * @remarks
     * Create an electronic address
     *
     */
    postOrganisationsPartyIdElectronicAddresses(req: operations.PostOrganisationsPartyIdElectronicAddressesRequest, config?: AxiosRequestConfig): Promise<operations.PostOrganisationsPartyIdElectronicAddressesResponse>;
    /**
     * Update an electronic address
     *
     * @remarks
     * Update an electronic address
     *
     */
    putOrganisationsPartyIdElectronicAddressesAddressId(req: operations.PutOrganisationsPartyIdElectronicAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.PutOrganisationsPartyIdElectronicAddressesAddressIdResponse>;
}
