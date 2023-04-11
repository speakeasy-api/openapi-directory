import { SpeakeasyBase } from "../../../internal/utils";
import { TargetStorageTierEnum } from "./targetstoragetierenum";
export declare class ModifySnapshotTierRequest extends SpeakeasyBase {
    dryRun?: boolean;
    snapshotId: string;
    storageTier?: TargetStorageTierEnum;
}
