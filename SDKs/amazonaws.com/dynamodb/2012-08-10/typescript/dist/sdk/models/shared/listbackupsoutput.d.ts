import { SpeakeasyBase } from "../../../internal/utils";
import { BackupSummary } from "./backupsummary";
/**
 * Success
 */
export declare class ListBackupsOutput extends SpeakeasyBase {
    backupSummaries?: BackupSummary[];
    lastEvaluatedBackupArn?: string;
}
