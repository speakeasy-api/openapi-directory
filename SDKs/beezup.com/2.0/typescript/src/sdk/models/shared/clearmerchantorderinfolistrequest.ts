import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderIdentifier } from "./orderidentifier";



export class ClearMerchantOrderInfoListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orders", elemType: OrderIdentifier })
  orders: OrderIdentifier[];
}
