import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class ModifyClusterMessage extends SpeakeasyBase {
    allowVersionUpgrade?: boolean;
    automatedSnapshotRetentionPeriod?: number;
    availabilityZone?: string;
    availabilityZoneRelocation?: boolean;
    clusterIdentifier: string;
    clusterParameterGroupName?: string;
    clusterSecurityGroups?: string[];
    clusterType?: string;
    clusterVersion?: string;
    elasticIp?: string;
    encrypted?: boolean;
    enhancedVpcRouting?: boolean;
    hsmClientCertificateIdentifier?: string;
    hsmConfigurationIdentifier?: string;
    kmsKeyId?: string;
    maintenanceTrackName?: string;
    manualSnapshotRetentionPeriod?: number;
    masterUserPassword?: string;
    newClusterIdentifier?: string;
    nodeType?: string;
    numberOfNodes?: number;
    port?: number;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    vpcSecurityGroupIds?: string[];
}
