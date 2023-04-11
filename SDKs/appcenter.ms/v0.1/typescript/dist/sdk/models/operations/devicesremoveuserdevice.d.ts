import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DevicesRemoveUserDeviceSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DevicesRemoveUserDeviceRequest extends SpeakeasyBase {
    /**
     * The UDID of the device
     */
    deviceUdid: string;
}
export declare enum DevicesRemoveUserDevice404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * <b>not_found</b>: The user or the device can't be found.
 *
 * @remarks
 *
 */
export declare class DevicesRemoveUserDevice404ApplicationJSON extends SpeakeasyBase {
    code: DevicesRemoveUserDevice404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum DevicesRemoveUserDevice403ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * <b>forbidden</b>: The user is not allowed to delete someone else's device.
 *
 * @remarks
 *
 */
export declare class DevicesRemoveUserDevice403ApplicationJSON extends SpeakeasyBase {
    code: DevicesRemoveUserDevice403ApplicationJSONCodeEnum;
    message: string;
}
export declare class DevicesRemoveUserDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * <b>forbidden</b>: The user is not allowed to delete someone else's device.
     *
     * @remarks
     *
     */
    devicesRemoveUserDevice403ApplicationJSONObject?: DevicesRemoveUserDevice403ApplicationJSON;
    /**
     * <b>not_found</b>: The user or the device can't be found.
     *
     * @remarks
     *
     */
    devicesRemoveUserDevice404ApplicationJSONObject?: DevicesRemoveUserDevice404ApplicationJSON;
}
