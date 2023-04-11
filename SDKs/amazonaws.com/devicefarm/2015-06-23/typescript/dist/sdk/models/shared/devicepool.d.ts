import { SpeakeasyBase } from "../../../internal/utils";
import { DevicePoolTypeEnum } from "./devicepooltypeenum";
import { Rule } from "./rule";
/**
 * Represents a collection of device types.
 */
export declare class DevicePool extends SpeakeasyBase {
    arn?: string;
    description?: string;
    maxDevices?: number;
    name?: string;
    rules?: Rule[];
    type?: DevicePoolTypeEnum;
}
