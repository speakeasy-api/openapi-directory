import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveUserSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TeamsRemoveUserRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The team's name
     */
    teamName: string;
    /**
     * The slug name of the user
     */
    userName: string;
}
export declare enum TeamsRemoveUserDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class TeamsRemoveUserDefaultApplicationJSONError extends SpeakeasyBase {
    code: TeamsRemoveUserDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class TeamsRemoveUserDefaultApplicationJSON extends SpeakeasyBase {
    error: TeamsRemoveUserDefaultApplicationJSONError;
}
export declare class TeamsRemoveUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    teamsRemoveUserDefaultApplicationJSONObject?: TeamsRemoveUserDefaultApplicationJSON;
}
