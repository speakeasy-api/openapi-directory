import { SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";
/**
 * Success
 */
export declare class CopyBackupResponse extends SpeakeasyBase {
    /**
     * A backup of an Amazon FSx for Windows File Server, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system.
     */
    backup?: Backup;
}
