import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * If you carry on a business you may need to hold a licence.
 *
 * @remarks
 *
 *   For example, if you provide financial services, you are required to hold an Australian Financial
 *   Services (AFS) licence.
 *
 */
export declare class OrganisationsLicenses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a license
     *
     * @remarks
     * Delete a license
     *
     */
    deleteOrganisationsPartyIdLicensesProductId(req: operations.DeleteOrganisationsPartyIdLicensesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganisationsPartyIdLicensesProductIdResponse>;
    /**
     * Retrieve a list of licenses
     */
    getOrganisationsPartyIdLicenses(req: operations.GetOrganisationsPartyIdLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsPartyIdLicensesResponse>;
    /**
     * Retrieve a license
     *
     * @remarks
     * Retrieve a license
     *
     */
    getOrganisationsPartyIdLicensesProductId(req: operations.GetOrganisationsPartyIdLicensesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganisationsPartyIdLicensesProductIdResponse>;
    /**
     * Create a license
     *
     * @remarks
     * Create a license
     *
     */
    postOrganisationsPartyIdLicenses(req: operations.PostOrganisationsPartyIdLicensesRequest, config?: AxiosRequestConfig): Promise<operations.PostOrganisationsPartyIdLicensesResponse>;
    /**
     * Update a license
     *
     * @remarks
     * Update a license
     *
     */
    putOrganisationsPartyIdLicensesProductId(req: operations.PutOrganisationsPartyIdLicensesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.PutOrganisationsPartyIdLicensesProductIdResponse>;
}
