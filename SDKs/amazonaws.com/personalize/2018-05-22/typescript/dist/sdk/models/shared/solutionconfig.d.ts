import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLConfig } from "./automlconfig";
import { HPOConfig } from "./hpoconfig";
import { OptimizationObjective } from "./optimizationobjective";
/**
 * Describes the configuration properties for the solution.
 */
export declare class SolutionConfig extends SpeakeasyBase {
    algorithmHyperParameters?: Record<string, string>;
    autoMLConfig?: AutoMLConfig;
    eventValueThreshold?: string;
    featureTransformationParameters?: Record<string, string>;
    hpoConfig?: HPOConfig;
    optimizationObjective?: OptimizationObjective;
}
