import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of the <code>DescribeSnapshotCopyGrants</code> action.
 */
export declare class DescribeSnapshotCopyGrantsMessage extends SpeakeasyBase {
    marker?: string;
    maxRecords?: number;
    snapshotCopyGrantName?: string;
    tagKeys?: string[];
    tagValues?: string[];
}
