import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A classification scheme for business names.
 *
 * @remarks
 *
 */
export declare class BusinessNameLifecycleStates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of business name lifecycle states
     */
    getClassificationsBusinessNameLifecycleStates(req: operations.GetClassificationsBusinessNameLifecycleStatesRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationsBusinessNameLifecycleStatesResponse>;
}
