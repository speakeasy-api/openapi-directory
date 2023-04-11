import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Contains metadata about the build that produced the release being uploaded
 */
export declare class ReleasesUpdateRequestBodyBuild extends SpeakeasyBase {
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
 * A unique identifier for a destination. A destination can be identified by an ID (guid) or by a name. DestinationId encapsulates both options. A destination can be either a distribution group or a store.
 */
export declare class ReleasesUpdateRequestBodyDestinations extends SpeakeasyBase {
    /**
     * Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
     */
    id?: string;
    /**
     * Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn't exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence.
     */
    name?: string;
}
/**
 * An object containing all the release metadata.
 */
export declare class ReleasesUpdateRequestBodyMetadata extends SpeakeasyBase {
    /**
     * dsa signature of the release for the sparkle feed.
     */
    dsaSignature?: string;
    /**
     * edDSA signature of the release for the sparkle feed.
     */
    edSignature?: string;
}
/**
 * A request containing information for updating a release.
 */
export declare class ReleasesUpdateRequestBody extends SpeakeasyBase {
    /**
     * Contains metadata about the build that produced the release being uploaded
     */
    build?: ReleasesUpdateRequestBodyBuild;
    /**
     * OBSOLETE. Will be removed in future releases - use destinations instead. Id of a destination. The release will be associated with this destination. If the destination doesn't exist a 400 is returned. If both destination name and id are passed, the id is taking precedence.
     */
    destinationId?: string;
    /**
     * OBSOLETE. Will be removed in future releases - use destinations instead. Name of a destination. The release will be associated with this destination. If the destination doesn't exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence.
     */
    destinationName?: string;
    /**
     * Not used anymore.
     */
    destinationType?: string;
    /**
     * Distribute this release under the following list of destinations (store groups or distribution groups).
     */
    destinations?: ReleasesUpdateRequestBodyDestinations[];
    /**
     * OBSOLETE. Will be removed in future releases - use destinations instead. Id of a distribution group. The release will be associated with this distribution group. If the distribution group doesn't exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence.
     */
    distributionGroupId?: string;
    /**
     * OBSOLETE. Will be removed in future releases - use destinations instead. Name of a distribution group. The release will be associated with this distribution group. If the distribution group doesn't exist a 400 is returned. If both distribution group name and id are passed, the id is taking precedence.
     */
    distributionGroupName?: string;
    /**
     * A boolean which determines whether this version should be a mandatory update or not.
     */
    mandatoryUpdate?: boolean;
    /**
     * An object containing all the release metadata.
     */
    metadata?: ReleasesUpdateRequestBodyMetadata;
    /**
     * A boolean which determines whether to notify testers of a new release, default to true.
     */
    notifyTesters?: boolean;
    /**
     * Release notes for this release.
     */
    releaseNotes?: string;
}
export declare class ReleasesUpdateRequest extends SpeakeasyBase {
    /**
     * The release information.
     */
    requestBody: Uint8Array;
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
export declare enum ReleasesUpdate404ApplicationJSONCodeEnum {
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
export declare class ReleasesUpdate404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesUpdate404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesUpdate400ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ReleasesUpdate400ApplicationJSONDestinations extends SpeakeasyBase {
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
export declare class ReleasesUpdate400ApplicationJSON extends SpeakeasyBase {
    code: ReleasesUpdate400ApplicationJSONCodeEnum;
    destinations?: ReleasesUpdate400ApplicationJSONDestinations[];
    mandatoryUpdate?: boolean;
    message: string;
    releaseNotes?: string;
}
/**
 * Response for updating release details
 */
export declare class ReleasesUpdate200ApplicationJSON extends SpeakeasyBase {
    releaseNotes?: string;
}
export declare class ReleasesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    releasesUpdate200ApplicationJSONObject?: ReleasesUpdate200ApplicationJSON;
    /**
     * Failure
     */
    releasesUpdate400ApplicationJSONObject?: ReleasesUpdate400ApplicationJSON;
    /**
     * Release not found
     */
    releasesUpdate404ApplicationJSONObject?: ReleasesUpdate404ApplicationJSON;
}
