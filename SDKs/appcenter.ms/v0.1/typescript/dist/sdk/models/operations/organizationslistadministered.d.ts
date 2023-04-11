import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum OrganizationsListAdministeredDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrganizationsListAdministeredDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrganizationsListAdministeredDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrganizationsListAdministeredDefaultApplicationJSON extends SpeakeasyBase {
    error: OrganizationsListAdministeredDefaultApplicationJSONError;
}
/**
 * The creation origin of this organization
 */
export declare enum OrganizationsListAdministered200ApplicationJSONOrganizationsOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
export declare class OrganizationsListAdministered200ApplicationJSONOrganizations extends SpeakeasyBase {
    /**
     * The URL to a user-uploaded Avatar image
     */
    avatarUrl?: string;
    /**
     * The creation date of this organization
     */
    createdAt: string;
    /**
     * The display name of the organization
     */
    displayName: string;
    /**
     * The internal unique id (UUID) of the organization.
     */
    id: string;
    /**
     * The slug name of the organization
     */
    name: string;
    /**
     * The creation origin of this organization
     */
    origin: OrganizationsListAdministered200ApplicationJSONOrganizationsOriginEnum;
    /**
     * The date the organization was last updated at
     */
    updatedAt: string;
}
/**
 * Success
 */
export declare class OrganizationsListAdministered200ApplicationJSON extends SpeakeasyBase {
    organizations: OrganizationsListAdministered200ApplicationJSONOrganizations;
}
export declare class OrganizationsListAdministeredResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    organizationsListAdministered200ApplicationJSONObject?: OrganizationsListAdministered200ApplicationJSON;
    /**
     * Error
     */
    organizationsListAdministeredDefaultApplicationJSONObject?: OrganizationsListAdministeredDefaultApplicationJSON;
}
