import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonLovLink3 } from "./beezupcommonlovlink3";



// OrderIndexLovLinks
/** 
 * Gives you all the LOV to get the translations realated to operation name, codes, property names and statuses.
**/
export class OrderIndexLovLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orderChangeBusinessOperationType" })
  orderChangeBusinessOperationType: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=orderProperty" })
  orderProperty: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=orderPropertyPosted" })
  orderPropertyPosted: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=orderState" })
  orderState: BeezUpCommonLovLink3;
}
