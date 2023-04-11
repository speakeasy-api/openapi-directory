import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
/**
 * The type of the service charge.
 */
export declare enum ServiceChargeTypeEnum {
    AutoGratuity = "auto_gratuity",
    Custom = "custom"
}
export declare class ServiceChargeInput extends SpeakeasyBase {
    active?: boolean;
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * Service charge name
     */
    name?: string;
    /**
     * Service charge percentage. Use this field to calculate the amount of the service charge. Pass a percentage and amount at the same time.
     */
    percentage?: number;
    /**
     * The type of the service charge.
     */
    type?: ServiceChargeTypeEnum;
}
export declare class ServiceCharge extends SpeakeasyBase {
    active?: boolean;
    amount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * Service charge name
     */
    name?: string;
    /**
     * Service charge percentage. Use this field to calculate the amount of the service charge. Pass a percentage and amount at the same time.
     */
    percentage?: number;
    /**
     * The type of the service charge.
     */
    type?: ServiceChargeTypeEnum;
}
