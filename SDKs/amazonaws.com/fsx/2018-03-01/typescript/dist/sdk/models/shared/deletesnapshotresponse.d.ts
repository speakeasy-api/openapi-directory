import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotLifecycleEnum } from "./snapshotlifecycleenum";
/**
 * Success
 */
export declare class DeleteSnapshotResponse extends SpeakeasyBase {
    lifecycle?: SnapshotLifecycleEnum;
    snapshotId?: string;
}
