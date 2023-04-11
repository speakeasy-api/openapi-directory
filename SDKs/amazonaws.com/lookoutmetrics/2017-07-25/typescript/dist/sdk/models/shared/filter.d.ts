import { SpeakeasyBase } from "../../../internal/utils";
import { FilterOperationEnum } from "./filteroperationenum";
/**
 * Describes a filter for choosing a subset of dimension values. Each filter consists of the dimension that you want to include and the condition statement. The condition statement is specified in the <code>FilterOperation</code> object.
 */
export declare class Filter extends SpeakeasyBase {
    dimensionValue?: string;
    filterOperation?: FilterOperationEnum;
}
