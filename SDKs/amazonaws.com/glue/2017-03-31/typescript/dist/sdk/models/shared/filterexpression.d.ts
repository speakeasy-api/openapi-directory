import { SpeakeasyBase } from "../../../internal/utils";
import { FilterOperationEnum } from "./filteroperationenum";
import { FilterValue } from "./filtervalue";
/**
 * Specifies a filter expression.
 */
export declare class FilterExpression extends SpeakeasyBase {
    negated?: boolean;
    operation: FilterOperationEnum;
    values: FilterValue[];
}
