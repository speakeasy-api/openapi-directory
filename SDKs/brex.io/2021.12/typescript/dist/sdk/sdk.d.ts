import { V1Company } from "./v1company";
import { V1EinVerification } from "./v1einverification";
import { V1IbanVerification } from "./v1ibanverification";
import { V1NifVerification } from "./v1nifverification";
import { V1Pepsanction } from "./v1pepsanction";
import { V1Product } from "./v1product";
import { V1System } from "./v1system";
import { V1TinVerification } from "./v1tinverification";
import { V1VatVerification } from "./v1vatverification";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.kompany.com/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * API Interface to retrieve company data and products from business registers
 */
export declare class SDK {
    /**
     * Company Search methods
     */
    v1Company: V1Company;
    /**
     * US EIN tax number methods
     */
    v1EinVerification: V1EinVerification;
    /**
     * IBAN Verification methods
     */
    v1IbanVerification: V1IbanVerification;
    /**
     * NIF Verification methods
     */
    v1NifVerification: V1NifVerification;
    /**
     * Pep Sanction Check methods
     */
    v1Pepsanction: V1Pepsanction;
    /**
     * Product Search, Order and Retrieve methods
     */
    v1Product: V1Product;
    /**
     * System overview
     */
    v1System: V1System;
    /**
     * TIN Verification methods
     */
    v1TinVerification: V1TinVerification;
    /**
     * VAT Verification methods
     */
    v1VatVerification: V1VatVerification;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
