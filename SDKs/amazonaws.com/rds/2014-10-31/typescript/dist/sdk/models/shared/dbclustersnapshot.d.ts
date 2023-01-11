import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p>
**/
export declare class DbClusterSnapshot extends SpeakeasyBase {
    allocatedStorage?: number;
    availabilityZones?: Record<string, any>[];
    clusterCreateTime?: Date;
    dbClusterIdentifier?: string;
    dbClusterSnapshotArn?: string;
    dbClusterSnapshotIdentifier?: string;
    engine?: string;
    engineMode?: string;
    engineVersion?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    kmsKeyId?: string;
    licenseModel?: string;
    masterUsername?: string;
    percentProgress?: number;
    port?: number;
    snapshotCreateTime?: Date;
    snapshotType?: string;
    sourceDBClusterSnapshotArn?: string;
    status?: string;
    storageEncrypted?: boolean;
    tagList?: TagList[];
    vpcId?: string;
}
