import { SpeakeasyBase } from "../../../internal/utils";
import { CoreDeviceStatusEnum } from "./coredevicestatusenum";
/**
 * Success
 */
export declare class GetCoreDeviceResponse extends SpeakeasyBase {
    architecture?: string;
    coreDeviceThingName?: string;
    coreVersion?: string;
    lastStatusUpdateTimestamp?: Date;
    platform?: string;
    status?: CoreDeviceStatusEnum;
    tags?: Record<string, string>;
}
