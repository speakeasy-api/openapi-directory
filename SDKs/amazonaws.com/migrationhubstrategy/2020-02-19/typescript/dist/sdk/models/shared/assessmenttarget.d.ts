import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionEnum } from "./conditionenum";
/**
 * Defines the criteria of assessment.
 */
export declare class AssessmentTarget extends SpeakeasyBase {
    condition: ConditionEnum;
    name: string;
    values: string[];
}
