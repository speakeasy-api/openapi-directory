import { SpeakeasyBase } from "../../../internal/utils";
import { CalculationExecutionStateEnum } from "./calculationexecutionstateenum";
export declare class ListCalculationExecutionsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    sessionId: string;
    stateFilter?: CalculationExecutionStateEnum;
}
