import { SpeakeasyBase } from "../../../internal/utils";
import { LogicalOperatorEnum } from "./logicaloperatorenum";
import { PropertyFilter } from "./propertyfilter";
/**
 * <p/>
 */
export declare class PropertyFilters extends SpeakeasyBase {
    logicalOperator?: LogicalOperatorEnum;
    properties?: PropertyFilter[];
}
