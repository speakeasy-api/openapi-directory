import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A session represents an authorized session for a consumer. A session is a JWT token that is valid for a short time (1h by default). Use this session token to open Hosted Vault or Vault JS for a consumer.
 */
export declare class Sessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Session
     *
     * @remarks
     * Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned
     * URL to allow temporary access to manage their integrations and settings.
     *
     * Note: This is a short lived token that will expire after 1 hour (TTL: 3600).
     *
     */
    sessionsCreate(req: operations.SessionsCreateRequest, security: operations.SessionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SessionsCreateResponse>;
}
