import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * Returns information about a specific Elastic DocumentDB snapshot.
 */
export declare class ClusterSnapshot extends SpeakeasyBase {
    adminUserName: string;
    clusterArn: string;
    clusterCreationTime: string;
    kmsKeyId: string;
    snapshotArn: string;
    snapshotCreationTime: string;
    snapshotName: string;
    status: StatusEnum;
    subnetIds: string[];
    vpcSecurityGroupIds: string[];
}
