import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The registry maintains information about an individual's contact details for administrative purposes.
 *
 * @remarks
 *
 *   Including:
 *   - an address for the service of documents
 *   - a principal place of business address
 *
 */
export declare class IndividualsAddresses {
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
    deleteIndividualsPartyIdAddressesAddressId(req: operations.DeleteIndividualsPartyIdAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIndividualsPartyIdAddressesAddressIdResponse>;
    /**
     * Retrieve a list of addresses
     */
    getIndividualsPartyIdAddresses(req: operations.GetIndividualsPartyIdAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsPartyIdAddressesResponse>;
    /**
     * Retrieve an address
     *
     * @remarks
     * Retrieve an address
     *
     */
    getIndividualsPartyIdAddressesAddressId(req: operations.GetIndividualsPartyIdAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsPartyIdAddressesAddressIdResponse>;
    /**
     * Create an address
     *
     * @remarks
     * Create an address
     *
     */
    postIndividualsPartyIdAddresses(req: operations.PostIndividualsPartyIdAddressesRequest, config?: AxiosRequestConfig): Promise<operations.PostIndividualsPartyIdAddressesResponse>;
    /**
     * Update an address
     *
     * @remarks
     * Update an address
     *
     */
    putIndividualsPartyIdAddressesAddressId(req: operations.PutIndividualsPartyIdAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.PutIndividualsPartyIdAddressesAddressIdResponse>;
}
