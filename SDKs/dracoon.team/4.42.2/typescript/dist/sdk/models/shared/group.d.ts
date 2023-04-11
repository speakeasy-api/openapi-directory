import { SpeakeasyBase } from "../../../internal/utils";
import { RoleList } from "./rolelist";
import { UserInfo } from "./userinfo";
/**
 * Group information
 */
export declare class Group extends SpeakeasyBase {
    /**
     * Amount of users
     */
    cntUsers: number;
    /**
     * Creation date
     */
    createdAt: Date;
    /**
     * User information
     */
    createdBy: UserInfo;
    /**
     * Expiration date
     */
    expireAt?: Date;
    /**
     * List of roles
     */
    groupRoles?: RoleList;
    /**
     * Unique identifier for the group
     */
    id: number;
    /**
     * Group name
     */
    name: string;
    /**
     * Modification date
     */
    updatedAt?: Date;
    /**
     * User information
     */
    updatedBy?: UserInfo;
}
