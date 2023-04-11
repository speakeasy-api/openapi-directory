import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveAppSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TeamsRemoveAppRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The team's name
     */
    teamName: string;
}
export declare enum TeamsRemoveAppDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class TeamsRemoveAppDefaultApplicationJSONError extends SpeakeasyBase {
    code: TeamsRemoveAppDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class TeamsRemoveAppDefaultApplicationJSON extends SpeakeasyBase {
    error: TeamsRemoveAppDefaultApplicationJSONError;
}
export declare class TeamsRemoveAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    teamsRemoveAppDefaultApplicationJSONObject?: TeamsRemoveAppDefaultApplicationJSON;
}
