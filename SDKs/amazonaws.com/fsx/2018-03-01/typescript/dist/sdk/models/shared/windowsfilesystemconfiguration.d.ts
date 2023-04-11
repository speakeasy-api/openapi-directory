import { SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
import { FileSystemMaintenanceOperationEnum } from "./filesystemmaintenanceoperationenum";
import { SelfManagedActiveDirectoryAttributes } from "./selfmanagedactivedirectoryattributes";
import { WindowsAuditLogConfiguration } from "./windowsauditlogconfiguration";
import { WindowsDeploymentTypeEnum } from "./windowsdeploymenttypeenum";
/**
 * The configuration for this Microsoft Windows file system.
 */
export declare class WindowsFileSystemConfiguration extends SpeakeasyBase {
    activeDirectoryId?: string;
    /**
     * An array of one or more DNS aliases that are currently associated with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time. You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation. You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation. You only need to specify the alias name in the request payload. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a>.
     */
    aliases?: Alias[];
    auditLogConfiguration?: WindowsAuditLogConfiguration;
    automaticBackupRetentionDays?: number;
    copyTagsToBackups?: boolean;
    dailyAutomaticBackupStartTime?: string;
    deploymentType?: WindowsDeploymentTypeEnum;
    maintenanceOperationsInProgress?: FileSystemMaintenanceOperationEnum[];
    preferredFileServerIp?: string;
    preferredSubnetId?: string;
    remoteAdministrationEndpoint?: string;
    /**
     * The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
     */
    selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
    throughputCapacity?: number;
    weeklyMaintenanceStartTime?: string;
}
