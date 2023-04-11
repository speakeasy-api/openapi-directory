import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * Describes a list of filters for choosing a subset of dimension values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation.
 */
export declare class MetricSetDimensionFilter extends SpeakeasyBase {
    filterList?: Filter[];
    name?: string;
}
