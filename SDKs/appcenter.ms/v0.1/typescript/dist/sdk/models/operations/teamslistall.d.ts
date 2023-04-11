import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsListAllSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TeamsListAllRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum TeamsListAllDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class TeamsListAllDefaultApplicationJSONError extends SpeakeasyBase {
    code: TeamsListAllDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class TeamsListAllDefaultApplicationJSON extends SpeakeasyBase {
    error: TeamsListAllDefaultApplicationJSONError;
}
export declare class TeamsListAll200ApplicationJSON extends SpeakeasyBase {
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
export declare class TeamsListAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    teamsListAll200ApplicationJSONObjects?: TeamsListAll200ApplicationJSON[];
    /**
     * Error
     */
    teamsListAllDefaultApplicationJSONObject?: TeamsListAllDefaultApplicationJSON;
}
