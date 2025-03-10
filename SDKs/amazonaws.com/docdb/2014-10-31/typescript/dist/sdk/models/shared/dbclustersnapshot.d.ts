import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed information about a cluster snapshot.
 */
export declare class DBClusterSnapshot extends SpeakeasyBase {
    availabilityZones?: string[];
    clusterCreateTime?: Date;
    dbClusterIdentifier?: string;
    dbClusterSnapshotArn?: string;
    dbClusterSnapshotIdentifier?: string;
    engine?: string;
    engineVersion?: string;
    kmsKeyId?: string;
    masterUsername?: string;
    percentProgress?: number;
    port?: number;
    snapshotCreateTime?: Date;
    snapshotType?: string;
    sourceDBClusterSnapshotArn?: string;
    status?: string;
    storageEncrypted?: boolean;
    vpcId?: string;
}
