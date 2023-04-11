import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of user (**admin** or **user**). Note that admin users cannot have a `homeResource` other than '/', and will have full permissions, but you must provide at least "download,upload,list,delete" in the `permissions` parameter.
 */
export declare enum UpdateUserUpdateUserRequestBodyRoleEnum {
    User = "user",
    Admin = "admin"
}
export declare class UpdateUserUpdateUserRequestBody extends SpeakeasyBase {
    /**
     * Email address for the user
     */
    email?: string;
    /**
     * Optional timestamp when the user should expire.
     */
    expiration?: string;
    /**
     * Resource identifier for the user's home folder. See details on [how to specify resources](#section/Identifying-Resources) above.
     *
     * @remarks
     *
     * The user will be locked to this directory and unable to move 'up' in the account. If the folder does not exist in the account, it will be created when the user logs in.
     *
     * This setting is ignored for users with the `role` **admin**.
     */
    homeResource?: string;
    /**
     * If true, the user will be prevented from logging in
     */
    locked?: boolean;
    /**
     * An optional nickname (e.g. 'David from Sales').
     */
    nickname?: string;
    /**
     * Set this to **true** to enable extra help popups in the web file manager for this user.
     */
    onboarding?: boolean;
    /**
     * New password for the user
     */
    password?: string;
    permissions?: shared.UserPermissions;
    /**
     * The type of user (**admin** or **user**). Note that admin users cannot have a `homeResource` other than '/', and will have full permissions, but you must provide at least "download,upload,list,delete" in the `permissions` parameter.
     */
    role?: UpdateUserUpdateUserRequestBodyRoleEnum;
    /**
     * Time zone, used for accurate time display within the application. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values.
     *
     * @remarks
     *
     */
    timeZone?: string;
    /**
     * New username for the user. This should follow standard username conventions - spaces are not allowed, etc. We do allow email addresses as usernames.
     *
     * @remarks
     *
     * **Note** Usernames must be unique across all ExaVault accounts.
     */
    username?: string;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    requestBody?: UpdateUserUpdateUserRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
    /**
     * The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.
     */
    id: number;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    userResponse?: shared.UserResponse;
}
