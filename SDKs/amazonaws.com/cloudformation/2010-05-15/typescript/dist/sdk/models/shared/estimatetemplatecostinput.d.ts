import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * The input for an <a>EstimateTemplateCost</a> action.
 */
export declare class EstimateTemplateCostInput extends SpeakeasyBase {
    parameters?: Parameter[];
    templateBody?: string;
    templateURL?: string;
}
