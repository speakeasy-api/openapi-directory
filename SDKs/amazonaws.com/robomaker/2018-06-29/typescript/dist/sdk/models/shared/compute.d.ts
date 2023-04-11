import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeTypeEnum } from "./computetypeenum";
/**
 * Compute information for the simulation job.
 */
export declare class Compute extends SpeakeasyBase {
    computeType?: ComputeTypeEnum;
    gpuUnitLimit?: number;
    simulationUnitLimit?: number;
}
