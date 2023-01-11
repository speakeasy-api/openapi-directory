import { AxiosInstance } from "axios";
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
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
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
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
