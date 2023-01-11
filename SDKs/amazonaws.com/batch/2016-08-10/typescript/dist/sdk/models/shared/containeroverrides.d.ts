import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValuePair } from "./keyvaluepair";
import { ResourceRequirement } from "./resourcerequirement";
/**
 * The overrides that should be sent to a container.
**/
export declare class ContainerOverrides extends SpeakeasyBase {
    command?: string[];
    environment?: KeyValuePair[];
    instanceType?: string;
    memory?: Record<string, any>;
    resourceRequirements?: ResourceRequirement[];
    vcpus?: Record<string, any>;
}
