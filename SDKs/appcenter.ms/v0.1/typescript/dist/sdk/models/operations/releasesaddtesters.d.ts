import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesAddTestersSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The release information.
 */
export declare class ReleasesAddTestersRequestBody extends SpeakeasyBase {
    /**
     * Tester's email address
     */
    email: string;
    /**
     * Flag to mark the release for the provided destinations as mandatory
     */
    mandatoryUpdate?: boolean;
    /**
     * Flag to enable or disable notifications to testers
     */
    notifyTesters?: boolean;
}
export declare class ReleasesAddTestersRequest extends SpeakeasyBase {
    /**
     * The release information.
     */
    requestBody: ReleasesAddTestersRequestBody;
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
export declare enum ReleasesAddTesters404ApplicationJSONCodeEnum {
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
export declare class ReleasesAddTesters404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesAddTesters404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum ReleasesAddTesters400ApplicationJSONCodeEnum {
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
export declare class ReleasesAddTesters400ApplicationJSON extends SpeakeasyBase {
    code: ReleasesAddTesters400ApplicationJSONCodeEnum;
    message: string;
}
/**
 * Created
 */
export declare class ReleasesAddTesters201ApplicationJSON extends SpeakeasyBase {
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
export declare class ReleasesAddTestersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    releasesAddTesters201ApplicationJSONObject?: ReleasesAddTesters201ApplicationJSON;
    /**
     * Failure
     */
    releasesAddTesters400ApplicationJSONObject?: ReleasesAddTesters400ApplicationJSON;
    /**
     * Release not found
     */
    releasesAddTesters404ApplicationJSONObject?: ReleasesAddTesters404ApplicationJSON;
}
