import { SpeakeasyBase } from "../../../internal/utils";
import { FilterOperatorDataTypeEnum } from "./filteroperatordatatypeenum";
/**
 * The filter operator
**/
export declare class FilterOperator extends SpeakeasyBase {
    expectedChannelColumnDataType?: FilterOperatorDataTypeEnum;
    expectedValueDataType?: FilterOperatorDataTypeEnum;
    name?: string;
    valueRequired?: boolean;
}
