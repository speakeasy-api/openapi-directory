import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrganizationDeleteAvatarSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class OrganizationDeleteAvatarRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum OrganizationDeleteAvatarDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrganizationDeleteAvatarDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrganizationDeleteAvatarDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrganizationDeleteAvatarDefaultApplicationJSON extends SpeakeasyBase {
    error: OrganizationDeleteAvatarDefaultApplicationJSONError;
}
/**
 * The creation origin of this organization
 */
export declare enum OrganizationDeleteAvatar200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
/**
 * Success
 */
export declare class OrganizationDeleteAvatar200ApplicationJSON extends SpeakeasyBase {
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
    origin: OrganizationDeleteAvatar200ApplicationJSONOriginEnum;
    /**
     * The date the organization was last updated at
     */
    updatedAt: string;
}
export declare class OrganizationDeleteAvatarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    organizationDeleteAvatar200ApplicationJSONObject?: OrganizationDeleteAvatar200ApplicationJSON;
    /**
     * Error
     */
    organizationDeleteAvatarDefaultApplicationJSONObject?: OrganizationDeleteAvatarDefaultApplicationJSON;
}
