import { SpeakeasyBase } from "../../../internal/utils";
import { AquaConfigurationStatusEnum } from "./aquaconfigurationstatusenum";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class CreateClusterMessage extends SpeakeasyBase {
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
    clusterType?: string;
    clusterVersion?: string;
    dbName?: string;
    defaultIamRoleArn?: string;
    elasticIp?: string;
    encrypted?: boolean;
    enhancedVpcRouting?: boolean;
    hsmClientCertificateIdentifier?: string;
    hsmConfigurationIdentifier?: string;
    iamRoles?: string[];
    kmsKeyId?: string;
    loadSampleData?: string;
    maintenanceTrackName?: string;
    manualSnapshotRetentionPeriod?: number;
    masterUserPassword: string;
    masterUsername: string;
    nodeType: string;
    numberOfNodes?: number;
    port?: number;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    snapshotScheduleIdentifier?: string;
    tags?: TagList[];
    vpcSecurityGroupIds?: string[];
}
