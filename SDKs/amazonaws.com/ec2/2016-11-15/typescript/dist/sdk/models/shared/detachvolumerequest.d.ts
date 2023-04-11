import { SpeakeasyBase } from "../../../internal/utils";
export declare class DetachVolumeRequest extends SpeakeasyBase {
    device?: string;
    dryRun?: boolean;
    force?: boolean;
    instanceId?: string;
    volumeId: string;
}
