import { SpeakeasyBase } from "../../../internal/utils";
import { SessionBackupModeEnum } from "./sessionbackupmodeenum";
/**
 * Configures how streaming sessions are backed up when launched from this launch profile.
 */
export declare class StreamConfigurationSessionBackup extends SpeakeasyBase {
    maxBackupsToRetain?: number;
    mode?: SessionBackupModeEnum;
}
