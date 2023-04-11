import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityProviderStrategyItem } from "./capacityproviderstrategyitem";
import { LaunchTypeEnum } from "./launchtypeenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { PlacementConstraint } from "./placementconstraint";
import { PlacementStrategy } from "./placementstrategy";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { Tag } from "./tag";
import { TaskOverride } from "./taskoverride";
export declare class RunTaskRequest extends SpeakeasyBase {
    capacityProviderStrategy?: CapacityProviderStrategyItem[];
    cluster?: string;
    count?: number;
    enableECSManagedTags?: boolean;
    enableExecuteCommand?: boolean;
    group?: string;
    launchType?: LaunchTypeEnum;
    networkConfiguration?: NetworkConfiguration;
    overrides?: TaskOverride;
    placementConstraints?: PlacementConstraint[];
    placementStrategy?: PlacementStrategy[];
    platformVersion?: string;
    propagateTags?: PropagateTagsEnum;
    referenceId?: string;
    startedBy?: string;
    tags?: Tag[];
    taskDefinition: string;
}
