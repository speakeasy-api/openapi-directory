import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestoreSnapshotTierRequest extends SpeakeasyBase {
    dryRun?: boolean;
    permanentRestore?: boolean;
    snapshotId: string;
    temporaryRestoreDays?: number;
}
