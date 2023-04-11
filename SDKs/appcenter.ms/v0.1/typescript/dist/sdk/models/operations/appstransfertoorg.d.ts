import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppsTransferToOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppsTransferToOrgRequest extends SpeakeasyBase {
    /**
     * allow empty body for custom http-client lib
     */
    requestBody?: Record<string, any>;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppsTransferToOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppsTransferToOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppsTransferToOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppsTransferToOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: AppsTransferToOrgDefaultApplicationJSONError;
}
/**
 * The creation origin of this organization
 */
export declare enum AppsTransferToOrg200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
/**
 * Success
 */
export declare class AppsTransferToOrg200ApplicationJSON extends SpeakeasyBase {
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
    origin: AppsTransferToOrg200ApplicationJSONOriginEnum;
    /**
     * The date the organization was last updated at
     */
    updatedAt: string;
}
export declare class AppsTransferToOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appsTransferToOrg200ApplicationJSONObject?: AppsTransferToOrg200ApplicationJSON;
    /**
     * Error
     */
    appsTransferToOrgDefaultApplicationJSONObject?: AppsTransferToOrgDefaultApplicationJSON;
}
