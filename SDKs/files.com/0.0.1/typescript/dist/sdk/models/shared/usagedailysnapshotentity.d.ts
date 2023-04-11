import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Usage Daily Snapshots
 */
export declare class UsageDailySnapshotEntity extends SpeakeasyBase {
    /**
     * True if the API usage fields `read_api_usage` and `write_api_usage` can be relied upon.  If this is false, we suggest hiding that value from any UI.
     */
    apiUsageAvailable?: boolean;
    /**
     * GB of Files Native Storage used on this day.
     */
    currentStorage?: number;
    /**
     * The date of this usage record
     */
    date?: Date;
    /**
     * GB of Files Native Storage used on this day for files that have been permanently deleted but were uploaded less than 30 days ago, and are still billable.
     */
    deletedFilesCountedInMinimum?: number;
    /**
     * GB of Files Native Storage used on this day for files that have been deleted and are stored as backups.
     */
    deletedFilesStorage?: number;
    /**
     * ID of the usage record
     */
    id?: number;
    /**
     * Read API Calls used on this day. Note: only updated for days before the current day.
     */
    readApiUsage?: number;
    /**
     * GB of Files Native Storage used for the root folder.  Included here because this value will not be part of `usage_by_top_level_dir`
     */
    rootStorage?: number;
    /**
     * Usage broken down by each top-level folder
     */
    usageByTopLevelDir?: Record<string, any>;
    /**
     * Number of billable users as of this day.
     */
    userCount?: number;
    /**
     * Write API Calls used on this day. Note: only updated for days before the current day.
     */
    writeApiUsage?: number;
}
