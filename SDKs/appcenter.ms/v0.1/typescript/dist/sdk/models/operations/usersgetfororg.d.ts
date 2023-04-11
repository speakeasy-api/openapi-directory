import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersGetForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class UsersGetForOrgRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The slug name of the user
     */
    userName: string;
}
export declare enum UsersGetForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UsersGetForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: UsersGetForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class UsersGetForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: UsersGetForOrgDefaultApplicationJSONError;
}
/**
 * Success
 */
export declare class UsersGetForOrg200ApplicationJSON extends SpeakeasyBase {
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
export declare class UsersGetForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    usersGetForOrg200ApplicationJSONObject?: UsersGetForOrg200ApplicationJSON;
    /**
     * Error
     */
    usersGetForOrgDefaultApplicationJSONObject?: UsersGetForOrgDefaultApplicationJSON;
}
