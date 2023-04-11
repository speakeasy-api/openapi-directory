import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Provisioning {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new Billbee user account with the data passed
     */
    automaticProvisioningCreateAccountForm(req: shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer, config?: AxiosRequestConfig): Promise<operations.AutomaticProvisioningCreateAccountFormResponse>;
    /**
     * Creates a new Billbee user account with the data passed
     */
    automaticProvisioningCreateAccountJson(req: shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer, config?: AxiosRequestConfig): Promise<operations.AutomaticProvisioningCreateAccountJsonResponse>;
    /**
     * Creates a new Billbee user account with the data passed
     */
    automaticProvisioningCreateAccountRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.AutomaticProvisioningCreateAccountRawResponse>;
    /**
     * Returns infos about Billbee terms and conditions
     */
    automaticProvisioningTermsInfo(config?: AxiosRequestConfig): Promise<operations.AutomaticProvisioningTermsInfoResponse>;
}
