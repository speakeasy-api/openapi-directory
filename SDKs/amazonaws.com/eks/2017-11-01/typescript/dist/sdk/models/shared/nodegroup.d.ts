import { SpeakeasyBase } from "../../../internal/utils";
import { AMITypesEnum } from "./amitypesenum";
import { CapacityTypesEnum } from "./capacitytypesenum";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { NodegroupHealth } from "./nodegrouphealth";
import { NodegroupResources } from "./nodegroupresources";
import { NodegroupScalingConfig } from "./nodegroupscalingconfig";
import { NodegroupStatusEnum } from "./nodegroupstatusenum";
import { NodegroupUpdateConfig } from "./nodegroupupdateconfig";
import { RemoteAccessConfig } from "./remoteaccessconfig";
import { Taint } from "./taint";
/**
 * An object representing an Amazon EKS managed node group.
 */
export declare class Nodegroup extends SpeakeasyBase {
    amiType?: AMITypesEnum;
    capacityType?: CapacityTypesEnum;
    clusterName?: string;
    createdAt?: Date;
    diskSize?: number;
    health?: NodegroupHealth;
    instanceTypes?: string[];
    labels?: Record<string, string>;
    launchTemplate?: LaunchTemplateSpecification;
    modifiedAt?: Date;
    nodeRole?: string;
    nodegroupArn?: string;
    nodegroupName?: string;
    releaseVersion?: string;
    remoteAccess?: RemoteAccessConfig;
    resources?: NodegroupResources;
    scalingConfig?: NodegroupScalingConfig;
    status?: NodegroupStatusEnum;
    subnets?: string[];
    tags?: Record<string, string>;
    taints?: Taint[];
    updateConfig?: NodegroupUpdateConfig;
    version?: string;
}
