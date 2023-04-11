import { SpeakeasyBase } from "../../../internal/utils";
import { DBSnapshotList } from "./dbsnapshotlist";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action.
 */
export declare class DBSnapshotMessage extends SpeakeasyBase {
    dbSnapshots?: DBSnapshotList[];
    marker?: string;
}
