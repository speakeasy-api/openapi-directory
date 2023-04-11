import { SpeakeasyBase } from "../../../internal/utils";
import { FilterFieldEnum } from "./filterfieldenum";
import { FilterOperatorEnum } from "./filteroperatorenum";
/**
 * A search filter.
 */
export declare class Filter extends SpeakeasyBase {
    field: FilterFieldEnum;
    operator: FilterOperatorEnum;
    value: string;
}
