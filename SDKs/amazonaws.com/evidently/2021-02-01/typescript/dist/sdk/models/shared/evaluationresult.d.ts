import { SpeakeasyBase } from "../../../internal/utils";
import { VariableValue } from "./variablevalue";
/**
 * This structure displays the results of one feature evaluation assignment to one user session.
 */
export declare class EvaluationResult extends SpeakeasyBase {
    details?: string;
    entityId: string;
    feature: string;
    project?: string;
    reason?: string;
    value?: VariableValue;
    variation?: string;
}
