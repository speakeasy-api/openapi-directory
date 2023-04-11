import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The data plane routing mechanism that will be used for replication.
 */
export declare enum UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}
/**
 * The Staging Disk EBS volume type to be used during replication.
 */
export declare enum UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    Gp3 = "GP3",
    St1 = "ST1",
    Auto = "AUTO"
}
/**
 * The type of EBS encryption to be used during replication.
 */
export declare enum UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}
export declare class UpdateReplicationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.
     */
    associateDefaultSecurityGroup?: boolean;
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
     */
    bandwidthThrottling?: number;
    /**
     * Whether to create a Public IP for the Recovery Instance by default.
     */
    createPublicIP?: boolean;
    /**
     * The data plane routing mechanism that will be used for replication.
     */
    dataPlaneRouting?: UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    defaultLargeStagingDiskType?: UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum;
    /**
     * The type of EBS encryption to be used during replication.
     */
    ebsEncryption?: UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum;
    /**
     * The ARN of the EBS encryption key to be used during replication.
     */
    ebsEncryptionKeyArn?: string;
    /**
     * The name of the Replication Configuration.
     */
    name?: string;
    /**
     * The Point in time (PIT) policy to manage snapshots taken during replication.
     */
    pitPolicy?: shared.PITPolicyRule[];
    /**
     * The configuration of the disks of the Source Server to be replicated.
     */
    replicatedDisks?: shared.ReplicationConfigurationReplicatedDisk[];
    /**
     * The instance type to be used for the replication server.
     */
    replicationServerInstanceType?: string;
    /**
     * The security group IDs that will be used by the replication server.
     */
    replicationServersSecurityGroupsIDs?: string[];
    /**
     * The ID of the Source Server for this Replication Configuration.
     */
    sourceServerID: string;
    /**
     * The subnet to be used by the replication staging area.
     */
    stagingAreaSubnetId?: string;
    /**
     * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
     */
    stagingAreaTags?: Record<string, string>;
    /**
     * Whether to use a dedicated Replication Server in the replication staging area.
     */
    useDedicatedReplicationServer?: boolean;
}
export declare class UpdateReplicationConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateReplicationConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateReplicationConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    replicationConfiguration?: shared.ReplicationConfiguration;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
