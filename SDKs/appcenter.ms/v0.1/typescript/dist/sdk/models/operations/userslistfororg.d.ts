import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersListForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class UsersListForOrgRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum UsersListForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UsersListForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: UsersListForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class UsersListForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: UsersListForOrgDefaultApplicationJSONError;
}
export declare class UsersListForOrg200ApplicationJSON extends SpeakeasyBase {
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
export declare class UsersListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    usersListForOrg200ApplicationJSONObjects?: UsersListForOrg200ApplicationJSON[];
    /**
     * Error
     */
    usersListForOrgDefaultApplicationJSONObject?: UsersListForOrgDefaultApplicationJSON;
}
