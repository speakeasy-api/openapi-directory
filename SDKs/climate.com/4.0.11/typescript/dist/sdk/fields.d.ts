import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Field data endpoints.
 */
export declare class Fields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve list of all Fields the user has access to.
     *
     * @remarks
     * Retrieve all fields the authenticated user has access to, including fields shared with the authenticated user from other resource owners. Filter the results by field name if the `fieldName` query parameter is specified.
     * A 409 will be returned if the X-Next-Token has expired. When receiving a 409, the client should discard the X-Next-Token, discard all currently persisted fields for the user, and re-fetch fields from /fields/all.
     */
    fetchAllFields(req: operations.FetchAllFieldsRequest, security: operations.FetchAllFieldsSecurity, config?: AxiosRequestConfig): Promise<operations.FetchAllFieldsResponse>;
    /**
     * Retrieve a specific Field by ID
     *
     * @remarks
     * Retrieve a given **Field** by ID.
     */
    fetchFieldById(req: operations.FetchFieldByIdRequest, security: operations.FetchFieldByIdSecurity, config?: AxiosRequestConfig): Promise<operations.FetchFieldByIdResponse>;
    /**
     * Retrieve list of Fields
     *
     * @remarks
     * Retrieve list of **Fields**. Filter the results by field name if the `fieldName` query parameter is specified.
     */
    fetchFields(req: operations.FetchFieldsRequest, security: operations.FetchFieldsSecurity, config?: AxiosRequestConfig): Promise<operations.FetchFieldsResponse>;
}
