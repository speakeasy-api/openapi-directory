import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A classification scheme for the representation of human sexes.
 *
 * @remarks
 *
 */
export declare class Genders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of genders
     */
    getClassificationsGenders(req: operations.GetClassificationsGendersRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationsGendersResponse>;
}
