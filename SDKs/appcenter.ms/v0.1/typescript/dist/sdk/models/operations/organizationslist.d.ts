import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum OrganizationsListDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrganizationsListDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrganizationsListDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrganizationsListDefaultApplicationJSON extends SpeakeasyBase {
    error: OrganizationsListDefaultApplicationJSONError;
}
/**
 * The creation origin of this organization
 */
export declare enum OrganizationsList200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
export declare class OrganizationsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * The display name of the organization
     */
    displayName: string;
    /**
     * The slug name of the organization
     */
    name: string;
    /**
     * The creation origin of this organization
     */
    origin: OrganizationsList200ApplicationJSONOriginEnum;
}
export declare class OrganizationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    organizationsList200ApplicationJSONObjects?: OrganizationsList200ApplicationJSON[];
    /**
     * Error
     */
    organizationsListDefaultApplicationJSONObject?: OrganizationsListDefaultApplicationJSON;
}
