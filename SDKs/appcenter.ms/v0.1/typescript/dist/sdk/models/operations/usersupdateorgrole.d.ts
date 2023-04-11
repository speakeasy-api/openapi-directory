import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersUpdateOrgRoleSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The user's role in the organizatiion
 */
export declare enum UsersUpdateOrgRoleRequestBodyRoleEnum {
    Admin = "admin",
    Collaborator = "collaborator",
    Member = "member"
}
export declare class UsersUpdateOrgRoleRequestBody extends SpeakeasyBase {
    /**
     * The user's role in the organizatiion
     */
    role?: UsersUpdateOrgRoleRequestBodyRoleEnum;
}
export declare class UsersUpdateOrgRoleRequest extends SpeakeasyBase {
    requestBody: UsersUpdateOrgRoleRequestBody;
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The slug name of the user
     */
    userName: string;
}
export declare enum UsersUpdateOrgRoleDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UsersUpdateOrgRoleDefaultApplicationJSONError extends SpeakeasyBase {
    code: UsersUpdateOrgRoleDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class UsersUpdateOrgRoleDefaultApplicationJSON extends SpeakeasyBase {
    error: UsersUpdateOrgRoleDefaultApplicationJSONError;
}
/**
 * Success
 */
export declare class UsersUpdateOrgRole200ApplicationJSON extends SpeakeasyBase {
    /**
     * The full name of the user. Might for example be first and last name
     */
    displayName: string;
    /**
     * The email address of the user
     */
    email: string;
    /**
     * The date when the user joined the organization
     */
    joinedAt: string;
    /**
     * The unique name that is used to identify the user.
     */
    name: string;
    /**
     * The role the user has within the organization
     */
    role: string;
}
export declare class UsersUpdateOrgRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    usersUpdateOrgRole200ApplicationJSONObject?: UsersUpdateOrgRole200ApplicationJSON;
    /**
     * Error
     */
    usersUpdateOrgRoleDefaultApplicationJSONObject?: UsersUpdateOrgRoleDefaultApplicationJSON;
}
