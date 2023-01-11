import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlConfig } from "./automlconfig";
import { HpoConfig } from "./hpoconfig";
import { OptimizationObjective } from "./optimizationobjective";
/**
 * Describes the configuration properties for the solution.
**/
export declare class SolutionConfig extends SpeakeasyBase {
    algorithmHyperParameters?: Record<string, string>;
    autoMLConfig?: AutoMlConfig;
    eventValueThreshold?: string;
    featureTransformationParameters?: Record<string, string>;
    hpoConfig?: HpoConfig;
    optimizationObjective?: OptimizationObjective;
}
