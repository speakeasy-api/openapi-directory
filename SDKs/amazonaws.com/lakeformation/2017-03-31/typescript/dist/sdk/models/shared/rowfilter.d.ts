import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A PartiQL predicate.
 */
export declare class RowFilter extends SpeakeasyBase {
    allRowsWildcard?: Record<string, any>;
    filterExpression?: string;
}
