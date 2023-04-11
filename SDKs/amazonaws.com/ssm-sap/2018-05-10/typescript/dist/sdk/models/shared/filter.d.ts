import { SpeakeasyBase } from "../../../internal/utils";
import { FilterOperatorEnum } from "./filteroperatorenum";
/**
 * A specific result obtained by specifying the name, value, and operator.
 */
export declare class Filter extends SpeakeasyBase {
    name: string;
    operator: FilterOperatorEnum;
    value: string;
}
