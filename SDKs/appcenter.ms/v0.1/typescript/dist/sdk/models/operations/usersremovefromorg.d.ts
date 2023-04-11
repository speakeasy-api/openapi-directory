import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersRemoveFromOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class UsersRemoveFromOrgRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The slug name of the user
     */
    userName: string;
}
export declare enum UsersRemoveFromOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class UsersRemoveFromOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: UsersRemoveFromOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class UsersRemoveFromOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: UsersRemoveFromOrgDefaultApplicationJSONError;
}
export declare class UsersRemoveFromOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    usersRemoveFromOrgDefaultApplicationJSONObject?: UsersRemoveFromOrgDefaultApplicationJSON;
}
