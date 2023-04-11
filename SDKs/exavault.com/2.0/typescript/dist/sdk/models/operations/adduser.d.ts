import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object containing name/value pairs for each permission. Any permission that is not passed will be set to `false` by default. Note that users will be unable to see any files in the account unless you include `list` permission.
 *
 * @remarks
 * When creating a user with the `role` **admin**, you should set all of the permissions to `true`
 */
export declare class AddUserAddUserRequestBodyPermissions extends SpeakeasyBase {
    changePassword?: boolean;
    delete?: boolean;
    deleteFormData?: boolean;
    download?: boolean;
    list?: boolean;
    modify?: boolean;
    notification?: boolean;
    share?: boolean;
    upload?: boolean;
    viewFormData?: boolean;
}
/**
 * The type of user to create, either **user** or **admin**.
 */
export declare enum AddUserAddUserRequestBodyRoleEnum {
    User = "user",
    Admin = "admin"
}
export declare class AddUserAddUserRequestBody extends SpeakeasyBase {
    /**
     * Email address for the user
     */
    email: string;
    /**
     * Optional timestamp when the user should expire, formatted in date-time.
     */
    expiration?: string;
    /**
     * Resource identifier for the user's home folder. See details on [how to specify resources](#section/Identifying-Resources) above.
     *
     * @remarks
     *
     * The user will be locked to this directory and unable to move 'up' in the account. If the folder does not exist in the account, it will be created when the user is created.
     *
     * Users with the `role` **admin** should have their homeResource set to '/'
     */
    homeResource: string;
    /**
     * If true, the user will not be able to log in
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
     * Password for the user
     */
    password: string;
    /**
     * An object containing name/value pairs for each permission. Any permission that is not passed will be set to `false` by default. Note that users will be unable to see any files in the account unless you include `list` permission.
     *
     * @remarks
     * When creating a user with the `role` **admin**, you should set all of the permissions to `true`
     */
    permissions: AddUserAddUserRequestBodyPermissions;
    /**
     * The type of user to create, either **user** or **admin**.
     */
    role: AddUserAddUserRequestBodyRoleEnum;
    /**
     * Time zone, used for accurate time display within the application. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values.
     *
     * @remarks
     *
     */
    timeZone: string;
    /**
     * Username of the user to create. This should follow standard username conventions - spaces are not allowed, etc. We do allow email addresses as usernames.
     *
     * @remarks
     *
     * **Note** Usernames must be unique across all ExaVault accounts.
     */
    username: string;
    /**
     * If **true**, send this new user a welcome email upon creation. The content of the welcome email can be configured with the [PATCH /accounts](#operation/updateAccount) method.
     */
    welcomeEmail?: boolean;
}
export declare class AddUserRequest extends SpeakeasyBase {
    requestBody?: AddUserAddUserRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call
     */
    evApiKey: string;
}
export declare class AddUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    userResponse?: shared.UserResponse;
}
