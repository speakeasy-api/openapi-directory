import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create and edit forms
 */
export declare class Form {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete this form and all of it's responses.
     */
    deleteFormsId(req: operations.DeleteFormsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFormsIdResponse>;
    /**
     * List form responses
     */
    getFormResponses(req: operations.GetFormResponsesRequest, config?: AxiosRequestConfig): Promise<operations.GetFormResponsesResponse>;
    /**
     * Get a single form response by id
     */
    getFormResponsesId(req: operations.GetFormResponsesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFormResponsesIdResponse>;
    /**
     * List forms
     */
    getForms(req: operations.GetFormsRequest, config?: AxiosRequestConfig): Promise<operations.GetFormsResponse>;
    /**
     * Get a single form by id
     */
    getFormsId(req: operations.GetFormsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFormsIdResponse>;
    /**
     * Submit a response to a form
     */
    postFormResponses(req: shared.FormResponseSubmission, config?: AxiosRequestConfig): Promise<operations.PostFormResponsesResponse>;
    /**
     * Create a form
     */
    postForms(req: shared.FormSubmission, config?: AxiosRequestConfig): Promise<operations.PostFormsResponse>;
}
