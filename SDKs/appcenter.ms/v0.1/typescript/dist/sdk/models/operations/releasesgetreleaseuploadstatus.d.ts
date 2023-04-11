import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesGetReleaseUploadStatusSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesGetReleaseUploadStatusRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the release upload
     */
    uploadId: string;
}
export declare enum ReleasesGetReleaseUploadStatus404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Error codes:
 *
 * @remarks
 * - `not_found` - The app or upload doesn't exist.
 *
 */
export declare class ReleasesGetReleaseUploadStatus404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesGetReleaseUploadStatus404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesGetReleaseUploadStatus400ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * The request contained invalid properties.
 */
export declare class ReleasesGetReleaseUploadStatus400ApplicationJSON extends SpeakeasyBase {
    code: ReleasesGetReleaseUploadStatus400ApplicationJSONCodeEnum;
    message: string;
}
/**
 * The current upload status.
 */
export declare enum ReleasesGetReleaseUploadStatus200ApplicationJSONUploadStatusEnum {
    UploadStarted = "uploadStarted",
    UploadFinished = "uploadFinished",
    ReadyToBePublished = "readyToBePublished",
    MalwareDetected = "malwareDetected",
    Error = "error"
}
/**
 * Success
 */
export declare class ReleasesGetReleaseUploadStatus200ApplicationJSON extends SpeakeasyBase {
    /**
     * Details describing what went wrong processing the upload. Will only be set if status = 'error'.
     */
    errorDetails?: string;
    /**
     * The ID for the upload.
     */
    id: string;
    /**
     * The distinct ID of the release. Will only be set when the status = 'readyToBePublished'.
     */
    releaseDistinctId?: number;
    /**
     * The URL of the release. Will only be set when the status = 'readyToBePublished'.
     */
    releaseUrl?: any;
    /**
     * The current upload status.
     */
    uploadStatus: ReleasesGetReleaseUploadStatus200ApplicationJSONUploadStatusEnum;
}
export declare class ReleasesGetReleaseUploadStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    releasesGetReleaseUploadStatus200ApplicationJSONObject?: ReleasesGetReleaseUploadStatus200ApplicationJSON;
    /**
     * The request contained invalid properties.
     */
    releasesGetReleaseUploadStatus400ApplicationJSONObject?: ReleasesGetReleaseUploadStatus400ApplicationJSON;
    /**
     * Error codes:
     *
     * @remarks
     * - `not_found` - The app or upload doesn't exist.
     *
     */
    releasesGetReleaseUploadStatus404ApplicationJSONObject?: ReleasesGetReleaseUploadStatus404ApplicationJSON;
}
