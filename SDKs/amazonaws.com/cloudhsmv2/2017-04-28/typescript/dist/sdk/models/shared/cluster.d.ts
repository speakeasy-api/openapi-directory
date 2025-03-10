import { SpeakeasyBase } from "../../../internal/utils";
import { BackupPolicyEnum } from "./backuppolicyenum";
import { BackupRetentionPolicy } from "./backupretentionpolicy";
import { Certificates } from "./certificates";
import { ClusterStateEnum } from "./clusterstateenum";
import { Hsm } from "./hsm";
import { Tag } from "./tag";
/**
 * Contains information about an AWS CloudHSM cluster.
 */
export declare class Cluster extends SpeakeasyBase {
    backupPolicy?: BackupPolicyEnum;
    backupRetentionPolicy?: BackupRetentionPolicy;
    certificates?: Certificates;
    clusterId?: string;
    createTimestamp?: Date;
    hsmType?: string;
    hsms?: Hsm[];
    preCoPassword?: string;
    securityGroup?: string;
    sourceBackupId?: string;
    state?: ClusterStateEnum;
    stateMessage?: string;
    subnetMapping?: Record<string, string>;
    tagList?: Tag[];
    vpcId?: string;
}
