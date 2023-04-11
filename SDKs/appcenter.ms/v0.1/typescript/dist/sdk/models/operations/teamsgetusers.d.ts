import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsGetUsersSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TeamsGetUsersRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The team's name
     */
    teamName: string;
}
export declare enum TeamsGetUsersDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class TeamsGetUsersDefaultApplicationJSONError extends SpeakeasyBase {
    code: TeamsGetUsersDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class TeamsGetUsersDefaultApplicationJSON extends SpeakeasyBase {
    error: TeamsGetUsersDefaultApplicationJSONError;
}
/**
 * The role of the user has within the team
 */
export declare enum TeamsGetUsers200ApplicationJSONRoleEnum {
    Maintainer = "maintainer",
    Collaborator = "collaborator"
}
/**
 * Success
 */
export declare class TeamsGetUsers200ApplicationJSON extends SpeakeasyBase {
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
    role: TeamsGetUsers200ApplicationJSONRoleEnum;
}
export declare class TeamsGetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    teamsGetUsers200ApplicationJSONObject?: TeamsGetUsers200ApplicationJSON;
    /**
     * Error
     */
    teamsGetUsersDefaultApplicationJSONObject?: TeamsGetUsersDefaultApplicationJSON;
}
