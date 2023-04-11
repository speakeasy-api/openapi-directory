import { SpeakeasyBase } from "../../../internal/utils";
export declare class Address2 extends SpeakeasyBase {
    /**
     * The name of the city.
     */
    city?: string;
    /**
     * The two-character ISO 3166-1 alpha-2 country code. For example, **US**.
     *
     * @remarks
     * >If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.
     */
    country: string;
    /**
     * First line of the street address.
     */
    line1?: string;
    /**
     * Second line of the street address.
     */
    line2?: string;
    /**
     * The postal code.
     *
     * @remarks
     * Maximum length:
     * * 5 digits for an address in the US.
     * * 10 characters for an address in all other countries.
     */
    postalCode?: string;
    /**
     * The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.
     *
     * @remarks
     * > Required for the US and Canada.
     */
    stateOrProvince?: string;
}
