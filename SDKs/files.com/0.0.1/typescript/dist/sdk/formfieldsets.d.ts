import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about form_field_sets
 */
export declare class FormFieldSets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Form Field Set
     *
     * @remarks
     * Delete Form Field Set
     */
    deleteFormFieldSetsId(req: operations.DeleteFormFieldSetsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFormFieldSetsIdResponse>;
    /**
     * List Form Field Sets
     *
     * @remarks
     * List Form Field Sets
     */
    getFormFieldSets(req: operations.GetFormFieldSetsRequest, config?: AxiosRequestConfig): Promise<operations.GetFormFieldSetsResponse>;
    /**
     * Show Form Field Set
     *
     * @remarks
     * Show Form Field Set
     */
    getFormFieldSetsId(req: operations.GetFormFieldSetsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFormFieldSetsIdResponse>;
    /**
     * Update Form Field Set
     *
     * @remarks
     * Update Form Field Set
     */
    patchFormFieldSetsId(req: operations.PatchFormFieldSetsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchFormFieldSetsIdResponse>;
    /**
     * Create Form Field Set
     *
     * @remarks
     * Create Form Field Set
     */
    postFormFieldSets(req: shared.PostFormFieldSets, config?: AxiosRequestConfig): Promise<operations.PostFormFieldSetsResponse>;
}
