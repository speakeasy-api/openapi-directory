import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppsGetTeamsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppsGetTeamsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppsGetTeamsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppsGetTeamsDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppsGetTeamsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppsGetTeamsDefaultApplicationJSON extends SpeakeasyBase {
    error: AppsGetTeamsDefaultApplicationJSONError;
}
export declare enum AppsGetTeams200ApplicationJSONPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
export declare class AppsGetTeams200ApplicationJSON extends SpeakeasyBase {
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
    /**
     * The permissions the team has for the app
     */
    permissions?: AppsGetTeams200ApplicationJSONPermissionsEnum[];
}
export declare class AppsGetTeamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appsGetTeams200ApplicationJSONAnies?: AppsGetTeams200ApplicationJSON[];
    /**
     * Error
     */
    appsGetTeamsDefaultApplicationJSONObject?: AppsGetTeamsDefaultApplicationJSON;
}
