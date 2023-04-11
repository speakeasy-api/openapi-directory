import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteFileSystemLustreResponse } from "./deletefilesystemlustreresponse";
import { DeleteFileSystemOpenZFSResponse } from "./deletefilesystemopenzfsresponse";
import { DeleteFileSystemWindowsResponse } from "./deletefilesystemwindowsresponse";
import { FileSystemLifecycleEnum } from "./filesystemlifecycleenum";
/**
 * The response object for the <code>DeleteFileSystem</code> operation.
 */
export declare class DeleteFileSystemResponse extends SpeakeasyBase {
    fileSystemId?: string;
    lifecycle?: FileSystemLifecycleEnum;
    /**
     * The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
     */
    lustreResponse?: DeleteFileSystemLustreResponse;
    openZFSResponse?: DeleteFileSystemOpenZFSResponse;
    /**
     * The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
     */
    windowsResponse?: DeleteFileSystemWindowsResponse;
}
