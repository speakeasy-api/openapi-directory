import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsAddUserSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The email of the user to add to the team
 */
export declare class TeamsAddUserRequestBody extends SpeakeasyBase {
    /**
     * The user's email address
     */
    userEmail: string;
}
export declare class TeamsAddUserRequest extends SpeakeasyBase {
    /**
     * The email of the user to add to the team
     */
    requestBody: TeamsAddUserRequestBody;
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The team's name
     */
    teamName: string;
}
export declare enum TeamsAddUserDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class TeamsAddUserDefaultApplicationJSONError extends SpeakeasyBase {
    code: TeamsAddUserDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class TeamsAddUserDefaultApplicationJSON extends SpeakeasyBase {
    error: TeamsAddUserDefaultApplicationJSONError;
}
/**
 * The role of the user has within the team
 */
export declare enum TeamsAddUser201ApplicationJSONRoleEnum {
    Maintainer = "maintainer",
    Collaborator = "collaborator"
}
/**
 * Success
 */
export declare class TeamsAddUser201ApplicationJSON extends SpeakeasyBase {
    /**
     * The full name of the user. Might for example be first and last name
     */
    displayName: string;
    /**
     * The email address of the user
     */
    email: string;
    /**
     * The unique name that is used to identify the user.
     */
    name: string;
    /**
     * The role of the user has within the team
     */
    role: TeamsAddUser201ApplicationJSONRoleEnum;
}
export declare class TeamsAddUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    teamsAddUser201ApplicationJSONObject?: TeamsAddUser201ApplicationJSON;
    /**
     * Error
     */
    teamsAddUserDefaultApplicationJSONObject?: TeamsAddUserDefaultApplicationJSON;
}
