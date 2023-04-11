import { SpeakeasyBase } from "../../../internal/utils";
import { SmbMountOptions } from "./smbmountoptions";
/**
 * Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your Amazon FSx for NetApp ONTAP file system. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access">Accessing FSx for ONTAP file systems</a>.
 */
export declare class FsxProtocolSmb extends SpeakeasyBase {
    domain?: string;
    /**
     * Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.
     */
    mountOptions?: SmbMountOptions;
    password: string;
    user: string;
}
