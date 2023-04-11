import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints related to attendees signing in on the premises
 */
export declare class AttendeesSignins {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a signin record
     *
     * @remarks
     * Delete a signin record
     *
     */
    deleteSigninSigninId(req: operations.DeleteSigninSigninIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSigninSigninIdResponse>;
    /**
     * Retrieve the information associated with a signin record
     *
     * @remarks
     * Retrieve the information associated with a signin record
     *
     */
    getSigninSigninId(req: operations.GetSigninSigninIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSigninSigninIdResponse>;
    /**
     * Get signin info
     *
     * @remarks
     * Returns a list of signin objects sorted by signin ID descending.
     */
    getSignins(req: operations.GetSigninsRequest, config?: AxiosRequestConfig): Promise<operations.GetSigninsResponse>;
    /**
     * Create a new signin record
     */
    postSignin(req: shared.Signin, config?: AxiosRequestConfig): Promise<operations.PostSigninResponse>;
    /**
     * Update a signin record
     *
     * @remarks
     * Update a signin record
     *
     */
    putSigninSigninId(req: operations.PutSigninSigninIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSigninSigninIdResponse>;
}
