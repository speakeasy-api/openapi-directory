import { SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshotList } from "./dbsnapshotlist";
export declare class DbSnapshotMessage extends SpeakeasyBase {
    dbSnapshots?: DbSnapshotList[];
    marker?: string;
}
