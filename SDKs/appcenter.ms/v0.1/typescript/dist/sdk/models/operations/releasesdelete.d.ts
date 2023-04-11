import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesDeleteRequest extends SpeakeasyBase {
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
export declare enum ReleasesDelete500ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * An internal error. if delete has partially failed **partially_deleted** error_code will be returned.
 *
 * @remarks
 * - `partially_deleted`: Release was removed from all distribution groups, but couldn't be deleted from App Center.
 *
 */
export declare class ReleasesDelete500ApplicationJSON extends SpeakeasyBase {
    code: ReleasesDelete500ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesDelete404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * An app or a release couldn't be found
 *
 * @remarks
 *
 */
export declare class ReleasesDelete404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesDelete404ApplicationJSONCodeEnum;
    message: string;
}
export declare class ReleasesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An app or a release couldn't be found
     *
     * @remarks
     *
     */
    releasesDelete404ApplicationJSONObject?: ReleasesDelete404ApplicationJSON;
    /**
     * An internal error. if delete has partially failed **partially_deleted** error_code will be returned.
     *
     * @remarks
     * - `partially_deleted`: Release was removed from all distribution groups, but couldn't be deleted from App Center.
     *
     */
    releasesDelete500ApplicationJSONObject?: ReleasesDelete500ApplicationJSON;
}
