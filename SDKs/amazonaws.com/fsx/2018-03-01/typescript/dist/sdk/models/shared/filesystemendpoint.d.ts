import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Amazon FSx for NetApp ONTAP file system has two endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. They are the <code>Management</code> and <code>Intercluster</code> endpoints.
 */
export declare class FileSystemEndpoint extends SpeakeasyBase {
    /**
     * The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.
     */
    dnsName?: string;
    ipAddresses?: string[];
}
