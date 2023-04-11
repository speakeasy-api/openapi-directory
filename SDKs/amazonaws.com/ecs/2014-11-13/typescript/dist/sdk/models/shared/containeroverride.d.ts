import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentFile } from "./environmentfile";
import { KeyValuePair } from "./keyvaluepair";
import { ResourceRequirement } from "./resourcerequirement";
/**
 * The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.
 */
export declare class ContainerOverride extends SpeakeasyBase {
    command?: string[];
    cpu?: number;
    environment?: KeyValuePair[];
    environmentFiles?: EnvironmentFile[];
    memory?: number;
    memoryReservation?: number;
    name?: string;
    resourceRequirements?: ResourceRequirement[];
}
