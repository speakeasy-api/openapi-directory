import { SpeakeasyBase } from "../../../internal/utils";
import { EcsEnvironmentFile } from "./ecsenvironmentfile";
import { EcsEnvironmentVariable } from "./ecsenvironmentvariable";
import { EcsResourceRequirement } from "./ecsresourcerequirement";
/**
 * The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.
 */
export declare class EcsContainerOverride extends SpeakeasyBase {
    command?: string[];
    cpu?: number;
    environment?: EcsEnvironmentVariable[];
    environmentFiles?: EcsEnvironmentFile[];
    memory?: number;
    memoryReservation?: number;
    name?: string;
    resourceRequirements?: EcsResourceRequirement[];
}
