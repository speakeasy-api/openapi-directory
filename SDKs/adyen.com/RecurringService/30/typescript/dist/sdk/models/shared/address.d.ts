import { SpeakeasyBase } from "../../../internal/utils";
export declare class Address extends SpeakeasyBase {
    /**
     * The name of the city. Maximum length: 3000 characters.
     */
    city: string;
    /**
     * The two-character ISO-3166-1 alpha-2 country code. For example, **US**.
     *
     * @remarks
     * > If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.
     */
    country: string;
    /**
     * The number or name of the house. Maximum length: 3000 characters.
     */
    houseNumberOrName: string;
    /**
     * A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.
     */
    postalCode: string;
    /**
     * The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.
     *
     * @remarks
     * > Required for the US and Canada.
     */
    stateOrProvince?: string;
    /**
     * The name of the street. Maximum length: 3000 characters.
     *
     * @remarks
     * > The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.
     */
    street: string;
}
