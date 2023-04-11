import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MyAPICredential {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove allowed origin
     *
     * @remarks
     * Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.
     * The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).
     *
     * You can make this request with any of the Management API roles.
     */
    deleteMeAllowedOriginsOriginId(req: operations.DeleteMeAllowedOriginsOriginIdRequest, security: operations.DeleteMeAllowedOriginsOriginIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteMeAllowedOriginsOriginIdResponse>;
    /**
     * Get API credential details
     *
     * @remarks
     * Returns your [API credential](https://docs.adyen.com/development-resources/api-credentials) details based on the API Key you used in the request.
     *
     * You can make this request with any of the Management API roles.
     */
    getMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * Get allowed origins
     *
     * @remarks
     * Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your [API credential](https://docs.adyen.com/development-resources/api-credentials) based on the API key you used in the request.
     *
     * You can make this request with any of the Management API roles.
     */
    getMeAllowedOrigins(config?: AxiosRequestConfig): Promise<operations.GetMeAllowedOriginsResponse>;
    /**
     * Get allowed origin details
     *
     * @remarks
     * Returns the details of the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.
     * The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).
     *
     * You can make this request with any of the Management API roles.
     */
    getMeAllowedOriginsOriginId(req: operations.GetMeAllowedOriginsOriginIdRequest, security: operations.GetMeAllowedOriginsOriginIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMeAllowedOriginsOriginIdResponse>;
    /**
     * Add allowed origin
     *
     * @remarks
     * Adds an allowed origin to the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your API credential.
     * The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).
     *
     * You can make this request with any of the Management API roles.
     */
    postMeAllowedOrigins(req: shared.CreateAllowedOriginRequest, security: operations.PostMeAllowedOriginsSecurity, config?: AxiosRequestConfig): Promise<operations.PostMeAllowedOriginsResponse>;
}
