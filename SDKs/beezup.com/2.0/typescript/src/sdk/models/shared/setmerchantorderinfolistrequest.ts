import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SetMerchantOrderInfoListRequestItem } from "./setmerchantorderinfolistrequestitem";



export class SetMerchantOrderInfoListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=order_MerchantECommerceSoftwareName" })
  orderMerchantECommerceSoftwareName: string;

  @SpeakeasyMetadata({ data: "json, name=order_MerchantECommerceSoftwareVersion" })
  orderMerchantECommerceSoftwareVersion: string;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: SetMerchantOrderInfoListRequestItem })
  orders: SetMerchantOrderInfoListRequestItem[];
}
