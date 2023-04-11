import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Create Group User
 */
export declare class GroupUserEntity extends SpeakeasyBase {
    /**
     * Is this user an administrator of this group?
     */
    admin?: boolean;
    /**
     * Group ID
     */
    groupId?: number;
    /**
     * Group name
     */
    groupName?: string;
    /**
     * User ID
     */
    userId?: number;
    /**
     * A list of usernames for users in this group
     */
    usernames?: string[];
}
