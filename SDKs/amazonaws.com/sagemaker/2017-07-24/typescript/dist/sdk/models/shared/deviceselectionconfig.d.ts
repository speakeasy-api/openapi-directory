import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSubsetTypeEnum } from "./devicesubsettypeenum";
/**
 * Contains information about the configurations of selected devices.
 */
export declare class DeviceSelectionConfig extends SpeakeasyBase {
    deviceNameContains?: string;
    deviceNames?: string[];
    deviceSubsetType: DeviceSubsetTypeEnum;
    percentage?: number;
}
