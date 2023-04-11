import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewEntity } from "./previewentity";
/**
 * List Folders by path
 */
export declare class FileEntity extends SpeakeasyBase {
    /**
     * File CRC32 checksum. This is sometimes delayed, so if you get a blank response, wait and try again.
     */
    crc32?: string;
    /**
     * File created date/time
     */
    createdAt?: Date;
    /**
     * File/Folder display name
     */
    displayName?: string;
    /**
     * Link to download file. Provided only in response to a download request.
     */
    downloadUri?: string;
    /**
     * Is this folder locked and unable to be modified?
     */
    isLocked?: boolean;
    /**
     * File MD5 checksum. This is sometimes delayed, so if you get a blank response, wait and try again.
     */
    md5?: string;
    /**
     * MIME Type.  This is determined by the filename extension and is not stored separately internally.
     */
    mimeType?: string;
    /**
     * File last modified date/time, according to the server.  This is the timestamp of the last Files.com operation of the file, regardless of what modified timestamp was sent.
     */
    mtime?: Date;
    /**
     * File/Folder path
     */
    path?: string;
    /**
     * A short string representing the current user's permissions.  Can be `r`,`w`,`d`, `l` or any combination
     */
    permissions?: string;
    preview?: PreviewEntity;
    /**
     * File preview ID
     */
    previewId?: number;
    /**
     * Bookmark/priority color of file/folder
     */
    priorityColor?: string;
    /**
     * File last modified date/time, according to the client who set it.  Files.com allows desktop, FTP, SFTP, and WebDAV clients to set modified at times.  This allows Desktop<->Cloud syncing to preserve modified at times.
     */
    providedMtime?: Date;
    /**
     * Region location
     */
    region?: string;
    /**
     * File/Folder size
     */
    size?: number;
    /**
     * Are subfolders locked and unable to be modified?
     */
    subfoldersLocked?: boolean;
    /**
     * Type: `directory` or `file`.
     */
    type?: string;
}
