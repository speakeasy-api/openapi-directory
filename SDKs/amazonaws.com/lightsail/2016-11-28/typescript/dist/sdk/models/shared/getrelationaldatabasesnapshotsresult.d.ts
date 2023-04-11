import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseSnapshot } from "./relationaldatabasesnapshot";
/**
 * Success
 */
export declare class GetRelationalDatabaseSnapshotsResult extends SpeakeasyBase {
    nextPageToken?: string;
    relationalDatabaseSnapshots?: RelationalDatabaseSnapshot[];
}
