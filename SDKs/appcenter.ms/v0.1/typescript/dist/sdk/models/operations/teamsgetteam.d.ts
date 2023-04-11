import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsGetTeamSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TeamsGetTeamRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The team's name
     */
    teamName: string;
}
export declare enum TeamsGetTeamDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class TeamsGetTeamDefaultApplicationJSONError extends SpeakeasyBase {
    code: TeamsGetTeamDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class TeamsGetTeamDefaultApplicationJSON extends SpeakeasyBase {
    error: TeamsGetTeamDefaultApplicationJSONError;
}
/**
 * Success
 */
export declare class TeamsGetTeam200ApplicationJSON extends SpeakeasyBase {
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
export declare class TeamsGetTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    teamsGetTeam200ApplicationJSONObject?: TeamsGetTeam200ApplicationJSON;
    /**
     * Error
     */
    teamsGetTeamDefaultApplicationJSONObject?: TeamsGetTeamDefaultApplicationJSON;
}
