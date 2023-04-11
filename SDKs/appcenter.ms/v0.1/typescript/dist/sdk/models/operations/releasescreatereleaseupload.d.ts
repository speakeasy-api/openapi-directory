import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesCreateReleaseUploadSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Optional parameters to create releases with user defined metadata
 */
export declare class ReleasesCreateReleaseUploadRequestBody extends SpeakeasyBase {
    /**
     * User defined build number
     */
    buildNumber?: string;
    /**
     * User defined build version
     */
    buildVersion?: string;
}
export declare class ReleasesCreateReleaseUploadRequest extends SpeakeasyBase {
    /**
     * Optional parameters to create releases with user defined metadata
     */
    requestBody?: ReleasesCreateReleaseUploadRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ReleasesCreateReleaseUpload404ApplicationJSONCodeEnum {
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
 * - `not_found` - The app doesn't exist.
 *
 */
export declare class ReleasesCreateReleaseUpload404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesCreateReleaseUpload404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesCreateReleaseUpload400ApplicationJSONCodeEnum {
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
export declare class ReleasesCreateReleaseUpload400ApplicationJSON extends SpeakeasyBase {
    code: ReleasesCreateReleaseUpload400ApplicationJSONCodeEnum;
    message: string;
}
/**
 * Created
 */
export declare class ReleasesCreateReleaseUpload201ApplicationJSON extends SpeakeasyBase {
    /**
     * The ID for the newly created upload. It is going to be required later in the process.
     */
    id: string;
    /**
     * The associated asset ID in the file management service associated with this uploaded.
     */
    packageAssetId: string;
    /**
     * The access token used for upload permissions.
     */
    token: string;
    /**
     * The URL domain used to upload the release.
     */
    uploadDomain: string;
    /**
     * The access token used for upload permissions (URL encoded to use as a single query parameter).
     */
    urlEncodedToken: string;
}
export declare class ReleasesCreateReleaseUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    releasesCreateReleaseUpload201ApplicationJSONObject?: ReleasesCreateReleaseUpload201ApplicationJSON;
    /**
     * The request contained invalid properties.
     */
    releasesCreateReleaseUpload400ApplicationJSONObject?: ReleasesCreateReleaseUpload400ApplicationJSON;
    /**
     * Error codes:
     *
     * @remarks
     * - `not_found` - The app doesn't exist.
     *
     */
    releasesCreateReleaseUpload404ApplicationJSONObject?: ReleasesCreateReleaseUpload404ApplicationJSON;
}
