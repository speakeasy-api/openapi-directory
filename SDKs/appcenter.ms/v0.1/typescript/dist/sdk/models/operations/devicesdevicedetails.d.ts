import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DevicesDeviceDetailsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DevicesDeviceDetailsRequest extends SpeakeasyBase {
    /**
     * The UDID of the device
     */
    deviceUdid: string;
}
export declare enum DevicesDeviceDetails404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * <b>not_found</b>: The user or device can't be found.
 *
 * @remarks
 *
 */
export declare class DevicesDeviceDetails404ApplicationJSON extends SpeakeasyBase {
    code: DevicesDeviceDetails404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum DevicesDeviceDetails403ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * <b>forbidden</b>: The user is not allowed to view someone else's device.
 *
 * @remarks
 *
 */
export declare class DevicesDeviceDetails403ApplicationJSON extends SpeakeasyBase {
    code: DevicesDeviceDetails403ApplicationJSONCodeEnum;
    message: string;
}
export declare enum DevicesDeviceDetails400ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * <b>bad_request</b>: Devices information can only be requested for iOS apps.
 *
 * @remarks
 *
 */
export declare class DevicesDeviceDetails400ApplicationJSON extends SpeakeasyBase {
    code: DevicesDeviceDetails400ApplicationJSONCodeEnum;
    message: string;
}
/**
 * The information for a single iOS device
 */
export declare class DevicesDeviceDetails200ApplicationJSON extends SpeakeasyBase {
    /**
     * The device description, in the format "iPhone 7 Plus (A1784)"
     */
    deviceName: string;
    /**
     * A combination of the device model name and the owner name.
     */
    fullDeviceName?: string;
    /**
     * The device's International Mobile Equipment Identity number. Always empty or undefined at present.
     */
    imei?: string;
    /**
     * The model identifier of the device, in the format iDeviceM,N
     */
    model: string;
    /**
     * The last known OS version running on the device
     */
    osBuild: string;
    /**
     * The last known OS version running on the device
     */
    osVersion: string;
    /**
     * The user ID of the device owner.
     */
    ownerId?: string;
    /**
     * Timestamp of when the device was registered in ISO format.
     */
    registeredAt?: string;
    /**
     * The device's serial number. Always empty or undefined at present.
     */
    serial?: string;
    /**
     * The provisioning status of the device.
     */
    status: string;
    /**
     * The Unique Device IDentifier of the device
     */
    udid: string;
}
export declare class DevicesDeviceDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    devicesDeviceDetails200ApplicationJSONObject?: DevicesDeviceDetails200ApplicationJSON;
    /**
     * <b>bad_request</b>: Devices information can only be requested for iOS apps.
     *
     * @remarks
     *
     */
    devicesDeviceDetails400ApplicationJSONObject?: DevicesDeviceDetails400ApplicationJSON;
    /**
     * <b>forbidden</b>: The user is not allowed to view someone else's device.
     *
     * @remarks
     *
     */
    devicesDeviceDetails403ApplicationJSONObject?: DevicesDeviceDetails403ApplicationJSON;
    /**
     * <b>not_found</b>: The user or device can't be found.
     *
     * @remarks
     *
     */
    devicesDeviceDetails404ApplicationJSONObject?: DevicesDeviceDetails404ApplicationJSON;
}
