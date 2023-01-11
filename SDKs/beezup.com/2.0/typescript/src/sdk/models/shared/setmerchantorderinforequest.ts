import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetMerchantOrderInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=order_MerchantECommerceSoftwareName" })
  orderMerchantECommerceSoftwareName: string;

  @SpeakeasyMetadata({ data: "json, name=order_MerchantECommerceSoftwareVersion" })
  orderMerchantECommerceSoftwareVersion: string;

  @SpeakeasyMetadata({ data: "json, name=order_MerchantOrderId" })
  orderMerchantOrderId: string;
}
