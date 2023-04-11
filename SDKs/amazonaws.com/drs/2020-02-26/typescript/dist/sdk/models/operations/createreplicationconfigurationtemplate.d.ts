import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The data plane routing mechanism that will be used for replication.
 */
export declare enum CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}
/**
 * The Staging Disk EBS volume type to be used during replication.
 */
export declare enum CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    Gp3 = "GP3",
    St1 = "ST1",
    Auto = "AUTO"
}
/**
 * The type of EBS encryption to be used during replication.
 */
export declare enum CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}
export declare class CreateReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
    /**
     * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
     */
    associateDefaultSecurityGroup: boolean;
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
     */
    bandwidthThrottling: number;
    /**
     * Whether to create a Public IP for the Recovery Instance by default.
     */
    createPublicIP: boolean;
    /**
     * The data plane routing mechanism that will be used for replication.
     */
    dataPlaneRouting: CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    defaultLargeStagingDiskType: CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
    /**
     * The type of EBS encryption to be used during replication.
     */
    ebsEncryption: CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
    /**
     * The ARN of the EBS encryption key to be used during replication.
     */
    ebsEncryptionKeyArn?: string;
    /**
     * The Point in time (PIT) policy to manage snapshots taken during replication.
     */
    pitPolicy: shared.PITPolicyRule[];
    /**
     * The instance type to be used for the replication server.
     */
    replicationServerInstanceType: string;
    /**
     * The security group IDs that will be used by the replication server.
     */
    replicationServersSecurityGroupsIDs: string[];
    /**
     * The subnet to be used by the replication staging area.
     */
    stagingAreaSubnetId: string;
    /**
     * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
     */
    stagingAreaTags: Record<string, string>;
    /**
     * A set of tags to be associated with the Replication Configuration Template resource.
     */
    tags?: Record<string, string>;
    /**
     * Whether to use a dedicated Replication Server in the replication staging area.
     */
    useDedicatedReplicationServer: boolean;
}
export declare class CreateReplicationConfigurationTemplateRequest extends SpeakeasyBase {
    requestBody: CreateReplicationConfigurationTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateReplicationConfigurationTemplateResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
