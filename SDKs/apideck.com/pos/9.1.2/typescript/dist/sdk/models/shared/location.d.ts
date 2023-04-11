import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
/**
 * Status of this location.
 */
export declare enum LocationStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Other = "other"
}
export declare class LocationInput extends SpeakeasyBase {
    address?: Address;
    /**
     * The business name of the location
     */
    businessName?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    merchantId?: string;
    /**
     * The name of the location
     */
    name?: string;
    /**
     * Status of this location.
     */
    status?: LocationStatusEnum;
}
export declare class Location extends SpeakeasyBase {
    address?: Address;
    /**
     * The business name of the location
     */
    businessName?: string;
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
    merchantId?: string;
    /**
     * The name of the location
     */
    name?: string;
    /**
     * Status of this location.
     */
    status?: LocationStatusEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
