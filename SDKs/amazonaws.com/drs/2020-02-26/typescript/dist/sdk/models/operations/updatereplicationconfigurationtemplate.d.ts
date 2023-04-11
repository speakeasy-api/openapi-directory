import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The data plane routing mechanism that will be used for replication.
 */
export declare enum UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}
/**
 * The Staging Disk EBS volume type to be used during replication.
 */
export declare enum UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    Gp3 = "GP3",
    St1 = "ST1",
    Auto = "AUTO"
}
/**
 * The type of EBS encryption to be used during replication.
 */
export declare enum UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}
export declare class UpdateReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
    /**
     * The Replication Configuration Template ARN.
     */
    arn?: string;
    /**
     * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
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
    dataPlaneRouting?: UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    defaultLargeStagingDiskType?: UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
    /**
     * The type of EBS encryption to be used during replication.
     */
    ebsEncryption?: UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
    /**
     * The ARN of the EBS encryption key to be used during replication.
     */
    ebsEncryptionKeyArn?: string;
    /**
     * The Point in time (PIT) policy to manage snapshots taken during replication.
     */
    pitPolicy?: shared.PITPolicyRule[];
    /**
     * The Replication Configuration Template ID.
     */
    replicationConfigurationTemplateID: string;
    /**
     * The instance type to be used for the replication server.
     */
    replicationServerInstanceType?: string;
    /**
     * The security group IDs that will be used by the replication server.
     */
    replicationServersSecurityGroupsIDs?: string[];
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
export declare class UpdateReplicationConfigurationTemplateRequest extends SpeakeasyBase {
    requestBody: UpdateReplicationConfigurationTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateReplicationConfigurationTemplateResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    replicationConfigurationTemplate?: shared.ReplicationConfigurationTemplate;
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
