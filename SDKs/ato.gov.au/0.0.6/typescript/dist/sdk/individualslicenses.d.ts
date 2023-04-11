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
export declare class IndividualsLicenses {
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
    deleteIndividualsPartyIdLicensesProductId(req: operations.DeleteIndividualsPartyIdLicensesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIndividualsPartyIdLicensesProductIdResponse>;
    /**
     * Retrieve a list of licenses
     */
    getIndividualsPartyIdLicenses(req: operations.GetIndividualsPartyIdLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsPartyIdLicensesResponse>;
    /**
     * Retrieve a license
     *
     * @remarks
     * Retrieve a license
     *
     */
    getIndividualsPartyIdLicensesProductId(req: operations.GetIndividualsPartyIdLicensesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualsPartyIdLicensesProductIdResponse>;
    /**
     * Create a license
     *
     * @remarks
     * Create a license
     *
     */
    postIndividualsPartyIdLicenses(req: operations.PostIndividualsPartyIdLicensesRequest, config?: AxiosRequestConfig): Promise<operations.PostIndividualsPartyIdLicensesResponse>;
    /**
     * Update a license
     *
     * @remarks
     * Update a license
     *
     */
    putIndividualsPartyIdLicensesProductId(req: operations.PutIndividualsPartyIdLicensesProductIdRequest, config?: AxiosRequestConfig): Promise<operations.PutIndividualsPartyIdLicensesProductIdResponse>;
}
