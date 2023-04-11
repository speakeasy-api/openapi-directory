import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesUpdateDetailsSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Contains metadata about the build that produced the release being uploaded
 */
export declare class ReleasesUpdateDetailsRequestBodyBuild extends SpeakeasyBase {
    /**
     * The branch name of the build producing the release
     */
    branchName?: string;
    /**
     * The commit hash of the build producing the release
     */
    commitHash?: string;
    /**
     * The commit message of the build producing the release
     */
    commitMessage?: string;
}
/**
 * A request containing information for updating details of a release
 */
export declare class ReleasesUpdateDetailsRequestBody extends SpeakeasyBase {
    /**
     * Contains metadata about the build that produced the release being uploaded
     */
    build?: ReleasesUpdateDetailsRequestBodyBuild;
    /**
     * Toggle this release to be enable distribute/download or not.
     */
    enabled?: boolean;
    /**
     * Release notes for this release.
     */
    releaseNotes?: string;
}
export declare class ReleasesUpdateDetailsRequest extends SpeakeasyBase {
    /**
     * The release information.
     */
    requestBody: ReleasesUpdateDetailsRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the release
     */
    releaseId: number;
}
export declare enum ReleasesUpdateDetails404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Release not found
 */
export declare class ReleasesUpdateDetails404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesUpdateDetails404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesUpdateDetails400ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ReleasesUpdateDetails400ApplicationJSONDestinations extends SpeakeasyBase {
    /**
     * Error Codes:<br>
     *
     * @remarks
     * <b>invalid_store_secrets</b>: While distributing to store, secrets provided for store are not valid.<br>
     * <b>store_release_bad_request</b>: Proper package release details for the store is not provided.<br>
     * <b>store_release_unauthorized</b>: User is not authorized to publish to store due to invalid developer credentials.<br>
     * <b>store_release_forbidden</b>: Publish to store is forbidden due to conflicts/errors in the release version and already existing version in the store.<br>
     * <b>store_release_promotion</b>: Release already distributed, promoting a release is not supported.<br>
     * <b>store_track_deactivated</b>: One or more tracks would be deactivated with this release. This is not supported yet.<br>
     * <b>store_release_not_found</b>: App with the given package name is not found in the store.<br>
     * <b>store_release_not_available</b>: The release is not available.<br>
     * <b>internal_server_error</b>: Failed to distribute to a destination due to an internal server error.
     *
     */
    code?: string;
    id?: string;
    message?: string;
    name?: string;
}
/**
 * Failure
 */
export declare class ReleasesUpdateDetails400ApplicationJSON extends SpeakeasyBase {
    code: ReleasesUpdateDetails400ApplicationJSONCodeEnum;
    destinations?: ReleasesUpdateDetails400ApplicationJSONDestinations[];
    mandatoryUpdate?: boolean;
    message: string;
    releaseNotes?: string;
}
export declare class ReleasesUpdateDetails200ApplicationJSONDestinations extends SpeakeasyBase {
    id?: string;
    name?: string;
}
/**
 * Response for updating a release
 */
export declare class ReleasesUpdateDetails200ApplicationJSON extends SpeakeasyBase {
    destinations?: ReleasesUpdateDetails200ApplicationJSONDestinations[];
    enabled?: boolean;
    mandatoryUpdate?: boolean;
    provisioningStatusUrl?: string;
    releaseNotes?: string;
}
export declare class ReleasesUpdateDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    releasesUpdateDetails200ApplicationJSONObject?: ReleasesUpdateDetails200ApplicationJSON;
    /**
     * Failure
     */
    releasesUpdateDetails400ApplicationJSONObject?: ReleasesUpdateDetails400ApplicationJSON;
    /**
     * Release not found
     */
    releasesUpdateDetails404ApplicationJSONObject?: ReleasesUpdateDetails404ApplicationJSON;
}
