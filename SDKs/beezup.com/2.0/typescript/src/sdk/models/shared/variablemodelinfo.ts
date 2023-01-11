import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClickIncludedAndVariablePrice } from "./clickincludedandvariableprice";



// VariableModelInfo
/** 
 * Internal usage: Old offer type. Describe the fix and variable model information
**/
export class VariableModelInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickIncludedAndVariablePrices", elemType: ClickIncludedAndVariablePrice })
  clickIncludedAndVariablePrices: ClickIncludedAndVariablePrice[];

  @SpeakeasyMetadata({ data: "json, name=overflowClickCount" })
  overflowClickCount: number;

  @SpeakeasyMetadata({ data: "json, name=overflowClickPrice" })
  overflowClickPrice: number;
}
