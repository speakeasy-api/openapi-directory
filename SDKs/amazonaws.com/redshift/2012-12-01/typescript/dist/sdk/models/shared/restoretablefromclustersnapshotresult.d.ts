import { SpeakeasyBase } from "../../../internal/utils";
import { TableRestoreStatus } from "./tablerestorestatus";
/**
 * Success
 */
export declare class RestoreTableFromClusterSnapshotResult extends SpeakeasyBase {
    /**
     * Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation.
     */
    tableRestoreStatus?: TableRestoreStatus;
}
