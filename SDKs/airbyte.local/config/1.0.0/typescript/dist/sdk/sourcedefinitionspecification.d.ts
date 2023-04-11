import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * SourceDefinition specification related resources.
 */
export declare class SourceDefinitionSpecification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get specification for a SourceDefinition.
     */
    getSourceDefinitionSpecification(req: shared.SourceDefinitionIdWithWorkspaceId, config?: AxiosRequestConfig): Promise<operations.GetSourceDefinitionSpecificationResponse>;
}
