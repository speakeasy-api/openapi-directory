import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { FoundByKeyValue } from "./foundbykeyvalue";
import { GenderEnum } from "./genderenum";
import { PartyTypeEnum } from "./partytypeenum";
/**
 * The standard profile of a customer.
 */
export declare class Profile extends SpeakeasyBase {
    accountNumber?: string;
    additionalInformation?: string;
    address?: Address;
    attributes?: Record<string, string>;
    billingAddress?: Address;
    birthDate?: string;
    businessEmailAddress?: string;
    businessName?: string;
    businessPhoneNumber?: string;
    emailAddress?: string;
    firstName?: string;
    foundByItems?: FoundByKeyValue[];
    gender?: GenderEnum;
    genderString?: string;
    homePhoneNumber?: string;
    lastName?: string;
    mailingAddress?: Address;
    middleName?: string;
    mobilePhoneNumber?: string;
    partyType?: PartyTypeEnum;
    partyTypeString?: string;
    personalEmailAddress?: string;
    phoneNumber?: string;
    profileId?: string;
    shippingAddress?: Address;
}
