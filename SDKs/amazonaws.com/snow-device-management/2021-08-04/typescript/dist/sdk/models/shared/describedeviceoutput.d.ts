import { SpeakeasyBase } from "../../../internal/utils";
import { Capacity } from "./capacity";
import { PhysicalNetworkInterface } from "./physicalnetworkinterface";
import { SoftwareInformation } from "./softwareinformation";
import { UnlockStateEnum } from "./unlockstateenum";
/**
 * Success
 */
export declare class DescribeDeviceOutput extends SpeakeasyBase {
    associatedWithJob?: string;
    deviceCapacities?: Capacity[];
    deviceState?: UnlockStateEnum;
    deviceType?: string;
    lastReachedOutAt?: Date;
    lastUpdatedAt?: Date;
    managedDeviceArn?: string;
    managedDeviceId?: string;
    physicalNetworkInterfaces?: PhysicalNetworkInterface[];
    software?: SoftwareInformation;
    tags?: Record<string, string>;
}
