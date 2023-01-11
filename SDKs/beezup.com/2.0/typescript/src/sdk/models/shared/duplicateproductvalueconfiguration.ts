import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompareOptionsEnum } from "./compareoptionsenum";
import { DuplicateProductValueStrategyEnum } from "./duplicateproductvaluestrategyenum";



// DuplicateProductValueConfiguration
/** 
 * Describe how you want to manage the duplication of the product value
**/
export class DuplicateProductValueConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compareOptions" })
  compareOptions: CompareOptionsEnum;

  @SpeakeasyMetadata({ data: "json, name=strategy" })
  strategy: DuplicateProductValueStrategyEnum;
}
