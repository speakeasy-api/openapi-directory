import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";
import { MFAOptionType } from "./mfaoptiontype";
import { UserStatusTypeEnum } from "./userstatustypeenum";
/**
 * A user profile in a Amazon Cognito user pool.
 */
export declare class UserType extends SpeakeasyBase {
    attributes?: AttributeType[];
    enabled?: boolean;
    mfaOptions?: MFAOptionType[];
    userCreateDate?: Date;
    userLastModifiedDate?: Date;
    userStatus?: UserStatusTypeEnum;
    username?: string;
}
