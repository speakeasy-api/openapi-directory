import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A filter that uses both column-level and row-level filtering.
 */
export declare class ColumnRowFilter extends SpeakeasyBase {
    columnName?: string;
    rowFilterExpression?: string;
}
