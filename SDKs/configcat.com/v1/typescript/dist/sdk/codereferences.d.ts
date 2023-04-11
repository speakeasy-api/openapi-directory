import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With this endpoint you can upload Feature Flag and Setting usage references that will be shown on the ConfigCat Dashboard.
 *
 * @remarks
 *
 * <a href="https://configcat.com/docs/advanced/code-references/overview/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Code References.
 */
export declare class CodeReferences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    postV1CodeReferences(req: shared.CodeReferenceRequest, config?: AxiosRequestConfig): Promise<operations.PostV1CodeReferencesResponse>;
    postV1CodeReferencesDeleteReports(req: shared.DeleteRepositoryReportsRequest, config?: AxiosRequestConfig): Promise<operations.PostV1CodeReferencesDeleteReportsResponse>;
}
