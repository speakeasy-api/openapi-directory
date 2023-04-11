import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DiffEntryStatusEnum {
    Added = "added",
    Removed = "removed",
    Modified = "modified",
    Renamed = "renamed",
    Copied = "copied",
    Changed = "changed",
    Unchanged = "unchanged"
}
/**
 * Diff Entry
 */
export declare class DiffEntry extends SpeakeasyBase {
    additions: number;
    blobUrl: string;
    changes: number;
    contentsUrl: string;
    deletions: number;
    filename: string;
    patch?: string;
    previousFilename?: string;
    rawUrl: string;
    sha: string;
    status: DiffEntryStatusEnum;
}
