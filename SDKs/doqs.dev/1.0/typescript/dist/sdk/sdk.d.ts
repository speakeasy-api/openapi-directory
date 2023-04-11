import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { Templates } from "./templates";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.doqs.dev/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare class SDK {
    templates: Templates;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Create Template
     */
    createTemplateDesignerTemplatesPost(req: shared.CreateOrUpdateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateTemplateDesignerTemplatesPostResponse>;
    /**
     * Delete
     */
    deleteDesignerTemplatesIdDelete(req: operations.DeleteDesignerTemplatesIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDesignerTemplatesIdDeleteResponse>;
    /**
     * Generate Pdf
     */
    generatePdfDesignerTemplatesIdGeneratePost(req: operations.GeneratePdfDesignerTemplatesIdGeneratePostRequest, config?: AxiosRequestConfig): Promise<operations.GeneratePdfDesignerTemplatesIdGeneratePostResponse>;
    /**
     * List Templates
     */
    listTemplatesDesignerTemplatesGet(req: operations.ListTemplatesDesignerTemplatesGetRequest, config?: AxiosRequestConfig): Promise<operations.ListTemplatesDesignerTemplatesGetResponse>;
    /**
     * List Templates
     */
    listTemplatesDesignerTemplatesIdGet(req: operations.ListTemplatesDesignerTemplatesIdGetRequest, config?: AxiosRequestConfig): Promise<operations.ListTemplatesDesignerTemplatesIdGetResponse>;
    /**
     * Preview
     */
    previewDesignerTemplatesPreviewPost(req: shared.PreviewModel, config?: AxiosRequestConfig): Promise<operations.PreviewDesignerTemplatesPreviewPostResponse>;
    /**
     * Update Template
     */
    updateTemplateDesignerTemplatesIdPut(req: operations.UpdateTemplateDesignerTemplatesIdPutRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTemplateDesignerTemplatesIdPutResponse>;
}
