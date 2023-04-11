import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfiguration } from "./networkconfiguration";
import { PropagateTagsEnum } from "./propagatetagsenum";
import { Tag } from "./tag";
import { TaskOverride } from "./taskoverride";
export declare class StartTaskRequest extends SpeakeasyBase {
    cluster?: string;
    containerInstances: string[];
    enableECSManagedTags?: boolean;
    enableExecuteCommand?: boolean;
    group?: string;
    networkConfiguration?: NetworkConfiguration;
    overrides?: TaskOverride;
    propagateTags?: PropagateTagsEnum;
    referenceId?: string;
    startedBy?: string;
    tags?: Tag[];
    taskDefinition: string;
}
