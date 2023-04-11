import { SpeakeasyBase } from "../../../internal/utils";
import { UserTypeEnum } from "./usertypeenum";
/**
 * Information about a user whose activity is recorded in an event for a space.
 */
export declare class UserIdentity extends SpeakeasyBase {
    awsAccountId?: string;
    principalId: string;
    userName?: string;
    userType: UserTypeEnum;
}
