import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeOrderListRequestItemV2 } from "./changeorderlistrequestitemv2";



// ChangeOrderListRequestV2
/** 
 * Contains all change order operations you want to make.  (max 100 items per call)
**/
export class ChangeOrderListRequestV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeOrders", elemType: ChangeOrderListRequestItemV2 })
  changeOrders: ChangeOrderListRequestItemV2[];
}
