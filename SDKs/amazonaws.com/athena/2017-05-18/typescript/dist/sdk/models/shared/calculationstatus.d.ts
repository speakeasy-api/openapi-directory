import { SpeakeasyBase } from "../../../internal/utils";
import { CalculationExecutionStateEnum } from "./calculationexecutionstateenum";
/**
 * Contains information about the status of a notebook calculation.
 */
export declare class CalculationStatus extends SpeakeasyBase {
    completionDateTime?: Date;
    state?: CalculationExecutionStateEnum;
    stateChangeReason?: string;
    submissionDateTime?: Date;
}
