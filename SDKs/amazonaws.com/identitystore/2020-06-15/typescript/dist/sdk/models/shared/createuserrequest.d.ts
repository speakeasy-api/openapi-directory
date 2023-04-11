import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Email } from "./email";
import { Name } from "./name";
import { PhoneNumber } from "./phonenumber";
export declare class CreateUserRequest extends SpeakeasyBase {
    addresses?: Address[];
    displayName?: string;
    emails?: Email[];
    identityStoreId: string;
    locale?: string;
    name?: Name;
    nickName?: string;
    phoneNumbers?: PhoneNumber[];
    preferredLanguage?: string;
    profileUrl?: string;
    timezone?: string;
    title?: string;
    userName?: string;
    userType?: string;
}
