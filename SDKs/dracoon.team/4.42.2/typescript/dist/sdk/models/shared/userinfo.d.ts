import { SpeakeasyBase } from "../../../internal/utils";
/**
 * &#128640; Since v4.11.0
 *
 * @remarks
 *
 * User type:
 *
 * * `internal` - ordinary DRACOON user
 *
 * * `external` - external user without DRACOON account
 *
 * * `system` - system user (non human &#128125;)
 *
 * * `deleted` - deleted DRACOON user
 */
export declare enum UserInfoUserTypeEnum {
    System = "system",
    Internal = "internal",
    External = "external",
    Deleted = "deleted"
}
/**
 * User information
 */
export declare class UserInfo extends SpeakeasyBase {
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Avatar UUID
     */
    avatarUuid: string;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * Display name
     *
     * use other fields from `UserInfo` instead to combine a display name
     */
    displayName?: string;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Email
     */
    email?: string;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * User first name (mandatory if `userType` is `internal`)
     */
    firstName: string;
    /**
     * Unique identifier for the user
     */
    id: number;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * User last name (mandatory if `userType` is `internal`)
     */
    lastName: string;
    /**
     * &#128679; Deprecated since v4.18.0
     *
     * @remarks
     *
     * Job title
     */
    title?: string;
    /**
     * &#128640; Since v4.13.0
     *
     * @remarks
     *
     * Username (only returned for `internal` users)
     */
    userName: string;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * User type:
     *
     * * `internal` - ordinary DRACOON user
     *
     * * `external` - external user without DRACOON account
     *
     * * `system` - system user (non human &#128125;)
     *
     * * `deleted` - deleted DRACOON user
     */
    userType: UserInfoUserTypeEnum;
}
