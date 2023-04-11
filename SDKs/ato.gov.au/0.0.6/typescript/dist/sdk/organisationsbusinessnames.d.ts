import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A business name is a name or title under which an organisation conducts a business.
 *
 * @remarks
 *
 */
export declare class OrganisationsBusinessNames {
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
    deleteOrganisationsPartyIdBusinessNamesProductId(req: operations.DeleteOrganisationsPartyIdBusinessNamesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganisationsPartyIdBusinessNamesProductIdResponse>;
    /**
     * Retrieve a list of business names
     */
    getOrganisationsPartyIdBusinessNames(req: operations.GetOrganisationsPartyIdBusinessNamesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsPartyIdBusinessNamesResponse>;
    /**
     * Retrieve a business name
     *
     * @remarks
     * Retrieve a business name
     *
     */
    getOrganisationsPartyIdBusinessNamesProductId(req: operations.GetOrganisationsPartyIdBusinessNamesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsPartyIdBusinessNamesProductIdResponse>;
    /**
     * Create a business name
     *
     * @remarks
     * Create a business name
     *
     */
    postOrganisationsPartyIdBusinessNames(req: operations.PostOrganisationsPartyIdBusinessNamesRequest, config?: AxiosRequestConfig): Promise<operations.PostOrganisationsPartyIdBusinessNamesResponse>;
    /**
     * Update a business name
     *
     * @remarks
     * Update a business name
     *
     */
    putOrganisationsPartyIdBusinessNamesProductId(req: operations.PutOrganisationsPartyIdBusinessNamesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.PutOrganisationsPartyIdBusinessNamesProductIdResponse>;
}
