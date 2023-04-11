import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Parse UUID string and check for its validity and return version details
 *
 * @see {@link https://fungenerators.com/api/uuid/} - Find out more
 */
export declare class UUIDParsing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Parse a UUID string and return its version and check whether it is valid.
     */
    postUuid(req: operations.PostUuidRequest, security: operations.PostUuidSecurity, config?: AxiosRequestConfig): Promise<operations.PostUuidResponse>;
}
