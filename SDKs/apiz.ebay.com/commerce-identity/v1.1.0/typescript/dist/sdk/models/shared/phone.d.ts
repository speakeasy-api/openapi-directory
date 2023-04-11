import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type that defines the fields for the details of a phone.
 */
export declare class Phone extends SpeakeasyBase {
    /**
     * The two-letter ISO 3166 standard of the country to which the phone number belongs.
     */
    countryCode?: string;
    /**
     * The numeric string representing the phone number.
     */
    number?: string;
    /**
     * The type of phone service. Valid Values: MOBILE or LAND_LINE Code so that your app gracefully handles any future changes to this list.
     */
    phoneType?: string;
}
