import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnableFastSnapshotRestoresRequest extends SpeakeasyBase {
    availabilityZones: string[];
    dryRun?: boolean;
    sourceSnapshotIds: string[];
}
