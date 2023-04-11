import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrganizationsUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The data for the org
 */
export declare class OrganizationsUpdateRequestBody extends SpeakeasyBase {
    /**
     * The full (friendly) name of the organization.
     */
    displayName?: string;
    /**
     * The name of the organization used in URLs
     */
    name?: string;
}
export declare class OrganizationsUpdateRequest extends SpeakeasyBase {
    /**
     * The data for the org
     */
    requestBody: OrganizationsUpdateRequestBody;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum OrganizationsUpdateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrganizationsUpdateDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrganizationsUpdateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrganizationsUpdateDefaultApplicationJSON extends SpeakeasyBase {
    error: OrganizationsUpdateDefaultApplicationJSONError;
}
/**
 * The creation origin of this organization
 */
export declare enum OrganizationsUpdate200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
/**
 * Success
 */
export declare class OrganizationsUpdate200ApplicationJSON extends SpeakeasyBase {
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
    origin: OrganizationsUpdate200ApplicationJSONOriginEnum;
    /**
     * The date the organization was last updated at
     */
    updatedAt: string;
}
export declare class OrganizationsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    organizationsUpdate200ApplicationJSONObject?: OrganizationsUpdate200ApplicationJSON;
    /**
     * Error
     */
    organizationsUpdateDefaultApplicationJSONObject?: OrganizationsUpdateDefaultApplicationJSON;
}
