import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceStatusEnum } from "./devicestatusenum";
import { DeviceTypeEnum } from "./devicetypeenum";
/**
 * Success
 */
export declare class GetDeviceResponse extends SpeakeasyBase {
    deviceArn: string;
    deviceCapabilities: string;
    deviceName: string;
    deviceStatus: DeviceStatusEnum;
    deviceType: DeviceTypeEnum;
    providerName: string;
}
