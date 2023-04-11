import { SpeakeasyBase } from "../../../internal/utils";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";
import { DataRepositoryConfiguration } from "./datarepositoryconfiguration";
import { DriveCacheTypeEnum } from "./drivecachetypeenum";
import { LustreDeploymentTypeEnum } from "./lustredeploymenttypeenum";
import { LustreLogConfiguration } from "./lustrelogconfiguration";
import { LustreRootSquashConfiguration } from "./lustrerootsquashconfiguration";
/**
 * The configuration for the Amazon FSx for Lustre file system.
 */
export declare class LustreFileSystemConfiguration extends SpeakeasyBase {
    /**
     * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.
     */
    automaticBackupRetentionDays?: number;
    copyTagsToBackups?: boolean;
    /**
     * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
     */
    dailyAutomaticBackupStartTime?: string;
    dataCompressionType?: DataCompressionTypeEnum;
    /**
     * <p>The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.</p> <p>This data type is not supported for file systems with the <code>Persistent_2</code> deployment type. Instead, use .</p>
     */
    dataRepositoryConfiguration?: DataRepositoryConfiguration;
    deploymentType?: LustreDeploymentTypeEnum;
    driveCacheType?: DriveCacheTypeEnum;
    logConfiguration?: LustreLogConfiguration;
    mountName?: string;
    perUnitStorageThroughput?: number;
    rootSquashConfiguration?: LustreRootSquashConfiguration;
    weeklyMaintenanceStartTime?: string;
}
