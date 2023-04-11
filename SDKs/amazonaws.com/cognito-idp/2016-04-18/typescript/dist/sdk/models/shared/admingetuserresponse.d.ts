import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";
import { MFAOptionType } from "./mfaoptiontype";
import { UserStatusTypeEnum } from "./userstatustypeenum";
/**
 * Represents the response from the server from the request to get the specified user as an administrator.
 */
export declare class AdminGetUserResponse extends SpeakeasyBase {
    enabled?: boolean;
    mfaOptions?: MFAOptionType[];
    preferredMfaSetting?: string;
    userAttributes?: AttributeType[];
    userCreateDate?: Date;
    userLastModifiedDate?: Date;
    userMFASettingList?: string[];
    userStatus?: UserStatusTypeEnum;
    username: string;
}
