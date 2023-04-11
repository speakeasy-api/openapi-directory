import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DevicesGetReleaseUpdateDevicesStatusSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DevicesGetReleaseUpdateDevicesStatusRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * A boolean value that indicates if the provisioning profile should be return in addition to the status. When set to true, the provisioning profile will be returned only when status is 'complete' or 'preparing_for_testers'.
     */
    includeProvisioningProfile?: boolean;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the release.
     */
    releaseId: string;
    /**
     * The ID of the resign operation.
     */
    resignId: string;
}
export declare enum DevicesGetReleaseUpdateDevicesStatus404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * <b>not_found</b>: A distribution group can't be found.
 *
 * @remarks
 *
 */
export declare class DevicesGetReleaseUpdateDevicesStatus404ApplicationJSON extends SpeakeasyBase {
    code: DevicesGetReleaseUpdateDevicesStatus404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum DevicesGetReleaseUpdateDevicesStatus400ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Error
 */
export declare class DevicesGetReleaseUpdateDevicesStatus400ApplicationJSON extends SpeakeasyBase {
    code: DevicesGetReleaseUpdateDevicesStatus400ApplicationJSONCodeEnum;
    message: string;
}
/**
 * The status of the resign operation.
 */
export declare class DevicesGetReleaseUpdateDevicesStatus200ApplicationJSON extends SpeakeasyBase {
    /**
     * Error code for any error that occured during the resigning operation.
     */
    errorCode?: string;
    /**
     * Error message for any error that occured during the resigning operation.
     */
    errorMessage?: string;
    /**
     * The status of the resign
     */
    status: string;
}
export declare class DevicesGetReleaseUpdateDevicesStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    devicesGetReleaseUpdateDevicesStatus200ApplicationJSONObject?: DevicesGetReleaseUpdateDevicesStatus200ApplicationJSON;
    /**
     * Error
     */
    devicesGetReleaseUpdateDevicesStatus400ApplicationJSONObject?: DevicesGetReleaseUpdateDevicesStatus400ApplicationJSON;
    /**
     * <b>not_found</b>: A distribution group can't be found.
     *
     * @remarks
     *
     */
    devicesGetReleaseUpdateDevicesStatus404ApplicationJSONObject?: DevicesGetReleaseUpdateDevicesStatus404ApplicationJSON;
}
