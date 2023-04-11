import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Importer-Exporter Code (IEC) Verification API.
     *
     * @remarks
     * Description of Importer-Exporter Code (IEC) Verification API.
     */
    importerExporterCodeVerificationAPI(req: operations.ImporterExporterCodeVerificationAPIRequest, security: operations.ImporterExporterCodeVerificationAPISecurity, config?: AxiosRequestConfig): Promise<operations.ImporterExporterCodeVerificationAPIResponse>;
}
