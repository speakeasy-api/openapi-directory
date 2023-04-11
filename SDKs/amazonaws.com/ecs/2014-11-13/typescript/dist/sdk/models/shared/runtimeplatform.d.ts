import { SpeakeasyBase } from "../../../internal/utils";
import { CPUArchitectureEnum } from "./cpuarchitectureenum";
import { OSFamilyEnum } from "./osfamilyenum";
/**
 * <p>Information about the platform for the Amazon ECS service or task.</p> <p>For more information about <code>RuntimePlatform</code>, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#runtime-platform">RuntimePlatform</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export declare class RuntimePlatform extends SpeakeasyBase {
    cpuArchitecture?: CPUArchitectureEnum;
    operatingSystemFamily?: OSFamilyEnum;
}
