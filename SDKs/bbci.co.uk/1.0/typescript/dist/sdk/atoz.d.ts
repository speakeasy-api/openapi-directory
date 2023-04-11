import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AToZ {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Programmes by initial title character
     *
     * @remarks
     * Get the Programmes whose title begins with the given initial character.
     */
    getProgrammesAtoZSearch(req: operations.GetProgrammesAtoZSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesAtoZSearchResponse>;
}
