import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CopySnapshotResultTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Success
 */
export declare class CopySnapshotResult extends SpeakeasyBase {
    snapshotId?: string;
    tags?: CopySnapshotResultTags[];
}
