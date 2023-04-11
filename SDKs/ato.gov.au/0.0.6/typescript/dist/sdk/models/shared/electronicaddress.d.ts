import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The electronic address type.
 */
export declare enum ElectronicAddressElectronicAddressTypeEnum {
    Email = "Email",
    Fax = "Fax",
    Landline = "Landline",
    Mobile = "Mobile",
    Website = "Website"
}
/**
 * The Electronic Address resource.
 */
export declare class ElectronicAddressInput extends SpeakeasyBase {
    /**
     * The area code, for example, "02".
     */
    areaCode?: string;
    /**
     * The country prefix, for example, "61".
     */
    countryPrefix?: string;
    /**
     * The electronic address type.
     */
    electronicAddressType?: ElectronicAddressElectronicAddressTypeEnum;
    /**
     * The email address, for example, "robert.ferguson@ato.gov.au".
     */
    email?: string;
    /**
     * The extension number, for example, "4453".
     */
    extension?: string;
    /**
     * The number, for example, "62164453".
     */
    number?: string;
    /**
     * The website address, for example, "https://ato.gov.au".
     */
    url?: string;
}
/**
 * The Electronic Address resource.
 */
export declare class ElectronicAddress extends SpeakeasyBase {
    /**
     * The area code, for example, "02".
     */
    areaCode?: string;
    /**
     * The country prefix, for example, "61".
     */
    countryPrefix?: string;
    /**
     * The electronic address type.
     */
    electronicAddressType?: ElectronicAddressElectronicAddressTypeEnum;
    /**
     * The email address, for example, "robert.ferguson@ato.gov.au".
     */
    email?: string;
    /**
     * The extension number, for example, "4453".
     */
    extension?: string;
    /**
     * The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    fromDate?: Date;
    /**
     * The resource's unique identifier.
     */
    id?: string;
    /**
     * The number, for example, "62164453".
     */
    number?: string;
    /**
     * The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    toDate?: Date;
    /**
     * The website address, for example, "https://ato.gov.au".
     */
    url?: string;
}
