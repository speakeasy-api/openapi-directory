import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Email } from "./email";
import { ExternalId } from "./externalid";
import { Name } from "./name";
import { PhoneNumber } from "./phonenumber";
/**
 * A user object that contains a specified user’s metadata and attributes.
 */
export declare class User extends SpeakeasyBase {
    addresses?: Address[];
    displayName?: string;
    emails?: Email[];
    externalIds?: ExternalId[];
    identityStoreId: string;
    locale?: string;
    name?: Name;
    nickName?: string;
    phoneNumbers?: PhoneNumber[];
    preferredLanguage?: string;
    profileUrl?: string;
    timezone?: string;
    title?: string;
    userId: string;
    userName?: string;
    userType?: string;
}
