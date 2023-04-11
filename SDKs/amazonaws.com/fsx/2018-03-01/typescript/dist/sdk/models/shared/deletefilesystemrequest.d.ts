import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteFileSystemLustreConfiguration } from "./deletefilesystemlustreconfiguration";
import { DeleteFileSystemOpenZFSConfiguration } from "./deletefilesystemopenzfsconfiguration";
import { DeleteFileSystemWindowsConfiguration } from "./deletefilesystemwindowsconfiguration";
/**
 * The request object for <code>DeleteFileSystem</code> operation.
 */
export declare class DeleteFileSystemRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    fileSystemId: string;
    /**
     * The configuration object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
     */
    lustreConfiguration?: DeleteFileSystemLustreConfiguration;
    openZFSConfiguration?: DeleteFileSystemOpenZFSConfiguration;
    /**
     * The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
     */
    windowsConfiguration?: DeleteFileSystemWindowsConfiguration;
}
