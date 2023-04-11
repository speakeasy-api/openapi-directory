import { SpeakeasyBase } from "../../../internal/utils";
export declare class Address extends SpeakeasyBase {
    /**
     * The name of the city. Required if `stateOrProvince` is provided.
     *
     * @remarks
     *
     * If you specify the city, you must also send `postalCode` and `street`.
     */
    city?: string;
    /**
     * The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
     */
    country: string;
    /**
     * Postal code. Required if `stateOrProvince` and/or `city` is provided.
     */
    postalCode?: string;
    /**
     * The two-letter ISO 3166-2 state or province code. For example, **CA** in the US.
     *
     * @remarks
     *
     * If you specify the state or province, you must also send `city`, `postalCode`, and `street`.
     */
    stateOrProvince?: string;
    /**
     * The name of the street, and the house or building number. Required if `stateOrProvince` and/or `city` is provided.
     */
    street?: string;
    /**
     * The apartment, unit, or suite number.
     */
    street2?: string;
}
