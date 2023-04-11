import { SpeakeasyBase } from "../../../internal/utils";
import { AuthEnum } from "./authenum";
import { StatusEnum } from "./statusenum";
/**
 * Returns information about a specific Elastic DocumentDB cluster.
 */
export declare class Cluster extends SpeakeasyBase {
    adminUserName: string;
    authType: AuthEnum;
    clusterArn: string;
    clusterEndpoint: string;
    clusterName: string;
    createTime: string;
    kmsKeyId: string;
    preferredMaintenanceWindow: string;
    shardCapacity: number;
    shardCount: number;
    status: StatusEnum;
    subnetIds: string[];
    vpcSecurityGroupIds: string[];
}
