import { SpeakeasyBase } from "../../../internal/utils";
import { FilterExpression } from "./filterexpression";
import { FilterLogicalOperatorEnum } from "./filterlogicaloperatorenum";
/**
 * Specifies a transform that splits a dataset into two, based on a filter condition.
 */
export declare class Filter extends SpeakeasyBase {
    filters: FilterExpression[];
    inputs: string[];
    logicalOperator: FilterLogicalOperatorEnum;
    name: string;
}
