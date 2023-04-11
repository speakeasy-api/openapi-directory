import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeTypeEnum } from "./volumetypeenum";
/**
 * Launch template disk configuration.
 */
export declare class LaunchTemplateDiskConf extends SpeakeasyBase {
    iops?: number;
    throughput?: number;
    volumeType?: VolumeTypeEnum;
}
