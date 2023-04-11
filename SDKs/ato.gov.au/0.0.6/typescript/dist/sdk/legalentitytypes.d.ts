import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A classification scheme for parties (individuals and organisations).
 *
 * @remarks
 *
 */
export declare class LegalEntityTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of legal entity types
     */
    getClassificationsLegalEntityTypes(req: operations.GetClassificationsLegalEntityTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationsLegalEntityTypesResponse>;
}
