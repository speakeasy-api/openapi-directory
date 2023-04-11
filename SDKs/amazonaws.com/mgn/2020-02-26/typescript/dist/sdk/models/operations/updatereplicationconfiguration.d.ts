import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Update replication configuration data plane routing request.
 */
export declare enum UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}
/**
 * Update replication configuration use default large Staging Disk type request.
 */
export declare enum UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    St1 = "ST1",
    Gp3 = "GP3"
}
/**
 * Update replication configuration EBS encryption request.
 */
export declare enum UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}
export declare class UpdateReplicationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Update replication configuration associate default Application Migration Service Security group request.
     */
    associateDefaultSecurityGroup?: boolean;
    /**
     * Update replication configuration bandwidth throttling request.
     */
    bandwidthThrottling?: number;
    /**
     * Update replication configuration create Public IP request.
     */
    createPublicIP?: boolean;
    /**
     * Update replication configuration data plane routing request.
     */
    dataPlaneRouting?: UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum;
    /**
     * Update replication configuration use default large Staging Disk type request.
     */
    defaultLargeStagingDiskType?: UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum;
    /**
     * Update replication configuration EBS encryption request.
     */
    ebsEncryption?: UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum;
    /**
     * Update replication configuration EBS encryption key ARN request.
     */
    ebsEncryptionKeyArn?: string;
    /**
     * Update replication configuration name request.
     */
    name?: string;
    /**
     * Update replication configuration replicated disks request.
     */
    replicatedDisks?: shared.ReplicationConfigurationReplicatedDisk[];
    /**
     * Update replication configuration Replication Server instance type request.
     */
    replicationServerInstanceType?: string;
    /**
     * Update replication configuration Replication Server Security Groups IDs request.
     */
    replicationServersSecurityGroupsIDs?: string[];
    /**
     * Update replication configuration Source Server ID request.
     */
    sourceServerID: string;
    /**
     * Update replication configuration Staging Area subnet request.
     */
    stagingAreaSubnetId?: string;
    /**
     * Update replication configuration Staging Area Tags request.
     */
    stagingAreaTags?: Record<string, string>;
    /**
     * Update replication configuration use dedicated Replication Server request.
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
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
