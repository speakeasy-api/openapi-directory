import { SpeakeasyBase } from "../../../internal/utils";
import { CalculationStatus } from "./calculationstatus";
/**
 * Summary information for a notebook calculation.
 */
export declare class CalculationSummary extends SpeakeasyBase {
    calculationExecutionId?: string;
    description?: string;
    status?: CalculationStatus;
}
