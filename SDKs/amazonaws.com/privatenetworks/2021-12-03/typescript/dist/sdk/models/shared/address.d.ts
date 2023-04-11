import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an address.
 */
export declare class Address extends SpeakeasyBase {
    city: string;
    company?: string;
    country: string;
    name: string;
    phoneNumber?: string;
    postalCode: string;
    stateOrProvince: string;
    street1: string;
    street2?: string;
    street3?: string;
}
