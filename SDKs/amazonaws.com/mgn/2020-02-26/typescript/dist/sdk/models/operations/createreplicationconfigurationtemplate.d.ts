import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Request to configure data plane routing during Replication Settings template creation.
 */
export declare enum CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}
/**
 * Request to configure the default large staging disk EBS volume type during Replication Settings template creation.
 */
export declare enum CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    St1 = "ST1",
    Gp3 = "GP3"
}
/**
 * Request to configure EBS encryption during Replication Settings template creation.
 */
export declare enum CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}
export declare class CreateReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
    /**
     * Request to associate the default Application Migration Service Security group with the Replication Settings template.
     */
    associateDefaultSecurityGroup: boolean;
    /**
     * Request to configure bandwidth throttling during Replication Settings template creation.
     */
    bandwidthThrottling: number;
    /**
     * Request to create Public IP during Replication Settings template creation.
     */
    createPublicIP: boolean;
    /**
     * Request to configure data plane routing during Replication Settings template creation.
     */
    dataPlaneRouting: CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
    /**
     * Request to configure the default large staging disk EBS volume type during Replication Settings template creation.
     */
    defaultLargeStagingDiskType: CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
    /**
     * Request to configure EBS encryption during Replication Settings template creation.
     */
    ebsEncryption: CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
    /**
     * Request to configure an EBS encryption key during Replication Settings template creation.
     */
    ebsEncryptionKeyArn?: string;
    /**
     * Request to configure the Replication Server instance type during Replication Settings template creation.
     */
    replicationServerInstanceType: string;
    /**
     * Request to configure the Replication Server Security group ID during Replication Settings template creation.
     */
    replicationServersSecurityGroupsIDs: string[];
    /**
     * Request to configure the Staging Area subnet ID during Replication Settings template creation.
     */
    stagingAreaSubnetId: string;
    /**
     * Request to configure Staging Area tags during Replication Settings template creation.
     */
    stagingAreaTags: Record<string, string>;
    /**
     * Request to configure tags during Replication Settings template creation.
     */
    tags?: Record<string, string>;
    /**
     * Request to use Dedicated Replication Servers during Replication Settings template creation.
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
     * Success
     */
    replicationConfigurationTemplate?: shared.ReplicationConfigurationTemplate;
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
