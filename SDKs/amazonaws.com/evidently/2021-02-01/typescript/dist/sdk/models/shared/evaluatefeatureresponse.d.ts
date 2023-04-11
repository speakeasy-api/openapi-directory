import { SpeakeasyBase } from "../../../internal/utils";
import { VariableValue } from "./variablevalue";
/**
 * Success
 */
export declare class EvaluateFeatureResponse extends SpeakeasyBase {
    details?: string;
    reason?: string;
    value?: VariableValue;
    variation?: string;
}
