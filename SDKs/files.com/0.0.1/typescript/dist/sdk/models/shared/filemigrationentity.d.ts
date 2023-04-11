import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of operation
 */
export declare enum FileMigrationEntityOperationEnum {
    Delete = "delete",
    Move = "move",
    Copy = "copy",
    RegionalMigration = "regional_migration"
}
/**
 * Status
 */
export declare enum FileMigrationEntityStatusEnum {
    Pending = "pending",
    Counting = "counting",
    Processing = "processing",
    Completed = "completed",
    ProcessingSubfolders = "processing_subfolders",
    Finishing = "finishing",
    CreatingDestFolder = "creating_dest_folder",
    WaitingForOtherJobs = "waiting_for_other_jobs",
    WaitingForAllFiles = "waiting_for_all_files",
    WaitingForPendingSubfolders = "waiting_for_pending_subfolders",
    WaitingForAllSubfolders = "waiting_for_all_subfolders",
    Failed = "failed",
    WaitingForEnqueuedOperations = "waiting_for_enqueued_operations",
    Unused = "unused",
    ProcessingRecursively = "processing_recursively",
    RemovingDeferredFolders = "removing_deferred_folders"
}
/**
 * Show File Migration
 */
export declare class FileMigrationEntity extends SpeakeasyBase {
    /**
     * Destination path
     */
    destPath?: string;
    /**
     * Number of files processed
     */
    filesMoved?: number;
    /**
     * Deprecated: used to return a count of the applicable files.  Currently returns 0 always.  On remote servers, it is not possible to reliably determine the number of affected files for every migration operation.
     */
    filesTotal?: number;
    /**
     * File migration ID
     */
    id?: number;
    /**
     * Link to download the log file for this migration.
     */
    logUrl?: string;
    /**
     * The type of operation
     */
    operation?: FileMigrationEntityOperationEnum;
    /**
     * Source path
     */
    path?: string;
    /**
     * Region
     */
    region?: string;
    /**
     * Status
     */
    status?: FileMigrationEntityStatusEnum;
}
