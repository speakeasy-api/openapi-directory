import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Bandwidth Snapshots
 */
export declare class BandwidthSnapshotEntity extends SpeakeasyBase {
    /**
     * Site bandwidth report bytes received
     */
    bytesReceived?: number;
    /**
     * Site bandwidth report bytes sent
     */
    bytesSent?: number;
    /**
     * Site bandwidth ID
     */
    id?: number;
    /**
     * Time the site bandwidth report was logged
     */
    loggedAt?: Date;
    /**
     * Site bandwidth report get requests
     */
    requestsGet?: number;
    /**
     * Site bandwidth report other requests
     */
    requestsOther?: number;
    /**
     * Site bandwidth report put requests
     */
    requestsPut?: number;
    /**
     * Site sync bandwidth report bytes received
     */
    syncBytesReceived?: number;
    /**
     * Site sync bandwidth report bytes sent
     */
    syncBytesSent?: number;
}
