import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateUserHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare enum UpdateUserUpdateUserRequestBodyRoleEnum {
    User = "user",
    Admin = "admin"
}
export declare class UpdateUserUpdateUserRequestBody extends SpeakeasyBase {
    email?: string;
    expiration?: string;
    homeResource?: string;
    locked?: boolean;
    nickname?: string;
    onboarding?: boolean;
    password?: string;
    permissions?: shared.UserPermissions;
    role?: UpdateUserUpdateUserRequestBodyRoleEnum;
    timeZone?: string;
    username?: string;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    pathParams: UpdateUserPathParams;
    headers: UpdateUserHeaders;
    request?: UpdateUserUpdateUserRequestBody;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userResponse?: shared.UserResponse;
}
