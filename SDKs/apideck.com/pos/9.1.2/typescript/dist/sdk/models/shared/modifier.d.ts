import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
export declare class ModifierInput extends SpeakeasyBase {
    alternateName?: string;
    available?: boolean;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * A value you specify that uniquely identifies this request among requests you have sent.
     */
    idempotencyKey?: string;
    modifierGroupId: string;
    name: string;
    priceAmount?: number;
}
export declare class Modifier extends SpeakeasyBase {
    alternateName?: string;
    available?: boolean;
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
     * A value you specify that uniquely identifies this request among requests you have sent.
     */
    idempotencyKey?: string;
    modifierGroupId: string;
    name: string;
    priceAmount?: number;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
