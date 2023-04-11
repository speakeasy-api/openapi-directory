import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrganizationsCreateOrUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The organization data
 */
export declare class OrganizationsCreateOrUpdateRequestBody extends SpeakeasyBase {
    /**
     * The display name of the organization
     */
    displayName?: string;
    /**
     * The name of the organization used in URLs
     */
    name?: string;
}
export declare enum OrganizationsCreateOrUpdateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class OrganizationsCreateOrUpdateDefaultApplicationJSONError extends SpeakeasyBase {
    code: OrganizationsCreateOrUpdateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class OrganizationsCreateOrUpdateDefaultApplicationJSON extends SpeakeasyBase {
    error: OrganizationsCreateOrUpdateDefaultApplicationJSONError;
}
/**
 * The creation origin of this organization
 */
export declare enum OrganizationsCreateOrUpdate201ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
/**
 * Created
 */
export declare class OrganizationsCreateOrUpdate201ApplicationJSON extends SpeakeasyBase {
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
    origin: OrganizationsCreateOrUpdate201ApplicationJSONOriginEnum;
    /**
     * The date the organization was last updated at
     */
    updatedAt: string;
}
export declare class OrganizationsCreateOrUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    organizationsCreateOrUpdate201ApplicationJSONObject?: OrganizationsCreateOrUpdate201ApplicationJSON;
    /**
     * Error
     */
    organizationsCreateOrUpdateDefaultApplicationJSONObject?: OrganizationsCreateOrUpdateDefaultApplicationJSON;
}
