import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { DeploymentRolloutStateEnum } from "./deploymentrolloutstateenum";
import { LaunchTypeEnum } from "./launchtypeenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { ServiceConnectConfiguration } from "./serviceconnectconfiguration";
import { ServiceConnectServiceResource } from "./serviceconnectserviceresource";
/**
 * The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type.
 */
export declare class Deployment extends SpeakeasyBase {
    capacityProviderStrategy?: CapacityProviderStrategyItem[];
    createdAt?: Date;
    desiredCount?: number;
    failedTasks?: number;
    id?: string;
    launchType?: LaunchTypeEnum;
    networkConfiguration?: NetworkConfiguration;
    pendingCount?: number;
    platformFamily?: string;
    platformVersion?: string;
    rolloutState?: DeploymentRolloutStateEnum;
    rolloutStateReason?: string;
    runningCount?: number;
    serviceConnectConfiguration?: ServiceConnectConfiguration;
    serviceConnectResources?: ServiceConnectServiceResource[];
    status?: string;
    taskDefinition?: string;
    updatedAt?: Date;
}
