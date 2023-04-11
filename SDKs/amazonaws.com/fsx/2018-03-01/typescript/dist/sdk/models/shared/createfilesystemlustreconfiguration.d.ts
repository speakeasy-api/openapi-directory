import { SpeakeasyBase } from "../../../internal/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";
import { DriveCacheTypeEnum } from "./drivecachetypeenum";
import { LustreDeploymentTypeEnum } from "./lustredeploymenttypeenum";
import { LustreLogCreateConfiguration } from "./lustrelogcreateconfiguration";
import { LustreRootSquashConfiguration } from "./lustrerootsquashconfiguration";
/**
 * <p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with the <code>Persistent_2</code> deployment type. Instead, use <code>CreateDataRepositoryAssociation</code> to create a data repository association to link your Lustre file system to a data repository.</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note>
 */
export declare class CreateFileSystemLustreConfiguration extends SpeakeasyBase {
    autoImportPolicy?: AutoImportPolicyTypeEnum;
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
    deploymentType?: LustreDeploymentTypeEnum;
    driveCacheType?: DriveCacheTypeEnum;
    exportPath?: string;
    importPath?: string;
    importedFileChunkSize?: number;
    logConfiguration?: LustreLogCreateConfiguration;
    perUnitStorageThroughput?: number;
    rootSquashConfiguration?: LustreRootSquashConfiguration;
    weeklyMaintenanceStartTime?: string;
}
