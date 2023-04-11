import { SpeakeasyBase } from "../../../internal/utils";
import { DBSnapshotList } from "./dbsnapshotlist";
/**
 * Success
 */
export declare class DBSnapshotMessage extends SpeakeasyBase {
    dbSnapshots?: DBSnapshotList[];
    marker?: string;
}
