import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsCreateTeamSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The information used to create the team
 */
export declare class TeamsCreateTeamRequestBody extends SpeakeasyBase {
    /**
     * The description of the team
     */
    description?: string;
    /**
     * The display name of the team
     */
    displayName: string;
    /**
     * The name of the team
     */
    name?: string;
}
export declare class TeamsCreateTeamRequest extends SpeakeasyBase {
    /**
     * The information used to create the team
     */
    requestBody: TeamsCreateTeamRequestBody;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum TeamsCreateTeamDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class TeamsCreateTeamDefaultApplicationJSONError extends SpeakeasyBase {
    code: TeamsCreateTeamDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class TeamsCreateTeamDefaultApplicationJSON extends SpeakeasyBase {
    error: TeamsCreateTeamDefaultApplicationJSONError;
}
export declare class TeamsCreateTeam201ApplicationJSON extends SpeakeasyBase {
    /**
     * The description of the team
     */
    description?: string;
    /**
     * The display name of the team
     */
    displayName: string;
    /**
     * The internal unique id (UUID) of the team.
     */
    id: string;
    /**
     * The name of the team
     */
    name: string;
}
export declare class TeamsCreateTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    teamsCreateTeam201ApplicationJSONObjects?: TeamsCreateTeam201ApplicationJSON[];
    /**
     * Error
     */
    teamsCreateTeamDefaultApplicationJSONObject?: TeamsCreateTeamDefaultApplicationJSON;
}
