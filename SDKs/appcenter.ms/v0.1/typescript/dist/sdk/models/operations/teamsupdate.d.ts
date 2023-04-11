import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The information used to update the team
 */
export declare class TeamsUpdateRequestBody extends SpeakeasyBase {
    /**
     * The new display name of the team
     */
    displayName: string;
}
export declare class TeamsUpdateRequest extends SpeakeasyBase {
    /**
     * The information used to update the team
     */
    requestBody: TeamsUpdateRequestBody;
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The team's name
     */
    teamName: string;
}
export declare enum TeamsUpdateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class TeamsUpdateDefaultApplicationJSONError extends SpeakeasyBase {
    code: TeamsUpdateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class TeamsUpdateDefaultApplicationJSON extends SpeakeasyBase {
    error: TeamsUpdateDefaultApplicationJSONError;
}
/**
 * Success
 */
export declare class TeamsUpdate200ApplicationJSON extends SpeakeasyBase {
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
export declare class TeamsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    teamsUpdate200ApplicationJSONObject?: TeamsUpdate200ApplicationJSON;
    /**
     * Error
     */
    teamsUpdateDefaultApplicationJSONObject?: TeamsUpdateDefaultApplicationJSON;
}
