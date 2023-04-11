import { AdvertisingEligibility } from "./advertisingeligibility";
import { CustomPolicy } from "./custompolicy";
import { FulfillmentPolicy } from "./fulfillmentpolicy";
import { Kyc } from "./kyc";
import { Onboarding } from "./onboarding";
import { PaymentPolicy } from "./paymentpolicy";
import { PaymentsProgram } from "./paymentsprogram";
import { Privilege } from "./privilege";
import { Program } from "./program";
import { RateTable } from "./ratetable";
import { ReturnPolicy } from "./returnpolicy";
import { SalesTax } from "./salestax";
import { Subscription } from "./subscription";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
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
 * The <b>Account API</b> gives sellers the ability to configure their eBay seller accounts, including the seller's policies (eBay business policies and seller-defined custom policies), opt in and out of eBay seller programs, configure sales tax tables, and get account information.  <br/><br/>For details on the availability of the methods in this API, see <a href="/api-docs/sell/account/overview.html#requirements">Account API requirements and restrictions</a>.
 */
export declare class SDK {
    advertisingEligibility: AdvertisingEligibility;
    customPolicy: CustomPolicy;
    fulfillmentPolicy: FulfillmentPolicy;
    kyc: Kyc;
    onboarding: Onboarding;
    paymentPolicy: PaymentPolicy;
    paymentsProgram: PaymentsProgram;
    privilege: Privilege;
    program: Program;
    rateTable: RateTable;
    returnPolicy: ReturnPolicy;
    salesTax: SalesTax;
    subscription: Subscription;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
