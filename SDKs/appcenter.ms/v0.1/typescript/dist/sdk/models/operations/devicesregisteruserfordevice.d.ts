import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DevicesRegisterUserForDeviceSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The information for a single iOS device
 */
export declare class DevicesRegisterUserForDeviceRequestBody extends SpeakeasyBase {
    /**
     * The device's International Mobile Equipment Identity number. Always empty or undefined at present.
     */
    imei?: string;
    /**
     * The model identifier of the device, in the format iDeviceM,N
     */
    model: string;
    /**
     * The build number of the last known OS version running on the device
     */
    osBuild?: string;
    /**
     * The last known OS version running on the device
     */
    osVersion?: string;
    /**
     * The user ID of the device owner.
     */
    ownerId?: string;
    /**
     * The device's serial number. Always empty or undefined at present.
     */
    serial?: string;
    /**
     * The Unique Device IDentifier of the device
     */
    udid: string;
}
export declare class DevicesRegisterUserForDeviceRequest extends SpeakeasyBase {
    /**
     * The device info.
     */
    requestBody: DevicesRegisterUserForDeviceRequestBody;
    /**
     * The ID of the user
     */
    userId: string;
}
export declare enum DevicesRegisterUserForDevice404ApplicationJSONCodeEnum {
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
export declare class DevicesRegisterUserForDevice404ApplicationJSON extends SpeakeasyBase {
    code: DevicesRegisterUserForDevice404ApplicationJSONCodeEnum;
    message: string;
}
/**
 * The information for a single iOS device
 */
export declare class DevicesRegisterUserForDevice200ApplicationJSON extends SpeakeasyBase {
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
export declare class DevicesRegisterUserForDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    devicesRegisterUserForDevice200ApplicationJSONObject?: DevicesRegisterUserForDevice200ApplicationJSON;
    /**
     * <b>not_found</b>: The user or the device can't be found.
     *
     * @remarks
     *
     */
    devicesRegisterUserForDevice404ApplicationJSONObject?: DevicesRegisterUserForDevice404ApplicationJSON;
}
