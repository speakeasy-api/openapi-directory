import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessorFeatureList } from "./processorfeaturelist";
import { TagList } from "./taglist";
/**
 * <p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p>
**/
export declare class DbSnapshot extends SpeakeasyBase {
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
    snapshotType?: string;
    sourceDBSnapshotIdentifier?: string;
    sourceRegion?: string;
    status?: string;
    storageType?: string;
    tagList?: TagList[];
    tdeCredentialArn?: string;
    timezone?: string;
    vpcId?: string;
}
