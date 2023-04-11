import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Reviewing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Confirm a payout
     *
     * @remarks
     * Confirms a previously submitted payout.
     *
     * To cancel a payout, use the `/declineThirdParty` endpoint.
     */
    postConfirmThirdParty(req: shared.ModifyRequest, security: operations.PostConfirmThirdPartySecurity, config?: AxiosRequestConfig): Promise<operations.PostConfirmThirdPartyResponse>;
    /**
     * Cancel a payout
     *
     * @remarks
     * Cancels a previously submitted payout.
     *
     * To confirm and send a payout, use the `/confirmThirdParty` endpoint.
     */
    postDeclineThirdParty(req: shared.ModifyRequest, security: operations.PostDeclineThirdPartySecurity, config?: AxiosRequestConfig): Promise<operations.PostDeclineThirdPartyResponse>;
}
