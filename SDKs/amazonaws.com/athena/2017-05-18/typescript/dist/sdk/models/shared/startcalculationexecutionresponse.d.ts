import { SpeakeasyBase } from "../../../internal/utils";
import { CalculationExecutionStateEnum } from "./calculationexecutionstateenum";
/**
 * Success
 */
export declare class StartCalculationExecutionResponse extends SpeakeasyBase {
    calculationExecutionId?: string;
    state?: CalculationExecutionStateEnum;
}
