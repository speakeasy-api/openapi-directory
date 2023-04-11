import { SpeakeasyBase } from "../../../internal/utils";
import { OperatorEnum } from "./operatorenum";
import { SimpleCondition } from "./simplecondition";
/**
 * Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.
 */
export declare class Condition extends SpeakeasyBase {
    conditions?: SimpleCondition[];
    operator?: OperatorEnum;
}
