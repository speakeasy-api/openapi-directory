import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrganizationUpdateAvatarSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class OrganizationUpdateAvatarRequestBodyAvatar extends SpeakeasyBase {
    avatar: string;
    content: Uint8Array;
}
export declare class OrganizationUpdateAvatarRequestBody extends SpeakeasyBase {
    /**
     * The image for an Organization avatar to upload.
     */
    avatar?: OrganizationUpdateAvatarRequestBodyAvatar;
}
export declare class OrganizationUpdateAvatarRequest extends SpeakeasyBase {
    requestBody?: OrganizationUpdateAvatarRequestBody;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum OrganizationUpdateAvatarDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrganizationUpdateAvatarDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrganizationUpdateAvatarDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrganizationUpdateAvatarDefaultApplicationJSON extends SpeakeasyBase {
    error: OrganizationUpdateAvatarDefaultApplicationJSONError;
}
/**
 * The creation origin of this organization
 */
export declare enum OrganizationUpdateAvatar200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
/**
 * Success
 */
export declare class OrganizationUpdateAvatar200ApplicationJSON extends SpeakeasyBase {
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
    origin: OrganizationUpdateAvatar200ApplicationJSONOriginEnum;
    /**
     * The date the organization was last updated at
     */
    updatedAt: string;
}
export declare class OrganizationUpdateAvatarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    organizationUpdateAvatar200ApplicationJSONObject?: OrganizationUpdateAvatar200ApplicationJSON;
    /**
     * Error
     */
    organizationUpdateAvatarDefaultApplicationJSONObject?: OrganizationUpdateAvatarDefaultApplicationJSON;
}
