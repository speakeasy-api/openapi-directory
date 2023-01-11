import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeOrderListRequestItem } from "./changeorderlistrequestitem";



// ChangeOrderListRequest
/** 
 * Contains all change order operations you want to make.  (max 100 items per call)
**/
export class ChangeOrderListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeOrders", elemType: ChangeOrderListRequestItem })
  changeOrders: ChangeOrderListRequestItem[];
}
