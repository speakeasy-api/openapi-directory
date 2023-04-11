import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesGetPublicGroupsForReleaseByHashRequest extends SpeakeasyBase {
    /**
     * The secret of the target application
     */
    appSecret: string;
    /**
     * The hash of the release
     */
    releaseHash: string;
}
export declare enum ReleasesGetPublicGroupsForReleaseByHash404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Error Codes:
 *
 * @remarks
 * - `not_found` - The app doesn't exist
 *
 */
export declare class ReleasesGetPublicGroupsForReleaseByHash404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesGetPublicGroupsForReleaseByHash404ApplicationJSONCodeEnum;
    message: string;
}
export declare class ReleasesGetPublicGroupsForReleaseByHash200ApplicationJSON extends SpeakeasyBase {
    /**
     * The id of the distribution group
     */
    id: string;
}
export declare class ReleasesGetPublicGroupsForReleaseByHashResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The public distribution groups that the release has been distributed to
     */
    releasesGetPublicGroupsForReleaseByHash200ApplicationJSONObjects?: ReleasesGetPublicGroupsForReleaseByHash200ApplicationJSON[];
    /**
     * Error Codes:
     *
     * @remarks
     * - `not_found` - The app doesn't exist
     *
     */
    releasesGetPublicGroupsForReleaseByHash404ApplicationJSONObject?: ReleasesGetPublicGroupsForReleaseByHash404ApplicationJSON;
}
