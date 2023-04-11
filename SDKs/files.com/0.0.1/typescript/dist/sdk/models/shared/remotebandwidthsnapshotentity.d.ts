import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Remote Bandwidth Snapshots
 */
export declare class RemoteBandwidthSnapshotEntity extends SpeakeasyBase {
    /**
     * Site bandwidth ID
     */
    id?: number;
    /**
     * Time the site bandwidth report was logged
     */
    loggedAt?: Date;
    /**
     * ID of related Remote Server
     */
    remoteServerId?: number;
    /**
     * Site sync bandwidth report bytes received
     */
    syncBytesReceived?: number;
    /**
     * Site sync bandwidth report bytes sent
     */
    syncBytesSent?: number;
}
