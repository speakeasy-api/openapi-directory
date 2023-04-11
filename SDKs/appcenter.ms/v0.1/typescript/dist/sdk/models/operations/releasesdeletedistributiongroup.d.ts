import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesDeleteDistributionGroupSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesDeleteDistributionGroupRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the distribution group
     */
    groupId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the release
     */
    releaseId: number;
}
export declare enum ReleasesDeleteDistributionGroup404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Distribution group destination can't be found.
 *
 * @remarks
 *
 */
export declare class ReleasesDeleteDistributionGroup404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesDeleteDistributionGroup404ApplicationJSONCodeEnum;
    message: string;
}
export declare class ReleasesDeleteDistributionGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Distribution group destination can't be found.
     *
     * @remarks
     *
     */
    releasesDeleteDistributionGroup404ApplicationJSONObject?: ReleasesDeleteDistributionGroup404ApplicationJSON;
}
