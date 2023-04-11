import { SpeakeasyBase } from "../../../internal/utils";
import { FilterOperatorDataTypeEnum } from "./filteroperatordatatypeenum";
/**
 * The filter operator
 */
export declare class FilterOperator extends SpeakeasyBase {
    /**
     * Data type of the operator
     */
    expectedChannelColumnDataType?: FilterOperatorDataTypeEnum;
    /**
     * Data type of the operator
     */
    expectedValueDataType?: FilterOperatorDataTypeEnum;
    /**
     * The exclusion filter operator name
     */
    name?: string;
    /**
     * This operator requires a value
     */
    valueRequired?: boolean;
}
