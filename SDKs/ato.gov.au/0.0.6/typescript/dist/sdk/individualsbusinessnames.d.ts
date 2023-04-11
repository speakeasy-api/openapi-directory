import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A business name is a name or title under which a person conducts a business.
 *
 * @remarks
 *
 */
export declare class IndividualsBusinessNames {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a business name
     *
     * @remarks
     * Delete a business name
     *
     */
    deleteIndividualsPartyIdBusinessNamesProductId(req: operations.DeleteIndividualsPartyIdBusinessNamesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIndividualsPartyIdBusinessNamesProductIdResponse>;
    /**
     * Retrieve a list of business names
     */
    getIndividualsPartyIdBusinessNames(req: operations.GetIndividualsPartyIdBusinessNamesRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsPartyIdBusinessNamesResponse>;
    /**
     * Retrieve a business name
     *
     * @remarks
     * Retrieve a business name
     *
     */
    getIndividualsPartyIdBusinessNamesProductId(req: operations.GetIndividualsPartyIdBusinessNamesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsPartyIdBusinessNamesProductIdResponse>;
    /**
     * Create a business name
     *
     * @remarks
     * Create a business name
     *
     */
    postIndividualsPartyIdBusinessNames(req: operations.PostIndividualsPartyIdBusinessNamesRequest, config?: AxiosRequestConfig): Promise<operations.PostIndividualsPartyIdBusinessNamesResponse>;
    /**
     * Update a business name
     *
     * @remarks
     * Update a business name
     *
     */
    putIndividualsPartyIdBusinessNamesProductId(req: operations.PutIndividualsPartyIdBusinessNamesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.PutIndividualsPartyIdBusinessNamesProductIdResponse>;
}
