import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessorFeatureList } from "./processorfeaturelist";
import { TagList } from "./taglist";
/**
 * <p>Contains the details of an Amazon RDS DB snapshot.</p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action.</p>
 */
export declare class DBSnapshotList extends SpeakeasyBase {
    allocatedStorage?: number;
    availabilityZone?: string;
    dbInstanceIdentifier?: string;
    dbSnapshotArn?: string;
    dbSnapshotIdentifier?: string;
    dbiResourceId?: string;
    encrypted?: boolean;
    engine?: string;
    engineVersion?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    instanceCreateTime?: Date;
    iops?: number;
    kmsKeyId?: string;
    licenseModel?: string;
    masterUsername?: string;
    optionGroupName?: string;
    originalSnapshotCreateTime?: Date;
    percentProgress?: number;
    port?: number;
    processorFeatures?: ProcessorFeatureList[];
    snapshotCreateTime?: Date;
    snapshotDatabaseTime?: Date;
    snapshotTarget?: string;
    snapshotType?: string;
    sourceDBSnapshotIdentifier?: string;
    sourceRegion?: string;
    status?: string;
    storageThroughput?: number;
    storageType?: string;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tagList?: TagList[];
    tdeCredentialArn?: string;
    timezone?: string;
    vpcId?: string;
}
