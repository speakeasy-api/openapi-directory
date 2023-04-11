import { SpeakeasyBase } from "../../../internal/utils";
import { AquaConfigurationStatusEnum } from "./aquaconfigurationstatusenum";
/**
 * <p/>
 */
export declare class RestoreFromClusterSnapshotMessage extends SpeakeasyBase {
    additionalInfo?: string;
    allowVersionUpgrade?: boolean;
    aquaConfigurationStatus?: AquaConfigurationStatusEnum;
    automatedSnapshotRetentionPeriod?: number;
    availabilityZone?: string;
    availabilityZoneRelocation?: boolean;
    clusterIdentifier: string;
    clusterParameterGroupName?: string;
    clusterSecurityGroups?: string[];
    clusterSubnetGroupName?: string;
    defaultIamRoleArn?: string;
    elasticIp?: string;
    encrypted?: boolean;
    enhancedVpcRouting?: boolean;
    hsmClientCertificateIdentifier?: string;
    hsmConfigurationIdentifier?: string;
    iamRoles?: string[];
    kmsKeyId?: string;
    maintenanceTrackName?: string;
    manualSnapshotRetentionPeriod?: number;
    nodeType?: string;
    numberOfNodes?: number;
    ownerAccount?: string;
    port?: number;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    reservedNodeId?: string;
    snapshotArn?: string;
    snapshotClusterIdentifier?: string;
    snapshotIdentifier?: string;
    snapshotScheduleIdentifier?: string;
    targetReservedNodeOfferingId?: string;
    vpcSecurityGroupIds?: string[];
}
