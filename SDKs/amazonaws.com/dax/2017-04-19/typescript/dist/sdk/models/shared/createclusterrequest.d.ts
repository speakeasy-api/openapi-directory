import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterEndpointEncryptionTypeEnum } from "./clusterendpointencryptiontypeenum";
import { SSESpecification } from "./ssespecification";
import { Tag } from "./tag";
export declare class CreateClusterRequest extends SpeakeasyBase {
    availabilityZones?: string[];
    clusterEndpointEncryptionType?: ClusterEndpointEncryptionTypeEnum;
    clusterName: string;
    description?: string;
    iamRoleArn: string;
    nodeType: string;
    notificationTopicArn?: string;
    parameterGroupName?: string;
    preferredMaintenanceWindow?: string;
    replicationFactor: number;
    sseSpecification?: SSESpecification;
    securityGroupIds?: string[];
    subnetGroupName?: string;
    tags?: Tag[];
}
