import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateFileSystemLustreConfiguration } from "./updatefilesystemlustreconfiguration";
import { UpdateFileSystemOntapConfiguration } from "./updatefilesystemontapconfiguration";
import { UpdateFileSystemOpenZFSConfiguration } from "./updatefilesystemopenzfsconfiguration";
import { UpdateFileSystemWindowsConfiguration } from "./updatefilesystemwindowsconfiguration";
/**
 * The request object for the <code>UpdateFileSystem</code> operation.
 */
export declare class UpdateFileSystemRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    fileSystemId: string;
    /**
     * The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.
     */
    lustreConfiguration?: UpdateFileSystemLustreConfiguration;
    /**
     * The configuration updates for an Amazon FSx for NetApp ONTAP file system.
     */
    ontapConfiguration?: UpdateFileSystemOntapConfiguration;
    openZFSConfiguration?: UpdateFileSystemOpenZFSConfiguration;
    storageCapacity?: number;
    windowsConfiguration?: UpdateFileSystemWindowsConfiguration;
}
