import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Execute {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * DELETE
     *
     * @remarks
     * Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
     */
    deleteProxy(req: operations.DeleteProxyRequest, security: operations.DeleteProxySecurity, config?: AxiosRequestConfig): Promise<operations.DeleteProxyResponse>;
    /**
     * GET
     *
     * @remarks
     * Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
     */
    getProxy(req: operations.GetProxyRequest, security: operations.GetProxySecurity, config?: AxiosRequestConfig): Promise<operations.GetProxyResponse>;
    /**
     * OPTIONS
     *
     * @remarks
     * Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
     */
    optionsProxy(req: operations.OptionsProxyRequest, security: operations.OptionsProxySecurity, config?: AxiosRequestConfig): Promise<operations.OptionsProxyResponse>;
    /**
     * PATCH
     *
     * @remarks
     * Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
     */
    patchProxy(req: operations.PatchProxyRequest, security: operations.PatchProxySecurity, config?: AxiosRequestConfig): Promise<operations.PatchProxyResponse>;
    /**
     * POST
     *
     * @remarks
     * Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
     */
    postProxy(req: operations.PostProxyRequest, security: operations.PostProxySecurity, config?: AxiosRequestConfig): Promise<operations.PostProxyResponse>;
    /**
     * PUT
     *
     * @remarks
     * Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
     */
    putProxy(req: operations.PutProxyRequest, security: operations.PutProxySecurity, config?: AxiosRequestConfig): Promise<operations.PutProxyResponse>;
}
