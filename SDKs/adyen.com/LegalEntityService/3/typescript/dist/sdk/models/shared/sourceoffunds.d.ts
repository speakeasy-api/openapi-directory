import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the source of funds. Possible value: **business**.
 */
export declare enum SourceOfFundsTypeEnum {
    Business = "business"
}
export declare class SourceOfFunds extends SpeakeasyBase {
    /**
     * The unique identifier of the business line that will be the source of funds.This must be a business line for a **receivePayments** or **receiveFromPlatformPayments** capability.
     */
    acquiringBusinessLineId?: string;
    /**
     * Indicates whether the funds are coming from transactions processed by Adyen. If **false**, a `description` is required.
     */
    adyenProcessedFunds?: boolean;
    /**
     * Text describing the source of funds. For example, for `type` **business**, provide a description of where the business transactions come from, such as payments through bank transfer. Required when `adyenProcessedFunds` is **false**.
     */
    description?: string;
    /**
     * The type of the source of funds. Possible value: **business**.
     */
    type?: SourceOfFundsTypeEnum;
}
