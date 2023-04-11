import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesUpdateReleaseUploadStatusSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The new status of the release upload
 */
export declare enum ReleasesUpdateReleaseUploadStatusRequestBodyUploadStatusEnum {
    UploadFinished = "uploadFinished",
    UploadCanceled = "uploadCanceled"
}
/**
 * The release upload status information.
 */
export declare class ReleasesUpdateReleaseUploadStatusRequestBody extends SpeakeasyBase {
    /**
     * The new status of the release upload
     */
    uploadStatus: ReleasesUpdateReleaseUploadStatusRequestBodyUploadStatusEnum;
}
export declare class ReleasesUpdateReleaseUploadStatusRequest extends SpeakeasyBase {
    /**
     * The release upload status information.
     */
    requestBody: ReleasesUpdateReleaseUploadStatusRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * A flag that indicates to extract release or not, true by default
     */
    extract?: boolean;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the release upload
     */
    uploadId: string;
}
export declare enum ReleasesUpdateReleaseUploadStatus404ApplicationJSONCodeEnum {
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
export declare class ReleasesUpdateReleaseUploadStatus404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesUpdateReleaseUploadStatus404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesUpdateReleaseUploadStatus400ApplicationJSONCodeEnum {
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
export declare class ReleasesUpdateReleaseUploadStatus400ApplicationJSON extends SpeakeasyBase {
    code: ReleasesUpdateReleaseUploadStatus400ApplicationJSONCodeEnum;
    message: string;
}
/**
 * The current upload status.
 */
export declare enum ReleasesUpdateReleaseUploadStatus200ApplicationJSONUploadStatusEnum {
    UploadStarted = "uploadStarted",
    UploadFinished = "uploadFinished",
    UploadCanceled = "uploadCanceled",
    ReadyToBePublished = "readyToBePublished",
    MalwareDetected = "malwareDetected",
    Error = "error"
}
/**
 * Success
 */
export declare class ReleasesUpdateReleaseUploadStatus200ApplicationJSON extends SpeakeasyBase {
    /**
     * The ID for the upload.
     */
    id: string;
    /**
     * The current upload status.
     */
    uploadStatus: ReleasesUpdateReleaseUploadStatus200ApplicationJSONUploadStatusEnum;
}
export declare class ReleasesUpdateReleaseUploadStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    releasesUpdateReleaseUploadStatus200ApplicationJSONObject?: ReleasesUpdateReleaseUploadStatus200ApplicationJSON;
    /**
     * The request contained invalid properties.
     */
    releasesUpdateReleaseUploadStatus400ApplicationJSONObject?: ReleasesUpdateReleaseUploadStatus400ApplicationJSON;
    /**
     * Error codes:
     *
     * @remarks
     * - `not_found` - The app or upload doesn't exist.
     *
     */
    releasesUpdateReleaseUploadStatus404ApplicationJSONObject?: ReleasesUpdateReleaseUploadStatus404ApplicationJSON;
}
