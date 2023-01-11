import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddUserHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
/**
 * An object containing name/value pairs for each permission. Any permission that is not passed will be set to `false` by default. Note that users will be unable to see any files in the account unless you include `list` permission.
 * When creating a user with the `role` **admin**, you should set all of the permissions to `true`
**/
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
export declare enum AddUserAddUserRequestBodyRoleEnum {
    User = "user",
    Admin = "admin"
}
export declare class AddUserAddUserRequestBody extends SpeakeasyBase {
    email: string;
    expiration?: string;
    homeResource: string;
    locked?: boolean;
    nickname?: string;
    onboarding?: boolean;
    password: string;
    permissions: AddUserAddUserRequestBodyPermissions;
    role: AddUserAddUserRequestBodyRoleEnum;
    timeZone: string;
    username: string;
    welcomeEmail?: boolean;
}
export declare class AddUserRequest extends SpeakeasyBase {
    headers: AddUserHeaders;
    request?: AddUserAddUserRequestBody;
}
export declare class AddUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userResponse?: shared.UserResponse;
}
