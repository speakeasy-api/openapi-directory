import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetMerchantOrderInfoListRequestItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "json, name=beezUPOrderId" })
  beezUPOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;

  @SpeakeasyMetadata({ data: "json, name=order_MerchantOrderId" })
  orderMerchantOrderId: string;
}
