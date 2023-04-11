import { SpeakeasyBase } from "../../../internal/utils";
import { DiskIopsConfiguration } from "./diskiopsconfiguration";
import { OpenZFSCreateRootVolumeConfiguration } from "./openzfscreaterootvolumeconfiguration";
import { OpenZFSDeploymentTypeEnum } from "./openzfsdeploymenttypeenum";
/**
 * The Amazon FSx for OpenZFS configuration properties for the file system that you are creating.
 */
export declare class CreateFileSystemOpenZFSConfiguration extends SpeakeasyBase {
    /**
     * The number of days to retain automatic backups. Setting this property to <code>0</code> disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is <code>0</code>.
     */
    automaticBackupRetentionDays?: number;
    copyTagsToBackups?: boolean;
    copyTagsToVolumes?: boolean;
    /**
     * A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. For example, <code>05:00</code> specifies 5 AM daily.
     */
    dailyAutomaticBackupStartTime?: string;
    deploymentType: OpenZFSDeploymentTypeEnum;
    /**
     * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).
     */
    diskIopsConfiguration?: DiskIopsConfiguration;
    rootVolumeConfiguration?: OpenZFSCreateRootVolumeConfiguration;
    throughputCapacity: number;
    /**
     * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p> <p> <code>D</code> is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p> <p> <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the hour. </p> <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
     */
    weeklyMaintenanceStartTime?: string;
}
