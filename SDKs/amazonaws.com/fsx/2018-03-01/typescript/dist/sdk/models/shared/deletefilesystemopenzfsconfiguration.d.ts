import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteFileSystemOpenZFSOptionEnum } from "./deletefilesystemopenzfsoptionenum";
import { Tag } from "./tag";
/**
 * The configuration object for the Amazon FSx for OpenZFS file system used in the <code>DeleteFileSystem</code> operation.
 */
export declare class DeleteFileSystemOpenZFSConfiguration extends SpeakeasyBase {
    finalBackupTags?: Tag[];
    options?: DeleteFileSystemOpenZFSOptionEnum[];
    skipFinalBackup?: boolean;
}
