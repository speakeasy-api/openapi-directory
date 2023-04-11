import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum DevicesUserDevicesList403ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * <b>forbidden</b>: The user is not allowed to view someone else's devices.
 *
 * @remarks
 *
 */
export declare class DevicesUserDevicesList403ApplicationJSON extends SpeakeasyBase {
    code: DevicesUserDevicesList403ApplicationJSONCodeEnum;
    message: string;
}
export declare enum DevicesUserDevicesList400ApplicationJSONCodeEnum {
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
export declare class DevicesUserDevicesList400ApplicationJSON extends SpeakeasyBase {
    code: DevicesUserDevicesList400ApplicationJSONCodeEnum;
    message: string;
}
/**
 * The information for a single iOS device
 */
export declare class DevicesUserDevicesList200ApplicationJSON extends SpeakeasyBase {
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
export declare class DevicesUserDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    devicesUserDevicesList200ApplicationJSONObjects?: DevicesUserDevicesList200ApplicationJSON[];
    /**
     * <b>bad_request</b>: Devices information can only be requested for iOS apps.
     *
     * @remarks
     *
     */
    devicesUserDevicesList400ApplicationJSONObject?: DevicesUserDevicesList400ApplicationJSON;
    /**
     * <b>forbidden</b>: The user is not allowed to view someone else's devices.
     *
     * @remarks
     *
     */
    devicesUserDevicesList403ApplicationJSONObject?: DevicesUserDevicesList403ApplicationJSON;
}
