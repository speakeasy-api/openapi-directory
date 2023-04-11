import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TeamsDeleteRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The team's name
     */
    teamName: string;
}
export declare enum TeamsDeleteDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class TeamsDeleteDefaultApplicationJSONError extends SpeakeasyBase {
    code: TeamsDeleteDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class TeamsDeleteDefaultApplicationJSON extends SpeakeasyBase {
    error: TeamsDeleteDefaultApplicationJSONError;
}
export declare class TeamsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    teamsDeleteDefaultApplicationJSONObject?: TeamsDeleteDefaultApplicationJSON;
}
