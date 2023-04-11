import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The registry maintains information about an individual's contact details for administrative purposes.
 *
 * @remarks
 *
 *   Including:
 *   - an email address
 *   - a mobile number
 *
 */
export declare class IndividualsElectronicAddresses {
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
    deleteIndividualsPartyIdElectronicAddressesAddressId(req: operations.DeleteIndividualsPartyIdElectronicAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIndividualsPartyIdElectronicAddressesAddressIdResponse>;
    /**
     * Retrieve a list of electronic addresses
     */
    getIndividualsPartyIdElectronicAddresses(req: operations.GetIndividualsPartyIdElectronicAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsPartyIdElectronicAddressesResponse>;
    /**
     * Retrieve an electronic address
     *
     * @remarks
     * Retrieve an electronic address
     *
     */
    getIndividualsPartyIdElectronicAddressesAddressId(req: operations.GetIndividualsPartyIdElectronicAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsPartyIdElectronicAddressesAddressIdResponse>;
    /**
     * Create an electronic address
     *
     * @remarks
     * Create an electronic address
     *
     */
    postIndividualsPartyIdElectronicAddresses(req: operations.PostIndividualsPartyIdElectronicAddressesRequest, config?: AxiosRequestConfig): Promise<operations.PostIndividualsPartyIdElectronicAddressesResponse>;
    /**
     * Update an electronic address
     *
     * @remarks
     * Update an electronic address
     *
     */
    putIndividualsPartyIdElectronicAddressesAddressId(req: operations.PutIndividualsPartyIdElectronicAddressesAddressIdRequest, config?: AxiosRequestConfig): Promise<operations.PutIndividualsPartyIdElectronicAddressesAddressIdResponse>;
}
