import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { ServiceCharge, ServiceChargeInput } from "./servicecharge";
/**
 * Status of this merchant.
 */
export declare enum MerchantStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Other = "other"
}
export declare class MerchantInput extends SpeakeasyBase {
    address?: Address;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * language code according to ISO 639-1. For the United States - EN
     */
    language?: string;
    /**
     * The main location ID of the merchant
     */
    mainLocationId?: string;
    /**
     * The name of the merchant
     */
    name?: string;
    ownerId?: string;
    serviceCharges?: ServiceChargeInput[];
    /**
     * Status of this merchant.
     */
    status?: MerchantStatusEnum;
}
export declare class Merchant extends SpeakeasyBase {
    address?: Address;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * language code according to ISO 639-1. For the United States - EN
     */
    language?: string;
    /**
     * The main location ID of the merchant
     */
    mainLocationId?: string;
    /**
     * The name of the merchant
     */
    name?: string;
    ownerId?: string;
    serviceCharges?: ServiceCharge[];
    /**
     * Status of this merchant.
     */
    status?: MerchantStatusEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
