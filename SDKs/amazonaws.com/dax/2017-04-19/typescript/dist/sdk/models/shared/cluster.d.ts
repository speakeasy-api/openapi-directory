import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterEndpointEncryptionTypeEnum } from "./clusterendpointencryptiontypeenum";
import { Endpoint } from "./endpoint";
import { Node } from "./node";
import { NotificationConfiguration } from "./notificationconfiguration";
import { ParameterGroupStatus } from "./parametergroupstatus";
import { SecurityGroupMembership } from "./securitygroupmembership";
import { SSEDescription } from "./ssedescription";
/**
 * Contains all of the attributes of a specific DAX cluster.
 */
export declare class Cluster extends SpeakeasyBase {
    activeNodes?: number;
    clusterArn?: string;
    clusterDiscoveryEndpoint?: Endpoint;
    clusterEndpointEncryptionType?: ClusterEndpointEncryptionTypeEnum;
    clusterName?: string;
    description?: string;
    iamRoleArn?: string;
    nodeIdsToRemove?: string[];
    nodeType?: string;
    nodes?: Node[];
    notificationConfiguration?: NotificationConfiguration;
    parameterGroup?: ParameterGroupStatus;
    preferredMaintenanceWindow?: string;
    sseDescription?: SSEDescription;
    securityGroups?: SecurityGroupMembership[];
    status?: string;
    subnetGroup?: string;
    totalNodes?: number;
}
