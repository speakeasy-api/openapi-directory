import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesAddDistributionGroupSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The release information.
 */
export declare class ReleasesAddDistributionGroupRequestBody extends SpeakeasyBase {
    /**
     * Unique id of the release destination
     */
    id: string;
    /**
     * Flag to mark the release for the provided destinations as mandatory
     */
    mandatoryUpdate?: boolean;
    /**
     * Flag to enable or disable notifications to testers
     */
    notifyTesters?: boolean;
}
export declare class ReleasesAddDistributionGroupRequest extends SpeakeasyBase {
    /**
     * The release information.
     */
    requestBody: ReleasesAddDistributionGroupRequestBody;
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
export declare enum ReleasesAddDistributionGroup404ApplicationJSONCodeEnum {
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
export declare class ReleasesAddDistributionGroup404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesAddDistributionGroup404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesAddDistributionGroup400ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Failure
 */
export declare class ReleasesAddDistributionGroup400ApplicationJSON extends SpeakeasyBase {
    code: ReleasesAddDistributionGroup400ApplicationJSONCodeEnum;
    message: string;
}
/**
 * Created
 */
export declare class ReleasesAddDistributionGroup201ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique id for the release destination
     */
    id: string;
    /**
     * Flag to mark the release for the provided destinations as mandatory
     */
    mandatoryUpdate: boolean;
    /**
     * The url to check provisioning status.
     */
    provisioningStatusUrl?: string;
}
export declare class ReleasesAddDistributionGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    releasesAddDistributionGroup201ApplicationJSONObject?: ReleasesAddDistributionGroup201ApplicationJSON;
    /**
     * Failure
     */
    releasesAddDistributionGroup400ApplicationJSONObject?: ReleasesAddDistributionGroup400ApplicationJSON;
    /**
     * Release not found
     */
    releasesAddDistributionGroup404ApplicationJSONObject?: ReleasesAddDistributionGroup404ApplicationJSON;
}
