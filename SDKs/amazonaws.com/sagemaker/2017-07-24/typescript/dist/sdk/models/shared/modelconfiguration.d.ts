import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentParameter } from "./environmentparameter";
/**
 * Defines the model configuration. Includes the specification name and environment parameters.
 */
export declare class ModelConfiguration extends SpeakeasyBase {
    compilationJobName?: string;
    environmentParameters?: EnvironmentParameter[];
    inferenceSpecificationName?: string;
}
