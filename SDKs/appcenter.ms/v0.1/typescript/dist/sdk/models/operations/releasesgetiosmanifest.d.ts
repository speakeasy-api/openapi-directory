import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesGetIosManifestRequest extends SpeakeasyBase {
    /**
     * The ID of the application
     */
    appId: string;
    /**
     * The release_id
     */
    releaseId: number;
    /**
     * A hash that authorizes the download if it matches the release info.
     */
    token: string;
}
export declare enum ReleasesGetIosManifest404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * The app or release can't be found.
 */
export declare class ReleasesGetIosManifest404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesGetIosManifest404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesGetIosManifest403ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Forbidden - The token provided doesn't match the release's token.
 */
export declare class ReleasesGetIosManifest403ApplicationJSON extends SpeakeasyBase {
    code: ReleasesGetIosManifest403ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesGetIosManifest400ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * The app's OS is not iOS.
 */
export declare class ReleasesGetIosManifest400ApplicationJSON extends SpeakeasyBase {
    code: ReleasesGetIosManifest400ApplicationJSONCodeEnum;
    message: string;
}
export declare class ReleasesGetIosManifestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The app's OS is not iOS.
     */
    releasesGetIosManifest400ApplicationJSONObject?: ReleasesGetIosManifest400ApplicationJSON;
    /**
     * Forbidden - The token provided doesn't match the release's token.
     */
    releasesGetIosManifest403ApplicationJSONObject?: ReleasesGetIosManifest403ApplicationJSON;
    /**
     * The app or release can't be found.
     */
    releasesGetIosManifest404ApplicationJSONObject?: ReleasesGetIosManifest404ApplicationJSON;
}
