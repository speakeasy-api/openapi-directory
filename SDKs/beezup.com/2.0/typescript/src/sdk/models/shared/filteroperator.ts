import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterOperatorDataTypeEnum } from "./filteroperatordatatypeenum";



// FilterOperator
/** 
 * The filter operator
**/
export class FilterOperator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expectedChannelColumnDataType" })
  expectedChannelColumnDataType?: FilterOperatorDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=expectedValueDataType" })
  expectedValueDataType?: FilterOperatorDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=valueRequired" })
  valueRequired?: boolean;
}
