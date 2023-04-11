import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerImage } from "./containerimage";
import { ScriptModeConfig } from "./scriptmodeconfig";
/**
 * Defines the Amazon Braket job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.
 */
export declare class AlgorithmSpecification extends SpeakeasyBase {
    containerImage?: ContainerImage;
    scriptModeConfig?: ScriptModeConfig;
}
