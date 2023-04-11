import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the details of the primary contact information associated with an Amazon Web Services account.
 */
export declare class ContactInformation extends SpeakeasyBase {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    city: string;
    companyName?: string;
    countryCode: string;
    districtOrCounty?: string;
    fullName: string;
    phoneNumber: string;
    postalCode: string;
    stateOrRegion?: string;
    websiteUrl?: string;
}
