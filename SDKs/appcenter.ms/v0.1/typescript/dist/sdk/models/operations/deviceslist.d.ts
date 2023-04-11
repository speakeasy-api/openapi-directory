import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DevicesListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DevicesListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the distribution group.
     */
    distributionGroupName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * when provided, gets the provisioning state of the devices owned by users of this distribution group when compared to the provided release.
     */
    releaseId?: number;
}
export declare enum DevicesList404ApplicationJSONCodeEnum {
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
export declare class DevicesList404ApplicationJSON extends SpeakeasyBase {
    code: DevicesList404ApplicationJSONCodeEnum;
    message: string;
}
export declare enum DevicesList400ApplicationJSONCodeEnum {
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
export declare class DevicesList400ApplicationJSON extends SpeakeasyBase {
    code: DevicesList400ApplicationJSONCodeEnum;
    message: string;
}
/**
 * The information for a single iOS device
 */
export declare class DevicesList200ApplicationJSON extends SpeakeasyBase {
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
export declare class DevicesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    devicesList200ApplicationJSONObjects?: DevicesList200ApplicationJSON[];
    /**
     * <b>bad_request</b>: Devices information can only be requested for iOS apps.
     *
     * @remarks
     *
     */
    devicesList400ApplicationJSONObject?: DevicesList400ApplicationJSON;
    /**
     * <b>not_found</b>: A distribution group can't be found.
     *
     * @remarks
     *
     */
    devicesList404ApplicationJSONObject?: DevicesList404ApplicationJSON;
}
