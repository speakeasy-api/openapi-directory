import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
/**
 * The templated target type for the Amazon ECS <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html"> <code>RunTask</code> </a> API operation.
 */
export declare class EcsParameters extends SpeakeasyBase {
    capacityProviderStrategy?: CapacityProviderStrategyItem[];
    enableECSManagedTags?: boolean;
    enableExecuteCommand?: boolean;
    group?: string;
    launchType?: LaunchTypeEnum;
    networkConfiguration?: NetworkConfiguration;
    placementConstraints?: PlacementConstraint[];
    placementStrategy?: PlacementStrategy[];
    platformVersion?: string;
    propagateTags?: PropagateTagsEnum;
    referenceId?: string;
    tags?: Record<string, string>[];
    taskCount?: number;
    taskDefinitionArn: string;
}
