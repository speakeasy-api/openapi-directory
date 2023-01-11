import { SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshotList } from "./dbsnapshotlist";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action.
**/
export declare class DbSnapshotMessage extends SpeakeasyBase {
    dbSnapshots?: DbSnapshotList[];
    marker?: string;
}
