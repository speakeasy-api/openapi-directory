import { SpeakeasyBase } from "../../../internal/utils";
import { ExportSnapshotRecord } from "./exportsnapshotrecord";
/**
 * Success
 */
export declare class GetExportSnapshotRecordsResult extends SpeakeasyBase {
    exportSnapshotRecords?: ExportSnapshotRecord[];
    nextPageToken?: string;
}
