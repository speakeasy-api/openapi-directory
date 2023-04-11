import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Currency
 */
export declare class Currency extends SpeakeasyBase {
    /**
     * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format.
     */
    code: string;
    /**
     * Number of decimal digits.
     */
    decimalDigits: number;
    /**
     * Currency name.
     */
    name: string;
    /**
     * Currency plural name
     */
    namePlural: string;
    /**
     * Currency digit rounding.
     */
    rounding: number;
    /**
     * Currency symbol.
     */
    symbol: string;
    /**
     * Currency native symbol.
     */
    symbolNative: string;
}
