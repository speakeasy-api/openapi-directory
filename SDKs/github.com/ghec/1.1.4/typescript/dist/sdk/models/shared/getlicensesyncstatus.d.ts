import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLicenseSyncStatusServerInstancesLastSync extends SpeakeasyBase {
    date?: string;
    error?: string;
    status?: string;
}
export declare class GetLicenseSyncStatusServerInstances extends SpeakeasyBase {
    hostname?: string;
    lastSync?: GetLicenseSyncStatusServerInstancesLastSync;
    serverId?: string;
}
/**
 * Information about the status of a license sync job for an enterprise.
 */
export declare class GetLicenseSyncStatus extends SpeakeasyBase {
    serverInstances?: GetLicenseSyncStatusServerInstances[];
}
