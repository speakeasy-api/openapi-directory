import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Initialization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Store payout details
     *
     * @remarks
     * Stores payment details under the `PAYOUT` recurring contract. These payment details can be used later to submit a payout via the `/submitThirdParty` call.
     */
    postStoreDetail(req: shared.StoreDetailRequest, security: operations.PostStoreDetailSecurity, config?: AxiosRequestConfig): Promise<operations.PostStoreDetailResponse>;
    /**
     * Store details and submit a payout
     *
     * @remarks
     * Submits a payout and stores its details for subsequent payouts.
     *
     * The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.
     */
    postStoreDetailAndSubmitThirdParty(req: shared.StoreDetailAndSubmitRequest, security: operations.PostStoreDetailAndSubmitThirdPartySecurity, config?: AxiosRequestConfig): Promise<operations.PostStoreDetailAndSubmitThirdPartyResponse>;
    /**
     * Submit a payout
     *
     * @remarks
     * Submits a payout using the previously stored payment details. To store payment details, use the `/storeDetail` API call.
     *
     * The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.
     */
    postSubmitThirdParty(req: shared.SubmitRequest, security: operations.PostSubmitThirdPartySecurity, config?: AxiosRequestConfig): Promise<operations.PostSubmitThirdPartyResponse>;
}
