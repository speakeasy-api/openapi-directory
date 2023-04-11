import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The address type.
 */
export declare enum OrganisationAddressAddressTypeEnum {
    Mailing = "Mailing",
    PrincipalPlaceOfBusiness = "Principal Place of Business"
}
/**
 * The Address resource.
 */
export declare class OrganisationAddressInput extends SpeakeasyBase {
    /**
     * The address type.
     */
    addressType?: OrganisationAddressAddressTypeEnum;
    /**
     * The city.
     */
    city?: string;
    /**
     * The country.
     */
    country?: string;
    /**
     * The address line 1.
     */
    line1?: string;
    /**
     * The address line 2.
     */
    line2?: string;
    /**
     * The address line 3.
     */
    line3?: string;
    /**
     * The address name.
     */
    name?: string;
    /**
     * The postal code.
     */
    postalCode?: string;
    /**
     * The suburb.
     */
    suburb?: string;
}
/**
 * The Address resource.
 */
export declare class OrganisationAddress extends SpeakeasyBase {
    /**
     * The address type.
     */
    addressType?: OrganisationAddressAddressTypeEnum;
    /**
     * The city.
     */
    city?: string;
    /**
     * The country.
     */
    country?: string;
    /**
     * The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    fromDate?: Date;
    /**
     * The resource's unique identifier.
     */
    id?: string;
    /**
     * The address line 1.
     */
    line1?: string;
    /**
     * The address line 2.
     */
    line2?: string;
    /**
     * The address line 3.
     */
    line3?: string;
    /**
     * The address name.
     */
    name?: string;
    /**
     * The postal code.
     */
    postalCode?: string;
    /**
     * The suburb.
     */
    suburb?: string;
    /**
     * The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    toDate?: Date;
}
