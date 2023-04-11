import { SpeakeasyBase } from "../../../internal/utils";
import { AdministrativeAction } from "./administrativeaction";
import { FileSystemFailureDetails } from "./filesystemfailuredetails";
import { FileSystemLifecycleEnum } from "./filesystemlifecycleenum";
import { FileSystemTypeEnum } from "./filesystemtypeenum";
import { LustreFileSystemConfiguration } from "./lustrefilesystemconfiguration";
import { OntapFileSystemConfiguration } from "./ontapfilesystemconfiguration";
import { OpenZFSFileSystemConfiguration } from "./openzfsfilesystemconfiguration";
import { StorageTypeEnum } from "./storagetypeenum";
import { Tag } from "./tag";
import { WindowsFileSystemConfiguration } from "./windowsfilesystemconfiguration";
/**
 * A description of a specific Amazon FSx file system.
 */
export declare class FileSystem extends SpeakeasyBase {
    administrativeActions?: AdministrativeAction[];
    creationTime?: Date;
    dnsName?: string;
    /**
     * A structure providing details of any failures that occurred.
     */
    failureDetails?: FileSystemFailureDetails;
    fileSystemId?: string;
    fileSystemType?: FileSystemTypeEnum;
    fileSystemTypeVersion?: string;
    kmsKeyId?: string;
    lifecycle?: FileSystemLifecycleEnum;
    /**
     * The configuration for the Amazon FSx for Lustre file system.
     */
    lustreConfiguration?: LustreFileSystemConfiguration;
    networkInterfaceIds?: string[];
    ontapConfiguration?: OntapFileSystemConfiguration;
    openZFSConfiguration?: OpenZFSFileSystemConfiguration;
    ownerId?: string;
    resourceARN?: string;
    storageCapacity?: number;
    storageType?: StorageTypeEnum;
    subnetIds?: string[];
    tags?: Tag[];
    vpcId?: string;
    windowsConfiguration?: WindowsFileSystemConfiguration;
}
