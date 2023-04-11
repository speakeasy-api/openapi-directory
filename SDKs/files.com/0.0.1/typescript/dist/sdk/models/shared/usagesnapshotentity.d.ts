import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Usage Snapshots
 */
export declare class UsageSnapshotEntity extends SpeakeasyBase {
    /**
     * Transfer Usage for period - Outbound GB from Files Native Storage
     */
    bytesSent?: number;
    /**
     * Current total Storage Usage GB as of end date (not necessarily high water mark, which is used for billing)
     */
    currentStorage?: number;
    /**
     * Storage Usage for files that are deleted but uploaded within last 30 days as of end date (not necessarily high water mark, which is used for billing)
     */
    deletedFilesCountedInMinimum?: number;
    /**
     * Storage Usage for files that are deleted but retained as backups as of end date (not necessarily high water mark, which is used for billing)
     */
    deletedFilesStorage?: number;
    /**
     * Usage snapshot end date/time
     */
    endAt?: Date;
    /**
     * Highest Storage Usage GB recorded in time period (used for billing)
     */
    highWaterStorage?: number;
    /**
     * Highest user count number in time period
     */
    highWaterUserCount?: number;
    /**
     * Usage snapshot ID
     */
    id?: number;
    /**
     * Storage Usage for root folder as of end date (not necessarily high water mark, which is used for billing)
     */
    rootStorage?: number;
    /**
     * Usage snapshot start date/time
     */
    startAt?: Date;
    /**
     * Transfer Usage for period - Inbound GB to Remote Servers (Sync/Mount)
     */
    syncBytesReceived?: number;
    /**
     * Transfer Usage for period - Outbound GB from Remote Servers (Sync/Mount)
     */
    syncBytesSent?: number;
    /**
     * Transfer usage for period - Total Billable amount
     */
    totalBillableTransferUsage?: number;
    /**
     * Storage + Transfer Usage - Total Billable amount
     */
    totalBillableUsage?: number;
    /**
     * Storage Usage - map of root folders to their usage as of end date (not necessarily high water mark, which is used for billing)
     */
    usageByTopLevelDir?: Record<string, any>;
}
