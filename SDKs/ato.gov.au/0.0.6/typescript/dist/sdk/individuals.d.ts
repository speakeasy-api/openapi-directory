import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * An individual is a person about whom the registry wishes to maintain information.
 *
 * @remarks
 *
 *   For example, the individual's date and place of birth (for the purposes of identification) and the individual's
 *   residential address (which is used for administrative purposes).
 *
 */
export declare class Individuals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an individual
     *
     * @remarks
     * Delete an individual with the specified identifier
     *
     */
    deleteIndividualsPartyId(req: operations.DeleteIndividualsPartyIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIndividualsPartyIdResponse>;
    /**
     * Retrieve a list of individuals
     *
     * @remarks
     * Retrieve a list of individuals
     *
     */
    getIndividuals(req: operations.GetIndividualsRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsResponse>;
    /**
     * Retrieve an individual
     *
     * @remarks
     * Retrieve an individual with the specified identifier
     *
     */
    getIndividualsPartyId(req: operations.GetIndividualsPartyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsPartyIdResponse>;
    /**
     * Create an individual
     *
     * @remarks
     * Create an individual
     *
     */
    postIndividuals(req: operations.PostIndividualsRequest, config?: AxiosRequestConfig): Promise<operations.PostIndividualsResponse>;
    /**
     * Update an individual
     *
     * @remarks
     * Update an individual
     *
     */
    putIndividualsPartyId(req: operations.PutIndividualsPartyIdRequest, config?: AxiosRequestConfig): Promise<operations.PutIndividualsPartyIdResponse>;
}
