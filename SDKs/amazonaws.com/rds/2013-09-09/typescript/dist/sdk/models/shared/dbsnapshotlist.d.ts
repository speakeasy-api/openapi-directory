import { SpeakeasyBase } from "../../../internal/utils";
export declare class DBSnapshotList extends SpeakeasyBase {
    allocatedStorage?: number;
    availabilityZone?: string;
    dbInstanceIdentifier?: string;
    dbSnapshotIdentifier?: string;
    engine?: string;
    engineVersion?: string;
    instanceCreateTime?: Date;
    iops?: number;
    licenseModel?: string;
    masterUsername?: string;
    optionGroupName?: string;
    percentProgress?: number;
    port?: number;
    snapshotCreateTime?: Date;
    snapshotType?: string;
    sourceRegion?: string;
    status?: string;
    vpcId?: string;
}
