import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClickIncludedAndAdditionalClickPrice } from "./clickincludedandadditionalclickprice";



// FixedAndVariableClickModelInfo
/** 
 * Internal usage: Old offer type. Describe the fix and variable model information
**/
export class FixedAndVariableClickModelInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickIncludedAndAdditionalClickPrices", elemType: ClickIncludedAndAdditionalClickPrice })
  clickIncludedAndAdditionalClickPrices: ClickIncludedAndAdditionalClickPrice[];
}
