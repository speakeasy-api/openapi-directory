import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrganizationsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class OrganizationsDeleteRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum OrganizationsDeleteDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrganizationsDeleteDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrganizationsDeleteDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrganizationsDeleteDefaultApplicationJSON extends SpeakeasyBase {
    error: OrganizationsDeleteDefaultApplicationJSONError;
}
export declare class OrganizationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    organizationsDeleteDefaultApplicationJSONObject?: OrganizationsDeleteDefaultApplicationJSON;
}
