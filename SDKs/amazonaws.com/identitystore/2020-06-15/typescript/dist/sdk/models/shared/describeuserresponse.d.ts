import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Email } from "./email";
import { ExternalId } from "./externalid";
import { Name } from "./name";
import { PhoneNumber } from "./phonenumber";
/**
 * Success
 */
export declare class DescribeUserResponse extends SpeakeasyBase {
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
