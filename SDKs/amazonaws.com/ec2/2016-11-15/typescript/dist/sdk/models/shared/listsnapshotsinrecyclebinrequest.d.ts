import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSnapshotsInRecycleBinRequest extends SpeakeasyBase {
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    snapshotIds?: string[];
}
