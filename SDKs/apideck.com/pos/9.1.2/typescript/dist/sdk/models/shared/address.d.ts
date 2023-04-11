import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddressTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Home = "home",
    Office = "office",
    Shipping = "shipping",
    Billing = "billing",
    Other = "other"
}
export declare class Address extends SpeakeasyBase {
    /**
     * Name of city.
     */
    city?: string;
    contactName?: string;
    /**
     * country code according to ISO 3166-1 alpha-2.
     */
    country?: string;
    /**
     * Address field that holds a sublocality, such as a county
     */
    county?: string;
    email?: string;
    fax?: string;
    id?: string;
    latitude?: string;
    /**
     * Line 1 of the address e.g. number, street, suite, apt #, etc.
     */
    line1?: string;
    /**
     * Line 2 of the address
     */
    line2?: string;
    /**
     * Line 3 of the address
     */
    line3?: string;
    /**
     * Line 4 of the address
     */
    line4?: string;
    longitude?: string;
    name?: string;
    phoneNumber?: string;
    /**
     * Zip code or equivalent.
     */
    postalCode?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    salutation?: string;
    /**
     * Name of state
     */
    state?: string;
    /**
     * Street number
     */
    streetNumber?: string;
    string?: string;
    type?: AddressTypeEnum;
    website?: string;
}
