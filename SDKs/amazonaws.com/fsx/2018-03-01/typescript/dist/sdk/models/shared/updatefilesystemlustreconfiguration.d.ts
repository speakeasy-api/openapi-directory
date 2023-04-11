import { SpeakeasyBase } from "../../../internal/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";
import { LustreLogCreateConfiguration } from "./lustrelogcreateconfiguration";
import { LustreRootSquashConfiguration } from "./lustrerootsquashconfiguration";
/**
 * The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.
 */
export declare class UpdateFileSystemLustreConfiguration extends SpeakeasyBase {
    autoImportPolicy?: AutoImportPolicyTypeEnum;
    /**
     * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.
     */
    automaticBackupRetentionDays?: number;
    /**
     * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
     */
    dailyAutomaticBackupStartTime?: string;
    dataCompressionType?: DataCompressionTypeEnum;
    logConfiguration?: LustreLogCreateConfiguration;
    rootSquashConfiguration?: LustreRootSquashConfiguration;
    weeklyMaintenanceStartTime?: string;
}
