import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about an address.
 */
export declare class Address extends SpeakeasyBase {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    city: string;
    contactName?: string;
    contactPhoneNumber?: string;
    countryCode: string;
    districtOrCounty?: string;
    municipality?: string;
    postalCode: string;
    stateOrRegion: string;
}
