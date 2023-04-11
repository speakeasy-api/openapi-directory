import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeTypeEnum } from "./volumetypeenum";
export declare class ModifyVolumeRequest extends SpeakeasyBase {
    dryRun?: boolean;
    iops?: number;
    multiAttachEnabled?: boolean;
    size?: number;
    throughput?: number;
    volumeId: string;
    volumeType?: VolumeTypeEnum;
}
