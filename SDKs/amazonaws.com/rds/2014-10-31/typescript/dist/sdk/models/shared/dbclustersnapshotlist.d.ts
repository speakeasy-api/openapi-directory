import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p>Contains the details for an Amazon RDS DB cluster snapshot</p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action.</p>
 */
export declare class DBClusterSnapshotList extends SpeakeasyBase {
    allocatedStorage?: number;
    availabilityZones?: string[];
    clusterCreateTime?: Date;
    dbClusterIdentifier?: string;
    dbClusterSnapshotArn?: string;
    dbClusterSnapshotIdentifier?: string;
    dbSystemId?: string;
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
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tagList?: TagList[];
    vpcId?: string;
}
