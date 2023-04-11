import { SpeakeasyBase } from "../../../internal/utils";
import { NfsMountOptions } from "./nfsmountoptions";
/**
 * Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your Amazon FSx for OpenZFS or Amazon FSx for NetApp ONTAP file system.
 */
export declare class FsxProtocolNfs extends SpeakeasyBase {
    /**
     * Specifies how DataSync can access a location using the NFS protocol.
     */
    mountOptions?: NfsMountOptions;
}
