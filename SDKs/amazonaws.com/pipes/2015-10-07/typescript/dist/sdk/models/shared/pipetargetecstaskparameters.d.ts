import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { EcsTaskOverride } from "./ecstaskoverride";
import { LaunchTypeEnum } from "./launchtypeenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { Tag } from "./tag";
/**
 * The parameters for using an Amazon ECS task as a target.
 */
export declare class PipeTargetEcsTaskParameters extends SpeakeasyBase {
    capacityProviderStrategy?: CapacityProviderStrategyItem[];
    enableECSManagedTags?: boolean;
    enableExecuteCommand?: boolean;
    group?: string;
    launchType?: LaunchTypeEnum;
    networkConfiguration?: NetworkConfiguration;
    overrides?: EcsTaskOverride;
    placementConstraints?: PlacementConstraint[];
    placementStrategy?: PlacementStrategy[];
    platformVersion?: string;
    propagateTags?: PropagateTagsEnum;
    referenceId?: string;
    tags?: Tag[];
    taskCount?: number;
    taskDefinitionArn: string;
}
