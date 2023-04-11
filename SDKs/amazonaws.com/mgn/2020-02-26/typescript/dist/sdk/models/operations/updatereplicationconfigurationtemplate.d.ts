import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Update replication configuration template data plane routing request.
 */
export declare enum UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}
/**
 * Update replication configuration template use default large Staging Disk type request.
 */
export declare enum UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    St1 = "ST1",
    Gp3 = "GP3"
}
/**
 * Update replication configuration template EBS encryption request.
 */
export declare enum UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}
export declare class UpdateReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
    /**
     * Update replication configuration template ARN request.
     */
    arn?: string;
    /**
     * Update replication configuration template associate default Application Migration Service Security group request.
     */
    associateDefaultSecurityGroup?: boolean;
    /**
     * Update replication configuration template bandwidth throttling request.
     */
    bandwidthThrottling?: number;
    /**
     * Update replication configuration template create Public IP request.
     */
    createPublicIP?: boolean;
    /**
     * Update replication configuration template data plane routing request.
     */
    dataPlaneRouting?: UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
    /**
     * Update replication configuration template use default large Staging Disk type request.
     */
    defaultLargeStagingDiskType?: UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
    /**
     * Update replication configuration template EBS encryption request.
     */
    ebsEncryption?: UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
    /**
     * Update replication configuration template EBS encryption key ARN request.
     */
    ebsEncryptionKeyArn?: string;
    /**
     * Update replication configuration template template ID request.
     */
    replicationConfigurationTemplateID: string;
    /**
     * Update replication configuration template Replication Server instance type request.
     */
    replicationServerInstanceType?: string;
    /**
     * Update replication configuration template Replication Server Security groups IDs request.
     */
    replicationServersSecurityGroupsIDs?: string[];
    /**
     * Update replication configuration template Staging Area subnet ID request.
     */
    stagingAreaSubnetId?: string;
    /**
     * Update replication configuration template Staging Area Tags request.
     */
    stagingAreaTags?: Record<string, string>;
    /**
     * Update replication configuration template use dedicated Replication Server request.
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
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
