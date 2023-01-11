import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateReplicationConfigurationTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum {
    PrivateIp = "PRIVATE_IP",
    PublicIp = "PUBLIC_IP"
}
export declare enum UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum {
    Gp2 = "GP2",
    St1 = "ST1"
}
export declare enum UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum {
    Default = "DEFAULT",
    Custom = "CUSTOM"
}
export declare class UpdateReplicationConfigurationTemplateRequestBody extends SpeakeasyBase {
    arn?: string;
    associateDefaultSecurityGroup?: boolean;
    bandwidthThrottling?: number;
    createPublicIP?: boolean;
    dataPlaneRouting?: UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum;
    defaultLargeStagingDiskType?: UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum;
    ebsEncryption?: UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum;
    ebsEncryptionKeyArn?: string;
    replicationConfigurationTemplateID: string;
    replicationServerInstanceType?: string;
    replicationServersSecurityGroupsIDs?: string[];
    stagingAreaSubnetId?: string;
    stagingAreaTags?: Record<string, string>;
    useDedicatedReplicationServer?: boolean;
}
export declare class UpdateReplicationConfigurationTemplateRequest extends SpeakeasyBase {
    headers: UpdateReplicationConfigurationTemplateHeaders;
    request: UpdateReplicationConfigurationTemplateRequestBody;
}
export declare class UpdateReplicationConfigurationTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    replicationConfigurationTemplate?: shared.ReplicationConfigurationTemplate;
    resourceNotFoundException?: any;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
