import { SpeakeasyBase } from "../../../internal/utils";
import { HPOObjective } from "./hpoobjective";
import { HPOResourceConfig } from "./hporesourceconfig";
import { HyperParameterRanges } from "./hyperparameterranges";
/**
 * Describes the properties for hyperparameter optimization (HPO).
 */
export declare class HPOConfig extends SpeakeasyBase {
    algorithmHyperParameterRanges?: HyperParameterRanges;
    hpoObjective?: HPOObjective;
    hpoResourceConfig?: HPOResourceConfig;
}
