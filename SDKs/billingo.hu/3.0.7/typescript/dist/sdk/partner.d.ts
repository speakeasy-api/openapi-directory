import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Partner object represents your client.
 */
export declare class Partner {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a partner
     *
     * @remarks
     * Create a new partner. Returns a partner object if the create is succeded.
     */
    createPartner(req: shared.PartnerUpsert, config?: AxiosRequestConfig): Promise<operations.CreatePartnerResponse>;
    /**
     * Delete a partner
     *
     * @remarks
     * Delete an existing partner.
     */
    deletePartner(req: operations.DeletePartnerRequest, config?: AxiosRequestConfig): Promise<operations.DeletePartnerResponse>;
    /**
     * Retrieve a partner
     *
     * @remarks
     * Retrieves the details of an existing partner.
     */
    getPartner(req: operations.GetPartnerRequest, config?: AxiosRequestConfig): Promise<operations.GetPartnerResponse>;
    /**
     * List all partners
     *
     * @remarks
     * Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.
     */
    listPartner(req: operations.ListPartnerRequest, config?: AxiosRequestConfig): Promise<operations.ListPartnerResponse>;
    /**
     * Update a partner
     *
     * @remarks
     * Update an existing partner. Returns a partner object if the update is succeded.
     */
    updatePartner(req: operations.UpdatePartnerRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePartnerResponse>;
}
