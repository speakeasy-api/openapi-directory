import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Partner {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createPartner - Create a partner
     *
     * Create a new partner. Returns a partner object if the create is succeded.
    **/
    createPartner(req: operations.CreatePartnerRequest, config?: AxiosRequestConfig): Promise<operations.CreatePartnerResponse>;
    /**
     * deletePartner - Delete a partner
     *
     * Delete an existing partner.
    **/
    deletePartner(req: operations.DeletePartnerRequest, config?: AxiosRequestConfig): Promise<operations.DeletePartnerResponse>;
    /**
     * getPartner - Retrieve a partner
     *
     * Retrieves the details of an existing partner.
    **/
    getPartner(req: operations.GetPartnerRequest, config?: AxiosRequestConfig): Promise<operations.GetPartnerResponse>;
    /**
     * listPartner - List all partners
     *
     * Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.
    **/
    listPartner(req: operations.ListPartnerRequest, config?: AxiosRequestConfig): Promise<operations.ListPartnerResponse>;
    /**
     * updatePartner - Update a partner
     *
     * Update an existing partner. Returns a partner object if the update is succeded.
    **/
    updatePartner(req: operations.UpdatePartnerRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePartnerResponse>;
}
