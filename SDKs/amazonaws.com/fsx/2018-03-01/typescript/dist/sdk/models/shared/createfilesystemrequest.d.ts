import { SpeakeasyBase } from "../../../internal/utils";
import { CreateFileSystemLustreConfiguration } from "./createfilesystemlustreconfiguration";
import { CreateFileSystemOntapConfiguration } from "./createfilesystemontapconfiguration";
import { CreateFileSystemOpenZFSConfiguration } from "./createfilesystemopenzfsconfiguration";
import { CreateFileSystemWindowsConfiguration } from "./createfilesystemwindowsconfiguration";
import { FileSystemTypeEnum } from "./filesystemtypeenum";
import { StorageTypeEnum } from "./storagetypeenum";
import { Tag } from "./tag";
/**
 * The request object used to create a new Amazon FSx file system.
 */
export declare class CreateFileSystemRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    fileSystemType: FileSystemTypeEnum;
    fileSystemTypeVersion?: string;
    /**
     * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on Amazon FSx file systems, as follows:</p> <ul> <li> <p>Amazon FSx for Lustre <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types only.</p> <p> <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using the Amazon FSx service KMS key for your account.</p> </li> <li> <p>Amazon FSx for NetApp ONTAP</p> </li> <li> <p>Amazon FSx for OpenZFS</p> </li> <li> <p>Amazon FSx for Windows File Server</p> </li> </ul> <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>Key Management Service API Reference</i>.</p>
     */
    kmsKeyId?: string;
    /**
     * <p>The Lustre configuration for the file system being created.</p> <note> <p>The following parameters are not supported for file systems with the <code>Persistent_2</code> deployment type. Instead, use <code>CreateDataRepositoryAssociation</code> to create a data repository association to link your Lustre file system to a data repository.</p> <ul> <li> <p> <code>AutoImportPolicy</code> </p> </li> <li> <p> <code>ExportPath</code> </p> </li> <li> <p> <code>ImportedChunkSize</code> </p> </li> <li> <p> <code>ImportPath</code> </p> </li> </ul> </note>
     */
    lustreConfiguration?: CreateFileSystemLustreConfiguration;
    /**
     * The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.
     */
    ontapConfiguration?: CreateFileSystemOntapConfiguration;
    openZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;
    securityGroupIds?: string[];
    storageCapacity: number;
    storageType?: StorageTypeEnum;
    subnetIds: string[];
    tags?: Tag[];
    windowsConfiguration?: CreateFileSystemWindowsConfiguration;
}
