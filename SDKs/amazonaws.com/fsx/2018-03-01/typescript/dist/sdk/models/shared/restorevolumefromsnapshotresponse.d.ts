import { SpeakeasyBase } from "../../../internal/utils";
import { AdministrativeAction } from "./administrativeaction";
import { VolumeLifecycleEnum } from "./volumelifecycleenum";
/**
 * Success
 */
export declare class RestoreVolumeFromSnapshotResponse extends SpeakeasyBase {
    administrativeActions?: AdministrativeAction[];
    lifecycle?: VolumeLifecycleEnum;
    volumeId?: string;
}
