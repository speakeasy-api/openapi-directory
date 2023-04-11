import { SpeakeasyBase } from "../../../internal/utils";
import { SelfManagedActiveDirectoryConfiguration } from "./selfmanagedactivedirectoryconfiguration";
import { WindowsAuditLogCreateConfiguration } from "./windowsauditlogcreateconfiguration";
import { WindowsDeploymentTypeEnum } from "./windowsdeploymenttypeenum";
/**
 * The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations.
 */
export declare class CreateFileSystemWindowsConfiguration extends SpeakeasyBase {
    activeDirectoryId?: string;
    aliases?: string[];
    auditLogConfiguration?: WindowsAuditLogCreateConfiguration;
    automaticBackupRetentionDays?: number;
    copyTagsToBackups?: boolean;
    dailyAutomaticBackupStartTime?: string;
    deploymentType?: WindowsDeploymentTypeEnum;
    preferredSubnetId?: string;
    /**
     * The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.
     */
    selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
    throughputCapacity: number;
    weeklyMaintenanceStartTime?: string;
}
