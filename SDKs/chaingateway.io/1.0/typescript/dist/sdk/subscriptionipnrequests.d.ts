import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Requests for creating, deleting and listing existing subscriptions
 */
export declare class SubscriptionIPNRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listFailedIPNs
     *
     * @remarks
     * Returns all subscriptions/IPNs created with an account.
     */
    listFailedIPNs(req: operations.ListFailedIPNsRequest, config?: AxiosRequestConfig): Promise<operations.ListFailedIPNsResponse>;
    /**
     * listSubscribedAddresses
     *
     * @remarks
     * Returns all subscriptions/IPNs created with an account.
     */
    listSubscribedAddresses(req: operations.ListSubscribedAddressesRequest, config?: AxiosRequestConfig): Promise<operations.ListSubscribedAddressesResponse>;
    /**
     * resendFailedIPN
     *
     * @remarks
     * Returns all subscriptions/IPNs created with an account.
     */
    resendFailedIPN(req: operations.ResendFailedIPNRequest, config?: AxiosRequestConfig): Promise<operations.ResendFailedIPNResponse>;
    /**
     * subscribeAddress
     *
     * @remarks
     * Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.
     *
     */
    subscribeAddress(req: operations.SubscribeAddressRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeAddressResponse>;
    /**
     * unsubscribeAddress
     *
     * @remarks
     * Deletes an existing subscription/IPN for the given address (and contractaddress).
     */
    unsubscribeAddress(req: operations.UnsubscribeAddressRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeAddressResponse>;
}
