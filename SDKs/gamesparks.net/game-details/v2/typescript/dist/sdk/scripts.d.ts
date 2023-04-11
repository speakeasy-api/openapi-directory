import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Scripts Restv 2 Controller
 */
export declare class Scripts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * exportZip
     */
    exportZipUsingGET(req: operations.ExportZipUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ExportZipUsingGETResponse>;
    /**
     * getScriptDifferences
     */
    getScriptDifferencesUsingGET(req: operations.GETScriptDifferencesUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETScriptDifferencesUsingGETResponse>;
    /**
     * getScriptVersions
     */
    getScriptVersionsUsingGET(req: operations.GETScriptVersionsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETScriptVersionsUsingGETResponse>;
    /**
     * getScriptVersions
     */
    getScriptVersionsUsingGET1(req: operations.GETScriptVersionsUsingGet1Request, config?: AxiosRequestConfig): Promise<operations.GETScriptVersionsUsingGet1Response>;
    /**
     * importAccept
     */
    importAcceptUsingPOST(req: operations.ImportAcceptUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.ImportAcceptUsingPOSTResponse>;
    /**
     * importZip
     */
    importZipUsingPOST(req: operations.ImportZipUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.ImportZipUsingPOSTResponse>;
}
